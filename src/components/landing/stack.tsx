
"use client";

import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { JavaIcon, SpringbootIcon, FigmaIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { LanguageContext, translations } from "@/context/language-context";

const technologies = [
  { name: "JavaScript", icon: "https://icon2.cleanpng.com/20180917/rgp/kisspng-javascript-logo-product-design-brand-1713939908433.webp", level: 90, type: 'image' },
  { name: "TypeScript", icon: "https://pngate.com/wp-content/uploads/2025/05/typescript-logo-blue-square-modern-design-icon-1.png", level: 85, type: 'image' },
  { name: "Next.js", icon: "https://w7.pngwing.com/pngs/643/143/png-transparent-nextjs-hd-logo.png", level: 95, type: 'image' },
  { name: "Java", icon: JavaIcon, level: 80, type: 'icon' },
  { name: "Spring Boot", icon: SpringbootIcon, level: 75, type: 'icon' },
  { name: "UI Design (Figma)", icon: FigmaIcon, level: 90, type: 'icon' },
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
            <div key={tech.name} className={cn("flex flex-col gap-3 p-6 rounded-lg bg-card text-card-foreground shadow-sm", { 'glass': false})}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        {tech.type === 'image' ? (
                            <Image src={tech.icon as string} alt={`${tech.name} logo`} width={28} height={28} className="h-7 w-7 object-contain" />
                        ) : (
                            <tech.icon className="h-7 w-7 text-primary" />
                        )}
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
