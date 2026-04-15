import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import eventAlterlife from "@/assets/event-alterlife.png";
import eventGrafeio from "@/assets/event-grafeio.png";
import eventProgramma from "@/assets/event-programma-apr.png";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const EventsSection = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "ΕΘΕΛΟΝΤΙΚΗ ΑΙΜΟΔΟΣΙΑ – ΓΡΑΦΕΙΟ ΣΥΛΛΟΓΟΥ",
      date: "22 Απριλίου 2026",
      time: "15:30 – 19:30",
      location: "Παύλου Χαρίση 23, Κοζάνη",
      description: "13η Εθελοντική Αιμοδοσία στο γραφείο του Συλλόγου. Κάθε μονάδα αίματος είναι ανεκτίμητος θησαυρός!",
      image: eventGrafeio,
    },
    {
      id: 2,
      title: "ΕΘΕΛΟΝΤΙΚΗ ΑΙΜΟΔΟΣΙΑ – ALTERLIFE",
      date: "25 Απριλίου 2026",
      time: "09:30 – 13:30",
      location: "Καστοριάς & Φλέμινγκ 0, Κοζάνη",
      description: "Εθελοντική Αιμοδοσία σε συνεργασία με το ALTERLIFE Fitness Excellence. Ελάτε να προσφέρουμε ζωή μαζί!",
      image: eventAlterlife,
    },
    {
      id: 3,
      title: "ΠΡΟΓΡΑΜΜΑ ΑΙΜΟΔΟΣΙΩΝ ΑΠΡΙΛΙΟΥ",
      date: "Απρίλιος 2026",
      time: "Διάφορες ώρες",
      location: "Διάφορες τοποθεσίες",
      description: "Πρόγραμμα Αιμοδοσιών Απριλίου:\n\n01 ΔΡΕΠΑΝΟ 15:30 - 19:30\n22 ΓΡΑΦΕΙΟ 15:30 - 19:30\n25 ALTERLIFE 09:30 - 13:30",
      image: eventProgramma,
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState<Event>(events[0]);

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

        {/* Selected Event Detail */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {/* Image Box */}
          <div className="relative rounded-2xl overflow-hidden bg-card glass-card min-h-[400px]">
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>

          {/* Event Card */}
          <div className="group relative p-6 rounded-2xl bg-card glass-card flex-col flex items-start justify-start">
            <div className="absolute -top-3 left-6">
              <div className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg">
                {selectedEvent.date}
              </div>
            </div>

            <div className="pt-6 flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {selectedEvent.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {selectedEvent.description}
              </p>

              <div className="space-y-2 mt-auto">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{selectedEvent.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                ΣΑΣ ΠΕΡΙΜΕΝΟΥΜΕ!
              </span>
            </div>
          </div>
        </div>

        {/* Event Thumbnail Buttons */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {events.map((event) => (
            <button
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className={`relative rounded-xl overflow-hidden aspect-[3/4] transition-all duration-300 border-2 ${
                selectedEvent.id === event.id
                  ? "border-primary shadow-lg scale-[1.02]"
                  : "border-transparent opacity-70 hover:opacity-100 hover:border-primary/50"
              }`}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-xs font-semibold leading-tight">{event.date}</p>
              </div>
            </button>
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
