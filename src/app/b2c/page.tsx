import { ComparisonSection } from "@/components/b2c/ComparisonSection";
import { FAQSection } from "@/components/b2c/FAQSection";
import { FinalCTA } from "@/components/b2c/FinalCTA";
import { Footer } from "@/components/b2c/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/b2c/Hero";
import { PricingSection } from "@/components/b2c/PricingSection";
import { ProblemSection } from "@/components/b2c/ProblemSection";
import { ProcessSection } from "@/components/b2c/ProcessSection";
import { TrustSection } from "@/components/TrustSection";

export default function B2CPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <PricingSection />
        <TrustSection />
        <ProcessSection />
        <ComparisonSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
