import { WifiOff, Monitor, Laptop, Keyboard, ScanBarcode, ReceiptText, ShieldCheck } from "lucide-react";

export function QuickAndSimple() {
  const points = [
    {
      icon: WifiOff,
      title: "Works offline, cloud-based software",
      desc: "Reliable counter billing with automatic cloud synchronization.",
    },
    {
      icon: Monitor,
      title: "Works on any hardware",
      desc: "Run on existing Windows PCs, Macs, iPads, or Android tablets.",
    },
    {
      icon: Laptop,
      title: "Works on major Operating systems",
      desc: "Zero installation required. Opens in Chrome, Edge, Safari, or Firefox.",
    },
    {
      icon: Keyboard,
      title: "Keyboard / touchscreen view",
      desc: "Fast shortcut keys for rapid counter checkout during rush hours.",
    },
    {
      icon: ScanBarcode,
      title: "Barcode scan & search",
      desc: "Instant USB/Bluetooth barcode scanning for frames, cases, and solutions.",
    },
    {
      icon: ReceiptText,
      title: "E-bill receipts & WhatsApp",
      desc: "Print instant 80mm/58mm thermal bills or deliver directly to customer WhatsApp.",
    },
  ];

  return (
    <section id="hardware" className="py-20 bg-slate-50/70 dark:bg-[#0B0D14] border-t border-slate-200/80 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Quick & simple
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            OptiPay optical billing software works easily with any existing infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Counter Terminal Illustration */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white dark:bg-[#11131B] p-8 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-blue-50 dark:bg-sky-950/60 border border-blue-100 dark:border-sky-800/40 flex items-center justify-center text-blue-600 dark:text-sky-400 mb-6">
                <Monitor className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Your Existing Counter Hardware
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mb-6 leading-relaxed">
                No expensive proprietary machines. OptiPay connects seamlessly with your standard USB barcode scanners and 80mm receipt printers in under 10 minutes.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200/50 dark:border-emerald-800/40">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Plug & Play Compatibility</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Grid Points (Matching Petpooja Screenshot 3) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#11131B] border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 shadow-xs">
                    <Icon className="w-6 h-6 text-slate-800 dark:text-slate-200" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                      {pt.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
