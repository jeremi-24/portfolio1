
"use client";

import { useState, useEffect, useCallback, useContext, useRef } from "react";
import Image from "next/image";
import { Home as HomeIcon, Briefcase, User, MessageSquare, Layers, Workflow } from "lucide-react";

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
import { LanguageContext, translations } from "@/context/language-context";

const sections = [
  { id: "hero", component: Hero, icon: HomeIcon },
  { id: "experience", component: Experience, icon: Workflow },
  { id: "stack", component: Stack, icon: Layers },
  { id: "projects", component: Projects, icon: Briefcase },
  { id: "about", component: About, icon: User },
  { id: "contact", component: Contact, icon: MessageSquare },
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);


  const goToNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
  }, []);
  
  const ActiveComponent = sections[activeIndex].component;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'neon');
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

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (scrollTimeout.current) {
        return;
      }

      if (event.deltaY > 50) {
        goToNext();
      } else if (event.deltaY < -50) {
        goToPrev();
      }

      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 800);
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [goToNext, goToPrev]);

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden transition-colors duration-500">
      
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
      
      <div className="fixed bottom-5 left-5 z-50 flex items-center gap-2 bg-card/60 backdrop-blur-sm p-2 rounded-full">
        {sections.map((section, index) => (
            <Button key={section.id} onClick={() => setActiveIndex(index)} size="icon" variant={activeIndex === index ? "default" : "ghost"} className={cn("rounded-full h-14 w-14 transition-transform hover:-translate-y-3", activeIndex !== index && 'hover:bg-primary/20 hover:text-primary')}>
                <section.icon className={cn("h-8 w-8", activeIndex === index ? '' : 'text-muted-foreground')}/>
            </Button>
        ))}
      </div>

      <PersonalizedGreeting />
    </div>
  );
}
