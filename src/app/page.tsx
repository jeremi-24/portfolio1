
"use client";

import { useState, useEffect, useCallback, useContext } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Home as HomeIcon, Briefcase, User, MessageSquare, Layers, Workflow } from "lucide-react";

import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Stack from "@/components/landing/stack";
import Projects from "@/components/landing/projects";
import About from "@/components/landing/about";
import Contact from "@/components/landing/contact";
import Experience from "@/components/landing/experience";
import PersonalizedGreeting from "@/components/landing/personalized-greeting";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { LanguageContext, translations } from "@/context/language-context";

const sections = [
  { id: "hero", component: Hero, icon: HomeIcon },
  { id: "experience", component: Experience, icon: Workflow },
  { id: "stack", component: Stack, icon: Layers },
  { id: "projects", component: Projects, icon: Briefcase },
  { id: "about", component: About, icon: User },
  { id: "contact", component: Contact, icon: MessageSquare },
];

const themes = [
    { name: 'neon', color: '#ff00ff' },
    { name: 'liquid-glass', color: '#87CEEB' },
    { name: 'random', color: '#4b5563' }
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTheme, setCurrentTheme] = useState('default');
  const { language } = useContext(LanguageContext);
  const t = translations[language];


  const goToNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
  }, []);
  
  const ActiveComponent = sections[activeIndex].component;

  const generateRandomTheme = () => {
    const randomHue = Math.floor(Math.random() * 360);
    const root = document.documentElement;
    root.style.setProperty('--background', `${randomHue} 10% 10%`);
    root.style.setProperty('--foreground', `${randomHue} 10% 95%`);
    root.style.setProperty('--primary', `${(randomHue + 150) % 360} 80% 60%`);
    root.style.setProperty('--accent', `${(randomHue + 210) % 360} 80% 65%`);
    root.style.setProperty('--card', `${randomHue} 10% 15%`);
    root.style.setProperty('--secondary', `${randomHue} 10% 20%`);
    root.style.setProperty('--border', `${randomHue} 10% 25%`);
    root.style.setProperty('--input', `${randomHue} 10% 25%`);
    root.setAttribute('data-theme', 'random');
    setCurrentTheme('random');
  };

  const applyTheme = (themeName: string) => {
    const root = document.documentElement;
    root.style.cssText = '';

    if (themeName === 'random') {
      generateRandomTheme();
    } else {
      root.setAttribute('data-theme', themeName);
      setCurrentTheme(themeName);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'default');
    setCurrentTheme('default');
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNext, goToPrev]);

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden transition-colors duration-500">
      
      {currentTheme === 'liquid-glass' && (
        <Image
          src="https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-3840x2160-1455.jpg"
          alt="macOS wallpaper background"
          fill={true}
          style={{objectFit: 'cover'}}
          className="absolute inset-0 z-0"
        />
      )}

      <Header />
      <main className="flex-1 flex flex-col z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex-1"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>
      
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
        <Button onClick={goToPrev} size="icon" variant="outline" className="rounded-full h-12 w-12 bg-background/50 backdrop-blur-sm transition-transform hover:-translate-y-1">
          <ArrowLeft />
        </Button>
        {sections.map((section, index) => (
            <Button key={section.id} onClick={() => setActiveIndex(index)} size="icon" variant={activeIndex === index ? "default" : "ghost"} className={cn("rounded-full transition-transform hover:-translate-y-1", activeIndex !== index && 'hover:bg-primary/20 hover:text-primary')}>
                <section.icon className={cn("h-5 w-5", activeIndex === index ? '' : 'text-muted-foreground')}/>
            </Button>
        ))}
        <Button onClick={goToNext} size="icon" variant="outline" className="rounded-full h-12 w-12 bg-background/50 backdrop-blur-sm transition-transform hover:-translate-y-1">
          <ArrowRight />
        </Button>
      </div>

      <div className="fixed left-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
          <TooltipProvider>
            {themes.map(theme => (
                 <Tooltip key={theme.name}>
                     <TooltipTrigger asChild>
                        <button onClick={() => applyTheme(theme.name)} className="w-4 h-4 rounded-full border-2 border-foreground/50 transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-ring" style={{ backgroundColor: theme.color }}></button>
                     </TooltipTrigger>
                     <TooltipContent side="right">
                         <p className="capitalize">{t.themes[theme.name as keyof typeof t.themes]}</p>
                     </TooltipContent>
                 </Tooltip>
            ))}
          </TooltipProvider>
      </div>

      <PersonalizedGreeting />
    </div>
  );
}
