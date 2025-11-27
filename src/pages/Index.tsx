import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import EventsSection from "@/components/EventsSection";
import WhyDonateSection from "@/components/WhyDonateSection";
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
      <WhyDonateSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
