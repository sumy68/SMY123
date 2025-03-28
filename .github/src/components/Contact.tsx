
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="reveal-animation">
            <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
              Kontakt
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-6">
              Lassen Sie uns über Ihr <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">Projekt</span> sprechen
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/80">
              Bereit, Ihre digitale Präsenz auf das nächste Level zu heben? 
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-full bg-white/10">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <a href="mailto:info@smyagency.de" className="text-primary-foreground/80 hover:text-white transition-colors">
                    info@smyagency.de
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-full bg-white/10">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Telefon</h3>
                  <a href="tel:+4912345678" className="text-primary-foreground/80 hover:text-white transition-colors">
                    +49 (0) 123 456 789
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-full bg-white/10">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Standort</h3>
                  <p className="text-primary-foreground/80">
                    Musterstraße 123<br />
                    10115 Berlin, Deutschland
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-foreground rounded-2xl p-8 shadow-lg animate-scale-in">
            <h3 className="text-xl font-semibold mb-6">Nachricht senden</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Ihr Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="ihre-email@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Betreff
                </label>
                <Input id="subject" placeholder="Worum geht es?" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Nachricht
                </label>
                <Textarea id="message" placeholder="Wie können wir Ihnen helfen?" rows={5} />
              </div>
              
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                Nachricht senden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
