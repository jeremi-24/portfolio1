
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JavaScriptIcon, JavaIcon, NextjsIcon, SpringbootIcon, TypescriptIcon, FigmaIcon } from "@/components/icons";

const technologies = [
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "TypeScript", icon: TypescriptIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "Java", icon: JavaIcon },
  { name: "Spring Boot", icon: SpringbootIcon },
  { name: "UI Design (Figma)", icon: FigmaIcon },
];

export default function Stack() {
  return (
    <section id="stack" className="container h-full flex items-center justify-center px-4 md:px-6">
      <div className="w-full">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">My Tech Stack</h2>
          <p className="max-w-2xl text-muted-foreground">
            I specialize in a modern tech stack, enabling me to build robust, scalable, and user-friendly web applications.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          {technologies.map((tech) => (
            <Card key={tech.name} className="flex flex-col items-center justify-center p-6 text-center bg-card hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <tech.icon className="h-16 w-16 text-primary" />
              </CardContent>
              <CardHeader className="p-0 mt-4">
                <CardTitle className="text-lg font-medium">{tech.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
