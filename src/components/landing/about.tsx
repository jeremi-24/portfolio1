
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
            alt="Jeremie Ekoue holding a 'HIRE ME' sign"
            width={600}
            height={600}
            className="rounded-lg shadow-xl"
            data-ai-hint="man mugshot"
          />
           <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-accent rounded-lg -z-10" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">WANTED: For Challenging Projects</h2>
          <div className="text-muted-foreground space-y-4 text-lg">
            <p>
              Armed with a keyboard and a dangerous amount of creativity, I'm a developer and UI designer on the lookout for my next big mission. I specialize in building beautiful, functional, and user-centered digital experiences.
            </p>
            <p>
              My record shows a history of capturing complex ideas and turning them into seamless applications. I thrive in collaborative environments and am ready to be brought in for questioning on any innovative project.
            </p>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
             <Link href="/jeremie-ekoue-cv.pdf" target="_blank">View the Evidence (CV)</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
