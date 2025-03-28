
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto reveal-animation">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Bereit, Ihre digitale Präsenz zu transformieren?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Kontaktieren Sie uns jetzt für ein unverbindliches Beratungsgespräch und 
            erfahren Sie, wie wir Ihr Unternehmen im digitalen Raum zum Erfolg führen können.
          </p>
          <Button size="lg" className="bg-gold-500 text-primary hover:bg-gold-400">
            Jetzt Kontakt aufnehmen <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
