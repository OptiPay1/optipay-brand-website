import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductTourPlayer } from "@/components/ProductTourPlayer";
import { AllRounderFeatures } from "@/components/AllRounderFeatures";
import { InventoryFeatureShowcase } from "@/components/InventoryFeatureShowcase";
import { QuickAndSimple } from "@/components/QuickAndSimple";
import { DoMoreEcosystem } from "@/components/DoMoreEcosystem";
import { WhyOptiPay } from "@/components/WhyOptiPay";
import { BookFreeDemoSection } from "@/components/BookFreeDemoSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] dark:bg-[#08090C] text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />
      <main className="flex-1">
        {/* Section 1: Hero with Relief Scene */}
        <Hero />

        {/* Section 2: Interactive Remotion Product Tour Theater */}
        <ProductTourPlayer />

        {/* Section 3: An All-Rounder Optical Billing Software */}
        <AllRounderFeatures />

        {/* Section 4: POS Feature For Easy Inventory Management (Petpooja 2x2 Showcase) */}
        <InventoryFeatureShowcase />

        {/* Section 5: Quick & Simple Hardware Compatibility */}
        <QuickAndSimple />

        {/* Section 5: Do a Lot More With One Optical Billing Software */}
        <DoMoreEcosystem />

        {/* Section 6: Why OptiPay Comparison Table */}
        <WhyOptiPay />

        {/* Section 7: Book a Free Demo Form */}
        <BookFreeDemoSection />

        {/* Section 8: Frequently Asked Questions */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
