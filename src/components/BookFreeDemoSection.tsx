"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Building,
  User,
  Calendar,
  Headphones,
  CheckCircle2,
  MessageSquare,
  Send,
  AlertCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import {
  validateContactName,
  validateEmail,
  validatePhone,
  validateCity,
  validateStoreName,
  VALID_ROLES,
  ValidationErrors,
} from "@/lib/validation";
import { ThankYouModal } from "./ThankYouModal";

export function BookFreeDemoSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    storeName: "",
    role: "Optical Store Owner",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [fieldErrors, setFieldErrors] = useState<ValidationErrors>({});
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState("");
  const [rateLimitWait, setRateLimitWait] = useState<number | null>(null);

  // Thank You Popup State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmedLead, setConfirmedLead] = useState<{
    contactName: string;
    storeName: string;
    phone: string;
    city: string;
  } | null>(null);

  // Validate single field on blur or change
  const validateField = (field: string, value: string) => {
    let error: string | null = null;
    switch (field) {
      case "name":
        error = validateContactName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "city":
        error = validateCity(value);
        break;
      case "storeName":
        error = validateStoreName(value);
        break;
    }
    setFieldErrors((prev) => ({
      ...prev,
      [field === "name" ? "contactName" : field]: error || undefined,
    }));
    return !error;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const val = (formData as any)[field] || "";
    validateField(field, val);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      validateField(field, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError("");

    // 1. Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      city: true,
      storeName: true,
    });

    // 2. Validate all fields
    const nameErr = validateContactName(formData.name);
    const emailErr = validateEmail(formData.email);
    const phoneErr = validatePhone(formData.phone);
    const cityErr = validateCity(formData.city);
    const storeErr = validateStoreName(formData.storeName);

    const errors: ValidationErrors = {};
    if (nameErr) errors.contactName = nameErr;
    if (emailErr) errors.email = emailErr;
    if (phoneErr) errors.phone = phoneErr;
    if (cityErr) errors.city = cityErr;
    if (storeErr) errors.storeName = storeErr;

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setGeneralError("Please correct the errors in the form before submitting.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          storeName: formData.storeName,
          contactName: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          role: formData.role,
        }),
      });

      const data = await res.json();

      if (res.status === 429) {
        setRateLimitWait(data.resetSeconds || 60);
        throw new Error(data.error || "Rate limit reached. Please wait before retrying.");
      }

      if (!res.ok) {
        if (data.fields) {
          setFieldErrors(data.fields);
        }
        throw new Error(data.error || "Submission failed. Please check your information.");
      }

      // Success! Open Thank You Popup
      setConfirmedLead({
        contactName: formData.name,
        storeName: formData.storeName,
        phone: formData.phone.replace(/\D/g, "").slice(-10),
        city: formData.city,
      });
      setIsModalOpen(true);

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        storeName: "",
        role: "Optical Store Owner",
      });
      setTouched({});
      setFieldErrors({});
    } catch (err: any) {
      setGeneralError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="demo-form"
      className="py-20 sm:py-24 bg-slate-50/70 dark:bg-[#0B0D14] border-t border-slate-200/80 dark:border-white/5 transition-colors scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-sky-950/60 text-blue-700 dark:text-sky-300 border border-blue-200/60 dark:border-sky-800/40 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
              <span>Zero Commitment • 10-Minute Walkthrough</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Book a Free Demo
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              See how OptiPay POS eliminates calculation errors, handles split GST, and syncs WhatsApp optical slips in real time.
            </p>

            {generalError && (
              <div className="mt-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 flex items-start gap-3 text-red-700 dark:text-red-300 text-xs font-semibold">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p>{generalError}</p>
                  {rateLimitWait && (
                    <p className="mt-1 text-[11px] text-red-600 dark:text-red-400">
                      Rate limit resets in approximately {rateLimitWait} seconds.
                    </p>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Contact Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm transition-colors focus:outline-hidden ${
                      touched.name && fieldErrors.contactName
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    }`}
                  />
                  {touched.name && fieldErrors.contactName && (
                    <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {fieldErrors.contactName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. ramesh@opticalcare.in"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm transition-colors focus:outline-hidden ${
                      touched.email && fieldErrors.email
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    }`}
                  />
                  {touched.email && fieldErrors.email && (
                    <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Mobile Phone Number*
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) =>
                        handleChange("phone", e.target.value.replace(/\D/g, "").slice(0, 10))
                      }
                      onBlur={() => handleBlur("phone")}
                      className={`w-full px-3.5 py-2.5 rounded-r-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm font-mono transition-colors focus:outline-hidden ${
                        touched.phone && fieldErrors.phone
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-slate-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      }`}
                    />
                  </div>
                  {touched.phone && fieldErrors.phone && (
                    <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {fieldErrors.phone}
                    </p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    City / Town*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ahmedabad, Surat, Rajkot"
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    onBlur={() => handleBlur("city")}
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm transition-colors focus:outline-hidden ${
                      touched.city && fieldErrors.city
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    }`}
                  />
                  {touched.city && fieldErrors.city && (
                    <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {fieldErrors.city}
                    </p>
                  )}
                </div>
              </div>

              {/* Optical Store Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Optical Store Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vision Plus Opticians"
                  value={formData.storeName}
                  onChange={(e) => handleChange("storeName", e.target.value)}
                  onBlur={() => handleBlur("storeName")}
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm transition-colors focus:outline-hidden ${
                    touched.storeName && fieldErrors.storeName
                      ? "border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-slate-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  }`}
                />
                {touched.storeName && fieldErrors.storeName && (
                  <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" />
                    {fieldErrors.storeName}
                  </p>
                )}
              </div>

              {/* Role Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Your Role at the Optical Store*
                </label>
                <div className="flex flex-wrap gap-2">
                  {VALID_ROLES.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setFormData({ ...formData, role: r })}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                        formData.role === r
                          ? "bg-blue-600 text-white border-blue-600 dark:bg-sky-500 dark:border-sky-500 dark:text-white shadow-xs"
                          : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-slate-300"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-10 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-sky-500 dark:hover:bg-sky-400 text-white font-bold text-base shadow-md shadow-blue-500/20 transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Scheduling Demo...</span>
                  </>
                ) : (
                  <>
                    <span>Book 10-Min Free Demo</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-500">
                🔒 We respect your privacy. Leads are sent to{" "}
                <span className="font-mono text-slate-700 dark:text-slate-300">
                  optipay22@gmail.com
                </span>{" "}
                and never shared with third parties.
              </p>
            </form>
          </div>

          {/* Right Column: Customer Care & Consultation Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-[#11131B] p-8 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 dark:bg-sky-950/60 border border-blue-100 dark:border-sky-800/40 shadow-xs flex items-center justify-center text-blue-600 dark:text-sky-400 mb-6">
                <Headphones className="w-10 h-10" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Personalized 10-Minute Walkthrough
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Our optical specialist will call you, verify your existing thermal printer & barcode scanner, and demonstrate how OptiPay saves 3+ hours daily.
              </p>

              <div className="w-full space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300 text-left bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Flexible demo time as per your store schedule</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Direct phone / Google Meet / WhatsApp screen share</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Leads routed directly to optipay22@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Pop-up Modal */}
      {confirmedLead && (
        <ThankYouModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          leadData={confirmedLead}
        />
      )}
    </section>
  );
}
