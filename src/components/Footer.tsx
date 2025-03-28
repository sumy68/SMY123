
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-heading text-2xl font-bold tracking-tight mb-6">
              SMY<span className="text-accent">.</span>
            </div>
            <p className="text-primary-foreground/70 mb-6">
              Ihre Full-Service-Digitalagentur für erfolgreiche Online-Präsenzen 
              und begeisternde digitale Erlebnisse.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Unternehmen</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/ueber-uns" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/karriere" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Karriere
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Leistungen</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/leistungen/webdesign" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Webdesign
                </Link>
              </li>
              <li>
                <Link to="/leistungen/social-media" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Social Media
                </Link>
              </li>
              <li>
                <Link to="/leistungen/branding" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link to="/leistungen/online-marketing" className="text-primary-foreground/70 hover:text-white transition-colors">
                  Online Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <ul className="space-y-3">
              <li className="text-primary-foreground/70">
                Musterstraße 123<br />
                10115 Berlin
              </li>
              <li>
                <a href="tel:+4912345678" className="text-primary-foreground/70 hover:text-white transition-colors">
                  +49 (0) 123 456 789
                </a>
              </li>
              <li>
                <a href="mailto:info@smyagency.de" className="text-primary-foreground/70 hover:text-white transition-colors">
                  info@smyagency.de
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row md:items-center justify-between">
          <div className="text-sm text-primary-foreground/70 mb-4 md:mb-0">
            © {currentYear} SMY Agency. Alle Rechte vorbehalten.
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/70">
            <Link to="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
            <Link to="/agb" className="hover:text-white transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
