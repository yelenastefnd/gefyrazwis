import { Calendar, MapPin, Clock } from "lucide-react";
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
    time: "15:30 – 19:30",
    location: "Γραφείο Συλλόγου",
    description: "🩸 Κάλεσμα Συνεργασίας για την Ενίσχυση της Εθελοντικής Αιμοδοσίας 🩸\n\nΟ Σύλλογος Εθελοντών Αιμοδοτών Κοζάνης «Γέφυρα Ζωής» απευθύνει ανοιχτό κάλεσμα σε όλους τους Φανούς και τους Πολιτιστικούς Συλλόγους της περιοχής να ενώσουμε τις δυνάμεις μας για έναν κοινό σκοπό:\n👉 την ενίσχυση της εθελοντικής αιμοδοσίας και την κάλυψη των αυξημένων αναγκών σε αίμα.\n\n🎭 Ενόψει της Αποκριάς, φροντίζουμε να μη λείψει το αίμα από κανέναν συνάνθρωπό μας, στηρίζοντας έμπρακτα το Τμήμα Αιμοδοσίας του Μαμάτσειου Γενικού Νοσοκομείου Κοζάνης.\n\n📍 Εθελοντική Αιμοδοσία\n📅 Τετάρτη 4 Φεβρουαρίου 2026\n⏰ 15:30 – 19:30\n📌 Γραφεία Συλλόγου, Παύλου Χαρίση 23\n\n❤️ Η συμμετοχή όλων είναι πολύτιμη.\nΗ προσφορά αίματος είναι πράξη κοινωνικής ευθύνης, αλληλεγγύης και ζωής.\n\n📞 Πληροφορίες & Ενημέρωση για δωρεά:\n• Αιμοπεταλίων\n• Μυελού των Οστών\n• Ιστών & Οργάνων\n• Ομφαλιοπλακουντικού Αίματος (Βλαστοκυττάρων)\n\n📍 Παύλου Χαρίση 23\n☎️ 24610 40575 | 📱 697 733 7561\n🌐 www.seakozanis.gr\n\n🩸 ΔΩΣΕ ΑΙΜΑ – ΧΑΡΙΣΕ ΖΩΗ\nΜε σεβασμό στους ασθενείς και εκτίμηση στους εθελοντές.\n\n#ΓέφυραΖωής #ΕθελοντικήΑιμοδοσία #ΔώσεΑίμαΧάρισεΖωή #Κοζάνη #Αλληλεγγύη Φανοί ΠολιτιστικοίΣύλλογοι"
  }, {
    id: 3,
    title: "36η Εθελοντική Αιμοδοσία – ΖΕΠ",
    date: "28 Δεκεμβρίου 2025",
    time: "09:30–13:30",
    location: "Εργαστήριο Φυσικών Επιστημών της Σχολής Κοινωνικών και Ανθρωπιστικών Επιστημών του Πανεπιστημίου Δυτικής Μακεδονίας στη Φλώρινα",
    description: "Με τη συνεργασία της Αιμοδοσίας «Μαμάτσειο», του Μποδοσάκειου Νοσοκομείου Πτολεμαΐδας, της Ολιστικής Μέριμνας και του Πανεπιστημίου Δυτικής Μακεδονίας.\n\nΠαράλληλα, ο Σ.Ε.Α. Κοζάνης Γέφυρα Ζωής θα πραγματοποιεί λήψη δείγματος σάλιου για εγγραφή νέων δοτών μυελού των οστών.\n\nΤο αίμα αναπληρώνεται – η ζωή, όχι.\nΈνας δεν φτάνει… χρειάζονται πολλοί!\nΠροϋποθέσεις αιμοδότη\n\n• Όχι νηστικό – τρώμε πρωινό\n• Όχι αλκοόλ την προηγούμενη μέρα\n• Ύπνος 6–7 ώρες\n• Όχι κρυολόγημα ή ενεργή αλλεργία\n• 5 ημέρες χωρίς παυσίπονα/αντιπυρετικά\n• Όχι οδοντιατρική θεραπεία την τελευταία εβδομάδα\n• Piercing/τατουάζ → μετά από 4 μήνες\n• Υλικά μιας χρήσης – απόλυτα ασφαλή\n• Ηλικία 18–65, βάρος ≥ 50 κιλά\n• Ο έρπης πρέπει να έχει πλήρως ιαθεί πριν την αιμοδοσία\n\nΈλα κι εσύ στην προσφορά ζωής."
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
                
                <p className="text-muted-foreground mb-4 leading-relaxed whitespace-pre-line text-xs">
                  {event.description}
                </p>

                <div className="space-y-2 mt-auto">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="text-primary w-[16px] h-[16px]" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="mt-4 pt-4 border-t border-border">
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  ​ΣΑΣ ΠΕΡΙΜΕΝΟΥΜΕ! 
                  
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