import { Instagram, Facebook, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialMediaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Κοινότητα</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ακολούθησε μας στα
            <span className="text-gradient-primary block">Social Media</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Μείνε ενημερωμένος για τις δράσεις μας, τις αιμοδοσίες και τα νέα του συλλόγου!
          </p>
        </div>

        {/* Social Media Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/gefyrazwis/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/25"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <Instagram className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-right">
                  <p className="text-white/80 text-sm">@gefyrazwis</p>
                </div>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                Instagram
              </h3>
              <p className="text-white/90 mb-6">
                Δες φωτογραφίες και stories από τις δράσεις μας, τις αιμοδοσίες και τις εκδηλώσεις του συλλόγου.
              </p>
              
              <div className="flex items-center gap-2 text-white font-semibold">
                <span>Ακολούθησέ μας</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          </a>

          {/* Facebook Card */}
          <a
            href="https://www.facebook.com/gefyrazwis?locale=el_GR"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-3xl bg-[#1877F2] text-white overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <Facebook className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-right">
                  <p className="text-white/80 text-sm">ΓΕΦΥΡΑ ΖΩΗΣ</p>
                </div>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                Facebook
              </h3>
              <p className="text-white/90 mb-6">
                Ενημερώσου για τις επερχόμενες αιμοδοσίες, τα νέα μας και κάνε share για να βοηθήσεις κι εσύ!
              </p>
              
              <div className="flex items-center gap-2 text-white font-semibold">
                <span>Κάνε Like</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          </a>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-primary heartbeat" />
            <span>Κάθε follow και share βοηθάει να σωθούν ζωές!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
