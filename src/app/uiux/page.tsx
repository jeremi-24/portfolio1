
"use client";

import { useContext } from 'react';
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Stack from "@/components/landing/stack";
import About from "@/components/landing/about";
import Contact from "@/components/landing/contact";
import Experience from "@/components/landing/experience";
import Footer from "@/components/landing/footer";
import Clients from "@/components/landing/clients";
import { LanguageContext, translations } from "@/context/language-context";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";

function UiUxProjects() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const designProjects = t.projects.projects.filter(p => p.category === 'UI Design' || p.category === 'Graphic Design');

  return (
    <section id="projects" className="h-full flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
                {language === 'fr' ? 'Projets de Design' : 'Design Projects'}
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
                {language === 'fr' ? 'Voici une sélection de mes projets de design, UI/UX et graphisme.' : 'Here is a selection of my design projects, including UI/UX and graphic design.'}
            </p>
        </div>
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} viewDetailsText={t.projects.viewDetails} />
            ))}
        </motion.div>
      </div>
    </section>
  )
}


export default function UiUxHomePage() {

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-x-hidden transition-colors duration-500">
      
      <Header />
      <main className="flex-1 flex flex-col z-10">
        <Hero />
        <Clients />
        <Experience />
        <Stack />
        <UiUxProjects />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
