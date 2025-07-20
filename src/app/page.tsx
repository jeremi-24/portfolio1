
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

export default function HomePage() {
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'neon');
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-x-hidden transition-colors duration-500">
      
      <Header />
      <main className="flex-1 flex flex-col z-10">
        <Hero />
        <Experience />
        <Stack />
        <Projects />
        <About />
        <Contact />
      </main>
      
      <PersonalizedGreeting />
      <Footer />
    </div>
  );
}
