import { ComparisonSection } from "@/components/ComparisonSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadForms } from "@/components/LeadForms";
import { PricingSection } from "@/components/PricingSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TrustSection } from "@/components/TrustSection";

export default function Home() {
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
        <LeadForms />
      </main>
      <Footer />
    </>
  );
}
