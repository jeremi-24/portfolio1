
"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const clients = [
  { name: "Client 1", logo: "https://placehold.co/150x50.png?text=GoZem" },
  { name: "Client 2", logo: "https://placehold.co/150x50.png?text=Sace+Agency" },
  { name: "Client 3", logo: "https://placehold.co/150x50.png?text=NS+Global" },
  { name: "Client 4", logo: "https://placehold.co/150x50.png?text=Warriors" },
  { name: "Client 5", logo: "https://placehold.co/150x50.png?text=Innov'UP" },
  { name: "Client 6", logo: "https://placehold.co/150x50.png?text=Startup+Inc" },
];

export default function Clients() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto text-center">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by leading companies
        </h3>
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
          }}
        >
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 mx-8" style={{ width: "150px" }}>
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
      </div>
    </section>
  );
}
