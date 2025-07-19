"use client";

import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JavaScriptIcon, JavaIcon, NextjsIcon, SpringbootIcon, TypescriptIcon, FigmaIcon } from "@/components/icons";
import { useOnScreen } from "@/hooks/use-on-screen";
import { cn } from "@/lib/utils";

const technologies = [
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "TypeScript", icon: TypescriptIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "Java", icon: JavaIcon },
  { name: "Spring Boot", icon: SpringbootIcon },
  { name: "UI Design (Figma)", icon: FigmaIcon },
];

export default function Stack() {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useOnScreen(ref);

  return (
    <section id="stack" ref={ref} className={cn("container px-4 md:px-6 transition-all duration-700 ease-out", isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">My Tech Stack</h2>
        <p className="max-w-2xl text-muted-foreground">
          I specialize in a modern tech stack, enabling me to build robust, scalable, and user-friendly web applications.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
        {technologies.map((tech, index) => (
          <Card key={tech.name} className="flex flex-col items-center justify-center p-6 text-center bg-card hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1" style={{ animation: isIntersecting ? `fade-in-up 0.5s ease-out ${index * 0.1}s forwards` : 'none', opacity: 0 }}>
            <CardContent className="p-0">
              <tech.icon className="h-16 w-16 text-primary" />
            </CardContent>
            <CardHeader className="p-0 mt-4">
              <CardTitle className="text-lg font-medium">{tech.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
