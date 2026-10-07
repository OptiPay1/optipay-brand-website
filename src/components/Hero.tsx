"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles, Heart, Smile, Clock, ShieldCheck, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-10 pb-16 md:pt-14 md:pb-24 bg-[#F8FAFC] dark:bg-[#08090C] transition-colors overflow-hidden">
      {/* Subtle Warm & Prism Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-blue-500/10 via-amber-400/5 to-emerald-500/10 dark:from-sky-500/10 dark:via-purple-500/10 dark:to-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heart-Catching Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-6 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero Counter Fatigue • 70% Less Daily Manual Work</span>
            </div>

            {/* Refined Heart-Catching Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.14]">
              Less effort at the counter.{" "}
              <span className="text-blue-600 dark:text-sky-400 block mt-1">
                More peace running your store.
              </span>
            </h1>

            {/* Subheadline capturing 'work of yours gets less with minimum physical efforts' */}
            <p className="mt-5 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A software designed to do the heavy lifting so you don&apos;t have to.
              Manage complex OD/OS prescriptions, split GST, and workshop fittings in just 3 clicks —
              cutting daily manual effort by over 70% so you and your staff can finally breathe in relief.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#demo-form"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-sky-500 dark:hover:bg-sky-400 text-white shadow-md hover:shadow-lg transition-all cursor-pointer text-center group"
              >
                <span>Take a free 10-min demo</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-center shadow-xs"
              >
                See How Work Gets Lighter ↓
              </a>
            </div>

            {/* The 4 Relief Guarantees */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-white/10 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Zero calculator math & manual slips</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Find past patient power in 2 seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Auto-splits Frames 12% & Lenses 18%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Automated WhatsApp customer alerts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Relief Illustration & Desktop Computer Scene */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Visual Container */}
            <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-slate-100 to-slate-200/80 dark:from-slate-800/80 dark:to-slate-900 p-2 sm:p-3 shadow-xl border border-slate-200/80 dark:border-white/10">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white dark:bg-[#11131B]">
                <Image
                  src="/hero-optical-relief.jpg"
                  alt="Optical store owner smiling in relief using OptiPay on desktop computer"
                  fill
                  priority
                  className="object-cover object-center"
                />

                {/* Floating Relief Badge 1: Top Right */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 dark:bg-[#0c0d14]/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/80 dark:border-white/10 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Smile className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Daily Counter Time</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Saved 3+ Hours</span>
                  </div>
                </div>

                {/* Floating Relief Badge 2: Bottom Left */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/95 dark:bg-[#0c0d14]/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/80 dark:border-white/10 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-sky-950/80 flex items-center justify-center text-blue-600 dark:text-sky-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">3-Click Billing</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Zero Calculation Stress</span>
                  </div>
                </div>
              </div>

              {/* Sub-caption below the illustration */}
              <div className="p-3 text-center">
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Join 1,000+ relaxed opticians across India who switched from paper registers to OptiPay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
