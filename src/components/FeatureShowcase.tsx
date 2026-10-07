"use client";

import { useState } from "react";
import {
  FileSpreadsheet,
  Receipt,
  Wrench,
  ScanBarcode,
  Printer,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Send,
} from "lucide-react";

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      id: "rx",
      badge: "Clinical Precision",
      title: "OD & OS Clinical Prescription Matrix",
      tagline: "Enter complete eye refraction in 5 seconds with zero transcription errors.",
      icon: Eye,
      description:
        "Manage Sphere, Cylinder, Axis, and Near Addition powers across Right Eye (OD) and Left Eye (OS) with dedicated Pupillary Distance (PD) fields. Access past prescription history instantly during repeat patient visits.",
      highlights: [
        "1-click repeat prescription lookup by phone number",
        "Clinical OD/OS matrix with Axis (1° to 180°) and Near Add",
        "Pupillary Distance (PD) and Optometrist clinical notes",
        "Direct printout with clinic logo and doctor registration",
      ],
      previewType: "rx-matrix",
    },
    {
      id: "gst",
      badge: "Statutory Compliance",
      title: "Indian Split GST 2.0 Engine (HSN 9001 & 9003)",
      tagline: "Never perform manual tax calculations between frames and lenses.",
      icon: Receipt,
      description:
        "Indian optical bills combine multiple tax slabs on a single invoice: spectacle frames (HSN 9003 at 12%), corrective ophthalmic lenses (HSN 9001 at 18%), and sunglasses (HSN 9004 at 18%). OptiPay splits CGST/SGST or IGST automatically.",
      highlights: [
        "Automated multi-HSN tax breakdown on a single bill",
        "Intra-state (CGST + SGST) vs Inter-state (IGST) auto-switch",
        "B2B GSTIN capture and compliant tax invoice generation",
        "1-click GSTR-1 and GSTR-3B exportable sales reports",
      ],
      previewType: "gst-calc",
    },
    {
      id: "lab",
      badge: "Workshop Operations",
      title: "Lens Edging Job Slips & Advance Token Deposit",
      tagline: "Track custom workshop fittings and settle pending balance at pickup.",
      icon: Wrench,
      description:
        "Unlike grocery retail, eyewear requires custom fitting. OptiPay generates dedicated workshop job slips for lens edging technicians with exact lens powers and fitting heights, while tracking advance token deposits.",
      highlights: [
        "Dedicated thermal or A4 lab job slip for optical fitting technicians",
        "Records advance deposit paid and automatically locks the balance due",
        "Automated WhatsApp notification to customer when specs are ready for pickup",
        "Zero payment disputes upon collection with itemized delivery receipts",
      ],
      previewType: "lab-slip",
    },
    {
      id: "inventory",
      badge: "Optical Inventory",
      title: "Frame Brand & Lens Power Inventory with Barcode",
      tagline: "Scan USB barcodes to add frames and track lens diopter power matrices.",
      icon: ScanBarcode,
      description:
        "Track eyewear by brand, model, color code, temple length, and bridge width. Manage ophthalmic lens stock by refractive index (1.56, 1.61, 1.67) and power combinations with low-stock alerts.",
      highlights: [
        "USB & Bluetooth barcode scanner instant keyboard emulation",
        "Tracks frame attributes: Brand, Model, Eye Size, Bridge, Temple",
        "Lens power matrix tracking (Spherical x Cylindrical grids)",
        "Expiry date tracking for contact lenses and cleaning solutions",
      ],
      previewType: "inventory-matrix",
    },
    {
      id: "thermal",
      badge: "Instant Billing",
      title: "Instant 80mm/58mm Thermal & WhatsApp Invoices",
      tagline: "Print in 1 second on your existing thermal printer or send to WhatsApp.",
      icon: Printer,
      description:
        "OptiPay works directly with standard ESC/POS USB thermal receipt printers without proprietary printer drivers. Send a digital PDF receipt directly to the customer's WhatsApp with a single click.",
      highlights: [
        "Native support for 80mm and 58mm thermal receipt printers",
        "Instant WhatsApp receipt sharing with verified store branding",
        "Customizable store logo, GSTIN, FSSAI, and bank UPI QR code",
        "Paperless option reduces thermal paper costs by up to 60%",
      ],
      previewType: "thermal-receipt",
    },
  ];

  const current = features[activeFeature];

  return (
    <section id="features" className="py-20 bg-white dark:bg-[#090a0f] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-sky-400">
            Engineered For Eyewear
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Everything Your Optical Counter Needs on One Screen
          </p>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Generic retail billing fails when it comes to prescriptions, optical HSN splits, and workshop fittings.
            OptiPay was built from the ground up for optical workflows.
          </p>
        </div>

        {/* Feature Selector Tabs / Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-10">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            const isSelected = activeFeature === index;
            return (
              <button
                key={feat.id}
                type="button"
                onClick={() => setActiveFeature(index)}
                className={`flex flex-col items-start p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-50/80 dark:bg-slate-800/80 border-blue-500/60 dark:border-sky-500/60 shadow-xs ring-1 ring-blue-500/30"
                    : "bg-slate-50/60 dark:bg-slate-900/40 border-slate-200/80 dark:border-white/5 hover:bg-slate-100/60 dark:hover:bg-slate-800/50"
                }`}
              >
                <div
                  className={`p-2 rounded-lg mb-2.5 ${
                    isSelected
                      ? "bg-blue-600 dark:bg-sky-500 text-white"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold text-blue-600 dark:text-sky-400 block mb-0.5">
                  {feat.badge}
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                  {feat.title.split("(")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Deep-Dive Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-[#11131b] p-6 sm:p-10 shadow-sm transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Feature Narrative */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="inline-block px-3 py-1 rounded-md bg-blue-100/70 dark:bg-sky-950/60 text-blue-700 dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
                {current.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {current.title}
              </h3>

              <p className="mt-2 text-base font-semibold text-blue-600 dark:text-sky-400">
                {current.tagline}
              </p>

              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {current.description}
              </p>

              <div className="mt-6 space-y-2.5 w-full">
                {current.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/10 w-full flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Ready to test on your own counter?
                </span>
                <a
                  href="#demo-form"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-sky-400 hover:gap-2 transition-all"
                >
                  <span>Book 10-Min Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Realistic Micro-UI Snapshot */}
            <div className="lg:col-span-6">
              <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c0d14] p-5 sm:p-6 shadow-md">
                {/* Micro-UI 1: Clinical Rx Matrix Preview */}
                {current.previewType === "rx-matrix" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/10">
                      <div>
                        <span className="text-xs font-bold text-slate-800 dark:text-white block">
                          Patient Refraction Card
                        </span>
                        <span className="text-[11px] text-slate-500">
                          Last Exam: Today (Dr. S. Mehta)
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                        Repeat Patient
                      </span>
                    </div>

                    <table className="w-full text-center text-xs">
                      <thead>
                        <tr className="border-b border-slate-100 dark:border-white/5 text-slate-400 text-[11px]">
                          <th className="py-2 text-left font-semibold">Eye</th>
                          <th className="py-2 font-semibold">SPH</th>
                          <th className="py-2 font-semibold">CYL</th>
                          <th className="py-2 font-semibold">AXIS</th>
                          <th className="py-2 font-semibold">ADD</th>
                          <th className="py-2 font-semibold">V/A</th>
                        </tr>
                      </thead>
                      <tbody className="font-mono text-slate-800 dark:text-slate-200">
                        <tr className="border-b border-slate-50 dark:border-white/5">
                          <td className="py-2.5 text-left font-sans font-bold text-blue-600 dark:text-sky-400">
                            OD (Right)
                          </td>
                          <td className="py-2.5 font-bold">-2.25</td>
                          <td className="py-2.5">-0.75</td>
                          <td className="py-2.5">90°</td>
                          <td className="py-2.5 text-emerald-600 dark:text-emerald-400">+1.75</td>
                          <td className="py-2.5">6/6</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 text-left font-sans font-bold text-blue-600 dark:text-sky-400">
                            OS (Left)
                          </td>
                          <td className="py-2.5 font-bold">-2.50</td>
                          <td className="py-2.5">-1.00</td>
                          <td className="py-2.5">85°</td>
                          <td className="py-2.5 text-emerald-600 dark:text-emerald-400">+1.75</td>
                          <td className="py-2.5">6/6</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between text-xs">
                      <span className="text-slate-500">Pupillary Distance (PD):</span>
                      <span className="font-mono font-bold text-slate-800 dark:text-white">
                        63 mm (R: 31.5 / L: 31.5)
                      </span>
                    </div>
                  </div>
                )}

                {/* Micro-UI 2: Split GST Calculator */}
                {current.previewType === "gst-calc" && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/10">
                      <span className="text-xs font-bold text-slate-800 dark:text-white">
                        GST Tax Breakdown (Intra-State)
                      </span>
                      <span className="text-xs font-mono text-slate-500">CGST + SGST</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">
                            Eyewear Frame (HSN 9003)
                          </p>
                          <p className="text-[11px] text-slate-500">
                            Taxable: ₹2,232.14 • GST 12% (6% + 6%)
                          </p>
                        </div>
                        <span className="font-mono font-bold text-slate-800 dark:text-white">
                          ₹2,500.00
                        </span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">
                            Crizal EyeZen Lenses (HSN 9001)
                          </p>
                          <p className="text-[11px] text-slate-500">
                            Taxable: ₹2,966.10 • GST 18% (9% + 9%)
                          </p>
                        </div>
                        <span className="font-mono font-bold text-slate-800 dark:text-white">
                          ₹3,500.00
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-500">Total Tax Calculated:</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono">
                        ₹801.76 (Exact statutory match)
                      </span>
                    </div>
                  </div>
                )}

                {/* Micro-UI 3: Workshop Job Slip & Advance Deposit */}
                {current.previewType === "lab-slip" && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40 flex items-center justify-between text-xs">
                      <span className="font-semibold text-amber-800 dark:text-amber-300">
                        Fitting Status: At Edging Workshop
                      </span>
                      <span className="font-mono text-[11px] font-bold text-amber-700 dark:text-amber-400">
                        JOB #741
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Frame Model:</span>
                        <span className="font-medium text-slate-800 dark:text-slate-200">Ray-Ban RB5154 49-21</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Lens Type:</span>
                        <span className="font-medium text-slate-800 dark:text-slate-200">Polycarbonate 1.59 HC</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Fitting Heights (OD/OS):</span>
                        <span className="font-mono font-bold text-slate-800 dark:text-white">19mm / 19mm</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-sky-950/40 border border-blue-100 dark:border-sky-900/40 flex items-center justify-between text-xs">
                      <span className="text-blue-800 dark:text-sky-300 font-medium">Advance Token Paid:</span>
                      <span className="font-mono font-bold text-blue-700 dark:text-sky-300">₹1,500 (Balance: ₹3,200)</span>
                    </div>
                  </div>
                )}

                {/* Micro-UI 4: Barcode Inventory */}
                {current.previewType === "inventory-matrix" && (
                  <div className="space-y-3">
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 flex items-center gap-3">
                      <ScanBarcode className="w-5 h-5 text-blue-600 dark:text-sky-400" />
                      <div className="text-xs">
                        <span className="text-slate-400 block text-[10px]">Scanned SKU:</span>
                        <span className="font-mono font-bold text-slate-800 dark:text-white">
                          8907421098412
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-white/5">
                        <span className="text-[10px] text-slate-400 block">Brand & Collection</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">Vogue Eyewear</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-white/5">
                        <span className="text-[10px] text-slate-400 block">Frame Dimensions</span>
                        <span className="font-mono font-bold text-slate-800 dark:text-slate-200">52-18-140 mm</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-white/5">
                        <span className="text-[10px] text-slate-400 block">Retail Price (MRP)</span>
                        <span className="font-mono font-bold text-slate-800 dark:text-slate-200">₹4,290</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-800/40">
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block">Live Stock</span>
                        <span className="font-bold text-emerald-700 dark:text-emerald-300">4 in Store • 8 in Warehouse</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Micro-UI 5: 80mm Thermal Receipt */}
                {current.previewType === "thermal-receipt" && (
                  <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/80 border border-dashed border-slate-300 dark:border-white/20 font-mono text-[11px] text-slate-800 dark:text-slate-200 space-y-2">
                    <div className="text-center pb-2 border-b border-dashed border-slate-300 dark:border-white/20">
                      <p className="font-bold text-xs uppercase">VISION PLUS OPTICIANS</p>
                      <p className="text-[10px] text-slate-500">GSTIN: 27AABCV1234F1Z5</p>
                      <p className="text-[10px] text-slate-500">Ph: +91 98201 23456</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span>1x Titan Frame 9003</span>
                        <span>₹2,500.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1x Crizal Lens 9001</span>
                        <span>₹3,500.00</span>
                      </div>
                      <div className="flex justify-between text-slate-500 text-[10px]">
                        <span>Total CGST (6%+9%)</span>
                        <span>₹400.88</span>
                      </div>
                      <div className="flex justify-between text-slate-500 text-[10px]">
                        <span>Total SGST (6%+9%)</span>
                        <span>₹400.88</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-dashed border-slate-300 dark:border-white/20 flex justify-between font-bold text-xs">
                      <span>GRAND TOTAL:</span>
                      <span>₹6,000.00</span>
                    </div>

                    <div className="pt-2 text-center text-[10px] text-slate-500">
                      *** Thank You For Visiting! ***
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
