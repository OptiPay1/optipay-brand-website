"use client";

import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { KineticSubtitles } from "./KineticSubtitles";

export function OptiPayMasterTour() {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Subtitle script timeline
  const subtitles = [
    {
      startFrame: 10,
      endFrame: 120,
      text: "Running an optical store involves unique daily challenges...",
    },
    {
      startFrame: 125,
      endFrame: 235,
      text: "Lost paper registers, manual calculator errors, and messy lab orders.",
    },
    {
      startFrame: 245,
      endFrame: 440,
      text: "Meet OptiPay: Clinical OD & OS eye refraction recorded in seconds.",
    },
    {
      startFrame: 445,
      endFrame: 655,
      text: "Sphere, Cylinder, Axis, and Near Add powers with 1-click repeat lookups.",
    },
    {
      startFrame: 665,
      endFrame: 860,
      text: "Automated Indian Split GST 2.0: Frames at 12% and Lenses at 18% on one bill.",
    },
    {
      startFrame: 865,
      endFrame: 1070,
      text: "Zero manual math. Exact CGST and SGST statutory compliance calculated live.",
    },
    {
      startFrame: 1080,
      endFrame: 1250,
      text: "Generate dedicated workshop job slips for lens edging technicians...",
    },
    {
      startFrame: 1255,
      endFrame: 1435,
      text: "Record advance token deposits and settle remaining balance upon collection.",
    },
    {
      startFrame: 1445,
      endFrame: 1610,
      text: "Instant 80mm thermal receipt printing and automated WhatsApp delivery.",
    },
    {
      startFrame: 1615,
      endFrame: 1790,
      text: "Experience 10x faster billing. Book your free demo today at optipay.in",
    },
  ];

  // Camera Zoom & Pan Interpolation
  const currentScene =
    frame < 240
      ? 1 // Intro
      : frame < 660
      ? 2 // Clinical Rx
      : frame < 1080
      ? 3 // Split GST
      : frame < 1440
      ? 4 // Lab Workshop
      : 5; // Thermal & Outro

  const cameraScale = interpolate(
    frame,
    [0, 240, 280, 620, 660, 700, 1040, 1080, 1120, 1400, 1440, 1750],
    [1.0, 1.0, 1.15, 1.15, 1.0, 1.12, 1.12, 1.0, 1.14, 1.14, 1.0, 1.0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Animated cursor coordinates
  const cursorX = interpolate(
    frame,
    [0, 100, 280, 380, 500, 700, 850, 1150, 1300, 1500, 1700],
    [500, 700, 650, 950, 800, 1100, 920, 850, 1200, 1000, 960],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const cursorY = interpolate(
    frame,
    [0, 100, 280, 380, 500, 700, 850, 1150, 1300, 1500, 1700],
    [400, 350, 480, 520, 600, 420, 700, 550, 680, 500, 620],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#08090C",
        color: "#F8FAFC",
        fontFamily: "Inter, system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Background Ambient Gradient Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 50% 20%, rgba(37, 99, 235, 0.18), transparent 60%)",
        }}
      />

      {/* Main Software Desktop Frame */}
      <div
        style={{
          position: "absolute",
          inset: 60,
          borderRadius: 24,
          backgroundColor: "#0F121C",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.7)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transform: `scale(${cameraScale})`,
          transition: "transform 0.4s ease-out",
        }}
      >
        {/* Top Desktop Window Bar */}
        <div
          style={{
            height: 48,
            backgroundColor: "#161B29",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F56" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FFBD2E" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#27C93F" }} />
            <span
              style={{
                marginLeft: 16,
                fontSize: 14,
                fontWeight: 700,
                color: "#94A3B8",
                letterSpacing: "0.02em",
              }}
            >
              OptiPay POS 2.0 • Vision Plus Opticians (Main Counter)
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                background: "rgba(16, 185, 129, 0.15)",
                color: "#10B981",
                padding: "4px 10px",
                borderRadius: 20,
                border: "1px solid rgba(16, 185, 129, 0.3)",
              }}
            >
              ● Cloud Synced
            </span>
          </div>
        </div>

        {/* Software Body: Sidebar + Main Workspace */}
        <div style={{ flex: 1, display: "flex" }}>
          {/* Sidebar */}
          <div
            style={{
              width: 240,
              backgroundColor: "#111422",
              borderRight: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "24px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {[
              { name: "POS Counter", active: currentScene === 1 || currentScene === 3 },
              { name: "Clinical Rx", active: currentScene === 2 },
              { name: "Workshop Orders", active: currentScene === 4 },
              { name: "Eyewear Stock", active: false },
              { name: "Reports & GST", active: false },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: item.active ? 700 : 500,
                  backgroundColor: item.active ? "#2563EB" : "transparent",
                  color: item.active ? "#FFFFFF" : "#94A3B8",
                  transition: "all 0.2s",
                }}
              >
                {item.name}
              </div>
            ))}
          </div>

          {/* Central Workspace Area */}
          <div style={{ flex: 1, padding: 32, display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Header info */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 800, margin: 0, color: "#FFFFFF" }}>
                  {currentScene === 1 && "Optical Counter Overview"}
                  {currentScene === 2 && "Clinical Prescription Matrix (OD & OS)"}
                  {currentScene === 3 && "Fast POS Checkout & Split GST"}
                  {currentScene === 4 && "Lens Edging Workshop Job Slip"}
                  {currentScene === 5 && "Instant 80mm Thermal Receipt"}
                </h2>
                <p style={{ fontSize: 14, color: "#94A3B8", margin: "4px 0 0" }}>
                  Customer: Ramesh Joshi (+91 98201 54321) • Invoice #OP-921
                </p>
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <span
                  style={{
                    background: "rgba(37, 99, 235, 0.15)",
                    color: "#60A5FA",
                    padding: "6px 14px",
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  GST 2.0 Compliant
                </span>
              </div>
            </div>

            {/* Dynamic Interactive Cards Based on Scene */}
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 24, flex: 1 }}>
              {/* Left Panel: Clinical Rx Grid / Cart */}
              <div
                style={{
                  backgroundColor: "#161B29",
                  borderRadius: 16,
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF" }}>
                  Prescription Parameters
                </div>

                {/* OD / OS Table */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: 10,
                    textAlign: "center",
                    fontSize: 13,
                  }}
                >
                  <div style={{ color: "#64748B", fontWeight: 700 }}>Eye</div>
                  <div style={{ color: "#64748B", fontWeight: 700 }}>SPH</div>
                  <div style={{ color: "#64748B", fontWeight: 700 }}>CYL</div>
                  <div style={{ color: "#64748B", fontWeight: 700 }}>AXIS</div>
                  <div style={{ color: "#64748B", fontWeight: 700 }}>ADD</div>

                  <div style={{ color: "#38BDF8", fontWeight: 800 }}>OD (R)</div>
                  <div style={{ background: "#1F263B", padding: "8px 0", borderRadius: 8, fontWeight: 700 }}>
                    -2.25
                  </div>
                  <div style={{ background: "#1F263B", padding: "8px 0", borderRadius: 8, fontWeight: 700 }}>
                    -0.75
                  </div>
                  <div style={{ background: "#1F263B", padding: "8px 0", borderRadius: 8, fontWeight: 700 }}>
                    90°
                  </div>
                  <div style={{ background: "rgba(16, 185, 129, 0.2)", color: "#10B981", padding: "8px 0", borderRadius: 8, fontWeight: 800 }}>
                    +1.50
                  </div>

                  <div style={{ color: "#38BDF8", fontWeight: 800 }}>OS (L)</div>
                  <div style={{ background: "#1F263B", padding: "8px 0", borderRadius: 8, fontWeight: 700 }}>
                    -2.50
                  </div>
                  <div style={{ background: "#1F263B", padding: "8px 0", borderRadius: 8, fontWeight: 700 }}>
                    -1.00
                  </div>
                  <div style={{ background: "#1F263B", padding: "8px 0", borderRadius: 8, fontWeight: 700 }}>
                    85°
                  </div>
                  <div style={{ background: "rgba(16, 185, 129, 0.2)", color: "#10B981", padding: "8px 0", borderRadius: 8, fontWeight: 800 }}>
                    +1.50
                  </div>
                </div>

                {/* Items in Cart */}
                <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
                  <div
                    style={{
                      padding: 12,
                      borderRadius: 10,
                      background: "#121624",
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 13,
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700 }}>Ray-Ban Aviator Gold Frame</div>
                      <div style={{ fontSize: 11, color: "#64748B" }}>HSN 9003 • GST 12%</div>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: 14 }}>₹3,200.00</div>
                  </div>

                  <div
                    style={{
                      padding: 12,
                      borderRadius: 10,
                      background: "#121624",
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 13,
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700 }}>Crizal Progressive Blue-Cut Lenses</div>
                      <div style={{ fontSize: 11, color: "#64748B" }}>HSN 9001 • GST 18%</div>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: 14 }}>₹2,800.00</div>
                  </div>
                </div>
              </div>

              {/* Right Panel: Split GST & Bill Totals */}
              <div
                style={{
                  backgroundColor: "#161B29",
                  borderRadius: 16,
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF", marginBottom: 16 }}>
                    Statutory Tax & Settlement
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#94A3B8" }}>
                      <span>Taxable Frame (12%):</span>
                      <span style={{ color: "#FFFFFF", fontWeight: 600 }}>₹2,857.14</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#94A3B8" }}>
                      <span>Taxable Lenses (18%):</span>
                      <span style={{ color: "#FFFFFF", fontWeight: 600 }}>₹2,372.88</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#10B981" }}>
                      <span>Total CGST + SGST:</span>
                      <span style={{ fontWeight: 700 }}>₹770.00</span>
                    </div>

                    <div
                      style={{
                        margin: "12px 0",
                        height: 1,
                        background: "rgba(255, 255, 255, 0.1)",
                      }}
                    />

                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 800 }}>
                      <span>Total Bill Amount:</span>
                      <span style={{ color: "#38BDF8" }}>₹6,000.00</span>
                    </div>

                    <div
                      style={{
                        padding: "10px 14px",
                        borderRadius: 10,
                        background: "rgba(16, 185, 129, 0.12)",
                        border: "1px solid rgba(16, 185, 129, 0.3)",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 13,
                        marginTop: 8,
                      }}
                    >
                      <span style={{ color: "#10B981", fontWeight: 700 }}>Advance Deposit Paid:</span>
                      <span style={{ color: "#10B981", fontWeight: 800 }}>₹2,000 (Token)</span>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 700, color: "#F59E0B" }}>
                      <span>Balance Due on Pickup:</span>
                      <span>₹4,000.00</span>
                    </div>
                  </div>
                </div>

                {/* Instant Action CTA */}
                <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 0",
                      background: "#2563EB",
                      borderRadius: 10,
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#FFFFFF",
                      boxShadow: "0 4px 14px rgba(37, 99, 235, 0.4)",
                    }}
                  >
                    Print 80mm Receipt
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 0",
                      background: "#059669",
                      borderRadius: 10,
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#FFFFFF",
                    }}
                  >
                    WhatsApp Invoice
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Glowing Cursor Pointer */}
      <div
        style={{
          position: "absolute",
          left: cursorX,
          top: cursorY,
          width: 24,
          height: 24,
          borderRadius: "50%",
          backgroundColor: "#38BDF8",
          border: "2px solid #FFFFFF",
          boxShadow: "0 0 20px #38BDF8",
          pointerEvents: "none",
          zIndex: 100,
          transition: "left 0.1s linear, top 0.1s linear",
        }}
      />

      {/* Kinetic Subtitles */}
      <KineticSubtitles subtitles={subtitles} />
    </AbsoluteFill>
  );
}
