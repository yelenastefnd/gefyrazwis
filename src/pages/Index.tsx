import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import EventsSection from "@/components/EventsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyDonateSection from "@/components/WhyDonateSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <EventsSection />
      <ServicesSection />
      <WhyDonateSection />
      <SocialMediaSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
