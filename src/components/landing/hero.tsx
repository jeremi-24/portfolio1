
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
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="container px-4 md:px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
        <div className="flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-4">
              {t.hero.cta}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline leading-[1.1] tracking-tighter text-gradient">
              {t.hero.title}
            </h1>
          </motion.div>

          <motion.p
            className="max-w-xl text-base md:text-lg text-muted-foreground font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base font-bold shadow-xl shadow-primary/20 group">
              {t.nav.projects}
              <motion.span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</motion.span>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-bold bg-white/5 border-white/10 hover:bg-white/10">
              {t.nav.contact}
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-square w-full max-w-md ml-auto">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-blue-500 rounded-[2.5rem] blur-2xl opacity-20 animate-pulse" />
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/profile.png"
                alt="Jeremie Ekoue"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
            </div>
            {/* Floating Badges */}
           
          </div>
        </motion.div>
      </div>
    </section>
  );
}
