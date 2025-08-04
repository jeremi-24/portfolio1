
"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageContext, translations } from "@/context/language-context";
import type { Project } from "@/context/translations";

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

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const allProjects = t.projects.projects;
  
  const devProjects = allProjects.filter(p => p.category === 'Frontend' || p.category === 'Backend');
  const designProjects = allProjects.filter(p => p.category === 'UI Design' || p.category === 'Graphic Design');

  const groupTitleClasses = "text-2xl md:text-3xl font-bold font-headline text-center mb-8 pt-12";

  return (
    <section id="projects" className="h-full flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.projects.title}</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {t.projects.description}
          </p>
        </div>

        <div>
            {devProjects.length > 0 && (
                <div>
                    <h3 className={groupTitleClasses}>
                      {language === 'fr' ? 'Développement Web (Frontend & Backend)' : 'Web Development (Frontend & Backend)'}
                    </h3>
                    <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                       <AnimatePresence>
                          {devProjects.map((project) => (
                              <ProjectCard key={project.slug} project={project} viewDetailsText={t.projects.viewDetails} />
                          ))}
                       </AnimatePresence>
                    </motion.div>
                </div>
            )}
            
            {designProjects.length > 0 && (
                 <div>
                    <h3 className={groupTitleClasses}>
                        {language === 'fr' ? 'Design (UI & Graphisme)' : 'Design (UI & Graphics)'}
                    </h3>
                    <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                       <AnimatePresence>
                          {designProjects.map((project) => (
                              <ProjectCard key={project.slug} project={project} viewDetailsText={t.projects.viewDetails} />
                          ))}
                       </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </div>
      </div>
    </section>
  );
}
