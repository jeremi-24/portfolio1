
"use client";

import { useContext } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { LanguageContext, translations } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github } from 'lucide-react';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  // Find the project by slug. We need to check all language versions.
  let project = null;
  let projectLang = language;

  // Prioritize current language
  project = translations[language].projects.projects.find(p => p.slug === params.slug);
  
  // If not found, search in other languages
  if (!project) {
    for (const lang of Object.keys(translations)) {
        const foundProject = translations[lang as keyof typeof translations].projects.projects.find(p => p.slug === params.slug);
        if (foundProject) {
            project = foundProject;
            projectLang = lang as keyof typeof translations;
            break;
        }
    }
  }

  if (!project) {
    notFound();
  }

  // Use the translations for the language in which the project was found
  const projectT = translations[projectLang];


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
                        <Link href={project.liveUrl} target="_blank">{projectT.projects.liveDemo} <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
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

// This function is needed for Next.js to know which dynamic routes to pre-render at build time.
export async function generateStaticParams() {
    const slugs = new Set<string>();
    Object.values(translations).forEach(lang => {
        lang.projects.projects.forEach(project => {
            slugs.add(project.slug);
        });
    });

    return Array.from(slugs).map(slug => ({ slug }));
}
