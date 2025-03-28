
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold-50 to-transparent pointer-events-none" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-200/10 rounded-full animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 -left-20 w-80 h-80 bg-primary/5 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 right-40 w-64 h-64 bg-gold-300/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 relative z-10 py-20">
        <div className="flex flex-col justify-center reveal-animation">
          <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-gold-200/20 text-gold-700 text-sm font-medium">
            SMY Agency
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6">
            Kreative <span className="text-gradient">Digitalkonzepte</span> für Ihren Erfolg
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            Wir gestalten digitale Erlebnisse, die begeistern, überzeugen und 
            nachhaltig in Erinnerung bleiben. Social Media & Webdesign auf höchstem Niveau.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-primary">
              Projekt anfragen <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-gold-300 hover:bg-gold-100">
              Mehr erfahren
            </Button>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center justify-center relative">
          <div className="relative w-full max-w-lg aspect-square">
            <div className="absolute inset-0 rounded-2xl overflow-hidden glass-card animate-scale-in">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden shadow-lg glass-card animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="absolute -top-6 -right-6 w-36 h-36 rounded-lg overflow-hidden shadow-lg glass-card animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
