import { NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rateLimit";
import { validateDemoForm } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    // 1. IP-Based Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : realIp || "127.0.0.1";

    const rateLimit = checkRateLimit(`demo_${clientIp}`, {
      windowMs: 15 * 60 * 1000, // 15-minute sliding window
      maxRequests: 5, // 5 submissions per window
    });

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: `Too many demo requests. Please wait ${rateLimit.resetSeconds} seconds before trying again.`,
          resetSeconds: rateLimit.resetSeconds,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.resetSeconds),
            "X-RateLimit-Limit": String(rateLimit.limit),
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    // 2. Parse & Validate Payload
    let body: any;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    const { isValid, errors, sanitized } = validateDemoForm(body);

    if (!isValid || !sanitized) {
      return NextResponse.json(
        {
          error: "Validation failed. Please correct the highlighted errors.",
          fields: errors,
        },
        { status: 400 }
      );
    }

    const leadPayload = {
      storeName: sanitized.storeName,
      contactName: sanitized.contactName,
      phone: sanitized.phone,
      email: sanitized.email,
      city: sanitized.city,
      role: sanitized.role,
      ip: clientIp,
      timestamp: new Date().toISOString(),
      recipient: "optipay22@gmail.com",
    };

    // Log the lead server-side for permanent audit trail
    console.log("[OPTIPAY DEMO LEAD CAPTURED]:", JSON.stringify(leadPayload, null, 2));

    // Email dispatch (e.g. Resend / SMTP / Webhook) can be wired here
    // Example: await sendEmail({ to: "optipay22@gmail.com", subject: "New OptiPay Demo Lead", ... })

    return NextResponse.json(
      {
        success: true,
        message: "Demo request received successfully.",
        lead: {
          storeName: sanitized.storeName,
          contactName: sanitized.contactName,
          phone: sanitized.phone,
          city: sanitized.city,
        },
      },
      {
        headers: {
          "X-RateLimit-Limit": String(rateLimit.limit),
          "X-RateLimit-Remaining": String(rateLimit.remaining),
        },
      }
    );
  } catch (error) {
    console.error("Error processing demo request:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
