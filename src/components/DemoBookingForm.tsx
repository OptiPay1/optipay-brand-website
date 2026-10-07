"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, MessageSquare, Clock, ShieldCheck, Sparkles, Building2, User, MapPin } from "lucide-react";

export function DemoBookingForm() {
  const [formData, setFormData] = useState({
    storeName: "",
    contactName: "",
    phone: "",
    city: "",
    outlets: "Single Store",
    currentSoftware: "Manual Paper Bills",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const outletOptions = ["Single Store", "2 to 5 Stores", "5+ Chain", "Eye Clinic"];
  const softwareOptions = ["Manual Paper Bills", "Vyapar / myBillBook", "Marg ERP", "Excel / Other"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "An error occurred. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello OptiPay Team, I just requested a demo for my store "${formData.storeName || "My Store"}" in ${formData.city || "India"}. I would like to schedule a 10-minute preview.`
  );

  return (
    <section id="demo-form" className="py-20 bg-slate-50/70 dark:bg-slate-950/40 border-t border-slate-200/60 dark:border-white/5 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200/60 dark:border-emerald-800/40">
              <Clock className="w-3.5 h-3.5" />
              <span>Takes Just 10 Minutes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Book a Free Live Demo for Your Optical Store
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              See how OptiPay saves your store 3+ hours daily. Our optical specialist will walk you through live on your screen and verify your thermal printer.
            </p>
          </div>

          {/* Form Container */}
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11131b] p-6 sm:p-10 shadow-sm transition-all">
            {submitted ? (
              /* Success State */
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Demo Request Confirmed!
                </h3>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-md">
                  Thank you, <span className="font-semibold text-slate-900 dark:text-white">{formData.contactName}</span>. Your details have been forwarded to our team (<span className="font-mono text-xs text-blue-600 dark:text-sky-400">optipay22@gmail.com</span>). An optical software specialist will call you within 15 minutes.
                </p>

                {/* Instant WhatsApp Connect Button */}
                <div className="mt-8 p-5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/40 w-full max-w-md">
                  <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 mb-3">
                    Want an instant preview right now?
                  </p>
                  <a
                    href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat With Us on WhatsApp Now</span>
                  </a>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/40 text-red-700 dark:text-red-300 text-xs font-medium">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Optical Store Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Optical Store / Clinic Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vision Plus Opticians"
                        value={formData.storeName}
                        onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Owner / Contact Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* WhatsApp Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      WhatsApp Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                        className="w-full px-4 py-2.5 rounded-r-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all font-mono"
                      />
                    </div>
                  </div>

                  {/* City & State */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      City / Location <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ahmedabad, Gujarat"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Number of Outlets Pills */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    How many stores do you operate?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {outletOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, outlets: opt })}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                          formData.outlets === opt
                            ? "bg-blue-600 dark:bg-sky-500 text-white border-blue-600 dark:border-sky-500 shadow-xs"
                            : "bg-slate-50/60 dark:bg-slate-900/40 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-slate-100"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Current Software Pills */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    What system do you currently use for billing?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {softwareOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, currentSoftware: opt })}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                          formData.currentSoftware === opt
                            ? "bg-blue-600 dark:bg-sky-500 text-white border-blue-600 dark:border-sky-500 shadow-xs"
                            : "bg-slate-50/60 dark:bg-slate-900/40 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-slate-100"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-sky-500 dark:hover:bg-sky-400 text-white font-bold text-base shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Scheduling your demo...</span>
                  ) : (
                    <>
                      <span>Schedule My Free 10-Min Demo</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                  By submitting, you agree to receive a quick 10-minute demo call. We never send spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
