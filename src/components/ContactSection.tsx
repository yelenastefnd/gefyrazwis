import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Heart, Phone, Mail, MapPin, Clock, Send, Facebook } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Ευχαριστούμε για το μήνυμά σας!",
      description: "Θα επικοινωνήσουμε μαζί σας σύντομα.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Τηλέφωνα",
      details: ["24610 40575", "6977 337561"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["aimodoteskoza@yahoo.gr"],
    },
    {
      icon: MapPin,
      title: "Διεύθυνση",
      details: ["Παύλου Χαρίση 23", "πρώην Κέντρο Νεότητας", "Κοζάνη 50100"],
    },
    {
      icon: Clock,
      title: "Ώρες Λειτουργίας",
      details: ["Δευτέρα - Παρασκευή", "18:00-20:00"],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Heart className="w-4 h-4 heartbeat" />
            <span className="text-sm font-medium">Επικοινωνία</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Γίνε Μέρος της
            <span className="text-gradient-primary block">Γέφυρας Ζωής</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Έχεις ερωτήσεις; Θέλεις να γίνεις εθελοντής αιμοδότης; Επικοινώνησε μαζί μας!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-3xl bg-card glass-card">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Στείλε μας Μήνυμα
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Ονοματεπώνυμο *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="h-12"
                  placeholder="Το όνομά σας"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                    className="h-12"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Τηλέφωνο
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={20}
                    className="h-12"
                    placeholder="69xxxxxxxx"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Μήνυμα *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={1000}
                  rows={5}
                  className="resize-none"
                  placeholder="Πώς μπορούμε να σας βοηθήσουμε;"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Αποστολή..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Αποστολή Μηνύματος
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card glass-card"
              >
                <div className="p-3 rounded-xl bg-primary/10">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social & Website */}
            <div className="p-6 rounded-2xl bg-primary/5 border-2 border-primary/20">
              <h4 className="font-semibold text-foreground mb-4">Βρείτε μας Online</h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.seakozanis.gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
                >
                  <Heart className="w-4 h-4" />
                  www.seakozanis.gr
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:bg-muted transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-64 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.2!2d21.789!3d40.300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDE4JzAwLjAiTiAyMcKwNDcnMjAuNCJF!5e0!3m2!1sel!2sgr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Χάρτης - ΓΕΦΥΡΑ ΖΩΗΣ Κοζάνη"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
