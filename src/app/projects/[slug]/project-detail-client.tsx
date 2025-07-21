
"use client";

import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LanguageContext, translations } from '@/context/language-context';
import type { Project } from '@/context/translations';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github, ChevronRight } from 'lucide-react';

interface ProjectDetailClientProps {
    project: Project;
    projectLang: keyof typeof translations;
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary mt-12 mb-6">{children}</h2>
);

export default function ProjectDetailClient({ project, projectLang }: ProjectDetailClientProps) {
  const { language } = useContext(LanguageContext);
  
  const uiT = translations[language];
  const isUIDesignProject = project.category === 'UI Design' || project.category === 'UI-Design';

  const hasExtraContent = project.contextAndObjective || project.problem || project.wireframeImage || project.finalUIImage || project.process;

  return (
    <div className="container max-w-4xl py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
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
                        <Link href={project.repoUrl} target="_blank"><Github className="mr-2 h-4 w-4"/> {uiT.projects.detailPage.sourceCode}</Link>
                    </Button>
                </div>
            </div>
        </div>

        {hasExtraContent && (
            <div className="mt-16">
                
                {isUIDesignProject && project.process && (
                    <>
                        <SectionTitle>{uiT.projects.detailPage.quickProcess}</SectionTitle>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
                            {project.process.map((step, index) => (
                                <div key={step} className="flex items-center gap-4 md:gap-8">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mb-2 border-2 border-primary/20">{index + 1}</div>
                                        <p className="font-semibold">{step}</p>
                                    </div>
                                    {index < project.process.length - 1 && <ChevronRight className="h-8 w-8 text-muted-foreground hidden md:block" />}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {project.contextAndObjective && (
                    <>
                        <SectionTitle>{uiT.projects.detailPage.contextAndObjective}</SectionTitle>
                        <p className="text-muted-foreground text-lg">{project.contextAndObjective}</p>
                    </>
                )}

                {project.problem && (
                    <>
                        <SectionTitle>{uiT.projects.detailPage.identifiedProblem}</SectionTitle>
                        <p className="text-muted-foreground text-lg">{project.problem}</p>
                    </>
                )}

                {project.wireframeImage && (
                    <>
                        <SectionTitle>{isUIDesignProject ? uiT.projects.detailPage.wireframes : uiT.projects.detailPage.feature1}</SectionTitle>
                        <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg mt-4 border">
                            <Image
                                src={project.wireframeImage}
                                alt="Wireframe or Feature 1"
                                fill
                                className="object-contain p-4"
                                data-ai-hint="wireframe sketch app feature"
                            />
                        </div>
                    </>
                )}
                
                {project.finalUIImage && (
                     <>
                        <SectionTitle>{isUIDesignProject ? uiT.projects.detailPage.finalUI : uiT.projects.detailPage.feature2}</SectionTitle>
                        <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg mt-4 border">
                            <Image
                                src={project.finalUIImage}
                                alt="Final UI or Feature 2"
                                fill
                                className="object-cover"
                                data-ai-hint="app interface feature"
                            />
                        </div>
                    </>
                )}
            </div>
        )}
    </div>
  );
}
