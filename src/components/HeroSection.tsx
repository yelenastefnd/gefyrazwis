import { Button } from "@/components/ui/button";
import { Heart, ChevronDown, Droplets } from "lucide-react";
import logoImage from "@/assets/logo-gefyra.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary-foreground/5 float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-primary-foreground/5 float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full bg-primary-foreground/5 float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-primary-foreground/5 float" style={{ animationDelay: "1.5s" }} />
        
        {/* Blood drops */}
        <Droplets className="absolute top-32 right-32 w-8 h-8 text-primary-foreground/20 blood-drop" />
        <Droplets className="absolute bottom-48 left-32 w-6 h-6 text-primary-foreground/15 blood-drop" style={{ animationDelay: "0.7s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center stagger-children">
          {/* Logo */}
          <div className="mb-8">
            <img
              src={logoImage}
              alt="ΓΕΦΥΡΑ ΖΩΗΣ Logo"
              className="h-32 md:h-40 lg:h-48 w-auto mx-auto drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.3))" }}
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground mb-6">
            <Heart className="w-4 h-4 heartbeat" />
            <span className="text-sm font-medium">20 Χρόνια Προσφοράς • 2005-2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Γέφυρα Ζωής
            <span className="block text-2xl md:text-3xl lg:text-4xl font-sans font-normal mt-4 text-primary-foreground/90">
              Σύλλογος Εθελοντών Αιμοδοτών Κοζάνης
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-2xl mx-auto leading-relaxed">
            Μόνο ο άνθρωπος μπορεί να προσφέρει αίμα σε άλλο άνθρωπο. 
            <span className="block mt-2 font-semibold">Μαζί σώσαμε αμέτρητες ζωές.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="gold" size="xl" asChild>
              <a href="#contact">
                <Heart className="w-5 h-5" />
                Γίνε Εθελοντής Αιμοδότης
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#about">
                Μάθε Περισσότερα
              </a>
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { number: "10.825+", label: "Μονάδες Αίματος" },
              { number: "1.100+", label: "Μέλη" },
              { number: "20", label: "Χρόνια Δράσης" },
              { number: "380+", label: "Αιμοπετάλια" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
