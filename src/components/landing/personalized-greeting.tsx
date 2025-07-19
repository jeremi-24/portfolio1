"use client";

import { useEffect, useState } from "react";
import { personalizedMessageSuggestion } from "@/app/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Lightbulb, X } from "lucide-react";

export default function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const referringWebsite = document.referrer;
        const result = await personalizedMessageSuggestion({
          location: "N/A", // Location requires user permission, so it's simplified here.
          referringWebsite: referringWebsite || "Direct visit",
        });
        if (result.greeting) {
          setGreeting(result.greeting);
          setVisible(true);
        }
      } catch (error) {
        // This is a non-critical feature, so we fail silently.
        console.error("AI Greeting Error:", error);
      }
    };

    // Delay fetching to avoid impacting initial page load performance.
    const timer = setTimeout(fetchGreeting, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible || !greeting) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm w-full animate-fade-in-up">
      <Alert className="relative pr-10">
        <Lightbulb className="h-4 w-4" />
        <AlertTitle className="font-headline text-accent">A Message For You!</AlertTitle>
        <AlertDescription>{greeting}</AlertDescription>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1 right-1 h-6 w-6"
          onClick={() => setVisible(false)}
          aria-label="Dismiss message"
        >
          <X className="h-4 w-4" />
        </Button>
      </Alert>
    </div>
  );
}
