
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext, translations } from "@/context/language-context";
import Image from "next/image";

export default function Hero() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="home" className="relative w-full h-screen text-center flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        
      </div>

      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center gap-8">
            <motion.div 
              className="relative w-48 h-48 md:w-64 md:h-64"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Image
                src="/profile.jpg"
                alt="Jeremie Ekoue"
                width={600}
                height={600}
                className="rounded-full shadow-xl object-cover aspect-square"
                data-ai-hint="man portrait"
                priority
              />
              <div className="absolute -inset-2 border-2 border-primary rounded-full -z-10 animate-heartbeat" />
            </motion.div>
            <div className="text-center space-y-6">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-headline"
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                >
                    {t.hero.title.split("").map((char, index) => (
                        <motion.span key={char + "-" + index} variants={letter}>
                          {char}
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p
                    className="max-w-2xl mx-auto text-lg text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    {t.hero.subtitle}
                </motion.p>
            </div>
            <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
            >
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                    <Link href="/jeremie-ekoue-cv.pdf" target="_blank">{t.hero.cta}</Link>
                </Button>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
