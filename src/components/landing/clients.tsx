
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
    <section className="py-12 bg-background">
      <div className="container mx-auto text-center">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by leading companies
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {clients.map((client, index) => (
              <div key={index} className="flex-shrink-0" style={{ width: "150px", height: "50px" }}>
                {client.logo === "*" ? (
                   <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-muted-foreground/50 rounded-lg text-muted-foreground/50 text-4xl">
                     *
                   </div>
                ) : (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={50}
                    className="object-contain h-12 w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
