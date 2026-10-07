"use client";

import { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowRight, Menu, X, ChevronDown, Sparkles } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  const logoSrc =
    resolvedTheme === "dark"
      ? "/optipay-logo-darkbg.png"
      : "/optipay-logo-transparent.png";

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Hardware", href: "#hardware" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Why OptiPay", href: "#why-optipay" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/85 dark:bg-[#090A0F]/85 border-b border-slate-200/90 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo using Official OptiPay Assets */}
        <a href="#" className="flex items-center gap-3">
          <div className="relative h-9 w-32 sm:w-36">
            <Image
              src={logoSrc}
              alt="OptiPay"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-semibold text-slate-700 dark:text-slate-200">
          <a
            href="#features"
            className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1"
          >
            <span>POS Features</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </a>
          <a
            href="#hardware"
            className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
          >
            Hardware
          </a>
          <a
            href="#ecosystem"
            className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
          >
            Ecosystem
          </a>
          <a
            href="#why-optipay"
            className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
          >
            Why OptiPay
          </a>
          <a
            href="#faq"
            className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Right Action: Prominent Theme Switcher & Book Demo Button */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="#demo-form"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-sm font-bold rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-sky-500 dark:hover:bg-sky-400 text-white shadow-sm transition-all hover:gap-2.5 cursor-pointer"
          >
            <span>Book A Demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800 dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#090A0F] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 dark:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#demo-form"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold rounded-lg bg-blue-600 dark:bg-sky-500 text-white shadow-xs"
          >
            <span>Book A Free Demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
