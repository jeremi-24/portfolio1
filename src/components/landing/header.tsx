
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
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-4xl",
        scrolled ? "top-4" : "top-6"
      )}
    >
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-primary/10 border-white/20">
        <Link href="#home" className="font-bold text-xl font-headline tracking-tighter hover:opacity-80 transition-opacity">
          JE<span className="text-primary">.</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all hover:scale-105">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-2 rounded-full px-4 hover:bg-white/10 text-xs font-semibold">
                <Globe className="h-4 w-4" />
                {language.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass border-white/10">
              <DropdownMenuItem className="focus:bg-primary/20" onClick={() => setLanguage('fr')}>Français</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-primary/20" onClick={() => setLanguage('en')}>English</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-primary/20" onClick={() => setLanguage('de')}>Deutsch</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild size="sm" className="hidden sm:flex bg-primary hover:bg-primary/90 rounded-full px-6 text-xs font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
            <a href="/jeremie-ekoue-cv.pdf" target="_blank">{t.nav.hireMe}</a>
          </Button>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="glass border-b-white/10 h-screen flex flex-col items-center justify-center gap-8 border-none">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col items-center gap-8">
                  {navLinks.map(({ href, label }) => (
                    <Link key={href} href={href} className="text-3xl font-bold font-headline hover:text-primary transition-colors">
                      {label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col items-center gap-4 mt-8">
                  <div className="flex gap-4">
                    <Button variant="outline" className="rounded-full px-6" onClick={() => setLanguage('fr')}>FR</Button>
                    <Button variant="outline" className="rounded-full px-6" onClick={() => setLanguage('en')}>EN</Button>
                    <Button variant="outline" className="rounded-full px-6" onClick={() => setLanguage('de')}>DE</Button>
                  </div>
                  <Button asChild size="lg" className="rounded-full px-12 mt-4 bg-primary text-lg">
                    <a href="/jeremie-ekoue-cv.pdf" target="_blank">{t.nav.hireMe}</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
