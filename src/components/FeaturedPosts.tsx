import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FeaturedPosts = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Evolution of Large Language Models",
      description: "A deep dive into how LLMs have transformed from simple text generators to sophisticated reasoning systems.",
      category: "Deep Learning",
      readTime: "8 min read",
      date: "2024-01-15",
      featured: true
    },
    {
      id: 2,
      title: "Building My First AI Product",
      description: "Lessons learned from conceptualizing, developing, and launching an AI-powered productivity tool.",
      category: "Product Development",
      readTime: "12 min read",
      date: "2024-01-10",
      featured: false
    },
    {
      id: 3,
      title: "Understanding Transformer Architecture",
      description: "Breaking down the attention mechanism and why transformers revolutionized natural language processing.",
      category: "Technical",
      readTime: "15 min read",
      date: "2024-01-05",
      featured: false
    },
    {
      id: 4,
      title: "AI Ethics in Practice",
      description: "Real-world considerations when deploying AI systems and ensuring responsible development.",
      category: "Ethics",
      readTime: "6 min read",
      date: "2024-01-01",
      featured: false
    }
  ];

  return (
    <section id="posts" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-ai-primary to-ai-secondary bg-clip-text text-transparent">
            Featured Posts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, discoveries, and learnings from my journey through the AI landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className={`group hover:shadow-ai transition-all duration-300 hover:scale-105 border-0 bg-card/50 backdrop-blur-sm ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-ai-primary/10 text-ai-primary border-ai-primary/20">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-ai-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <Button variant="ghost" size="sm" className="text-ai-primary hover:bg-ai-primary/10">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-ai-primary/20 text-ai-primary hover:bg-ai-primary/10">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;