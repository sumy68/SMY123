
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-white/90 backdrop-blur-md shadow-sm" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold tracking-tight animate-fade-in">
            SMY<span className="text-gold-500">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 animate-fade-in">
          <Link to="/" className="text-sm font-medium hover:text-gold-500 transition-colors">
            Startseite
          </Link>
          <Link to="/leistungen" className="text-sm font-medium hover:text-gold-500 transition-colors">
            Leistungen
          </Link>
          <Link to="/ueber-uns" className="text-sm font-medium hover:text-gold-500 transition-colors">
            Über Uns
          </Link>
          <Link to="/projekte" className="text-sm font-medium hover:text-gold-500 transition-colors">
            Projekte
          </Link>
          <Link to="/kontakt" className="text-sm font-medium hover:text-gold-500 transition-colors">
            Kontakt
          </Link>
          <Button size="sm" className="ml-4 bg-gold-500 hover:bg-gold-600 text-primary">
            Anfrage stellen
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden pt-24`}
      >
        <div className="flex flex-col items-center gap-6 px-4">
          <Link 
            to="/" 
            className="text-lg font-medium hover:text-gold-500 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Startseite
          </Link>
          <Link 
            to="/leistungen" 
            className="text-lg font-medium hover:text-gold-500 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Leistungen
          </Link>
          <Link 
            to="/ueber-uns" 
            className="text-lg font-medium hover:text-gold-500 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Über Uns
          </Link>
          <Link 
            to="/projekte" 
            className="text-lg font-medium hover:text-gold-500 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Projekte
          </Link>
          <Link 
            to="/kontakt" 
            className="text-lg font-medium hover:text-gold-500 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </Link>
          <Button className="mt-4 w-full bg-gold-500 hover:bg-gold-600 text-primary">
            Anfrage stellen
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
