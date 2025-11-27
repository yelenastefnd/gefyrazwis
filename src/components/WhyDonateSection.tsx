import { Heart, Users, Activity, Baby, Ambulance, Syringe } from "lucide-react";

const WhyDonateSection = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Μεσογειακή Αναιμία",
      description: "120.000 μονάδες αίματος ετησίως χρειάζονται οι πάσχοντες από θαλασσαιμία. Κάθε μήνα χρειάζονται 3-4 μεταγγίσεις.",
    },
    {
      icon: Ambulance,
      title: "Τροχαία Ατυχήματα",
      description: "Χιλιάδες μονάδες αίματος χρειάζονται κάθε χρόνο για θύματα τροχαίων. Η άμεση διαθεσιμότητα σώζει ζωές.",
    },
    {
      icon: Activity,
      title: "Εγχειρήσεις Καρδιάς",
      description: "Σύνθετες καρδιοχειρουργικές επεμβάσεις απαιτούν πολλές μονάδες αίματος. Η προσφορά σου είναι κρίσιμη.",
    },
    {
      icon: Baby,
      title: "Γέννες με Καισαρική",
      description: "Κάθε νέα ζωή που έρχεται στον κόσμο μπορεί να χρειαστεί αίμα. Βοήθησε τις μητέρες και τα μωρά.",
    },
    {
      icon: Syringe,
      title: "Νεφροπαθείς",
      description: "Ασθενείς σε αιμοκάθαρση χρειάζονται τακτικές μεταγγίσεις αίματος για να συνεχίσουν τη ζωή τους.",
    },
    {
      icon: Users,
      title: "Η Οικογένειά σου",
      description: "Αύριο μπορεί να χρειαστεί κάποιος δικός σου. Με την προσφορά σου σήμερα, εξασφαλίζεις το αύριο.",
    },
  ];

  return (
    <section id="why-donate" className="py-24 hero-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground mb-6">
            <Heart className="w-4 h-4 heartbeat" />
            <span className="text-sm font-medium">Γιατί να Δώσω Αίμα</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Η Ελλάδα Χρειάζεται
            <span className="block mt-2">650.000+ Μονάδες Αίματος</span>
            <span className="block text-xl md:text-2xl font-normal mt-4 text-primary-foreground/80">
              κάθε χρόνο
            </span>
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Η χώρα μας λόγω της μεσογειακής αναιμίας και των τροχαίων ατυχημάτων, 
            έχει τεράστιες ανάγκες σε μονάδες αίματος. Η προσφορά σου σώζει ζωές.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-primary-foreground/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                <reason.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-3xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
            <p className="font-serif text-2xl md:text-3xl text-primary-foreground font-semibold mb-4">
              "Μόνο ο άνθρωπος μπορεί να προσφέρει
              <br />
              αίμα σε άλλο άνθρωπο"
            </p>
            <p className="text-primary-foreground/70">
              Στόχος μας: Κάθε οικογένεια να έχει τον Αιμοδότη της
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDonateSection;
