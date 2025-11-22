import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg-option4.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Digital innovation background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight">
            Jill Moraa
          </h1>
          <h3 className="text-3xl md:text-5xl font-bold text-primary-foreground tracking-tight">
            Digital Product Manager
          </h3>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into impactful digital experiences through user-centered design and data-driven strategy
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={scrollToProjects}
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;
