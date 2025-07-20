
"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const clients = [
  { name: "GoZem", logo: "https://placehold.co/150x50.png?text=GoZem" },
  { name: "Sace Agency", logo: "https://placehold.co/150x50.png?text=Sace+Agency" },
  { name: "NS GLOBAL EXPERTISE", logo: "/ns.png" },
];

export default function Clients() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto text-center">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by leading companies
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {clients.map((client, index) => (
              <div key={index} className="flex-shrink-0" style={{ width: "150px" }}>
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={50}
                  className="object-contain h-12 w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
