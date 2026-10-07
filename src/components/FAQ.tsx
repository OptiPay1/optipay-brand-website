"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need to buy a new computer or receipt printer to use OptiPay?",
      a: "No. OptiPay runs directly in modern web browsers (Chrome, Edge, Safari) on your existing Windows, Mac, or tablet. It connects smoothly with your existing USB barcode scanner and 80mm or 58mm thermal receipt printer (EPSON, TVS, NGX, Everycom).",
    },
    {
      q: "How does OptiPay handle Indian GST for frames versus lenses?",
      a: "Spectacle frames (HSN 9003) carry 12% GST, while corrective ophthalmic lenses (HSN 9001) carry 18% GST. OptiPay automatically splits these tax slabs on a single combined customer bill, calculating exact CGST, SGST, or IGST with zero manual math.",
    },
    {
      q: "Can I import my existing customer prescription history and frame stock?",
      a: "Yes. Our onboarding specialist will help you import your existing Excel, CSV, or legacy software records (from Marg ERP, Vyapar, or old systems) into OptiPay during setup so you don't lose past patient data.",
    },
    {
      q: "Does OptiPay send digital invoices to customer WhatsApp?",
      a: "Yes. In addition to printing 80mm thermal paper receipts, you can send a clean, branded digital invoice directly to the customer's WhatsApp with one click, along with automated alerts when their spectacles are fitted and ready for pickup.",
    },
    {
      q: "How long does it take to train my counter staff?",
      a: "OptiPay was designed for busy retail counters with zero clutter. Cashiers and sales staff learn the 3-click billing workflow in under 30 minutes, supported by our free video guides and dedicated WhatsApp support.",
    },
    {
      q: "Can I manage multiple optical branches with one owner account?",
      a: "Yes. You can manage 2 to 50+ stores from a single login. View real-time sales across all branches, initiate inter-store frame transfers, and let patients test their eyes at one branch and pick up glasses at another.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-[#090a0f] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-sky-400">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Everything You Need to Know Before Switching
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-[#11131b] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-4 px-6 flex items-center justify-between text-left text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ml-4 ${
                      isOpen ? "rotate-180 text-blue-600 dark:text-sky-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
