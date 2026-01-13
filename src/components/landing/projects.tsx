
"use client";

import { useContext } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageContext, translations } from "@/context/language-context";
import { ProjectCard } from "../project-card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const allProjects = t.projects.projects;

  const devProjects = allProjects.filter(p => p.category === 'Frontend' || p.category === 'Backend').slice(0, 3);
  const designProjects = allProjects.filter(p => p.category === 'UI Design' || p.category === 'Graphic Design').slice(0, 3);

  const groupTitleClasses = "text-2xl md:text-3xl font-bold font-headline text-center mb-8 pt-12";

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-gradient">{t.projects.title}</h2>
            <p className="max-w-xl text-lg text-muted-foreground font-medium">
              {t.projects.description}
            </p>
          </div>
          <div className="flex gap-4">
            {/* Optional filters could go here */}
          </div>
        </div>

        <div className="space-y-32">
          {devProjects.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-2xl font-bold font-headline flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-primary/30" />
                  {language === 'fr' ? 'Développement' : 'Development'}
                </h3>
                <Link href="/dev" className="text-sm font-bold text-primary hover:underline underline-offset-4">
                  {language === 'fr' ? 'Tout voir' : 'View All'}
                </Link>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
                {devProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} viewDetailsText={t.projects.viewDetails} />
                ))}
              </div>
            </div>
          )}

          {designProjects.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-2xl font-bold font-headline flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-primary/30" />
                  {language === 'fr' ? 'Design Portfolio' : 'Design Portfolio'}
                </h3>
                <Link href="/design" className="text-sm font-bold text-primary hover:underline underline-offset-4">
                  {language === 'fr' ? 'Tout voir' : 'View All'}
                </Link>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
                {designProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} viewDetailsText={t.projects.viewDetails} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
