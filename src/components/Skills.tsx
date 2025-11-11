import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, Lightbulb, Target, LineChart, Puzzle } from "lucide-react";

const skills = [
  {
    icon: Target,
    title: "Product Strategy",
    description: "Vision setting, roadmap planning, OKR frameworks"
  },
  {
    icon: Users,
    title: "User Research",
    description: "User interviews, usability testing, persona development"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "A/B testing, funnel analysis, SQL, Google Analytics"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Design thinking, rapid prototyping, MVP development"
  },
  {
    icon: LineChart,
    title: "Growth",
    description: "Growth hacking, conversion optimization, retention"
  },
  {
    icon: Puzzle,
    title: "Agile/Scrum",
    description: "Sprint planning, backlog management, stakeholder alignment"
  }
];

const Skills = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building exceptional digital products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Icon className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                        {skill.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
