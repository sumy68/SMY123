
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            Unsere <span className="text-gradient">Leistungen</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Diese Seite befindet sich im Aufbau. Bitte besuchen Sie uns später wieder.
          </p>
          <p className="text-lg">
            <a href="/" className="text-accent hover:underline">
              Zurück zur Startseite
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
