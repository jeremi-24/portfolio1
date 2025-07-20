
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const allProjects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with a custom CMS, payment gateway integration, and a responsive user interface.",
    image: "https://placehold.co/600x400.png",
    hint: "online store",
    category: "Frontend",
    tags: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Management Tool",
    description: "A collaborative platform for teams to manage tasks, track progress, and communicate effectively, built with a real-time API.",
    image: "https://placehold.co/600x400.png",
    hint: "dashboard interface",
    category: "Frontend",
    tags: ["React", "Java", "WebSocket", "Figma"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Brand Identity Design",
    description: "Complete branding package for a startup, including logo design, color palette, and marketing materials.",
    image: "https://placehold.co/600x400.png",
    hint: "branding design",
    category: "Graphic Design",
    tags: ["Figma", "Illustrator"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Mobile App UI",
    description: "A sleek and intuitive user interface design for a new social networking mobile application.",
    image: "https://placehold.co/600x400.png",
    hint: "mobile app",
    category: "UI Design",
    tags: ["Figma", "UI/UX"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my skills and projects, featuring a clean design and smooth animations.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMY6E3NnZnAQlhYW7VTD1Sn3w3a-CHrJdJg&s",
    hint: "developer portfolio",
    category: "Frontend",
    tags: ["Next.js", "Tailwind CSS", "GenAI"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Marketing Campaign Graphics",
    description: "Created a series of engaging graphics and visuals for a digital marketing campaign, boosting user engagement.",
    image: "https://placehold.co/600x400.png",
    hint: "marketing graphics",
    category: "Graphic Design",
    tags: ["Photoshop", "Figma"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const filters = ["Tous", "Frontend", "UI Design", "Graphic Design"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects = activeFilter === "Tous"
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="h-full flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle.
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
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group overflow-hidden rounded-lg relative h-80">
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
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <p className="text-sm text-white/90 mb-4">{project.description}</p>
                           <div className="flex justify-start gap-2 w-full">
                              <Button asChild size="sm">
                                <Link href={project.liveUrl} target="_blank">Live Demo <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                              </Button>
                              <Button asChild variant="secondary" size="sm">
                                <Link href={project.repoUrl} target="_blank"><Github className="mr-2 h-4 w-4"/> Source</Link>
                              </Button>
                          </div>
                      </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
