"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'>
      <div className='relative aspect-square w-full'>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 33vw'
        />
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
        <p className='text-gray-600 dark:text-gray-300 mb-4'>
          {project.description}
        </p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className='bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm'>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) throw new Error("Failed to fetch projects");
        const data = await response.json();
        setProjects(data.projects);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section id='projects' className='py-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold mb-12 text-center'>Projects</h2>
        {loading && <p className='text-center'>Loading...</p>}
        {error && <p className='text-center text-red-500'>{error}</p>}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project: Project, index) => (
            <div key={`${index}`}>
              <ProjectCard key={project._id} project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

