"use client";

import React, { useEffect } from "react";
import { CheckCircle2, MessageSquare, X, Phone, Calendar, Clock, Sparkles } from "lucide-react";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadData: {
    contactName: string;
    storeName: string;
    phone: string;
    city: string;
  };
}

export function ThankYouModal({ isOpen, onClose, leadData }: ThankYouModalProps) {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello OptiPay Team, I just requested a demo for "${leadData.storeName || "My Optical Store"}" in ${leadData.city || "India"}. My phone is +91 ${leadData.phone}. Can we connect now?`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="thank-you-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#111422] border border-slate-200 dark:border-white/10 shadow-2xl p-6 sm:p-8 text-center animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Celebration Graphic */}
        <div className="relative mx-auto w-20 h-20 mb-5 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 dark:bg-emerald-500/25 animate-ping opacity-50" />
          <div className="relative w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/10">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="absolute -top-1 -right-1 text-amber-500 animate-bounce">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>

        {/* Title */}
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40 mb-2">
          Demo Request Confirmed
        </span>
        <h2
          id="thank-you-title"
          className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight"
        >
          Thank You, {leadData.contactName || "Optical Partner"}!
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Your demo request for{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            {leadData.storeName || "your store"}
          </span>{" "}
          has been scheduled with our optical technology team.
        </p>

        {/* Structured Details Card */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-[#0B0E17] border border-slate-200/80 dark:border-white/5 text-left space-y-2.5 text-xs">
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>Callback Number:</span>
            </span>
            <span className="font-mono font-bold text-slate-900 dark:text-white">
              +91 {leadData.phone}
            </span>
          </div>

          <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-indigo-500" />
              <span>Expected Response:</span>
            </span>
            <span className="font-bold text-slate-900 dark:text-white">
              Within 2 business hours
            </span>
          </div>

          <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-sky-500" />
              <span>What We Will Show:</span>
            </span>
            <span className="font-semibold text-slate-800 dark:text-slate-200 text-right">
              Live Split GST & Lens Rx
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={`https://wa.me/919999999999?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp Now</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
