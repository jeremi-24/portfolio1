
"use client";

import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext, translations } from '@/context/language-context';
import { Github, Linkedin, GraduationCap } from 'lucide-react';

export default function About() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/jeremi-24" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/jeremie-ekoue-a95873308/" },
  ];

  return (
    <section id="about" className="container h-full flex items-center justify-center px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full max-w-md mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpg"
            alt="Jeremie Ekoue"
            width={600}
            height={600}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="man mugshot"
          />
          <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-accent rounded-lg -z-10" />
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.about.title}</h2>
            <div className="text-muted-foreground space-y-4 text-lg mt-4">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </div>
          
          <div className="space-y-4">
              <h3 className="text-2xl font-bold font-headline flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                {t.about.education.title}
              </h3>
              <div className="text-muted-foreground text-lg">
                <p className="font-semibold">{t.about.education.degree}</p>
                <p>{t.about.education.institution}</p>
              </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/jeremie-ekoue-cv.pdf" target="_blank">{t.about.cvButton}</Link>
            </Button>
            <div className="flex gap-2">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <Button key={name} variant="outline" size="icon" asChild>
                  <Link href={url} target="_blank" aria-label={name}>
                    <Icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
