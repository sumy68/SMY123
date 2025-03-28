
import { 
  LayoutGrid, 
  PenTool, 
  Code, 
  Instagram, 
  Share2, 
  LineChart, 
  Image as ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <PenTool className="h-8 w-8 text-accent" />,
    title: "Branding & Design",
    description: "Einzigartige Markenidentitäten, die Ihre Werte und Vision authentisch vermitteln."
  },
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: "Webentwicklung",
    description: "Maßgeschneiderte Websites mit modernen Technologien für optimale Performance."
  },
  {
    icon: <Instagram className="h-8 w-8 text-accent" />,
    title: "Social Media",
    description: "Strategische Präsenz auf relevanten Plattformen, die Ihre Zielgruppe erreicht."
  },
  {
    icon: <ImageIcon className="h-8 w-8 text-accent" />,
    title: "Content Produktion",
    description: "Hochwertige Foto- und Videoproduktion für alle Ihre digitalen Kanäle."
  },
  {
    icon: <Share2 className="h-8 w-8 text-accent" />,
    title: "Online Marketing",
    description: "Gezielte Kampagnen, die Reichweite generieren und Conversions steigern."
  },
  {
    icon: <LineChart className="h-8 w-8 text-accent" />,
    title: "SEO & Analytics",
    description: "Datengesteuerte Optimierung für bessere Sichtbarkeit in Suchmaschinen."
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-secondary" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-animation">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">
            Unsere <span className="text-gradient">Leistungen</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Maßgeschneiderte digitale Lösungen für Ihr Unternehmen - von der Konzeption bis zur Umsetzung.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 rounded-lg bg-accent/10 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Button variant="link" className="p-0 h-auto text-accent">
                Mehr erfahren
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Alle Leistungen entdecken
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
