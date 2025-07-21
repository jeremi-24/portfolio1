
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { LanguageContext, translations } from "@/context/language-context";
import { Workflow } from "lucide-react";
import { useContext, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const experiences = t.experience.experiences;
  
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const height = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);


  return (
    <section id="experience" className="h-full flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.experience.title}</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {t.experience.description}
          </p>
        </div>
        <div ref={targetRef} className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border/40"></div>
          <motion.div 
            style={{ height }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary shadow-lg shadow-primary/50"
          />
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center">
                <div className="z-10 bg-background p-2 rounded-full border-2 border-primary absolute left-1/2 -translate-x-1/2">
                    <Workflow className="h-6 w-6 text-primary" />
                </div>
              </div>
              <Card className={`relative lg:w-5/12 ${index % 2 === 0 ? 'lg:ml-auto lg:pl-8' : 'lg:mr-auto lg:text-right lg:pr-8'}`}>
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
