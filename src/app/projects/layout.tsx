
"use client";

import Link from "next/link";
import { ArrowLeft, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <Code className="h-6 w-6 text-accent" />
                <span className="font-bold sm:inline-block">
                Jeremie Ekoue
                </span>
            </Link>
            <Button variant="outline" size="sm" asChild>
                <Link href="/#projects">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Portfolio
                </Link>
            </Button>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
