import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Zap, Brain, Globe, Camera, Shield, Calendar, Target, Cpu } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Livestock Management System",
      category: "Full-Stack Development",
      description: "Comprehensive livestock tracking and management platform built with TypeScript and Node.js, featuring real-time monitoring, health tracking, and automated alerts.",
      detailedDescription: "Role-based access control system with comprehensive livestock tracking, medical & breeding modules, and reporting for stock efficiency. Features include real-time health monitoring, breeding cycle tracking, automated vaccination reminders, and detailed analytics dashboard.",
      technologies: ["TypeScript", "Node.js", "REST API", "Database"],
      icon: <Globe className="w-6 h-6" />,
      color: "primary",
      metrics: "Complete livestock lifecycle management",
      status: "Production Ready",
      github: "https://github.com/HEMANTH-S-KUMAR-1/livestock-management-system",
      demo: "#",
      year: "2024"
    },
    {
      id: 2,
      title: "Professional Weather Dashboard",
      category: "Web Development", 
      description: "Interactive weather dashboard with real-time data visualization, forecasting, and location-based weather alerts using OpenWeatherMap API.",
      detailedDescription: "Real-time city weather with intelligent caching, auto-updating city lists, robust error handling, and beautiful data visualizations. Features include 7-day forecasts, weather maps, severe weather alerts, and responsive design.",
      technologies: ["JavaScript", "REST API", "OpenWeatherMap", "Chart.js"],
      icon: <Zap className="w-6 h-6" />,
      color: "accent",
      metrics: "Real-time weather data for 200+ cities",
      status: "Live Demo Available",
      github: "https://github.com/HEMANTH-S-KUMAR-1/Professional-Weather-Dashboard",
      demo: "https://professional-weather-dashboard.pages.dev/",
      year: "2025"
    },
    {
      id: 3,
      title: "Predictive Maintenance for Industrial Motors",
      category: "Machine Learning",
      description: "AI-powered predictive maintenance system using NASA Turbofan dataset to forecast equipment failures and optimize maintenance schedules for industrial motors.",
      detailedDescription: "Advanced ML pipeline using NASA Turbofan dataset with feature engineering, model selection, and hyperparameter tuning. Achieved high accuracy for Remaining Useful Life (RUL) prediction, enabling proactive maintenance scheduling and cost reduction.",
      technologies: ["Python", "Scikit-learn", "Pandas", "MATLAB", "Machine Learning"],
      icon: <Brain className="w-6 h-6" />,
      color: "secondary",
      metrics: "High accuracy RUL prediction for industrial motors",
      status: "Research Complete",
      github: "https://github.com/HEMANTH-S-KUMAR-1/Predictive-Maintenance-for-Industrial-Motors",
      demo: "#",
      year: "2025"
    },
    {
      id: 4,
      title: "LifeCompass AI",
      category: "AI-Powered Application",
      description: "Intelligent life guidance platform combining responsive JavaScript frontend with Python AI backend for personalized recommendations and insights.",
      detailedDescription: "Responsive interface with analytics backend for life guidance. Features include AI-driven recommendations, user behavior analysis, personalized content delivery, and comprehensive dashboard for tracking progress and insights.",
      technologies: ["JavaScript", "Python", "AI/ML", "Responsive Design"],
      icon: <Brain className="w-6 h-6" />,
      color: "success",
      metrics: "AI-driven personalized recommendations",
      status: "Active Development",
      github: "https://github.com/HEMANTH-S-KUMAR-1/Lifecompass-ai",
      demo: "https://lifecompass-ai.pages.dev/",
      year: "2024"
    },
    {
      id: 5,
      title: "Crop Prediction System",
      category: "Agricultural AI",
      description: "Machine learning system for crop yield prediction using environmental and agricultural data to help farmers optimize their cultivation strategies.",
      detailedDescription: "Suitability & yield forecasting from environmental/agricultural features. Uses weather data, soil conditions, and historical yield patterns to provide accurate crop recommendations and yield predictions for farmers.",
      technologies: ["Python", "ML Algorithms", "Data Analysis", "Agriculture"],
      icon: <Brain className="w-6 h-6" />,
      color: "success",
      metrics: "Agricultural data-driven predictions",
      status: "Field Testing",
      github: "https://github.com/HEMANTH-S-KUMAR-1/crop-prediction",
      demo: "https://crop-prediction-a0o.pages.dev/",
      year: "2024"
    },
    {
      id: 6,
      title: "Instagram Non-Followers Checker",
      category: "Automation & Analytics",
      description: "Python automation tool with secure login, data parsing, and export capabilities for social media analytics with privacy-focused design.",
      detailedDescription: "2FA login handling, smart rate limiting, TXT/JSON export capabilities. Features secure authentication, intelligent rate limiting to avoid API restrictions, and comprehensive data export options while maintaining user privacy.",
      technologies: ["Python", "Instaloader", "Data Processing", "Security"],
      icon: <Shield className="w-6 h-6" />,
      color: "accent",
      metrics: "Secure data processing & export (TXT/JSON)",
      status: "Open Source",
      github: "https://github.com/HEMANTH-S-KUMAR-1/instagram-nonfollowers-checker",
      demo: "#",
      year: "2024"
    },
    {
      id: 7,
      title: "Automated Vehicle Behaviour Analysis",
      category: "Computer Vision",
      description: "MATLAB-based computer vision system for analyzing vehicle behavior patterns with advanced image processing algorithms for traffic safety.",
      detailedDescription: "Tracking + unsafe pattern detection with +25% accuracy improvement in behavior detection. Uses advanced computer vision techniques for real-time vehicle tracking, behavior analysis, and safety assessment.",
      technologies: ["MATLAB", "Image Processing", "Computer Vision", "Analytics"],
      icon: <Camera className="w-6 h-6" />,
      color: "warning",
      metrics: "+25% accuracy improvement in behavior detection",
      status: "Research Project",
      github: "https://github.com/HEMANTH-S-KUMAR-1/AutomatedVehicleBehaviourAnalysis",
      demo: "#",
      year: "2025"
    },
    {
      id: 8,
      title: "CyberSafe India",
      category: "Cybersecurity",
      description: "Comprehensive cybersecurity awareness and protection platform focused on digital safety education and threat prevention for Indian users.",
      detailedDescription: "Educational platform designed to enhance cybersecurity awareness with interactive modules, threat detection tools, and best practices for digital safety. Features include security assessments, training modules, and real-time threat alerts.",
      technologies: ["Web Development", "Security", "Education", "JavaScript"],
      icon: <Shield className="w-6 h-6" />,
      color: "primary",
      metrics: "Comprehensive cybersecurity education platform",
      status: "Live",
      github: "https://github.com/HEMANTH-S-KUMAR-1/cybersafe-india",
      demo: "https://cybersafe-india.pages.dev/",
      year: "2025"
    },
    {
      id: 9,
      title: "Portfolio Website",
      category: "Web Development",
      description: "Professional portfolio website showcasing projects, skills, and experience with modern design principles and responsive layout.",
      detailedDescription: "Modern portfolio built with React, TypeScript, and Tailwind CSS. Features include project showcases, interactive components, theme switching, contact forms, and optimized performance for all devices.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      icon: <Globe className="w-6 h-6" />,
      color: "primary",
      metrics: "Responsive design with modern UI/UX",
      status: "Live",
      github: "https://github.com/HEMANTH-S-KUMAR-1/HEMANTH_S_KUMAR.portfolio",
      demo: "#",
      year: "2024"
    },
    {
      id: 10,
      title: "Real-Time Elevator Safety System",
      category: "Embedded Systems",
      description: "IoT-based elevator safety monitoring system using ESP32, load sensors, and GSM communication for real-time safety alerts and maintenance notifications.",
      detailedDescription: "Engineered a safety-critical system with custom firmware in C++ to automatically detect elevator power failures and passenger occupancy. Integrated and calibrated an HX711 load cell to accurately determine if the elevator is occupied. Implemented a GSM module to autonomously send SMS alerts to maintenance personnel during a power outage.",
      technologies: ["ESP32", "C++", "HX711 Load Cell", "GSM Module", "IoT"],
      icon: <Cpu className="w-6 h-6" />,
      color: "warning",
      metrics: "Real-time safety monitoring & automated alerts",
      status: "Ongoing",
      github: "https://github.com/HEMANTH-S-KUMAR-1",
      demo: "#",
      year: "2024"
    },
    {
      id: 11,
      title: "Multichannel Stethograph for Cardiac Monitoring",
      category: "Biomedical Engineering",
      description: "Advanced cardiac monitoring system using Raspberry Pi and vibration sensors with digital signal processing for enhanced diagnostic capabilities.",
      detailedDescription: "Developed a non-invasive cardiac monitoring device using a Raspberry Pi to capture and process heart signals from specialized vibration sensors. Implemented digital signal processing algorithms in Python to filter noise and analyze sensor data, successfully identifying key cardiac events.",
      technologies: ["Raspberry Pi 3B", "Python", "Vibration Sensors", "DSP", "Signal Processing"],
      icon: <Cpu className="w-6 h-6" />,
      color: "secondary",
      metrics: "Non-invasive cardiac event detection",
      status: "Completed",
      github: "https://github.com/HEMANTH-S-KUMAR-1",
      demo: "#",
      year: "2023-2024"
    }
  ];

  const categories = [
    "All",
    "Full-Stack Development", 
    "Web Development",
    "Machine Learning",
    "AI-Powered Application",
    "Agricultural AI",
    "Automation & Analytics",
    "Computer Vision",
    "Cybersecurity",
    "Embedded Systems",
    "Biomedical Engineering"
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          card: "border-primary/30 hover:border-primary bg-gradient-to-br from-primary/5 to-primary/10",
          icon: "bg-primary/10 text-primary border-primary/20",
          badge: "bg-primary/10 text-primary border-primary/20"
        };
      case "secondary":
        return {
          card: "border-secondary/30 hover:border-secondary bg-gradient-to-br from-secondary/5 to-secondary/10",
          icon: "bg-secondary/10 text-secondary border-secondary/20",
          badge: "bg-secondary/10 text-secondary border-secondary/20"
        };
      case "accent":
        return {
          card: "border-accent/30 hover:border-accent bg-gradient-to-br from-accent/5 to-accent/10",
          icon: "bg-accent/10 text-accent border-accent/20",
          badge: "bg-accent/10 text-accent border-accent/20"
        };
      case "success":
        return {
          card: "border-success/30 hover:border-success bg-gradient-to-br from-success/5 to-success/10",
          icon: "bg-success/10 text-success border-success/20",
          badge: "bg-success/10 text-success border-success/20"
        };
      case "warning":
        return {
          card: "border-warning/30 hover:border-warning bg-gradient-to-br from-warning/5 to-warning/10",
          icon: "bg-warning/10 text-warning border-warning/20",
          badge: "bg-warning/10 text-warning border-warning/20"
        };
      case "secure":
        return {
          card: "border-primary/30 hover:border-primary bg-gradient-to-br from-primary/5 to-primary/10",
          icon: "bg-primary/10 text-primary border-primary/20",
          badge: "bg-primary/10 text-primary border-primary/20"
        };
      default:
        return {
          card: "border-primary/30 hover:border-primary bg-gradient-to-br from-primary/5 to-primary/10",
          icon: "bg-primary/10 text-primary border-primary/20",
          badge: "bg-primary/10 text-primary border-primary/20"
        };
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of innovative projects spanning full-stack development, machine learning, 
            embedded systems, and cutting-edge technologies.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card 
                    className={`group cursor-pointer transition-all duration-500 hover:shadow-elevated hover:scale-105 animate-slide-up ${colors.card}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`p-3 rounded-lg ${colors.icon} transition-transform group-hover:scale-110`}>
                          {project.icon}
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant="secondary" className={`text-xs ${colors.badge}`}>
                            {project.status}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {project.year}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-lg mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-muted-foreground">
                        {project.category}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className={`text-xs ${colors.badge} hover:scale-105 transition-transform`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className={`text-xs font-medium p-2 rounded-md ${colors.badge} flex items-center gap-2`}>
                          <Target className="w-3 h-3" />
                          {project.metrics}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        {project.id !== 10 && project.id !== 11 && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            className={`${project.demo !== "#" ? "flex-1" : "w-full"} hover:scale-105 transition-transform`}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.github, '_blank');
                            }}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        )}
                        {project.demo !== "#" && (
                          <Button 
                            size="sm"
                            className="flex-1 bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.demo, '_blank');
                            }}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${colors.icon}`}>
                        {project.icon}
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="secondary" className={`text-xs ${colors.badge}`}>
                          {project.status}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {project.year}
                        </div>
                      </div>
                    </div>
                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                    <DialogDescription className="text-lg font-medium text-muted-foreground">
                      {project.category}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Project Overview</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.detailedDescription}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className={`${colors.badge}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${colors.badge} flex items-center gap-3`}>
                      <Target className="w-5 h-5" />
                      <div>
                        <h4 className="font-semibold">Key Achievement</h4>
                        <p className="text-sm">{project.metrics}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      {project.id !== 10 && project.id !== 11 && (
                        <Button 
                          className={`${project.demo !== "#" ? "flex-1" : "w-full"}`}
                          variant="outline"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Source Code
                        </Button>
                      )}
                      {project.demo !== "#" && (
                        <Button 
                          className="flex-1 bg-gradient-primary hover:shadow-glow"
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        {/* Simplified Project Cards for better performance */}
        <div className="hidden">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <Card 
                key={project.title}
                className={`group transition-all duration-500 hover:shadow-elevated hover:scale-105 animate-slide-up ${colors.card}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-lg ${colors.icon} transition-transform group-hover:scale-110`}>
                      {project.icon}
                    </div>
                    <Badge variant="secondary" className={`text-xs ${colors.badge}`}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-muted-foreground">
                    {project.category}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className={`text-xs ${colors.badge} hover:scale-105 transition-transform`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className={`text-xs font-medium p-2 rounded-md ${colors.badge}`}>
                      📊 {project.metrics}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    {project.id !== 10 && project.id !== 11 && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className={`${project.demo !== "#" ? "flex-1" : "w-full"} hover:scale-105 transition-transform`}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.demo !== "#" && (
                      <Button 
                        size="sm"
                        className="flex-1 bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Project Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-lg bg-gradient-card border border-primary/20">
            <div className="text-2xl font-bold text-primary mb-2">9+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-card border border-secondary/20">
            <div className="text-2xl font-bold text-secondary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Technologies Mastered</div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-card border border-accent/20">
            <div className="text-2xl font-bold text-accent mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Problems Solved</div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-card border border-success/20">
            <div className="text-2xl font-bold text-success mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;