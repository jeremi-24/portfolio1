
"use client";

import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext, translations } from '@/context/language-context';

export default function About() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

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
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.about.title}</h2>
          <div className="text-muted-foreground space-y-4 text-lg">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/jeremie-ekoue-cv.pdf" target="_blank">{t.about.cvButton}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
