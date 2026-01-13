
"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const clients = [
  { name: "Future Client 1", logo: "*" },
  { name: "NS GLOBAL EXPERTISE", logo: "/ns.png" },
  { name: "Future Client 2", logo: "*" },
];

export default function Clients() {
  return (
    <section className="py-12 border-y border-white/5 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
          {clients.map((client, index) => (
            <div key={index} className="flex-shrink-0 relative group">
              {client.logo === "*" ? (
                <div className="text-xl font-bold font-headline tracking-tighter text-muted-foreground transition-colors group-hover:text-primary">
                  PARTNER<span className="text-primary">*</span>
                </div>
              ) : (
                <div className="h-8 w-32 relative">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain filter grayscale invert brightness-0 hover:invert-0 hover:brightness-100 transition-all duration-500"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
