import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, Calendar, CheckCircle, Eye } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Introduction to Cloud 101",
      issuer: "AWS Educate",
      year: "2025",
      status: "Completed",
      description: "Comprehensive introduction to cloud computing concepts, AWS services, and cloud architecture fundamentals.",
      image: "/assets/certificates/AWS_Cloud_Essentials.jpg",
      skills: ["Cloud Computing", "AWS", "Cloud Architecture"],
      color: "warning"
    },
    {
      id: 11,
      title: "AWS Educate Introduction to Cloud 101",
      issuer: "AWS Educate",
      year: "2025",
      status: "Completed",
      description: "Advanced cloud computing fundamentals and AWS services introduction with hands-on experience.",
      image: "/assets/certificates/aws-educate-introduction-to-cloud-101.png",
      skills: ["AWS Cloud", "Cloud Computing", "AWS Services"],
      color: "warning"
    },
    {
      id: 2,
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      year: "2025",
      status: "Completed",
      description: "Foundational cybersecurity concepts, threat analysis, and security best practices for modern digital environments.",
      image: "/assets/certificates/Cisco_Introduction_to_Cybersecurity.jpg",
      skills: ["Cybersecurity", "Security Analysis", "Threat Detection"],
      color: "primary"
    },
    {
      id: 3,
      title: "Networking Basics",
      issuer: "Cisco",
      year: "2025",
      status: "Completed",
      description: "Foundational networking concepts, protocols, and Cisco networking technologies for modern network infrastructure.",
      image: "/assets/certificates/Cisco_Networking_Basics.jpg",
      skills: ["Networking", "Network Protocols", "Infrastructure"],
      color: "primary"
    },
    {
      id: 4,
      title: "Python Essentials 1",
      issuer: "Cisco",
      year: "2025",
      status: "Completed",
      description: "Foundation Python programming covering syntax, data structures, and basic programming concepts.",
      image: "/assets/certificates/Cisco_Python_Essentials_1.jpg",
      skills: ["Python", "Programming", "Data Structures"],
      color: "primary"
    },
    {
      id: 5,
      title: "Python Essentials 2",
      issuer: "Cisco",
      year: "2025",
      status: "Completed",
      description: "Advanced Python programming covering OOP, modules, packages, and advanced programming concepts.",
      image: "/assets/certificates/Cisco_Python_Essentials_2.jpg",
      skills: ["Python", "OOP", "Advanced Programming"],
      color: "primary"
    },
    {
      id: 6,
      title: "SQL (Advanced)",
      issuer: "HackerRank",
      year: "2025",
      status: "Completed",
      description: "Advanced SQL concepts including complex queries, database optimization, and advanced data manipulation techniques.",
      image: "/assets/certificates/sql_advanced certificate_page-0001.jpg",
      skills: ["SQL", "Database", "Query Optimization"],
      color: "success"
    },
    {
      id: 7,
      title: "Data Structures & Algorithms (C++)",
      issuer: "CodeChef",
      year: "2024",
      status: "Completed",
      description: "Comprehensive understanding of data structures and algorithms with C++ implementation and problem-solving skills.",
      image: "/assets/certificates/CodeChef_Data_Structures_and_Algorithms.jpg",
      skills: ["DSA", "C++", "Problem Solving"],
      color: "secondary"
    },
    {
      id: 8,
      title: "Database Management System",
      issuer: "CodeChef",
      year: "2025",
      status: "Completed",
      description: "Comprehensive database management concepts, design principles, and implementation strategies.",
      image: "/assets/certificates/CodeChef_Database_Management_System.jpg",
      skills: ["DBMS", "Database Design", "Data Management"],
      color: "secondary"
    },
    {
      id: 9,
      title: "C++ Programming",
      issuer: "CodeChef",
      year: "2025",
      status: "Completed",
      description: "Advanced C++ programming concepts, object-oriented programming, and software development best practices.",
      image: "/assets/certificates/CodeChef_ATT_C++.jpg",
      skills: ["C++", "OOP", "Software Development"],
      color: "secondary"
    },
    {
      id: 10,
      title: "Computer Vision and Image Processing",
      issuer: "MathWorks",
      year: "2025",
      status: "Completed",
      description: "Computer vision techniques, image processing algorithms using MATLAB and Vivado for advanced applications.",
      image: "/assets/certificates/Computer_Vision_and_Image_Processing_Using_MATLAB_and_Vivado.jpg",
      skills: ["Computer Vision", "MATLAB", "Image Processing", "Vivado"],
      color: "warning"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-success/10 text-success border-success/20";
      case "In Progress":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const getCardColor = (color: string) => {
    switch (color) {
      case "primary":
        return "border-primary/30 hover:border-primary bg-gradient-to-br from-primary/5 to-primary/10";
      case "secondary":
        return "border-secondary/30 hover:border-secondary bg-gradient-to-br from-secondary/5 to-secondary/10";
      case "success":
        return "border-success/30 hover:border-success bg-gradient-to-br from-success/5 to-success/10";
      case "warning":
        return "border-warning/30 hover:border-warning bg-gradient-to-br from-warning/5 to-warning/10";
      default:
        return "border-primary/30 hover:border-primary bg-gradient-to-br from-primary/5 to-primary/10";
    }
  };

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements demonstrating expertise across 
            cloud platforms, programming languages, and technical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.id}
              className={`group transition-all duration-500 hover:shadow-elevated hover:scale-105 animate-slide-up ${getCardColor(cert.color)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={cert.image} 
                  alt={`${cert.title} Certificate`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 bg-gradient-card"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const nextElement = target.nextSibling as HTMLElement;
                    target.style.display = 'none';
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback placeholder */}
                <div className="hidden w-full h-48 bg-gradient-card items-center justify-center">
                  <Award className="w-16 h-16 text-muted-foreground" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className={getStatusColor(cert.status)}>
                    {cert.status === "Completed" && <CheckCircle className="w-3 h-3 mr-1" />}
                    {cert.status}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Award className="w-6 h-6 text-primary" />
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {cert.year}
                  </div>
                </div>
                <CardTitle className="text-lg mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-muted-foreground">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs bg-muted/20 text-muted-foreground border-muted/20 hover:scale-105 transition-transform"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      size="sm"
                      className="w-full bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                    <DialogHeader>
                      <DialogTitle>{cert.title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <img 
                        src={cert.image} 
                        alt={`${cert.title} Certificate`}
                        className="w-full h-auto object-contain rounded-lg shadow-lg"
                        style={{ maxHeight: '70vh' }}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-lg bg-gradient-card border border-primary/20">
            <Award className="w-8 h-8 text-primary mx-auto mb-4" />
            <div className="text-2xl font-bold text-primary mb-2">11</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-card border border-success/20">
            <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
            <div className="text-2xl font-bold text-success mb-2">11</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-card border border-warning/20">
            <Calendar className="w-8 h-8 text-warning mx-auto mb-4" />
            <div className="text-2xl font-bold text-warning mb-2">0</div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-card border border-secondary/20">
            <div className="text-2xl font-bold text-secondary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Problems Solved</div>
          </div>
        </div>

        {/* Competitive Programming Achievement */}
        <div className="mt-12 p-8 rounded-lg bg-gradient-card border border-accent/20 text-center">
          <h3 className="text-xl font-bold mb-4 text-accent">🏆 Competitive Programming Achievement</h3>
          <p className="text-muted-foreground mb-4">
            Solved <span className="text-accent font-bold">100+ algorithmic problems</span> on CodeChef 
            during January-February 2024, demonstrating strong problem-solving and algorithmic thinking skills.
          </p>
          <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
            CodeChef Problem Solver
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Certifications;