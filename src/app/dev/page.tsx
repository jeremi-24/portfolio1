
"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { LanguageContext, translations } from "@/context/language-context";
import type { Project } from "@/context/translations";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ project, viewDetailsText }: { project: Project, viewDetailsText: string }) => (
    <motion.div
      key={project.slug}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/projects/${project.slug}`} className="block group">
        <Card className="overflow-hidden rounded-lg relative h-80">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={project.hint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          
          <div className="relative h-full flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold font-headline">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-none">{tag}</Badge>)}
              </div>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-4">
                   <span className="text-sm font-semibold inline-flex items-center">
                      {viewDetailsText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                   </span>
              </div>
          </div>
        </Card>
      </Link>
    </motion.div>
);

export default function DevProjectsPage() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const devProjects = t.projects.projects.filter(p => p.category === 'Frontend' || p.category === 'Backend');

  return (
    <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Code className="h-6 w-6 text-accent" />
                    <span className="font-bold sm:inline-block">
                    Jeremie Ekoue
                    </span>
                </Link>
                <Button variant="outline" size="sm" asChild>
                    <Link href="/#projects">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Portfolio
                    </Link>
                </Button>
            </div>
        </header>
        <main className="container py-12 md:py-20">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-3xl md:text-4xl font-bold font-headline">
                    {language === 'fr' ? 'Projets de Développement' : 'Development Projects'}
                </h1>
                <p className="max-w-2xl mx-auto text-muted-foreground">
                    {language === 'fr' ? 'Voici une sélection de mes projets de développement web, frontend et backend.' : 'Here is a selection of my web development projects, both frontend and backend.'}
                </p>
            </div>
             <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {devProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} viewDetailsText={t.projects.viewDetails} />
                ))}
            </motion.div>
        </main>
    </div>
  );
}
