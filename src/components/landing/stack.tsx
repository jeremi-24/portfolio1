
"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { JavaScriptIcon, JavaIcon, NextjsIcon, SpringbootIcon, TypescriptIcon, FigmaIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const technologies = [
  { name: "JavaScript", icon: JavaScriptIcon, level: 90 },
  { name: "TypeScript", icon: TypescriptIcon, level: 85 },
  { name: "Next.js", icon: NextjsIcon, level: 95 },
  { name: "Java", icon: JavaIcon, level: 80 },
  { name: "Spring Boot", icon: SpringbootIcon, level: 75 },
  { name: "UI Design (Figma)", icon: FigmaIcon, level: 90 },
];

export default function Stack() {
    const [progress, setProgress] = useState<{ [key: string]: number }>({});

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
            <h2 className="text-3xl md:text-4xl font-bold font-headline">My Arsenal</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
                I wield a versatile set of tools and technologies to build robust, scalable, and user-friendly web applications.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {technologies.map((tech) => (
            <div key={tech.name} className={cn("flex flex-col gap-3 p-6 rounded-lg bg-card text-card-foreground shadow-sm", { 'glass': false})}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <tech.icon className="h-7 w-7 text-primary" />
                        <h3 className="text-lg font-medium">{tech.name}</h3>
                    </div>
                    <span className="font-semibold text-primary">{progress[tech.name] || 0}%</span>
                </div>
                <Progress value={progress[tech.name] || 0} className="h-2" />
            </div>
        ))}
        </div>
      </div>
    </section>
  );
}
