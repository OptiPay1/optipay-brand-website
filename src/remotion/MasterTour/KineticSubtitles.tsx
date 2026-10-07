"use client";

import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

interface SubtitleLine {
  startFrame: number;
  endFrame: number;
  text: string;
  highlightWords?: string[];
}

export function KineticSubtitles({
  subtitles,
}: {
  subtitles: SubtitleLine[];
}) {
  const frame = useCurrentFrame();

  const active = subtitles.find(
    (s) => frame >= s.startFrame && frame <= s.endFrame
  );

  if (!active) return null;

  const opacity = interpolate(
    frame,
    [active.startFrame, active.startFrame + 5, active.endFrame - 5, active.endFrame],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        opacity,
        position: "absolute",
        bottom: 50,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          background: "rgba(10, 13, 20, 0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: 16,
          padding: "12px 28px",
          color: "#FFFFFF",
          fontSize: 24,
          fontWeight: 700,
          fontFamily: "Inter, sans-serif",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          textAlign: "center",
          maxWidth: 900,
          letterSpacing: "-0.01em",
        }}
      >
        {active.text}
      </div>
    </div>
  );
}
