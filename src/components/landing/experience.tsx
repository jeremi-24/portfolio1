
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
    <section id="experience" className="relative py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-5xl md:text-6xl font-bold font-headline tracking-tighter text-gradient leading-tight">
              {t.experience.title}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              {t.experience.description}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="group relative pl-8 border-l border-white/10"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50 group-hover:scale-150 transition-transform" />
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-2xl font-bold font-headline">{exp.role}</h3>
                    <span className="text-sm font-bold text-primary uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <div className="text-lg font-semibold text-foreground/80">{exp.company}</div>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl italic">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
