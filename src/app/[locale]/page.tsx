import Navbar from "@/src/features/landing/components/Navbar";
import CustomCursor from "@/src/features/landing/components/CustomCursor";
import ScrollToTop from "@/src/features/landing/components/ScrollToTop";
import HeroSection from "@/src/features/landing/components/HeroSection";
import IndustrySpecificSection from "@/src/features/landing/components/IndustrySpecificSection";
import CalisttoEngine from "@/src/features/landing/components/CalisttoEngine";
import WhyUsSection from "@/src/features/landing/components/WhyUsSection";
import StrategicBenefitsSection from "@/src/features/landing/components/StrategicBenefitsSection";
import OurServicesSection from "@/src/features/landing/components/OurServicesSection";
import OurPortfolioSection from "@/src/features/landing/components/OurPortfolioSection";
import OurProcessSection from "@/src/features/landing/components/OurProcessSection";
import OurTechStackSection from "@/src/features/landing/components/OurTechStackSection";
import ContactSection from "@/src/features/landing/components/ContactSection";
import Footer from "@/src/features/landing/components/Footer";
import { ChatButton, ChatSheet } from "@/src/features/chatbot";

export default function HomePage() {
  return (
    <main className="min-h-screen relative bg-navy-950 text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <HeroSection />
      <IndustrySpecificSection />
      <CalisttoEngine />
      <WhyUsSection />
      {/* <StrategicBenefitsSection /> */}
      <OurServicesSection />
      <OurPortfolioSection />
      <OurProcessSection />
      <OurTechStackSection />
      <ContactSection />
      <Footer />
      
      {/* AI Chatbot */}
      <ChatButton />
      <ChatSheet />
    </main>
  );
}
