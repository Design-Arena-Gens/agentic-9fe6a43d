import { AdvancedDiagnostics } from "@/components/AdvancedDiagnostics";
import { CallToAction } from "@/components/CallToAction";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { ReportPortalPreview } from "@/components/ReportPortalPreview";
import { Services } from "@/components/Services";
import { Technology } from "@/components/Technology";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AdvancedDiagnostics />
      <Technology />
      <ReportPortalPreview />
      <WhyChooseUs />
      <ContactSection />
      <CallToAction />
    </>
  );
}
