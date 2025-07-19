
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section id="projects" className="h-full flex items-center justify-center bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Projects</h2>
          <p className="max-w-2xl text-muted-foreground">
            Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={project.title} className={cn("overflow-hidden transform hover:-translate-y-2 transition-transform duration-300")}>
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-t-lg object-cover w-full aspect-video"
                  data-ai-hint={project.hint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </CardContent>
              <CardFooter className="p-6 bg-secondary/30 flex justify-between">
                <Button asChild variant="ghost">
                  <Link href={project.liveUrl}>Live Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={project.repoUrl}>GitHub</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
