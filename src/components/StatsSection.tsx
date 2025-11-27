import { useEffect, useState, useRef } from "react";
import { Droplets, Heart, Award, Users } from "lucide-react";
import achievementsImage from "@/assets/achievements.png";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const Counter = ({ end, duration = 2000, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="counter-animate">
      {count.toLocaleString("el-GR")}
      {suffix}
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: Droplets,
      number: 10825,
      label: "Μονάδες Αίματος",
      description: "που συλλέξαμε",
    },
    {
      icon: Heart,
      number: 380,
      label: "Αποστολές Αιμοπεταλίων",
      description: "σε ασθενείς",
    },
    {
      icon: Users,
      number: 11473,
      label: "Δείγματα Μυελού",
      description: "πιθανών Δοτών",
    },
    {
      icon: Award,
      number: 2607,
      label: "Ομφαλοπλακουντιακό Αίμα",
      description: "παραδόσεις ασκών",
    },
  ];

  return (
    <section id="stats" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground mb-6">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">20 Χρόνια Επιτεύγματα</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Μαζί Σώσαμε
            <span className="text-gradient-gold block">Αμέτρητες Ζωές</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Κάθε αριθμός κρύβει μια ιστορία ελπίδας. Με την προσφορά σας, γράφουμε νέες ιστορίες κάθε μέρα.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card glass-card hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="pt-8">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <Counter end={stat.number} />
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Image */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={achievementsImage}
              alt="20 Χρόνια Προσφοράς - ΓΕΦΥΡΑ ΖΩΗΣ"
              className="w-full h-auto"
            />
          </div>
          {/* Decorative */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-2xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
