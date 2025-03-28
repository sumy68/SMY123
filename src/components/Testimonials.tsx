
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Das Team der SMY Agency hat unsere Erwartungen weit übertroffen. Die neue Webseite und Social-Media-Strategie haben unsere Online-Präsenz komplett transformiert.",
    author: "Michael Schmidt",
    role: "Geschäftsführer, TechVision GmbH",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    quote: "Professionell, kreativ und stets termingerecht. Die Zusammenarbeit mit SMY Agency war von Anfang bis Ende ein Vergnügen und die Ergebnisse sprechen für sich.",
    author: "Laura Wagner",
    role: "Marketing Direktorin, EcoStyle",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    quote: "Die innovative Herangehensweise und das tiefe Verständnis für unsere Branche haben uns besonders beeindruckt. Wir konnten unsere Conversion-Rate um 45% steigern.",
    author: "Thomas Becker",
    role: "Gründer, Naturkost Online",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-animation">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">
            Was unsere <span className="text-gradient">Kunden</span> sagen
          </h2>
          <p className="text-lg text-muted-foreground">
            Der Erfolg unserer Kunden ist unser größter Antrieb und unsere beste Referenz.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute -left-8 -top-8">
              <Quote className="h-16 w-16 text-accent/20" />
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm relative z-10">
              <div className="min-h-[200px] flex flex-col justify-between">
                <p className="text-lg md:text-xl mb-8 italic">
                  {testimonials[currentIndex].quote}
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonials[currentIndex].author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4">
          <Button 
            variant="outline" 
            size="icon"
            onClick={prevTestimonial}
            aria-label="Vorheriges Testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={nextTestimonial}
            aria-label="Nächstes Testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
