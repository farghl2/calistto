"use client";

import { motion } from 'motion/react';
import { projectsData } from '@/src/shared/constans/data';
import ProjectCard from '@/src/features/projects/components/ProjectCard';

export default function ProjectsList() {
  return (
    <section className="pb-32 relative z-10">
      <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {projectsData.map((project, idx) => (
                  <ProjectCard key={project.id} project={project} index={idx} />
              ))}
          </div>
      </div>
    </section>
  );
}
