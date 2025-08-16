import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ai-journey-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-ai-primary/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-ai-primary via-ai-secondary to-ai-accent bg-clip-text text-transparent leading-tight">
            My AI Journey
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Exploring the frontiers of artificial intelligence, sharing insights, discoveries, and the evolution of AI products that are reshaping our world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="shadow-ai">
              Start Reading
            </Button>
            <Button variant="aiGhost" size="xl">
              About My Journey
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-ai-secondary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-ai-accent/20 rounded-full blur-xl animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;