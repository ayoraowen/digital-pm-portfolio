import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    description: "Led end-to-end redesign of checkout flow, increasing conversion rate by 32% and reducing cart abandonment by 25%.",
    metrics: ["32% conversion increase", "25% reduced abandonment", "500K+ users"],
    tags: ["UX Strategy", "A/B Testing", "Analytics"],
    impact: "Generated $2.5M additional annual revenue"
  },
  {
    title: "Mobile Banking App",
    description: "Launched innovative mobile-first banking experience with biometric authentication and personalized financial insights.",
    metrics: ["4.8★ App Store rating", "1M+ downloads", "85% MAU retention"],
    tags: ["Mobile Product", "Security", "FinTech"],
    impact: "Achieved 85% monthly active user retention"
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Built comprehensive analytics platform enabling data-driven decisions for 10K+ business users.",
    metrics: ["10K+ active users", "40% time savings", "95% satisfaction"],
    tags: ["B2B SaaS", "Data Viz", "User Research"],
    impact: "Reduced reporting time by 40%"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strategic product initiatives that delivered measurable business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-sm font-medium text-foreground">
                      • {metric}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-accent mb-3">
                    {project.impact}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
