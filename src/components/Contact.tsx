import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to new opportunities and collaborations
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-border animate-fade-in-up">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm always interested in discussing product strategy, digital innovation, 
                  or potential collaboration opportunities. Feel free to reach out!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Send Email
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Calendar className="h-4 w-4" />
                    Schedule Call
                  </Button>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Connect on social</p>
                  <div className="flex gap-4 justify-center">
                    <Button variant="ghost" size="icon" className="hover:text-accent" asChild>
                      <a href="https://www.linkedin.com/in/jillmoraa/" target="_blank" rel="noreferrer">
                      <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    {/* <Button variant="ghost" size="icon" className="hover:text-accent">
                      <Github className="h-5 w-5" />
                    </Button> */}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
