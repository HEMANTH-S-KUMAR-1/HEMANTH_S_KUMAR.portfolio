import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem('color-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    setIsDark(shouldBeDark);
    
    // Apply theme to document
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={toggleTheme}
            size="icon"
            className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-elevated
                       transition-all duration-300 hover:scale-110 border-2
                       ${isDark 
                         ? 'bg-slate-900 text-amber-300 border-indigo-500/40 hover:shadow-glow ring-2 ring-indigo-500/40' 
                         : 'bg-white text-slate-900 border-slate-200 hover:shadow-card'
                       }`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 animate-fade-in" />
            ) : (
              <Moon className="w-5 h-5 animate-fade-in" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="font-medium">
          Toggle theme
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeToggle;