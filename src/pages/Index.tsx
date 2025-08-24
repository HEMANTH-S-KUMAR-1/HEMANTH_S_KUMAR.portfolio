import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-16">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="certifications">
          <Certifications />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-muted-foreground">
              © 2025 Hemanth S Kumar. Built with passion for innovation and technology.
            </p>
            <p className="text-sm text-muted-foreground">
              Crafted with React, TypeScript, and Tailwind CSS. 
              Designed for performance, accessibility, and delightful user experience.
            </p>
            <div className="flex justify-center gap-4 text-xs text-muted-foreground">
              <span>🚀 Always learning</span>
              <span>•</span>
              <span>💡 Always building</span>
              <span>•</span>
              <span>🌟 Always improving</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
};

export default Index;
