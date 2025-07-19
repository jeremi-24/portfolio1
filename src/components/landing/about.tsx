
"use client";

import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="container h-full flex items-center justify-center px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full max-w-md mx-auto">
          <Image
            src="https://placehold.co/600x600.png"
            alt="Jeremie Ekoue"
            width={600}
            height={600}
            className="rounded-lg shadow-xl"
            data-ai-hint="developer portrait"
          />
           <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-accent rounded-lg -z-10" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">A Little Bit About Me</h2>
          <div className="text-muted-foreground space-y-4 text-lg">
            <p>
              I am a versatile developer and UI designer with a passion for creating beautiful, functional, and user-centered digital experiences. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life from concept to deployment.
            </p>
            <p>
              My journey in tech began with a curiosity for how things work, which evolved into a career where I continuously learn and adapt to new challenges. I thrive in collaborative environments and am always eager to contribute to innovative projects.
            </p>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
             <Link href="/jeremie-ekoue-cv.pdf" target="_blank">Download CV</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
