
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container max-w-md mx-auto px-4 md:px-6 text-center">
          <h1 className="text-8xl font-heading font-bold text-accent mb-6">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Seite nicht gefunden</h2>
          <p className="text-muted-foreground mb-8">
            Die von Ihnen gesuchte Seite existiert nicht oder wurde möglicherweise verschoben.
          </p>
          <Button className="bg-accent hover:bg-accent/90">
            <Home className="mr-2 h-4 w-4" /> Zurück zur Startseite
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
