
"use client";

import { useState, useEffect, useCallback, useContext, useRef } from "react";
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
import { cn } from "@/lib/utils";
import Footer from "@/components/landing/footer";
import Clients from "@/components/landing/clients";
import AudioPlayer from "@/components/landing/audio-player";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("hero");
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    stack: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (sectionId: string) => {
    const ref = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'neon');
  }, [])

  const navItems = [
    { id: "hero", label: "Home", icon: HomeIcon },
    { id: "experience", label: "Experience", icon: Workflow },
    { id: "stack", label: "Stack", icon: Layers },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-x-hidden transition-colors duration-500">
      
      <Header />
      <main className="flex-1 flex flex-col z-10">
        <Hero />
        <Clients />
        <Experience />
        <Stack />
        <Projects />
        <About />
        <Contact />
      </main>
      
      <PersonalizedGreeting />
      <AudioPlayer />
      <Footer />
    </div>
  );
}
