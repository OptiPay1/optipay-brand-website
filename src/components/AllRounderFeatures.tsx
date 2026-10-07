"use client";

import { useState } from "react";
import { Check, QrCode, Printer, Monitor, Eye, Wrench, Percent, ArrowRight } from "lucide-react";

export function AllRounderFeatures() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cards = [
    {
      id: "bill-format",
      bgLight: "bg-[#FFF5EB]",
      bgDark: "dark:bg-[#1E1813]",
      borderLight: "border-[#FDE3C8]",
      borderDark: "dark:border-[#3D2C1C]",
      title: "Customizable bill format",
      description:
        "Print your optical store logo, create detailed bill break-ups, edit patient prescription details or add a dynamic UPI QR code for payments right at the billing counter — everything is possible with OptiPay optical billing software.",
      badgeColor: "bg-[#E05A47] text-white",
      previewComponent: (
        <div className="bg-white dark:bg-[#13151b] p-4 rounded-xl border border-stone-200/80 dark:border-white/10 shadow-xs text-xs font-sans">
          <div className="flex items-start justify-between pb-3 border-b border-stone-100 dark:border-white/5">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Your Logo</span>
              <span className="font-bold text-sm text-slate-900 dark:text-white">Vision Care Opticians</span>
              <span className="text-[10px] text-slate-500 block">GST: 24AAACV1234F1Z5</span>
            </div>
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-semibold">
                <Check className="w-3 h-3 text-emerald-600" /> GST & HSN Split
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-semibold block">
                <Check className="w-3 h-3 text-emerald-600" /> Print Your Logo
              </span>
            </div>
          </div>

          <div className="py-2.5 space-y-1.5 text-[11px]">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">1x Titanium Frame (HSN 9003)</span>
              <span className="font-mono font-semibold text-slate-800 dark:text-white">₹2,400.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">1x Progressive Lens (HSN 9001)</span>
              <span className="font-mono font-semibold text-slate-800 dark:text-white">₹3,200.00</span>
            </div>
            <div className="flex justify-between text-slate-500 text-[10px]">
              <span>Tax (GST 12% + 18%)</span>
              <span className="font-mono">₹745.76</span>
            </div>
          </div>

          <div className="pt-2 border-t border-stone-100 dark:border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded bg-stone-100 dark:bg-slate-800 flex items-center justify-center">
                <QrCode className="w-6 h-6 text-slate-800 dark:text-slate-200" />
              </div>
              <span className="text-[10px] text-slate-500 leading-tight">UPI payment<br />QR code</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block">Grand Total</span>
              <span className="font-extrabold text-sm text-[#D8262C] dark:text-rose-400 font-mono">₹5,600.00</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "multi-terminal",
      bgLight: "bg-[#F0F7FF]",
      bgDark: "dark:bg-[#121A24]",
      borderLight: "border-[#CCE4FF]",
      borderDark: "dark:border-[#1E3048]",
      title: "Multi-terminal billing",
      description:
        "In need of multiple billing counters for your optical showroom, optometrist clinic room, and delivery desk? OptiPay lets you easily create multiple billing counters and sync them with one master station so your staff can generate prescription orders and settle bills seamlessly.",
      badgeColor: "bg-[#2563EB] text-white",
      previewComponent: (
        <div className="bg-white dark:bg-[#13151b] p-4 rounded-xl border border-stone-200/80 dark:border-white/10 shadow-xs text-xs space-y-3">
          <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-sky-950/60 border border-blue-200/60 dark:border-sky-800/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-blue-600 dark:text-sky-400" />
              <span className="font-bold text-slate-800 dark:text-white">Master POS (Counter 1)</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">
              Online • Synced
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2.5 rounded-lg bg-stone-50 dark:bg-slate-900/60 border border-stone-200/60 dark:border-white/5">
              <span className="font-bold text-slate-800 dark:text-white block">Dr. Clinic Station</span>
              <span className="text-[10px] text-slate-500">Refraction testing & Rx</span>
              <span className="font-mono text-[10px] text-blue-600 dark:text-sky-400 font-semibold mt-1 block">Patient #4 in Queue</span>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-50 dark:bg-slate-900/60 border border-stone-200/60 dark:border-white/5">
              <span className="font-bold text-slate-800 dark:text-white block">Delivery Counter</span>
              <span className="text-[10px] text-slate-500">Token pickup & Balance</span>
              <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1 block">Ready for Delivery</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "lab-printing",
      bgLight: "bg-[#F0FDF4]",
      bgDark: "dark:bg-[#112117]",
      borderLight: "border-[#C6F6D5]",
      borderDark: "dark:border-[#1A3D28]",
      title: "Station-wise lab slip printing",
      description:
        "Got different optical edging and fitting workshops? No worries! Assign a dedicated printer to each station and send lens job slips to the respective technicians. Smoothly sync them all with the master POS to keep track of your customer specs orders and their running status.",
      badgeColor: "bg-[#059669] text-white",
      previewComponent: (
        <div className="bg-white dark:bg-[#13151b] p-4 rounded-xl border border-stone-200/80 dark:border-white/10 shadow-xs text-xs space-y-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100 dark:border-white/5">
            <span className="font-bold text-slate-800 dark:text-white">Workshop Fitting Orders</span>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold font-mono">Job Slip #1042</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 rounded bg-amber-50 dark:bg-amber-950/40 border border-amber-200/50">
              <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 block">Job #41 • Urgent</span>
              <span className="text-slate-700 dark:text-slate-300">Rimless Glazing</span>
              <span className="text-[10px] text-amber-700 dark:text-amber-400 font-semibold block mt-0.5">At Edging Station</span>
            </div>
            <div className="p-2 rounded bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50">
              <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 block">Job #42 • Complete</span>
              <span className="text-slate-700 dark:text-slate-300">Full Frame Fitting</span>
              <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold block mt-0.5">Ready for Pickup</span>
            </div>
          </div>

          <div className="p-2 rounded bg-stone-50 dark:bg-slate-900/60 text-[10px] text-slate-600 dark:text-slate-300 flex items-center justify-between font-mono">
            <span>Printer: Lab-Thermal-80mm</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">Auto-Print ON</span>
          </div>
        </div>
      ),
    },
    {
      id: "rx-management",
      bgLight: "bg-[#FEFCE8]",
      bgDark: "dark:bg-[#1E1D11]",
      borderLight: "border-[#FEF08A]",
      borderDark: "dark:border-[#38351A]",
      title: "Clinical Rx & patient management",
      description:
        "Busy clinic, big responsibilities. Minimize errors by keeping complete patient prescription history at your fingertips. Store OD and OS powers, cylinder axis, near addition, and optometrist notes with 1-click repeat lookups.",
      badgeColor: "bg-[#CA8A04] text-white",
      previewComponent: (
        <div className="bg-white dark:bg-[#13151b] p-4 rounded-xl border border-stone-200/80 dark:border-white/10 shadow-xs text-xs space-y-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100 dark:border-white/5">
            <span className="font-bold text-slate-800 dark:text-white">Patient Prescription Record</span>
            <span className="text-[10px] bg-blue-50 dark:bg-sky-950 text-blue-700 dark:text-sky-300 px-1.5 py-0.5 rounded font-semibold">
              Dr. Verification OK
            </span>
          </div>

          <div className="grid grid-cols-5 gap-1.5 text-center text-[10px] font-mono">
            <div className="font-bold text-left font-sans text-slate-500 py-1">Eye</div>
            <div className="bg-stone-50 dark:bg-slate-800 py-1 rounded">SPH</div>
            <div className="bg-stone-50 dark:bg-slate-800 py-1 rounded">CYL</div>
            <div className="bg-stone-50 dark:bg-slate-800 py-1 rounded">AXIS</div>
            <div className="bg-stone-50 dark:bg-slate-800 py-1 rounded">ADD</div>

            <div className="font-bold text-left font-sans text-blue-600 py-1">OD (R)</div>
            <div className="bg-stone-100 dark:bg-slate-900 py-1 font-bold">-2.25</div>
            <div className="bg-stone-100 dark:bg-slate-900 py-1">-0.75</div>
            <div className="bg-stone-100 dark:bg-slate-900 py-1">90°</div>
            <div className="bg-emerald-50 dark:bg-emerald-950 py-1 text-emerald-600 font-bold">+1.50</div>

            <div className="font-bold text-left font-sans text-blue-600 py-1">OS (L)</div>
            <div className="bg-stone-100 dark:bg-slate-900 py-1 font-bold">-2.50</div>
            <div className="bg-stone-100 dark:bg-slate-900 py-1">-1.00</div>
            <div className="bg-stone-100 dark:bg-slate-900 py-1">85°</div>
            <div className="bg-emerald-50 dark:bg-emerald-950 py-1 text-emerald-600 font-bold">+1.50</div>
          </div>
        </div>
      ),
    },
    {
      id: "taxes-discounts",
      bgLight: "bg-[#FFF1F2]",
      bgDark: "dark:bg-[#201215]",
      borderLight: "border-[#FECDD3]",
      borderDark: "dark:border-[#3D1A22]",
      title: "Configure taxes & discounts",
      description:
        "Switch to an optical billing software that lets you easily configure and levy different taxes, update tax rates, and offer discounts depending on your service types, regional norms, and business needs. Automatically handles frames (12%) and lenses (18%).",
      badgeColor: "bg-[#E11D48] text-white",
      previewComponent: (
        <div className="bg-white dark:bg-[#13151b] p-4 rounded-xl border border-stone-200/80 dark:border-white/10 shadow-xs text-xs space-y-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100 dark:border-white/5">
            <span className="font-bold text-slate-800 dark:text-white">Tax & Discount Rules</span>
            <span className="text-[10px] text-emerald-600 font-bold">GST 2.0 Ready</span>
          </div>

          <div className="space-y-1.5 text-[11px]">
            <div className="p-2 rounded bg-stone-50 dark:bg-slate-900/60 flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Spectacle Frames (HSN 9003)</span>
              <span className="font-bold text-blue-600 dark:text-sky-400 font-mono">12% GST</span>
            </div>
            <div className="p-2 rounded bg-stone-50 dark:bg-slate-900/60 flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Ophthalmic Lenses (HSN 9001)</span>
              <span className="font-bold text-blue-600 dark:text-sky-400 font-mono">18% GST</span>
            </div>
            <div className="p-2 rounded bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50 flex items-center justify-between text-emerald-800 dark:text-emerald-300">
              <span>Festival Store Coupon (OPTIC20)</span>
              <span className="font-bold font-mono">20% OFF Applied</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-[#090a0f] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Petpooja Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            An all-rounder optical billing software
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Engineered specifically to solve every daily operational friction on your optical showroom and clinic counter.
          </p>
        </div>

        {/* Petpooja 2-Column Pastel Cards Grid with Smooth Hover-Expansion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card, idx) => {
            const isHovered = selectedCard === idx;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setSelectedCard(idx)}
                onMouseLeave={() => setSelectedCard(null)}
                className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  card.bgLight
                } ${card.bgDark} ${card.borderLight} ${card.borderDark} ${
                  isHovered ? "shadow-lg scale-[1.01]" : "shadow-xs"
                }`}
              >
                {/* Upper preview mockup area */}
                <div className="mb-6 transform transition-transform duration-300">
                  {card.previewComponent}
                </div>

                {/* Lower text description */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
