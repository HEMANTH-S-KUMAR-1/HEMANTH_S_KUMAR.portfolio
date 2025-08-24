import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Database, 
  Globe, 
  Brain, 
  Cpu, 
  Shield,
  Cloud,
  Wrench,
  Filter
} from "lucide-react";

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const skillCategories = [
    {
      id: "languages",
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "TypeScript", "C++", "C", "SQL", "HTML5", "CSS3"],
      color: "primary"
    },
    {
      id: "web",
      title: "Web & Backend",
      icon: <Globe className="w-6 h-6" />,
      skills: ["Node.js", "REST APIs", "Flask", "Django", "React", "Express.js"],
      color: "secondary"
    },
    {
      id: "database",
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL", "DBMS", "MySQL", "PostgreSQL", "MongoDB"],
      color: "accent"
    },
    {
      id: "ml",
      title: "ML & Data Science",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Scikit-learn", "Pandas", "NumPy", "MATLAB", "Computer Vision", "Predictive Analytics"],
      color: "success"
    },
    {
      id: "embedded",
      title: "Embedded Systems",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["ESP32", "Raspberry Pi", "Arduino", "IoT", "Signal Processing", "Sensors"],
      color: "warning"
    },
    {
      id: "cloud",
      title: "Cloud & Security",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Azure", "GCP", "Cybersecurity", "Docker"],
      color: "primary"
    },
    {
      id: "tools",
      title: "Developer Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VS Code", "npm", "Jupyter Notebook", "Linux"],
      color: "secondary"
    },
    {
      id: "concepts",
      title: "Core Concepts",
      icon: <Shield className="w-6 h-6" />,
      skills: ["DSA", "OOP", "Algorithms", "System Design", "Problem Solving"],
      color: "accent"
    }
  ];

  const filterCategories = [
    { id: "all", label: "All Skills", icon: <Filter className="w-4 h-4" /> },
    { id: "languages", label: "Languages", icon: <Code2 className="w-4 h-4" /> },
    { id: "web", label: "Web/Backend", icon: <Globe className="w-4 h-4" /> },
    { id: "ml", label: "ML/Data", icon: <Brain className="w-4 h-4" /> },
    { id: "embedded", label: "Embedded/IoT", icon: <Cpu className="w-4 h-4" /> },
    { id: "cloud", label: "Cloud", icon: <Cloud className="w-4 h-4" /> }
  ];

  const filteredCategories = activeFilter === "all" 
    ? skillCategories 
    : skillCategories.filter(category => category.id === activeFilter);

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "border-primary/50 hover:border-primary bg-gradient-to-br from-primary/5 to-primary/10";
      case "secondary":
        return "border-secondary/50 hover:border-secondary bg-gradient-to-br from-secondary/5 to-secondary/10";
      case "accent":
        return "border-accent/50 hover:border-accent bg-gradient-to-br from-accent/5 to-accent/10";
      case "success":
        return "border-success/50 hover:border-success bg-gradient-to-br from-success/5 to-success/10";
      case "warning":
        return "border-warning/50 hover:border-warning bg-gradient-to-br from-warning/5 to-warning/10";
      default:
        return "border-primary/50 hover:border-primary bg-gradient-to-br from-primary/5 to-primary/10";
    }
  };

  const getBadgeVariant = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary border-primary/20";
      case "secondary":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "accent":
        return "bg-accent/10 text-accent border-accent/20";
      case "success":
        return "bg-success/10 text-success border-success/20";
      case "warning":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comfortable taking projects from architecture → implementation → deployment. 
            A comprehensive toolkit spanning embedded systems to full-stack applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterCategories.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className={`transition-all duration-300 hover:scale-105 ${
                activeFilter === filter.id 
                  ? "bg-gradient-primary shadow-glow" 
                  : "hover:border-primary/50"
              }`}
            >
              {filter.icon}
              <span className="ml-2">{filter.label}</span>
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`transition-all duration-500 hover:shadow-card hover:scale-105 animate-slide-up ${getColorClasses(category.color)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className={`p-2 rounded-lg ${getBadgeVariant(category.color)}`}>
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className={`text-xs font-medium transition-all duration-300 hover:scale-110 cursor-default ${getBadgeVariant(category.color)}`}
                      title={`${skill} - Click to learn more`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Strengths */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Key Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg bg-gradient-card border border-primary/20 hover:shadow-glow transition-all duration-300">
              <Brain className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2 text-primary">Problem Solving</h4>
              <p className="text-sm text-muted-foreground">
                Strong analytical thinking with 100+ algorithmic problems solved
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-card border border-secondary/20 hover:shadow-glow transition-all duration-300">
              <Cpu className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2 text-secondary">Full-Stack Expertise</h4>
              <p className="text-sm text-muted-foreground">
                End-to-end development from embedded hardware to cloud deployment
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-card border border-accent/20 hover:shadow-glow transition-all duration-300">
              <Shield className="w-8 h-8 text-accent mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2 text-accent">Innovation Focus</h4>
              <p className="text-sm text-muted-foreground">
                Combining AI, IoT, and cybersecurity for next-gen solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;