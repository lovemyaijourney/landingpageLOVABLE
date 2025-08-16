import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedPosts />
        <About />
      </main>
    </div>
  );
};

export default Index;
