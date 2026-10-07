import { Check, X, ShieldAlert, Sparkles } from "lucide-react";

export function WhyOptiPay() {
  const comparisons = [
    {
      feature: "Clinical OD/OS Eye Refraction (Sph, Cyl, Axis, Add)",
      optipay: true,
      generic: false,
      legacy: "Manual & Clunky",
    },
    {
      feature: "Automated Multi-HSN GST (Frames 12% + Lenses 18%)",
      optipay: true,
      generic: false,
      legacy: "Complex Setup",
    },
    {
      feature: "Lens Edging Workshop Job Slips & Advance Tokens",
      optipay: true,
      generic: false,
      legacy: "Paper Slips",
    },
    {
      feature: "Pure Cloud Sync (Check Live Sales from Smartphone)",
      optipay: true,
      generic: true,
      legacy: false,
    },
    {
      feature: "Instant WhatsApp Invoices & Readiness Alerts",
      optipay: true,
      generic: "SMS Only",
      legacy: false,
    },
    {
      feature: "Zero Installation (Runs directly in web browser)",
      optipay: true,
      generic: false,
      legacy: false,
    },
    {
      feature: "Staff Training Required",
      optipay: "< 30 Minutes",
      generic: "1 to 2 Days",
      legacy: "1 to 2 Weeks",
    },
  ];

  return (
    <section id="why-optipay" className="py-20 bg-white dark:bg-[#090a0f] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-sky-400">
            Compare The Difference
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Why Generic Billing Software Fails Optical Retailers
          </p>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Generic retail tools treat prescription eyewear like grocery items. Here is why purpose-built optical software is essential.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm bg-white dark:bg-[#11131b]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/60">
                  <th className="py-4 px-6 font-bold text-slate-900 dark:text-white">
                    Workflow Capability
                  </th>
                  <th className="py-4 px-6 font-bold text-blue-600 dark:text-sky-400 bg-blue-50/50 dark:bg-sky-950/40 text-center">
                    OptiPay POS
                  </th>
                  <th className="py-4 px-6 font-semibold text-slate-600 dark:text-slate-400 text-center">
                    Generic Retail POS
                  </th>
                  <th className="py-4 px-6 font-semibold text-slate-600 dark:text-slate-400 text-center">
                    Legacy Desktop ERP
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {comparisons.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-800 dark:text-slate-200">
                      {item.feature}
                    </td>

                    {/* OptiPay Column */}
                    <td className="py-4 px-6 bg-blue-50/30 dark:bg-sky-950/20 text-center">
                      {item.optipay === true ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                          {item.optipay}
                        </span>
                      )}
                    </td>

                    {/* Generic Retail Column */}
                    <td className="py-4 px-6 text-center text-slate-500">
                      {item.generic === false ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400">
                          <X className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : item.generic === true ? (
                        <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                      ) : (
                        <span className="text-xs text-slate-500">{item.generic}</span>
                      )}
                    </td>

                    {/* Legacy ERP Column */}
                    <td className="py-4 px-6 text-center text-slate-500">
                      {item.legacy === false ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400">
                          <X className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <span className="text-xs text-slate-500">{item.legacy}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
