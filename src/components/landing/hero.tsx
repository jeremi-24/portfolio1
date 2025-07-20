
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
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
        <div className="grid gap-6">
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
            className="max-w-[700px] mx-auto text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Un développeur passionné 💻 & UI Designer 🎨 qui transforme des problèmes complexes en designs magnifiques et intuitifs.
          </motion.p>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#projects">Découvrir mes projets</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
