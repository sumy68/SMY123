
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="py-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            Kontaktieren Sie <span className="text-gradient">Uns</span>
          </h1>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
