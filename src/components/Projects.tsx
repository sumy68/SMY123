
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "ReNature Brand",
    category: "Branding & Webdesign",
    image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Craft Coffee Shop",
    category: "Social Media & Content",
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=2062&auto=format&fit=crop"
  },
  {
    title: "Urban Lifestyle",
    category: "Branding & Marketing",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
  }
];

const Projects = () => {
  return (
    <section className="py-24 bg-secondary" id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal-animation">
          <div>
            <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Unsere Arbeiten
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
              Ausgewählte <span className="text-gradient">Projekte</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <Button variant="link" className="p-0 h-auto text-accent">
              Alle Projekte ansehen <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl hover-lift"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <div className="text-sm font-medium mb-2 opacity-80">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
