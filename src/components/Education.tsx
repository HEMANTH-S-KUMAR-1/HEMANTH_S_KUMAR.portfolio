import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  Users, 
  TrendingUp,
  BookOpen,
  Target
} from "lucide-react";

const Education = () => {
  const education = {
    degree: "B.E. Electronics & Instrumentation Engineering",
    institution: "Siddaganga Institute of Technology",
    location: "Tumakuru, Karnataka",
    duration: "2022 - 2026",
    expectedGraduation: "June 2026",
    currentCGPA: "6.05",
    status: "Final Year"
  };

  const keySubjects = [
    "Digital Signal Processing",
    "Embedded Systems",
    "Control Systems",
    "Instrumentation & Measurement",
    "Microprocessors & Microcontrollers",
    "Industrial Automation",
    "Data Structures & Algorithms",
    "Computer Networks",
    "Database Management Systems",
    "Software Engineering"
  ];

  const achievements = [
    {
      title: "Volunteer Coordinator",
      event: "Technisium Tech Event (SIT)",
      years: "2023, 2024",
      description: "Managed logistics and coordination for 200+ participants across multiple technical events",
      icon: <Users className="w-5 h-5" />,
      color: "primary"
    },
    {
      title: "Academic Excellence",
      event: "Consistent Performance",
      years: "2022-2025",
      description: "Maintained consistent academic performance while actively participating in technical projects",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "success"
    },
    {
      title: "Project Leadership",
      event: "Technical Projects",
      years: "2023-2025",
      description: "Led multiple technical projects in embedded systems, ML, and full-stack development",
      icon: <Target className="w-5 h-5" />,
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary border-primary/20";
      case "secondary":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "success":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Education & Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in Electronics & Instrumentation Engineering 
            with active leadership in technical events and community building.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Education Card */}
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-elevated transition-all duration-500 animate-slide-up">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-lg bg-primary/10 text-primary border border-primary/20">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{education.degree}</CardTitle>
                    <CardDescription className="text-lg font-medium text-muted-foreground">
                      {education.institution}
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                  {education.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Education Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-muted/20">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium">{education.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-muted/20">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-medium">{education.duration}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-muted/20">
                  <Award className="w-5 h-5 text-warning" />
                  <div>
                    <div className="text-sm text-muted-foreground">Current CGPA</div>
                    <div className="font-medium">{education.currentCGPA}</div>
                  </div>
                </div>
              </div>

              {/* Expected Graduation */}
              <div className="p-4 rounded-lg bg-gradient-card border border-primary/20 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Expected Graduation</span>
                </div>
                <div className="text-lg font-bold text-foreground">{education.expectedGraduation}</div>
              </div>
            </CardContent>
          </Card>

          {/* Key Subjects */}
          <Card className="border-accent/30 hover:border-accent bg-gradient-to-br from-accent/5 to-accent/10 hover:from-accent/10 hover:to-accent/15 transition-all duration-500 animate-slide-up [animation-delay:0.2s]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-accent">
                <BookOpen className="w-6 h-6 text-accent" />
                Key Subjects & Specializations
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Core subjects that shaped my technical expertise and problem-solving abilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {keySubjects.map((subject) => (
                  <Badge 
                    key={subject}
                    variant="outline"
                    className="p-2 text-center justify-center bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 hover:border-accent hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {subject}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Leadership & Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground text-center">
              Leadership & Extracurricular Activities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={achievement.title}
                  className="border-muted/30 hover:shadow-card transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className={`p-3 rounded-lg w-fit ${getColorClasses(achievement.color)}`}>
                      {achievement.icon}
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <CardDescription className="font-medium">
                      {achievement.event} • {achievement.years}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Developed */}
          <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-accent/10 animate-slide-up [animation-delay:0.8s]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-accent">
                <Target className="w-6 h-6" />
                Skills Developed Through Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technical Skills</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Circuit design and analysis</li>
                    <li>• Embedded system programming</li>
                    <li>• Signal processing and control systems</li>
                    <li>• Industrial automation concepts</li>
                    <li>• Data structures and algorithms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Soft Skills</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Leadership and team coordination</li>
                    <li>• Project management</li>
                    <li>• Problem-solving and analytical thinking</li>
                    <li>• Event organization and logistics</li>
                    <li>• Communication and collaboration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;