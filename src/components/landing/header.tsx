
"use client";

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageContext, translations } from "@/context/language-context";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: t.nav.home },
    { href: "#experience", label: t.nav.experience },
    { href: "#stack", label: t.nav.stack },
    { href: "#projects", label: t.nav.projects },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="#home" className="flex items-center gap-2 font-bold text-lg font-headline">
            <Code className="h-6 w-6 text-accent" />
            <span>Jeremie Ekoue</span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
              {/* This is where the nav items could go if we wanted them in the header */}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setLanguage('fr')}>Français</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('en')}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('de')}>Deutsch</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
            <a href="#contact">{t.nav.hireMe}</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 p-6">
                <Link href="#home" className="flex items-center gap-2 font-bold text-lg font-headline">
                  <Code className="h-6 w-6 text-accent" />
                  <span>Jeremie Ekoue</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map(({ href, label }) => (
                    <Link key={href} href={href} className="text-base font-medium hover:text-accent transition-colors">
                      {label}
                    </Link>
                  ))}
                </nav>
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        <Globe className="mr-2 h-5 w-5" />
                        {language.toUpperCase()}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setLanguage('fr')}>Français</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLanguage('en')}>English</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLanguage('de')}>Deutsch</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                <Button asChild>
                  <a href="#contact">{t.nav.hireMe}</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
