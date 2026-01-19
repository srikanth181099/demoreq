import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoForm from "@/components/DemoForm";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16"> {/* Offset for fixed header */}
        <HeroSection />
        <FeaturesSection />
        <DemoForm />
        <PricingSection />
        <ContactSection />
        <Footer />
      </div>
      <WhatsAppButton />
    </main>
  );
};

export default Index;
