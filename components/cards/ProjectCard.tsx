"use client";
import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectLinks {
    github?: string;
    demo?: string;
}

interface ProjectProps {
    title: string;
    description: string;
    tech: string[];
    links: ProjectLinks;
}

interface ProjectCardProps {
    project: ProjectProps;
    index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="flex flex-col h-full bg-surfaceContainer hover:border-primary/20 rounded-[2rem] p-8 transition-colors duration-300 group shadow-sm hover:shadow-xl dark:hover:shadow-black/50"
        >
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-textMain group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    {project.links.github && (
                        <a href={project.links.github} className="p-2 rounded-full hover:bg-surfaceContainer text-textMain hover:text-primary transition-colors" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                    )}
                    {project.links.demo && (
                        <a href={project.links.demo} className="p-2 rounded-full hover:bg-surfaceContainer text-textMain hover:text-primary transition-colors" aria-label="Demo">
                            <ArrowUpRight size={20} />
                        </a>
                    )}
                </div>
            </div>

            <p className="text-textMuted text-lg leading-relaxed mb-8 flex-grow">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-surfaceContainerHighest rounded-lg text-sm font-medium text-textMain">
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};
