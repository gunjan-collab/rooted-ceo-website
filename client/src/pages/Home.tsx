/*
 * Home Page — Rooted by Gunjan Vermani
 * Coastal Organic design: Flowing vertical narrative.
 * Testimonials removed — program is just launching.
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import WhoSection from "@/components/sections/WhoSection";
import PillarsSection from "@/components/sections/PillarsSection";
import WhatYouGetSection from "@/components/sections/WhatYouGetSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import AboutSection from "@/components/sections/AboutSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import ApplySection from "@/components/sections/ApplySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Who This Is For */}
      <WhoSection />

      {/* 3. Four Pillars */}
      <PillarsSection />

      {/* 4. What You Get */}
      <WhatYouGetSection />

      {/* 5. Outcomes */}
      <OutcomesSection />

      {/* 6. About Gunjan */}
      <AboutSection />

      {/* 7. Pricing */}
      <PricingSection />

      {/* 8. FAQ */}
      <FAQSection />

      {/* 9. Apply / Contact CTA */}
      <ApplySection />

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
