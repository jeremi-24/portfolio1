
"use client";

import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LanguageContext, translations } from '@/context/language-context';
import type { Translation } from '@/context/translations';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github } from 'lucide-react';

type Project = Translation['projects']['projects'][0];

interface ProjectDetailClientProps {
    project: Project;
    projectLang: keyof typeof translations;
}

export default function ProjectDetailClient({ project, projectLang }: ProjectDetailClientProps) {
  const { language } = useContext(LanguageContext);
  
  // Use the translations for the language in which the project was found,
  // but allow the live UI language to dictate some labels if needed.
  const projectT = translations[projectLang];
  const uiT = translations[language];

  return (
    <div className="container max-w-4xl py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="space-y-6">
                 <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold font-headline">{project.title}</h1>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                </div>
                
                <p className="text-muted-foreground text-lg">{project.description}</p>
               
                <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg">
                        <Link href={project.liveUrl} target="_blank">{uiT.projects.liveDemo} <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg">
                        <Link href={project.repoUrl} target="_blank"><Github className="mr-2 h-4 w-4"/> Source Code</Link>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}
