
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with a custom CMS, payment gateway integration, and a responsive user interface.",
    image: "https://placehold.co/600x400.png",
    hint: "online store",
    tags: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Management Tool",
    description: "A collaborative platform for teams to manage tasks, track progress, and communicate effectively, built with a real-time API.",
    image: "https://placehold.co/600x400.png",
    hint: "dashboard interface",
    tags: ["React", "Java", "WebSocket", "Figma"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my skills and projects, featuring a clean design and smooth animations.",
    image: "https://placehold.co/600x400.png",
    hint: "developer portfolio",
    tags: ["Next.js", "Tailwind CSS", "GenAI"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="h-full flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-t-lg object-cover w-full aspect-video transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project.hint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex flex-col items-start gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                 <div className="flex justify-start gap-4 w-full">
                    <Button asChild>
                      <Link href={project.liveUrl} target="_blank">Live Demo <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={project.repoUrl} target="_blank"><Github className="mr-2 h-4 w-4"/> Source</Link>
                    </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
