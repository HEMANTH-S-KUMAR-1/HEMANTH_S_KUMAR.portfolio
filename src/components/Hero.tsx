import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import hemanthPortrait from "@/assets/hemanth-portrait.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(214_100%_60%_/_0.15),transparent_60%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(270_100%_70%_/_0.15),transparent_60%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(180_100%_50%_/_0.08),transparent_70%)] animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-glow animate-float">
                <img 
                  src={hemanthPortrait} 
                  alt="Hemanth S Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-primary opacity-75 animate-glow-pulse -z-10" />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground animate-slide-up">
            Hemanth S Kumar
          </h1>
          
          <div className="text-xl md:text-2xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2 animate-slide-up [animation-delay:0.2s]">
            Electronics & Instrumentation Engineer
          </div>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 animate-slide-up [animation-delay:0.4s]">
            <MapPin className="w-4 h-4" />
            <span>Tumakuru, Karnataka, India</span>
          </div>

          {/* Professional Summary */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up [animation-delay:0.6s]">
            Versatile engineer with hands-on experience across{" "}
            <span className="text-primary font-semibold">full-stack apps</span>,{" "}
            <span className="text-secondary font-semibold">ML pipelines</span>, and{" "}
            <span className="text-accent font-semibold">embedded/IoT</span>. 
            Comfortable taking projects from architecture → implementation → deployment. 
            Passionate about <span className="text-warning font-semibold">efficiency</span>, 
            <span className="text-success font-semibold"> reliability</span>, and 
            <span className="text-primary-glow font-semibold"> delightful UX</span>.
          </p>

          {/* Metrics Bar */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up [animation-delay:0.7s]">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-medium">9+ Projects</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-secondary/20">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
              <span className="text-sm font-medium">3+ Years Building</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-accent/20">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span className="text-sm font-medium">Full-Stack + IoT</span>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up [animation-delay:0.8s]">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                View Resume
              </a>
            </Button>
            
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="mailto:hemanth.1si22ei049@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Social Links with enhanced styling */}
          <div className="flex justify-center items-center gap-6 animate-slide-up [animation-delay:1s]">
            <a 
              href="https://linkedin.com/in/hemanth-s-kumar-207215325" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/HEMANTH-S-KUMAR-1" 
              className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-105 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            {/* Scroll indicator beside GitHub */}
            <div className="ml-4 animate-bounce">
              <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;