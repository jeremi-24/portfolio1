
"use client";

import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { LanguageContext, translations } from "@/context/language-context";

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
                setProgress(prev => ({...prev, [tech.name]: tech.level}))
            }, 200)
        })

        return () => {
            timers.forEach(clearTimeout)
        }

    }, []);


  return (
    <section id="stack" className="container h-full flex items-center justify-center px-4 md:px-6">
      <div className="w-full max-w-4xl">
        <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.stack.title}</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
                {t.stack.description}
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {technologies.map((tech) => (
            <div key={tech.name} className={cn("flex flex-col gap-3 p-6 rounded-lg bg-card text-card-foreground shadow-sm")}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Image src={tech.icon} alt={`${tech.name} logo`} width={tech.width} height={tech.height} className={cn('object-contain', { 'h-7 w-7': tech.width === 28, 'h-8 w-8': tech.width === 32 })} />
                        <h3 className="text-lg font-medium">{tech.name}</h3>
                    </div>
                    <span className="font-semibold" style={{ color: 'hsl(var(--primary))' }}>{progress[tech.name] || 0}%</span>
                </div>
                <Progress value={progress[tech.name] || 0} className="h-2 [&>div]:bg-[--color-yellow]" style={{ '--color-yellow': '#FDBE11' } as React.CSSProperties} />
            </div>
        ))}
        </div>
      </div>
    </section>
  );
}
