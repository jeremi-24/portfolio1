
"use client";

import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { LanguageContext, translations } from "@/context/language-context";
import { motion } from "framer-motion";

const technologies = [
  { name: "JavaScript", icon: "/js.svg", level: 90, width: 28, height: 28 },
  { name: "TypeScript", icon: "/ts.svg", level: 85, width: 28, height: 28 },
  { name: "React", icon: "/react.svg", level: 95, width: 28, height: 28 },
  { name: "Next.js", icon: "/next.svg", level: 95, width: 28, height: 28 },
  { name: "Node.js", icon: "/node.svg", level: 80, width: 28, height: 28 },
  { name: "Firebase", icon: "/firebase.svg", level: 75, width: 28, height: 28 },
  { name: "Java", icon: "/java.svg", level: 80, width: 32, height: 32 },
  { name: "Spring Boot", icon: "/spring.svg", level: 75, width: 32, height: 32 },
  { name: "UI Design (Figma)", icon: "/figma.svg", level: 90, width: 28, height: 28 },
];

export default function Stack() {
  const [progress, setProgress] = useState<{ [key: string]: number }>({});
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  useEffect(() => {
    const newProgress: { [key: string]: number } = {};
    technologies.forEach(tech => {
      newProgress[tech.name] = 0;
    });

    const timers = technologies.map(tech => {
      return setTimeout(() => {
        setProgress(prev => ({ ...prev, [tech.name]: tech.level }))
      }, 200)
    })

    return () => {
      timers.forEach(clearTimeout)
    }

  }, []);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section id="stack" className="relative py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-gradient leading-tight">
            {t.stack.title}
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            {t.stack.description}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="glass group p-8 rounded-[2rem] flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="relative w-16 h-16 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </span>
              <div className="w-12 h-[1px] bg-white/10 group-hover:bg-primary/50 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
