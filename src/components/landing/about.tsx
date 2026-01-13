
"use client";

import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext, translations } from '@/context/language-context';
import { Github, Linkedin, GraduationCap } from 'lucide-react';
import { motion } from "framer-motion";

export default function About() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/jeremi-24" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/jeremie-ekoue-a95873308/" },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/flyer.png"
                alt="Jeremie Ekoue"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-gradient">{t.about.title}</h2>
              <div className="text-muted-foreground space-y-6 text-lg leading-relaxed font-medium">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
            </div>

            <div className="glass p-8 rounded-[2rem] space-y-4 border-white/10">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3 text-primary">
                <GraduationCap className="h-6 w-6" />
                {t.about.education.title}
              </h3>
              <div className="space-y-2">
                <p className="font-bold text-foreground">{t.about.education.degree}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">{t.about.education.institution}</p>
                <p className="text-sm italic text-primary/80">{t.about.education.autodidacte}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 items-center pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-10 h-14 font-bold shadow-xl shadow-primary/20">
                <a href="/jeremie-ekoue-cv.pdf" target="_blank">{t.about.cvButton}</a>
              </Button>
              <div className="flex gap-4">
                {socialLinks.map(({ name, icon: Icon, url }) => (
                  <Link
                    key={name}
                    href={url}
                    target="_blank"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
                    aria-label={name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
