
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
            data-ai-hint="man mugshot"
          />
          <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-accent rounded-lg -z-10" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">À Propos de Moi</h2>
          <div className="text-muted-foreground space-y-4 text-lg">
            <p>
              Je suis un développeur full stack et concepteur d'interface utilisateur, passionné par la création de solutions numériques élégantes et performantes. J'utilise des technologies comme Next.js, React et Java Spring Boot pour donner vie à des projets robustes.
            </p>
            <p>
              Fondateur de la communauté "DWIN - Devs With INTelligence", j'aime partager mes connaissances et aider d'autres développeurs à progresser. Je suis toujours ouvert à de nouvelles opportunités de collaboration, que ce soit en freelance ou au sein d'une équipe innovante.
            </p>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/jeremie-ekoue-cv.pdf" target="_blank">Télécharger mon CV</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
