interface RateLimitRecord {
  timestamps: number[];
}

// In-memory sliding window rate limiter
const windowMap = new Map<string, RateLimitRecord>();

// Periodically purge stale records every 5 minutes to prevent memory leaks
if (typeof setInterval !== "undefined") {
  const timer = setInterval(() => {
    const now = Date.now();
    const windowMs = 15 * 60 * 1000;
    for (const [key, record] of windowMap.entries()) {
      record.timestamps = record.timestamps.filter((ts) => now - ts < windowMs);
      if (record.timestamps.length === 0) {
        windowMap.delete(key);
      }
    }
  }, 5 * 60 * 1000);
  if (timer.unref) {
    timer.unref();
  }
}

export interface RateLimitOptions {
  windowMs?: number; // Time window in milliseconds (default: 15 minutes)
  maxRequests?: number; // Max requests allowed per window (default: 5)
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetSeconds: number;
}

/**
 * Sliding window rate limit checker for Next.js Route Handlers.
 */
export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = {}
): RateLimitResult {
  const windowMs = options.windowMs ?? 15 * 60 * 1000; // 15 mins
  const maxRequests = options.maxRequests ?? 5; // 5 requests max
  const now = Date.now();

  const record = windowMap.get(identifier) || { timestamps: [] };

  // Evict timestamps outside the sliding window
  const validTimestamps = record.timestamps.filter((ts) => now - ts < windowMs);

  if (validTimestamps.length >= maxRequests) {
    const oldestTimestamp = validTimestamps[0];
    const resetSeconds = Math.max(1, Math.ceil((oldestTimestamp + windowMs - now) / 1000));

    return {
      success: false,
      limit: maxRequests,
      remaining: 0,
      resetSeconds,
    };
  }

  validTimestamps.push(now);
  windowMap.set(identifier, { timestamps: validTimestamps });

  return {
    success: true,
    limit: maxRequests,
    remaining: maxRequests - validTimestamps.length,
    resetSeconds: Math.ceil(windowMs / 1000),
  };
}
