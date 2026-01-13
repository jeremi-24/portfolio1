
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code } from "lucide-react";
import { useContext } from "react";
import { LanguageContext, translations } from "@/context/language-context";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/jeremi-24" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/jeremie-ekoue-a95873308/" },
  ];

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="#home" className="font-bold text-2xl font-headline tracking-tighter">
              JE<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground font-medium">
              &copy; {new Date().getFullYear()} Jeremie Ekoue.
            </p>
          </div>

          <nav className="flex items-center gap-8">
            {socialLinks.map(({ name, icon: Icon, url }) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                aria-label={name}
              >
                {name}
              </Link>
            ))}
          </nav>

          <div className="text-sm text-muted-foreground font-medium">
            Built with <span className="text-primary">Next.js</span> & <span className="text-primary">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
