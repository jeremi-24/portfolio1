
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Workflow } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description: "Led the development of a new client-facing dashboard using Next.js and TypeScript. Mentored junior developers and improved code quality across the team.",
  },
  {
    role: "Full-Stack Developer",
    company: "Innovate Co.",
    period: "2018 - 2020",
    description: "Developed and maintained web applications using React, Node.js, and Java Spring Boot. Worked closely with designers to implement pixel-perfect UIs.",
  },
  {
    role: "UI/UX Design Intern",
    company: "Creative Designs LLC",
    period: "Summer 2017",
    description: "Assisted in designing user interfaces for mobile and web applications. Created wireframes, mockups, and prototypes using Figma.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="h-full flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">My Professional Journey</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A timeline of my key roles and accomplishments in the tech industry.
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
