import { useState } from "react";
import { Droplets, Heart, Baby, Bone, ChevronDown, ChevronUp, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceTab {
  id: string;
  icon: typeof Droplets;
  title: string;
  subtitle: string;
  content: {
    intro: string;
    sections: {
      question: string;
      answer: string[];
    }[];
  };
}

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("blood-donation");
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const services: ServiceTab[] = [
    {
      id: "blood-donation",
      icon: Droplets,
      title: "Αιμοδοσία",
      subtitle: "Η δωρεά ζωής",
      content: {
        intro: "Το αίμα δίνεται στον άνθρωπο μόνον από τον άνθρωπο. Δεν παρασκευάζεται. Το παίρνουμε από υγιείς δότες. Η εθελοντική αιμοδοσία κρίνεται ως μια πράξη ανθρωπιάς και καλής θελήσεως.",
        sections: [
          {
            question: "Γιατί είναι τόσο σημαντικό να δίνει κάποιος αίμα;",
            answer: [
              "Φυσιολογικά το σώμα μας φτιάχνει εύκολα όλο το αίμα που χρειαζόμαστε. Όμως ατυχήματα ή νοσήματα μπορούν να μας κάνουν να χρειαστούμε περισσότερο αίμα από όσο το σώμα μας μπορεί να παράγει.",
              "Τα χαμηλά επίπεδα αίματος μπορεί να είναι επικίνδυνα και να προκαλέσουν σοβαρή ζημιά, ακόμη και θάνατο εάν το χαμένο αίμα δεν αντικατασταθεί γρήγορα.",
              "Στη χώρα μας η χρήση αίματος ξεπερνάει τις 650.000 μονάδες ετησίως. Από αυτές, πάνω από 120.000 μονάδες αφορούν πάσχοντες από Μεσογειακή Αναιμία."
            ]
          },
          {
            question: "Πόσο αίμα δίνει ο εθελοντής αιμοδότης;",
            answer: [
              "Το αίμα που προσφέρει ο αιμοδότης είναι 450 ml, μόλις το 1/12 του ολικού όγκου αίματος του οργανισμού του.",
              "Ο όγκος αίματος που προσφέρει ο αιμοδότης αναπληρώνεται σε 24 ώρες με λήψη υγρών.",
              "Από μία μονάδα αίματος παρασκευάζονται προϊόντα που μεταγγίζονται σε ασθενείς: Ερυθρά αιμοσφαίρια, Αιμοπετάλια, Λευκά αιμοσφαίρια, Πλάσμα."
            ]
          },
          {
            question: "Κάθε πότε μπορεί κάποιος να δίνει αίμα;",
            answer: [
              "Η συχνότητα έχει κανονιστεί από την Ευρωπαϊκή Ένωση: 3-4 φορές το χρόνο για τους άνδρες και 2-3 φορές για τις γυναίκες.",
              "Το διάστημα μεταξύ δυο αιμοληψιών πρέπει να είναι τουλάχιστον 60 ημέρες."
            ]
          },
          {
            question: "Τι είναι η Αυτόλογη προκατάθεση αίματος;",
            answer: [
              "Υπάρχει δυνατότητα κάποιος που πρόκειται να χειρουργηθεί να προκαταθέσει το δικό του αίμα (μέχρι και 4 φιάλες), εφόσον η κατάσταση της υγείας του το επιτρέπει.",
              "Με την αυτόλογη μετάγγιση προλαμβάνονται οι επιπλοκές της ασύμβατης μετάγγισης και μειώνεται ο κίνδυνος λοιμωδών επιπλοκών."
            ]
          }
        ]
      }
    },
    {
      id: "blood",
      icon: Heart,
      title: "Το Αίμα",
      subtitle: "Ζωντανός ιστός",
      content: {
        intro: "Το αίμα είναι ζωντανός ιστός και δεν μπορεί να υποκατασταθεί από κάποιο φάρμακο. Διασχίζει το ανθρώπινο σώμα με μέση ταχύτητα 2 χλμ/ώρα. Ένας ενήλικας έχει περίπου 5 λίτρα αίμα.",
        sections: [
          {
            question: "Ποιοι είναι οι τύποι αίματος;",
            answer: [
              "Το αίμα διακρίνεται σε τέσσερις τύπους: A, B, AB και O.",
              "Κάθε τύπος προσδιορίζεται ως Rh-θετικός ή Rh-αρνητικός.",
              "Το Rh-θετικό αίμα είναι το πλέον κοινό (85% του πληθυσμού)."
            ]
          },
          {
            question: "Ερυθρά Αιμοσφαίρια",
            answer: [
              "Αποτελούν το 38-48% του αίματος και δίνουν το κόκκινο χρώμα μέσω της αιμοσφαιρίνης.",
              "Μεταφέρουν οξυγόνο από τους πνεύμονες στους ιστούς και απομακρύνουν το διοξείδιο του άνθρακα.",
              "Παράγονται από τον μυελό των οστών και ζουν περίπου 120 ημέρες."
            ]
          },
          {
            question: "Αιμοπετάλια",
            answer: [
              "Έχουν το 1/4 του μεγέθους των ερυθρών και ζουν μόνο 5 ημέρες.",
              "Είναι υπεύθυνα για την πήξη του αίματος, το σταμάτημα της αιμορραγίας και την επούλωση πληγών."
            ]
          },
          {
            question: "Λευκά Αιμοσφαίρια",
            answer: [
              "Σχηματίζονται στον μυελό των οστών, τον σπλήνα και τους λεμφαδένες.",
              "Η πρωταρχική λειτουργία τους είναι η άμυνα και η καταπολέμηση των λοιμώξεων."
            ]
          },
          {
            question: "Πλάσμα",
            answer: [
              "Αποτελεί το 55% του όγκου του αίματος - είναι το μεγαλύτερο κύριο συστατικό.",
              "Είναι υποκίτρινο υγρό που αποτελείται κατά 91,5% από νερό και 7% από πρωτεΐνες.",
              "Χορηγείται σε απώλεια όγκου αίματος, εγκαύματα και αιμορραγική διάθεση."
            ]
          }
        ]
      }
    },
    {
      id: "cord-blood",
      icon: Baby,
      title: "Ομφάλιο Αίμα",
      subtitle: "Αρχέγονα κύτταρα",
      content: {
        intro: "Το ομφαλοπλακουντιακό αίμα (ΟΠΑ) είναι το αίμα που παραμένει στον ομφάλιο λώρο και τον πλακούντα μετά τη γέννηση. Είναι πλούσιο σε αρχέγονα αιμοποιητικά κύτταρα που έχουν την ικανότητα να πολλαπλασιάζονται και να ωριμάζουν.",
        sections: [
          {
            question: "Πού χρησιμοποιείται το ΟΠΑ;",
            answer: [
              "Η μεταμόσχευση ΟΠΑ σε ασθενείς με λευχαιμία και άλλες αιματολογικές παθήσεις πραγματοποιήθηκε για πρώτη φορά το 1988.",
              "Η λευχαιμία μπορεί να θεραπευθεί - η μεταμόσχευση μυελού είναι η καλύτερη μέθοδος θεραπείας."
            ]
          },
          {
            question: "Γιατί χρησιμοποιούμε ΟΠΑ στις μεταμοσχεύσεις;",
            answer: [
              "Πλεονεκτεί ως προς την εύρεση συμβατότητας σε σχέση με τη μεταμόσχευση μυελού.",
              "Η συμβατότητα μεταξύ μελών οικογένειας είναι 25%, ενώ με ΟΠΑ μπορεί να φτάσει 50%.",
              "Η λήψη είναι εύκολη και ακίνδυνη για το νεογνό και τη μητέρα (διαρκεί 5 λεπτά).",
              "Το ΟΠΑ μετά τον τοκετό είναι άχρηστο αν δεν δωριστεί."
            ]
          },
          {
            question: "Πώς γίνεται η συλλογή και φύλαξη;",
            answer: [
              "Το αίμα πρέπει να οδηγηθεί στις τράπεζες εντός 24 ωρών, αλλιώς απορρίπτεται.",
              "Ελέγχεται για ποσότητα και αριθμό λευκοκυττάρων, επεξεργάζεται σε 20ml και καταψύχεται.",
              "Η ποσότητα επαρκεί για παιδιά ηλικίας μέχρι 7-8 ετών.",
              "Στην Εθνική Τράπεζα δίνεται ΔΩΡΕΑΝ για όποιον το χρειάζεται."
            ]
          }
        ]
      }
    },
    {
      id: "bone-marrow",
      icon: Bone,
      title: "Μυελός των Οστών",
      subtitle: "Δώρο ζωής",
      content: {
        intro: "Ο Μυελός είναι ρευστός ιστός στα οστά (λεκάνη, στέρνο) που περιέχει αρχέγονα κύτταρα. Αυτά ωριμάζοντας γίνονται λευκά, ερυθρά αιμοσφαίρια και αιμοπετάλια. ΠΡΟΣΟΧΗ: Δεν έχει σχέση με τον νωτιαίο μυελό!",
        sections: [
          {
            question: "Τι είναι μεταμόσχευση Μυελού;",
            answer: [
              "Είναι η αντικατάσταση του πάσχοντος Μυελού με κύτταρα από υγιή δότη.",
              "Τα κύτταρα μεταγγίζονται ενδοφλέβια, εγκαθίστανται στα οστά και αρχίζουν να παράγουν υγιή κύτταρα."
            ]
          },
          {
            question: "Ποιοι χρειάζονται μεταμόσχευση;",
            answer: [
              "Ασθενείς με μυελική απλασία, λευχαιμία, κληρονομικά αιματολογικά νοσήματα ή μυελική καταστροφή.",
              "Παλαιότερα ήταν καταδικασμένοι - σήμερα μπορούν να σωθούν με μυελικό μόσχευμα."
            ]
          },
          {
            question: "Ποιος μπορεί να γίνει δότης;",
            answer: [
              "Ηλικία 18-40 ετών, χωρίς ιστορικό μεταδοτικών νοσημάτων, νεοπλασιών ή καρδιοπαθειών.",
              "Εγγραφή με δείγμα σάλιου (μπατονέτα) ή μικρή ποσότητα αίματος (15 ml).",
              "Ο εθελοντής παραμένει στο αρχείο ως τα 60 του χρόνια.",
              "1 στους 15.000 εθελοντές θα κληθεί τελικά να δώσει μυελό."
            ]
          },
          {
            question: "Πώς γίνεται η λήψη μοσχεύματος;",
            answer: [
              "Μέθοδος 1: Λευκαφαίρεση - συλλογή από φλέβα με μηχάνημα διαχωρισμού (3-4 ώρες), χωρίς νοσηλεία.",
              "Μέθοδος 2: Χειρουργική λήψη από λεκάνη υπό αναισθησία - επιστροφή σπίτι την επόμενη.",
              "Το 70-80% των συλλογών γίνεται με λευκαφαίρεση.",
              "Ο μυελός που συλλέγεται είναι μόλις 5% και αναγεννάται γρήγορα."
            ]
          }
        ]
      }
    }
  ];

  const activeService = services.find(s => s.id === activeTab)!;

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Info className="w-4 h-4" />
            <span className="text-sm font-medium">Τομείς Δράσης</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Μάθε για τη
            <span className="text-gradient-primary block">Δωρεά Ζωής</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ενημερώσου για τους τομείς που δραστηριοποιείται ο Σύλλογός μας και πώς μπορείς να βοηθήσεις.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => {
                setActiveTab(service.id);
                setExpandedSections([]);
              }}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300",
                activeTab === service.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card glass-card hover:bg-muted text-foreground"
              )}
            >
              <service.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto">
          {/* Service Header */}
          <div className="text-center mb-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary/10 mb-4">
              <activeService.icon className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
              {activeService.title}
            </h3>
            <p className="text-lg text-primary font-medium">{activeService.subtitle}</p>
          </div>

          {/* Intro */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 mb-6">
            <p className="text-foreground leading-relaxed text-center">
              {activeService.content.intro}
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-4">
            {activeService.content.sections.map((section, index) => {
              const sectionId = `${activeTab}-${index}`;
              const isExpanded = expandedSections.includes(sectionId);

              return (
                <div
                  key={index}
                  className="rounded-2xl bg-card glass-card overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleSection(sectionId)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold text-foreground pr-4">
                      {section.question}
                    </span>
                    <div className={cn(
                      "p-2 rounded-lg bg-primary/10 transition-transform duration-300",
                      isExpanded && "rotate-180"
                    )}>
                      <ChevronDown className="w-5 h-5 text-primary" />
                    </div>
                  </button>

                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="px-5 pb-5 space-y-3">
                      {section.answer.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{paragraph}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Έχεις περισσότερες ερωτήσεις; Επικοινώνησε μαζί μας!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              <Heart className="w-5 h-5" />
              Επικοινωνία
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
