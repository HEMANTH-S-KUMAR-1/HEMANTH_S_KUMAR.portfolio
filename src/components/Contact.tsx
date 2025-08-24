import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MapPin, 
  Send, 
  Linkedin, 
  Github,
  MessageCircle,
  Clock,
  CheckCircle,
  Briefcase
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      purpose: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Enhanced form submission with validation
    try {
      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields");
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      // For development, we'll use a simple mailto fallback
      // For production, use the Cloudflare Pages Function
      const isProduction = window.location.hostname !== 'localhost';
      
      if (isProduction) {
        // Production: Use Cloudflare Pages Function
        console.log('Production mode: Using /api/contact endpoint');
        
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            website: '', // Honeypot field
          }),
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.error || 'Failed to send message');
        }

        toast({
          title: "Message Sent Successfully! ✨",
          description: `Thank you for reaching out${formData.purpose ? ` regarding ${formData.purpose.toLowerCase()}` : ''}. I'll get back to you within 24 hours!${result.telegramDelivered ? ' (Instant notification sent!)' : ''}`,
        });

      } else {
        // Development: Use mailto as fallback + localStorage for testing
        console.log('Development mode: Using mailto fallback');
        
        // Save to localStorage for testing
        const contactData = {
          ...formData,
          timestamp: new Date().toISOString(),
          environment: 'development'
        };
        
        localStorage.setItem(`contact_${Date.now()}`, JSON.stringify(contactData));
        console.log('Contact form data saved to localStorage:', contactData);

        // Create mailto link
        const subject = encodeURIComponent(formData.subject || `Contact from ${formData.name}`);
        const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Purpose: ${formData.purpose || 'Not specified'}
Subject: ${formData.subject || 'Not specified'}

Message:
${formData.message}

--
Sent from portfolio contact form (Development Mode)
        `);
        
        // Open email client
        const mailtoLink = `mailto:hemanth.1si22ei049@gmail.com?subject=${subject}&body=${body}`;
        window.open(mailtoLink, '_blank');

        toast({
          title: "Email Client Opened! 📧",
          description: "Your email client should open with the message pre-filled. For production mode, deploy to Cloudflare Pages for Telegram integration.",
        });
      }
      
      setFormData({
        name: "",
        email: "",
        purpose: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error Sending Message",
        description: (error as Error).message || "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hemanth.1si22ei049@gmail.com",
      href: "mailto:hemanth.1si22ei049@gmail.com",
      color: "primary"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Tumakuru, Karnataka, India",
      href: "#",
      color: "accent"
    }
  ];

  const getContactColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary border-primary/20";
      case "accent":
        return "bg-accent/10 text-accent border-accent/20";
      case "secondary":
        return "bg-secondary/10 text-secondary border-secondary/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/hemanth-s-kumar-207215325",
      color: "primary"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/HEMANTH-S-KUMAR-1",
      color: "secondary"
    }
  ];

  const purposeOptions = [
    "Job Opportunity",
    "Collaboration",
    "Freelance Project",
    "Technical Discussion",
    "Mentorship",
    "Other"
  ];
  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Let's Connect & Collaborate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, 
            and collaborations in embedded systems, IoT, and AI-driven solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for a dedicated engineer for your team, have an 
                exciting project in mind, or just want to connect and discuss technology, 
                I'd love to hear from you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={contact.label}
                  className="border-muted/20 hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <a 
                      href={contact.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className={`p-3 rounded-lg ${getContactColorClasses(contact.color)} group-hover:scale-110 transition-transform`}>
                        {contact.icon}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Connect on Social</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="lg"
                    className="flex-1 hover:scale-105 transition-all duration-300 animate-slide-in-left"
                    style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                    asChild
                  >
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      {social.icon}
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <Card className="border-success/30 bg-gradient-to-br from-success/5 to-success/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-success" />
                  <h4 className="text-lg font-semibold text-success">Available for Opportunities</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Currently seeking roles in <strong>Embedded Systems</strong>, <strong>IoT</strong>, and <strong>AI-driven applications</strong>. 
                  Graduating June 2026.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  Typical response time: Within 24 hours
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                  <Briefcase className="w-4 h-4" />
                  Open to: Full-time, Internships, Freelance Projects
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-primary/30 bg-gradient-card hover:shadow-elevated transition-all duration-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MessageCircle className="w-6 h-6" />
                Send me a message
              </CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information Section */}
                <fieldset className="space-y-4">
                  <legend className="sr-only">Personal Information</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="transition-all duration-300 focus:shadow-glow"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="transition-all duration-300 focus:shadow-glow"
                      />
                    </div>
                  </div>
                </fieldset>
                
                {/* Inquiry Type Section */}
                <fieldset className="space-y-2">
                  <legend className="text-sm font-medium text-foreground">Inquiry Type (Optional)</legend>
                  <Select value={formData.purpose} onValueChange={handleSelectChange}>
                    <SelectTrigger 
                      id="purpose"
                      className="transition-all duration-300 focus:shadow-glow relative z-10"
                    >
                      <SelectValue placeholder="What's this about?" />
                    </SelectTrigger>
                    <SelectContent className="z-50 bg-popover text-popover-foreground border border-border shadow-lg backdrop-blur-sm">
                      {purposeOptions.map((option) => (
                        <SelectItem 
                          key={option} 
                          value={option}
                          className="cursor-pointer hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground px-3 py-2"
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </fieldset>
                
                {/* Message Details Section */}
                <fieldset className="space-y-4">
                  <legend className="sr-only">Message Details</legend>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject Line</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief subject line"
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      required
                      className="transition-all duration-300 focus:shadow-glow resize-none"
                    />
                  </div>
                </fieldset>
                
                {/* Honeypot field for spam protection */}
                <input
                  type="text"
                  name="website"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  aria-label="Leave this field empty"
                />
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;