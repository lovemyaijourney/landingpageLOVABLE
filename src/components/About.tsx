import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const milestones = [
    {
      year: "2023",
      title: "Started AI Journey",
      description: "Began exploring machine learning fundamentals and neural networks"
    },
    {
      year: "2023",
      title: "First AI Project",
      description: "Built a sentiment analysis tool using transformers"
    },
    {
      year: "2024",
      title: "AI Product Launch",
      description: "Successfully launched my first AI-powered SaaS product"
    },
    {
      year: "2024",
      title: "AI Journey Blog",
      description: "Created this platform to share insights and learnings"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-ai-primary to-ai-secondary bg-clip-text text-transparent">
              About My Journey
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              What started as curiosity about artificial intelligence has evolved into a passionate 
              exploration of how AI can transform industries, solve complex problems, and create new possibilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                My journey into AI began with a simple question: "How can machines learn to think?" 
                This curiosity led me down a path of discovery, experimentation, and continuous learning.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Through this blog, I share the insights I've gained, the challenges I've faced, 
                and the amazing potential I see in AI technology. From technical deep-dives to 
                product development stories, this is my documentation of the AI revolution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="hero" size="lg">
                  Follow My Journey
                </Button>
                <Button variant="aiGhost" size="lg">
                  Get in Touch
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6 text-ai-primary">Key Milestones</h3>
              {milestones.map((milestone, index) => (
                <Card key={index} className="border-l-4 border-l-ai-primary bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-ai-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {milestone.year}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{milestone.title}</h4>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;