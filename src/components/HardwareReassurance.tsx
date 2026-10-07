import { Monitor, Printer, ScanBarcode, Cloud, Lock, Sparkles, Check } from "lucide-react";

export function HardwareReassurance() {
  const hardwareFeatures = [
    {
      icon: Monitor,
      title: "Works on Any Existing PC or Tablet",
      description: "No need to buy expensive new terminals. Runs smoothly on Windows 7/10/11, Mac, iPad, or Android tablets.",
    },
    {
      icon: ScanBarcode,
      title: "Plug & Play Barcode Scanners",
      description: "Supports any standard USB or wireless Bluetooth 1D/2D barcode scanner via instant keyboard emulation.",
    },
    {
      icon: Printer,
      title: "Any 80mm & 58mm Thermal Printer",
      description: "Print instant tax invoices and delivery receipts on EPSON, TVS, NGX, Everycom, or any ESC/POS thermal printer.",
    },
    {
      icon: Cloud,
      title: "Pure Cloud-Based Architecture",
      description: "Zero heavy desktop installations. Open your browser, log in, and bill instantly with automated daily backups.",
    },
    {
      icon: Lock,
      title: "Encrypted Patient Data Safety",
      description: "Even if your store computer breaks or is infected by a virus, your patient prescription history is 100% safe.",
    },
    {
      icon: Sparkles,
      title: "Keyboard-First Fast Counter Billing",
      description: "Full keyboard shortcut support for rapid entry during rush hours, plus touch-friendly controls on tablets.",
    },
  ];

  return (
    <section id="hardware" className="py-20 bg-slate-50/70 dark:bg-slate-950/40 border-y border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-sky-400">
            Zero Disruption Setup
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Use Your Existing Computers & Thermal Printers
          </p>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Switch to OptiPay without throwing away your existing counter equipment. Get set up in under 30 minutes.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hardwareFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#11131b] border border-slate-200 dark:border-white/10 shadow-xs hover:border-blue-500/50 dark:hover:border-sky-500/50 transition-all flex flex-col items-start"
              >
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-sky-950/60 text-blue-600 dark:text-sky-400 mb-4 border border-blue-100 dark:border-sky-800/40">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom banner reassurance */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-sky-600 dark:to-blue-700 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-base">Unsure if your thermal printer or scanner will work?</p>
              <p className="text-xs text-white/80">Our technical specialist will verify your exact setup during your free 10-minute demo.</p>
            </div>
          </div>
          <a
            href="#demo-form"
            className="px-5 py-2.5 rounded-xl bg-white text-blue-700 hover:bg-slate-100 text-sm font-bold shrink-0 transition-colors cursor-pointer shadow-sm"
          >
            Schedule Free Hardware Check
          </a>
        </div>
      </div>
    </section>
  );
}
