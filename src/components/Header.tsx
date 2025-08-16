import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-ai-primary to-ai-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-ai-primary to-ai-secondary bg-clip-text text-transparent">
            AI Journey
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-ai-primary transition-colors">
            Home
          </a>
          <a href="#posts" className="text-foreground hover:text-ai-primary transition-colors">
            Posts
          </a>
          <a href="#about" className="text-foreground hover:text-ai-primary transition-colors">
            About
          </a>
          <Button variant="hero" size="sm">
            Subscribe
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;