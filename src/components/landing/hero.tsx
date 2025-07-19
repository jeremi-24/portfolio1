import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container px-4 md:px-6 z-20">
        <div className="grid gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-headline animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Jeremie Ekoue
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            A passionate Developer & UI Designer creating seamless and innovative digital experiences.
            I turn complex problems into beautiful, intuitive designs.
          </p>
          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
