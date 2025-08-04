
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
                    <div className="text-center mt-8">
                      <Button asChild variant="outline">
                        <Link href="/dev">
                          {language === 'fr' ? 'Voir tous les projets de développement' : 'View All Dev Projects'}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
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
                    <div className="text-center mt-8">
                      <Button asChild variant="outline">
                        <Link href="/design">
                          {language === 'fr' ? 'Voir tous les projets de design' : 'View All Design Projects'}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                </div>
            )}
        </div>
      </div>
    </section>
  );
}
