
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
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <motion.div 
            className="absolute top-[-10%] right-[30%] h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl"
            animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.05, 1],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
            }}
        />
        <motion.div 
            className="absolute bottom-[-10%] left-[10%] h-[400px] w-[600px] rounded-full bg-accent/30 blur-3xl"
            animate={{
                x: [0, -40, 0],
                y: [0, 20, 0],
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
            }}
        />
      </div>

      <div className="container px-4 md:px-6 z-20">
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
              <div className="absolute -inset-2 border-4 border-primary rounded-full -z-10 animate-heartbeat" />
            </motion.div>
            <div className="text-center space-y-6">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-headline"
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                >
                    {t.hero.title.split("").map((char, index) => {
                    return (
                        <motion.span key={char + "-" + index} variants={letter}>
                        {char}
                        </motion.span>
                    );
                    })}
                </motion.h1>
                <motion.p 
                    className="max-w-[700px] mx-auto text-muted-foreground md:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    {t.hero.subtitle}
                </motion.p>
                <motion.div 
                    className="flex flex-col sm:flex-row justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                >
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href="#projects">{t.hero.cta}</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href="/jeremie-ekoue-cv.pdf" target="_blank">{t.about.cvButton}</Link>
                    </Button>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}
