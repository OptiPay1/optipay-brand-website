"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Mail, PhoneCall, ShieldCheck } from "lucide-react";

export function Footer() {
  const { resolvedTheme } = useTheme();

  const logoSrc =
    resolvedTheme === "dark"
      ? "/optipay-logo-darkbg.png"
      : "/optipay-logo-transparent.png";

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#08090C] text-slate-600 dark:text-slate-400 py-14 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="relative h-10 w-36 mb-4">
              <Image
                src={logoSrc}
                alt="OptiPay"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed mb-4">
              The high-performance cloud operating system for Indian optical retailers, eyewear boutiques, and eye clinics. 3-click billing, clinical Rx, and automated split GST.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-200/50 dark:border-emerald-800/40">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>GST 2.0 Compliant • Cloud Encrypted</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              POS Modules
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#features" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
                  Customizable Bill Format
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
                  Multi-Terminal Billing
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
                  Station-Wise Lab Slip Printing
                </a>
              </li>
              <li>
                <a href="#hardware" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
                  Hardware & Thermal Compatibility
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
                <a href="mailto:optipay22@gmail.com" className="hover:underline font-medium text-slate-800 dark:text-slate-200">
                  optipay22@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium text-slate-800 dark:text-slate-200">+91 Demo Helpline 24/7</span>
              </li>
              <li className="text-xs text-slate-500 pt-2 leading-relaxed">
                Dedicated optical software support for independent opticians and eye clinic chains across India.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 OptiPay Systems. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#demo-form" className="font-semibold text-blue-600 dark:text-sky-400 hover:underline">
              Book A Demo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
