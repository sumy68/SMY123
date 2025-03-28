
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const About = () => {
  const highlights = [
    "Über 50 erfolgreiche Projekte",
    "Erfahrenes Team von Experten",
    "Individuelle Strategien",
    "Transparente Kommunikation",
    "Messbarer Erfolg",
    "Langfristige Partnerschaften",
  ];

  return (
    <section className="py-24" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 reveal-animation">
            <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Über SMY Agency
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-6">
              Ihre Vision, unsere <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Die SMY Agency ist Ihre Full-Service-Digitalagentur mit Sitz in Deutschland. 
              Wir kombinieren kreatives Design mit strategischem Know-how, um 
              maßgeschneiderte Lösungen zu entwickeln, die Ihr Unternehmen voranbringen.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-3 p-1 rounded-full bg-accent/10 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm">{highlight}</p>
                </div>
              ))}
            </div>
            
            <Button className="bg-accent hover:bg-accent/90">
              Mehr über uns
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg glass-card animate-scale-in">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-6 glass-card rounded-xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <p className="text-base font-medium">
                  "Wir schaffen nicht nur digitale Lösungen, sondern echte Erlebnisse, die Ihre Zielgruppe begeistern."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[url('https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop')] bg-cover bg-center"></div>
                  <div className="ml-3">
                    <h4 className="text-sm font-semibold">Sarah Müller</h4>
                    <p className="text-xs text-muted-foreground">Gründerin & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
