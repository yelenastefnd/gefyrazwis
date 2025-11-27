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
  const upcomingEvents: Event[] = [{
    id: 1,
    title: "35η ΕΘΕΛΟΝΤΙΚΗ ΑΙΜΟΔΟΣΙΑ ΑΝΩ ΚΩΜΗ",
    date: "28 Νοεμβρίου 2025",
    time: "09:00 - 14:00",
    location: "Δημοτικό Κατάστημα Κοζάνης",
    description: "Κάντε τον κόσμο ομορφότερο – Χαρίστε Αίμα!\n\nΔιοργανώνεται αιμοδοσία στην Άνω Κώμη, την Παρασκευή 28 Νοεμβρίου 2025 από τις 15:30 – 19:30 στο Πνευματικό Κέντρο, σε συνεργασία με την Κοινότητα Άνω Κώμης, τον Πολιτιστικό Μορφωτικό σύλλογο και την Αιμοδοσία του «Μαμάτσειου» Γ.Ν. Κοζάνης\n\nΚατά την διάρκεια της Αιμοδοσίας θα παίρνουμε και δείγμα σάλιου για Δωρητές Μυελού των Οστών, όχι μόνο από αυτούς που θα Αιμοδοτήσουν, αλλά και από όποιον άλλο ενδιαφέρεται.\n\nΔεν πρέπει να ξεχνάμε ότι η Αιμοδοσία αποτελεί ένα δώρο Ζωής για κάποιον ο οποίος έχει απόλυτη ανάγκη από μετάγγιση Αίματος.\n\nΚΑΘΕ ΜΟΝΑΔΑ ΑΙΜΑΤΟΣ ΕΙΝΑΙ ΑΝΕΚΤΙΜΗΤΟΣ ΘΗΣΑΥΡΟΣ!\n\nΚαλούμε, όλους τους πολίτες του Δ.Δ. ΑΝΩ ΚΩΜΗΣ και της ευρύτερης περιοχής να έρθουν στην εθελοντική ΑΙΜΟΔΟΣΙΑ, να δώσουν Ζωή με το Αίμα τους την Παρασκευή 28 Νοεμβρίου 2025 από τις 15:30 το απόγευμα\n\nΑπαραίτητες προϋποθέσεις κατά την προσέλευση στην αιμοδοσία του υποψήφιου Εθελοντή αιμοδότη για προσφορά αίματος είναι:\n\n1. Να αισθάνεστε καλά\n2. Να είστε ξεκούραστοι\n3. Να έχετε κοιμηθεί καλά την προηγούμενη.\n\nΝα υπενθυμίσουμε ότι:\n• Τρώμε ένα ελαφρύ γεύμα 3 ώρες πριν.\n• Δεν πίνουμε αλκοόλ την προηγούμενη ημέρα\n• Δεν έχουμε πάρει ασπιρίνες-αντιισταμινικά τις προηγούμενες ημέρες\n• ΕΧΟΥΜΕ ΜΑΖΙ μας ΑΜΚΑ ή Ταυτότητα ή θυμόμαστε τον Αριθμό Ταυτότητας."
  }, {
    id: 3,
    title: "Χριστουγεννιάτικη Αιμοδοσία",
    date: "28 Δεκεμβρίου 2025",
    time: "09:00 - 15:00",
    location: "Κεντρική Πλατεία Κοζάνης",
    description: "Γιορτινή αιμοδοσία με δώρα για τους αιμοδότες. Προσφέρουμε ζωή τα Χριστούγεννα!"
  }];
  return <section id="events" className="py-24 bg-muted/30">
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
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {upcomingEvents.map((event, index) => <div key={event.id} style={{
          animationDelay: `${index * 0.1}s`
        }} className="group relative p-6 rounded-2xl bg-card glass-card hover:shadow-xl transition-all duration-300 flex-col flex items-start justify-start">
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
                
                <p className="text-muted-foreground mb-4 leading-relaxed whitespace-pre-line">
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
            </div>)}
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
    </section>;
};
export default EventsSection;