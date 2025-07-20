import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/jeremi-24" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/jeremie-ekoue-a95873308/" },
  ];

  return (
    <footer className="bg-background/50 border-t absolute bottom-0 w-full z-0">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-lg font-headline">
             <Code className="h-6 w-6 text-accent" />
             <span>Jeremie Ekoue</span>
          </div>
          <div className="flex gap-2">
            {socialLinks.map(({ name, icon: Icon, url }) => (
              <Button key={name} variant="ghost" size="icon" asChild>
                <Link href={url} target="_blank" aria-label={name}>
                  <Icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Jeremie Ekoue. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
