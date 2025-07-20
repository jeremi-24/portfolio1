
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Workflow } from "lucide-react";

const experiences = [
  {
    role: "Développeur Full-Stack & UI Designer",
    company: "Freelance",
    period: "Sep 2023 - Aujourd'hui",
    description: "Conception et développement d'applications web complètes pour divers clients en utilisant Next.js, React, et Java Spring Boot. Création d'interfaces utilisateur intuitives avec Figma.",
  },
  {
    role: "Fondateur & Mentor",
    company: "DWIN - Devs With INTelligence",
    period: "Août 2023 - Aujourd'hui",
    description: "Création et animation d'une communauté de développeurs. Organisation de sessions de mentorat, de revues de code et production de contenu éducatif.",
  },
  {
    role: "Développeur Java & Angular",
    company: "CAFE INFORMATIQUE & TELECOMMUNICATIONS",
    period: "Juin 2023 - Sep 2023",
    description: "Maintenance et développement de nouvelles fonctionnalités pour des applications bancaires. Amélioration des performances et de la sécurité des systèmes existants.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="h-full flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Mon Parcours Professionnel</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Une chronologie de mes rôles clés et de mes réalisations dans l'industrie technologique.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center">
                <div className="z-10 bg-background p-2 rounded-full border-2 border-primary absolute left-1/2 -translate-x-1/2">
                    <Workflow className="h-6 w-6 text-primary" />
                </div>
              </div>
              <Card className={`relative lg:w-5/12 ${index % 2 === 0 ? 'lg:ml-auto lg:pl-12' : 'lg:mr-auto lg:text-right lg:pr-12'}`}>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                  <CardDescription className="text-base">{exp.company} | {exp.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
