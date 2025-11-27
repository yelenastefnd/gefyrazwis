import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const EventsSection = () => {
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "35η ΕΘΕΛΟΝΤΙΚΗ ΑΙΜΟΔΟΣΙΑ ΑΝΩ ΚΩΜΗ",
      date: "15 Δεκεμβρίου 2025",
      time: "09:00 - 14:00",
      location: "Δημοτικό Κατάστημα Κοζάνης",
      description: "Τακτική εθελοντική αιμοδοσία σε συνεργασία με το Νοσοκομείο Κοζάνης.",
    },
    {
      id: 2,
      title: "Εκστρατεία Ενημέρωσης - Σχολεία",
      date: "20 Δεκεμβρίου 2025",
      time: "10:00 - 13:00",
      location: "Λύκεια Κοζάνης",
      description: "Ενημέρωση μαθητών για τη σημασία της εθελοντικής αιμοδοσίας.",
    },
    {
      id: 3,
      title: "Χριστουγεννιάτικη Αιμοδοσία",
      date: "28 Δεκεμβρίου 2025",
      time: "09:00 - 15:00",
      location: "Κεντρική Πλατεία Κοζάνης",
      description: "Γιορτινή αιμοδοσία με δώρα για τους αιμοδότες. Προσφέρουμε ζωή τα Χριστούγεννα!",
    },
  ];

  return (
    <section id="events" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Επόμενες Εκδηλώσεις</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Προγραμματισμένες
            <span className="text-gradient-primary block">Αιμοδοσίες</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Δείτε τις επερχόμενες αιμοδοσίες και εκδηλώσεις μας. Ελάτε να προσφέρουμε ζωή μαζί!
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.id}
              className="group relative p-6 rounded-2xl bg-card glass-card hover:shadow-xl transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Date Badge */}
              <div className="absolute -top-3 left-6">
                <div className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg">
                  {event.date}
                </div>
              </div>

              <div className="pt-6 flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2 mt-auto">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="mt-4 pt-4 border-t border-border">
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Περισσότερα
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              <Calendar className="w-5 h-5" />
              Επικοινωνήστε για Συμμετοχή
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
