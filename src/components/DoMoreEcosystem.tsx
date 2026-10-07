import { ShoppingCart, FileBarChart2, Boxes, BookOpen, Users, Network, ArrowRight } from "lucide-react";

export function DoMoreEcosystem() {
  const modules = [
    {
      icon: ShoppingCart,
      title: "WhatsApp & Order Management",
      desc: "A POS system that provides you with the complete picture of your optical orders, lens edging status, and automated pickup alerts via WhatsApp.",
    },
    {
      icon: FileBarChart2,
      title: "Store Rights and Reports",
      desc: "Access daily optical sales reports, day-end cash drawer tallies, and regulate staff discount rights to avoid fraud and pilferage.",
    },
    {
      icon: Boxes,
      title: "Inventory & Lens Management",
      desc: "Track frame purchases, brand margins, lens power diopter stock trends, and contact lens expiry dates from a single dashboard.",
    },
    {
      icon: BookOpen,
      title: "Clinical Prescription Suite",
      desc: "Store and organize digital patient refraction cards (OD/OS Sph, Cyl, Axis, Add) with 1-click repeat lookups.",
    },
    {
      icon: Users,
      title: "Optical CRM & Annual Reminders",
      desc: "Build customer data pools, track power change history, and send automated annual vision check-up reminders directly to WhatsApp.",
    },
    {
      icon: Network,
      title: "Multi-Branch Chain Sync",
      desc: "Manage multiple retail outlets, transfer frame stock between branches, and view consolidated owner profit analytics on your mobile.",
    },
  ];

  return (
    <section id="ecosystem" className="py-20 bg-white dark:bg-[#08090C] border-t border-slate-200/80 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Do a lot more with one optical billing software
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            OptiPay is the all-in-one optical POS system that handles all your operations on a single screen.
          </p>
        </div>

        {/* 6 Clean Modular Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50/70 dark:bg-[#11131B] border border-slate-200/80 dark:border-white/10 flex flex-col justify-between hover:border-blue-500/50 dark:hover:border-sky-500/50 transition-all group shadow-xs"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white mb-5 shadow-xs">
                    <Icon className="w-6 h-6 text-slate-800 dark:text-slate-200" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5">
                  <a
                    href="#demo-form"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors"
                  >
                    <span>Learn how it works</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
