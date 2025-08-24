import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md text-center shadow-elevated">
        <CardHeader className="pb-6">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-warning/10 flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-warning" />
          </div>
          <CardTitle className="text-3xl font-bold text-foreground">404</CardTitle>
          <p className="text-lg text-muted-foreground">Page Not Found</p>
        </CardHeader>
        <CardContent className="pb-8">
          <p className="text-muted-foreground mb-6">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Button 
            asChild 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <a href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return to Home
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
