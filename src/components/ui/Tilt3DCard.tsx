"use client";

import React, { useRef, useState, useCallback } from "react";

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number; // Maximum tilt angle in degrees (e.g. 8)
  perspective?: number; // Perspective distance in px (e.g. 1000)
  enableGlare?: boolean; // Dynamic holographic specular lighting
  scale?: number; // Slight zoom on hover (e.g. 1.02)
}

export function Tilt3DCard({
  children,
  className = "",
  maxRotation = 8,
  perspective = 1100,
  enableGlare = true,
  scale = 1.015,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>("");
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0 to 1
      const y = (e.clientY - rect.top) / rect.height; // 0 to 1

      // Calculate tilt angles: pitch (rotateX) and yaw (rotateY)
      const rotateX = -(y - 0.5) * maxRotation * 2;
      const rotateY = (x - 0.5) * maxRotation * 2;

      setTransform(
        `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
      );

      if (enableGlare) {
        setGlareStyle({
          opacity: 0.18,
          background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.08) 40%, transparent 70%)`,
        });
      }
    },
    [maxRotation, perspective, enableGlare, scale]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform || undefined,
        transformStyle: "preserve-3d",
        transition: isHovered
          ? "transform 0.08s ease-out, box-shadow 0.25s ease-out"
          : "transform 0.55s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease-out",
        willChange: "transform",
      }}
      className={`relative select-none ${className}`}
    >
      {/* 3D Content Container with preserve-3d */}
      <div className="relative w-full h-full [transform-style:preserve-3d]">
        {children}
      </div>

      {/* Dynamic 3D Glare Overlay */}
      {enableGlare && (
        <div
          aria-hidden="true"
          style={{
            ...glareStyle,
            transition: isHovered ? "opacity 0.2s ease" : "opacity 0.45s ease",
            pointerEvents: "none",
          }}
          className="absolute inset-0 rounded-3xl z-30 mix-blend-overlay"
        />
      )}
    </div>
  );
}
