import { Heart, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logoImage from "@/assets/logo-gefyra.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <img
              src={logoImage}
              alt="ΓΕΦΥΡΑ ΖΩΗΣ Logo"
              className="h-20 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/70 mb-4 max-w-md">
              Σύλλογος Εθελοντών Αιμοδοτών, Δοτών Αιμοπεταλίων, Δωρητών Οργάνων Σώματος, 
              Μυελού των Οστών και Φίλων Εθελοντών Κοζάνης.
            </p>
            <p className="text-background/50 text-sm mb-6">
              Ιδρύθηκε: 3 Νοεμβρίου 2005
            </p>
            
            {/* Social Media Buttons */}
            <div className="flex gap-3">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 border-0 text-white hover:opacity-90 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <a
                  href="https://www.instagram.com/gefyrazwis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ακολουθήστε μας στο Instagram"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-[#1877F2] border-0 text-white hover:bg-[#166FE5] hover:text-white transition-all duration-300 hover:scale-105"
              >
                <a
                  href="https://www.facebook.com/gefyrazwis?locale=el_GR"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ακολουθήστε μας στο Facebook"
                >
                  <Facebook className="w-5 h-5 mr-2" />
                  Facebook
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Σύνδεσμοι</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors">
                  Ποιοι Είμαστε
                </a>
              </li>
              <li>
                <a href="#stats" className="text-background/70 hover:text-background transition-colors">
                  Επιτεύγματα
                </a>
              </li>
              <li>
                <a href="#why-donate" className="text-background/70 hover:text-background transition-colors">
                  Γιατί να Δώσω Αίμα
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-background transition-colors">
                  Επικοινωνία
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Επικοινωνία</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="w-4 h-4" />
                24610 40575
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="w-4 h-4" />
                6977 337561
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="w-4 h-4" />
                aimodoteskoza@yahoo.gr
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Παύλου Χαρίση 23, Κοζάνη 50100</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm text-center md:text-left">
            © 2005-2025 ΓΕΦΥΡΑ ΖΩΗΣ - Σύλλογος Εθελοντών Αιμοδοτών Κοζάνης. Με επιφύλαξη παντός δικαιώματος.
          </p>
          <div className="flex items-center gap-2 text-background/70 text-sm">
            <Heart className="w-4 h-4 text-primary heartbeat" />
            <span>Δωρεά Ζωής</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
