
"use client";

import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageContext, translations } from "@/context/language-context";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const allProjects = t.projects.projects;
  const filters = t.projects.filters;
  
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  useEffect(() => {
    setActiveFilter(filters[0]);
  }, [language, filters]);

  const filteredProjects = activeFilter === filters[0]
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="h-full flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.projects.title}</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {t.projects.description}
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-12">
            {filters.map(filter => (
                <Button 
                    key={filter} 
                    variant={activeFilter === filter ? 'default' : 'outline'}
                    onClick={() => setActiveFilter(filter)}
                    className="capitalize"
                >
                    {filter}
                </Button>
            ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug} // Use slug as key for consistency across languages
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
                                {t.projects.viewDetails}
                                <ArrowRight className="ml-2 h-4 w-4" />
                             </span>
                        </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
