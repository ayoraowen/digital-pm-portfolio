import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Senior Product Manager",
    company: "TechCorp",
    period: "2021 - Present",
    description: "Leading product strategy for B2B SaaS platform serving 50K+ users. Launched 3 major features increasing ARR by 45%.",
    achievements: [
      "Grew user base from 20K to 50K users",
      "Led cross-functional team of 12",
      "Achieved 92% customer satisfaction score"
    ]
  },
  {
    role: "Product Manager",
    company: "FinanceApp Inc",
    period: "2019 - 2021",
    description: "Owned mobile app development and growth strategy. Drove user acquisition and retention initiatives.",
    achievements: [
      "Launched mobile app with 1M+ downloads",
      "Reduced churn rate by 30%",
      "Implemented data-driven experimentation framework"
    ]
  },
  {
    role: "Associate Product Manager",
    company: "StartupXYZ",
    period: "2017 - 2019",
    description: "Contributed to early-stage product development and market validation. Managed feature releases and user feedback loops.",
    achievements: [
      "Led user research for 3 product launches",
      "Improved onboarding completion by 40%",
      "Built relationships with 50+ beta customers"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building successful digital products across industries
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-fade-in-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-2xl mb-1">{exp.role}</CardTitle>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-lg font-semibold text-accent">{exp.company}</span>
                      <Badge variant="secondary">{exp.period}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <div className="space-y-2 pt-2">
                  <p className="font-semibold text-sm">Key Achievements:</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
