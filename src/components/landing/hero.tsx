
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useContext, useRef } from "react";
import { LanguageContext, translations } from "@/context/language-context";
import Image from "next/image";
import Projects from "./projects";

export default function Hero() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Animate image
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '10vh']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  
  // Animate title
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5, 0.7], [1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh']);

  // Animate projects carousel
  const projectsOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);
  const projectsY = useTransform(scrollYProgress, [0, 0.5, 1], ['100vh', '100vh', '0vh']);
  
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
    <section id="home" ref={targetRef} className="relative w-full h-[200vh] text-center">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
      
        <div className="absolute inset-0 z-0">
          <motion.div 
              className="absolute top-[-10%] right-[30%] h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl"
              animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
          <motion.div 
              className="absolute bottom-[-10%] left-[10%] h-[400px] w-[600px] rounded-full bg-accent/30 blur-3xl"
              animate={{ x: [0, -40, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
        </div>

        <div className="container px-4 md:px-6 z-20">
          <motion.div style={{ y, scale }} className="flex flex-col items-center gap-8">
              <motion.div 
                style={{ y: imageY }}
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
              <motion.div className="text-center space-y-6" style={{ opacity: titleOpacity, y: titleY }}>
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
              </motion.div>
          </motion.div>
        </div>

        <motion.div style={{ opacity: projectsOpacity, y: projectsY }} className="absolute bottom-0 left-0 w-full h-auto">
            <Projects />
        </motion.div>
      </div>
    </section>
  );
}
