"use client";

import { useState } from "react";
import { Store, Network, Stethoscope, CheckCircle2, ArrowRight } from "lucide-react";

export function AudienceTabs() {
  const [activeTab, setActiveTab] = useState<"single" | "chain" | "clinic">("single");

  const audienceData = {
    single: {
      badge: "For Single Stores & Boutiques",
      title: "Eliminate Paper Registers & Bill 10x Faster at the Counter",
      description:
        "Designed for independent optical store owners who want rapid 3-click billing, instant customer prescription lookups, and clear tracking of advance deposits.",
      points: [
        "Find existing customer prescription history in 2 seconds by mobile number",
        "Automated GST 2.0 invoice calculation (HSN 9003 at 12% vs HSN 9001 at 18%)",
        "Track advance token deposits and collect exact balance during delivery",
        "Print thermal receipts (80mm/58mm) or send instant bills to customer WhatsApp",
        "Runs on any standard PC or tablet without installing heavy database servers",
      ],
      metric: "Save 3+ hours daily on manual billing and stock counting",
    },
    chain: {
      badge: "For Multi-Store Retail Chains",
      title: "Centralized Multi-Branch Inventory & Unified Patient Records",
      description:
        "Manage 2 to 50+ optical stores from one central cloud dashboard. Transfer frames between branches, prevent out-of-stock losses, and share customer power history seamlessly.",
      points: [
        "Inter-store stock transfers with digital transfer slips and audit tracking",
        "Unified customer profile across all branches (customer can test in Store A, pickup in Store B)",
        "Role-based staff permissions (cashiers bill, store managers approve discounts, owner monitors all)",
        "Consolidated daily sales, profit margin, and top-selling brand analytics on your phone",
        "Centralized lens pricing and frame SKU catalog management across all outlets",
      ],
      metric: "Zero stock discrepancies across all branches with unified cloud sync",
    },
    clinic: {
      badge: "For Eye Clinics & Optometrists",
      title: "Full Clinical Refraction Suite & Doctor Consultation Queue",
      description:
        "Built for eye hospitals, ophthalmology clinics, and optometrists requiring strict clinical accuracy, patient consultation history, and prescription printing.",
      points: [
        "Clinical OD & OS refraction matrix (Sphere, Cylinder, Axis, Near Add, Pupillary Distance)",
        "Patient visual acuity recording (6/6, 6/9, LogMAR) and fundus/corneal exam notes",
        "Doctor prescription printouts with clinic logo, registration number, and digital signature",
        "Direct handoff from doctor's consulting room to optical dispensing counter with zero paper slips",
        "Contact lens parameters (Base Curve, Diameter, Expiry date tracking)",
      ],
      metric: "100% clinical accuracy with zero handwritten prescription errors",
    },
  };

  const current = audienceData[activeTab];

  return (
    <section id="solutions" className="py-20 bg-slate-50/70 dark:bg-slate-950/40 border-y border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-sky-400">
            Tailored Solutions
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Built for Every Optical Business Model
          </p>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Whether you run a neighbourhood boutique, a growing 5-store chain, or a busy eye clinic, OptiPay adapts to your workflow.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xs gap-1.5 flex-wrap justify-center">
            <button
              type="button"
              onClick={() => setActiveTab("single")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "single"
                  ? "bg-blue-600 dark:bg-sky-500 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Store className="w-4 h-4" />
              <span>Independent Boutiques</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("chain")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "chain"
                  ? "bg-blue-600 dark:bg-sky-500 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Network className="w-4 h-4" />
              <span>Multi-Store Chains</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("clinic")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "clinic"
                  ? "bg-blue-600 dark:bg-sky-500 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>Eye Clinics & Optometrists</span>
            </button>
          </div>
        </div>

        {/* Content Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white dark:bg-[#11131b] border border-slate-200 dark:border-white/10 p-6 sm:p-10 shadow-sm transition-all">
          <div className="inline-block px-3 py-1 rounded-md bg-blue-50 dark:bg-sky-950/60 text-blue-700 dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200/50 dark:border-sky-800/50">
            {current.badge}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {current.title}
          </h3>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {current.description}
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {current.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs font-semibold text-blue-600 dark:text-sky-400 bg-blue-50/60 dark:bg-sky-950/30 px-3 py-1.5 rounded-lg border border-blue-100 dark:border-sky-900/40">
              💡 {current.metric}
            </div>

            <a
              href="#demo-form"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-sky-400 hover:text-blue-700 dark:hover:text-sky-300 transition-colors"
            >
              <span>See how this works for your store</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
