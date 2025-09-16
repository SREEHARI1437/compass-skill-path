import { Navigation, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-hero-gradient rounded-lg shadow-hero">
            <Compass className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Compass AI</h1>
            <p className="text-sm text-muted-foreground">Navigating you into IT career</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#roadmap" className="text-muted-foreground hover:text-foreground transition-colors">
            How it Works
          </a>
          <Button variant="hero">Get Started</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;