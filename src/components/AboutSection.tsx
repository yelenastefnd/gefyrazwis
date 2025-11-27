import { Heart, Users, Calendar, MapPin } from "lucide-react";
import logoImage from "@/assets/logo-gefyra.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Η Ιστορία μας</span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
              20 Χρόνια
              <span className="text-gradient-primary block">Δωρεάς Ζωής</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Η ιστορία μας ξεκίνησε το 2005, όταν τρία άτομα αντιλήφθηκαν την έλλειψη 
              οργάνωσης στο χώρο των Αιμοδοτών στην Κοζάνη. Την Πέμπτη 3 Νοεμβρίου 2005, 
              στο Δημοτικό αναψυκτήριο Κοζάνης, αποφασίστηκε η ίδρυση του Συλλόγου 
              Εθελοντών Αιμοδοτών.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Σήμερα ο σύλλογός μας έχει πάνω από <strong className="text-foreground">1.100 μέλη</strong>, 
              Αιμοδότες και Δόκιμα μέλη, καθώς και <strong className="text-foreground">45 αιμοπεταλιοδότες</strong>. 
              Στόχος μας είναι κάθε οικογένεια να έχει τον Αιμοδότη της!
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card glass-card">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">1.100+</div>
                  <div className="text-sm text-muted-foreground">Ενεργά Μέλη</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card glass-card">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">2005</div>
                  <div className="text-sm text-muted-foreground">Έτος Ίδρυσης</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-card glass-card">
              <div className="p-3 rounded-lg bg-primary/10">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Παύλου Χαρίση 23</div>
                <div className="text-sm text-muted-foreground">πρώην Κέντρο Νεότητας, Κοζάνη 50100</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 p-8 rounded-3xl glass-card">
              <img
                src={logoImage}
                alt="ΓΕΦΥΡΑ ΖΩΗΣ - Σύλλογος Εθελοντών Αιμοδοτών Κοζάνης"
                className="w-full max-w-md mx-auto"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-secondary/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
