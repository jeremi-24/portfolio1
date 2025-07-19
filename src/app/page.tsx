
"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Home as HomeIcon, Briefcase, User, MessageSquare, Layers } from "lucide-react";

import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Stack from "@/components/landing/stack";
import Projects from "@/components/landing/projects";
import About from "@/components/landing/about";
import Contact from "@/components/landing/contact";
import PersonalizedGreeting from "@/components/landing/personalized-greeting";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", component: Hero, icon: HomeIcon },
  { id: "stack", component: Stack, icon: Layers },
  { id: "projects", component: Projects, icon: Briefcase },
  { id: "about", component: About, icon: User },
  { id: "contact", component: Contact, icon: MessageSquare },
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
  };
  
  const ActiveComponent = sections[activeIndex].component;

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      <Header />
      <main className="flex-1 flex flex-col">
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
        <Button onClick={goToPrev} size="icon" variant="outline" className="rounded-full h-12 w-12 bg-background/50 backdrop-blur-sm">
          <ArrowLeft />
        </Button>
        {sections.map((section, index) => (
            <Button key={section.id} onClick={() => setActiveIndex(index)} size="icon" variant={activeIndex === index ? "default" : "ghost"} className={cn("rounded-full", activeIndex !== index && 'hover:bg-primary/20 hover:text-primary')}>
                <section.icon className={cn("h-5 w-5", activeIndex === index ? '' : 'text-muted-foreground')}/>
            </Button>
        ))}
        <Button onClick={goToNext} size="icon" variant="outline" className="rounded-full h-12 w-12 bg-background/50 backdrop-blur-sm">
          <ArrowRight />
        </Button>
      </div>
      <PersonalizedGreeting />
    </div>
  );
}
