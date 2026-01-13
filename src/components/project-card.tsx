
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/context/translations";

export const ProjectCard = ({ project, viewDetailsText }: { project: Project, viewDetailsText: string }) => (
  <motion.div
    key={project.slug}
    layout
    className="group relative"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
  >
    <Link href={`/projects/${project.slug}`} className="block group">
      <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-6">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          data-ai-hint={project.hint}
        />
        {/* Subtle Overlay to make the image "premium" */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="space-y-4 px-2">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
            {project.category}
          </span>
          <div className="flex gap-2">
            {project.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">#{tag}</span>
            ))}
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold font-headline leading-tight group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <div className="flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
          <span>{viewDetailsText}</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  </motion.div>
);
