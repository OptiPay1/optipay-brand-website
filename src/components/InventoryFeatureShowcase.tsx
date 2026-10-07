"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Tilt3DCard } from "./ui/Tilt3DCard";
import { Layers, Sparkles, SlidersHorizontal, CheckCircle2 } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  highlightTag?: string;
}

const inventoryFeatures: FeatureCardProps[] = [
  {
    title: "Frame & lens category catalog",
    description:
      "An optical inventory software that organizes your frames by brand, eye size, and color code, while managing bespoke lens index variations and accessories without confusion!",
    imageSrc: "/features/inventory-catalog.jpg",
    imageAlt: "OptiPay Optical Product Catalog Interface",
    badge: "Multi-Category SKU",
    highlightTag: "Ray-Ban & Vogue Auto-Grouping",
  },
  {
    title: "Raw material & lens stock management",
    description:
      "Plan your optical restocking and set automatic low-stock alerts on OptiPay's inventory system. Easily manage lens availability so customers never face delayed deliveries.",
    imageSrc: "/features/inventory-lowstock.jpg",
    imageAlt: "OptiPay Low Stock Alerts and Reorder Management",
    badge: "Low-Stock Alerts",
    highlightTag: "Real-time Minimum Stock Triggers",
  },
  {
    title: "Pending counter stock insertions",
    description:
      "An optical POS designed to never slow down counter sales. If an uncatalogued frame arrives, staff can bill it on the spot, creating a pending insertion for the owner to finalize later!",
    imageSrc: "/features/inventory-pending.jpg",
    imageAlt: "OptiPay POS Quick-Add and Pending Stock Insertions",
    badge: "Counter Rush-Hour Bypass",
    highlightTag: "Zero Counter Billing Bottlenecks",
  },
  {
    title: "Purchase order management",
    description:
      "Raise and accept purchase order tickets directly with your eyewear and lens suppliers right from the dashboard. Keep track of wholesale bills and inward stock without spreadsheets.",
    imageSrc: "/features/inventory-purchases.jpg",
    imageAlt: "OptiPay Purchase Orders and Supplier Inward Logs",
    badge: "Vendor Inward Logging",
    highlightTag: "Luxottica & Essilor Inward Sync",
  },
];

export function InventoryFeatureShowcase() {
  const [is3DMode, setIs3DMode] = useState(true);

  return (
    <section
      id="inventory-features"
      className="py-20 sm:py-28 bg-[#FAFAFA] dark:bg-[#07090D] border-t border-slate-200/80 dark:border-white/5 transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Petpooja Style with 3D Effect Mode Controller */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800/50 mb-3.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
              <span>Real Optical SaaS Features</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              POS feature for easy inventory management
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              Keep complete control over spectacle frames, prescription lenses, wholesale suppliers, and counter stock.
            </p>
          </div>

          {/* Interactive 3D Perspective Mode Pill Switcher */}
          <div className="flex items-center gap-2 self-start md:self-auto p-1.5 rounded-2xl bg-white dark:bg-[#111420] border border-slate-200 dark:border-white/10 shadow-sm">
            <button
              type="button"
              onClick={() => setIs3DMode(true)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                is3DMode
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3D Floating Depth</span>
            </button>
            <button
              type="button"
              onClick={() => setIs3DMode(false)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                !is3DMode
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Flat Clean</span>
            </button>
          </div>
        </div>

        {/* 2x2 Feature Cards Grid with Interactive 3D Tilt Physics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 [perspective:1400px]">
          {inventoryFeatures.map((feature, idx) => (
            <Tilt3DCard
              key={idx}
              maxRotation={is3DMode ? 8 : 4}
              perspective={1200}
              enableGlare={true}
              scale={1.018}
              className="rounded-3xl"
            >
              <div className="group relative flex flex-col justify-between h-full p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D1017] border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5 transition-all duration-300 [transform-style:preserve-3d]">
                {/* 3D Ambient Lighting Gradient Background */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />

                {/* 3D Elevated Image Frame with Multi-Plane Depth */}
                <div
                  style={{
                    transform: is3DMode
                      ? "translateZ(35px) rotateX(4deg) rotateY(-2deg)"
                      : "translateZ(20px)",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#0B0E14] border border-slate-800/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_30px_60px_-15px_rgba(99,102,241,0.25)] transition-shadow duration-300"
                >
                  {/* Actual Software Feature Image (Exact Dark Software Theme) */}
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    priority={idx < 2}
                  />

                  {/* 3D Specular Light Bevel on Image Rim */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 border-t border-white/20 pointer-events-none"
                  />

                  {/* Ultra-Elevated 3D Floating Badge (translateZ 60px) */}
                  {feature.badge && (
                    <div
                      style={{
                        transform: "translateZ(60px)",
                      }}
                      className="absolute top-3.5 right-3.5 z-20"
                    >
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-bold tracking-wide uppercase bg-[#0B0E17]/85 backdrop-blur-md text-white border border-white/15 shadow-xl shadow-black/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {feature.badge}
                      </span>
                    </div>
                  )}

                  {/* Bottom Sub-label Badge inside Image */}
                  <div
                    style={{
                      transform: "translateZ(45px)",
                    }}
                    className="absolute bottom-3 left-3 z-20"
                  >
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-black/75 backdrop-blur-md text-slate-300 border border-white/10 shadow-md">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      {feature.highlightTag}
                    </span>
                  </div>
                </div>

                {/* Elevated Typography & Feature Details (translateZ 25px) */}
                <div
                  style={{
                    transform: "translateZ(25px)",
                    transformStyle: "preserve-3d",
                  }}
                  className="pt-6 relative z-10"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  );
}
