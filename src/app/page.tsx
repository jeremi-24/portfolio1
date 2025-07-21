
"use client";

import { useEffect } from "react";

import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Stack from "@/components/landing/stack";
import Projects from "@/components/landing/projects";
import About from "@/components/landing/about";
import Contact from "@/components/landing/contact";
import Experience from "@/components/landing/experience";
import Footer from "@/components/landing/footer";
import Clients from "@/components/landing/clients";

export default function HomePage() {
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'neon');
  }, [])

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
      
      <Footer />
    </div>
  );
}
