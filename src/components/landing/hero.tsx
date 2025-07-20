
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
  const name = "Jeremie Ekoue";
  
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
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="container px-4 md:px-6 z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-headline"
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                >
                    {name.split("").map((char, index) => {
                    return (
                        <motion.span key={char + "-" + index} variants={letter}>
                        {char}
                        </motion.span>
                    );
                    })}
                </motion.h1>
                <motion.p 
                    className="max-w-[700px] text-muted-foreground md:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    {t.hero.subtitle}
                </motion.p>
                <motion.div 
                    className="flex justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                >
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="#projects">{t.hero.cta}</Link>
                    </Button>
                </motion.div>
            </div>
            <motion.div 
              className="relative w-full max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Image
                src="https://placehold.co/600x600.png"
                alt="Jeremie Ekoue"
                width={600}
                height={600}
                className="rounded-full shadow-xl object-cover aspect-square"
                data-ai-hint="man portrait"
              />
              <div className="absolute inset-0 border-4 border-primary rounded-full -z-10 animate-pulse" />
            </motion.div>
        </div>
      </div>
    </section>
  );
}
