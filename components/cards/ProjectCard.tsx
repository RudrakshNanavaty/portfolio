"use client";
import React from 'react';
import { SiGithub } from 'react-icons/si';
import { LuArrowUpRight } from 'react-icons/lu';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectLinks {
    github?: string;
    demo?: string;
}

interface ProjectProps {
    title: string;
    description: string;
    tech: string[];
    links: ProjectLinks;
    image?: string;
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
            className="flex flex-col h-full bg-surfaceContainer hover:bg-surfaceContainerHigh hover:border-primary/20 rounded-4xl p-8 transition-colors duration-300 group shadow-sm hover:shadow-xl dark:hover:shadow-black/50 overflow-hidden relative"
        >
            {project.links.demo && (
                <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute inset-0 z-0"
                    aria-label={`View demo for ${project.title}`}
                />
            )}
            <div className="flex flex-col lg:flex-row gap-6 h-full relative z-10 pointer-events-none">
                <div className="flex flex-col grow">
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-bold text-textMain group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-auto">
                            {project.links.github && (
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-surfaceContainer text-textMain hover:text-primary transition-colors relative z-20" aria-label="GitHub">
                                    <SiGithub size={20} />
                                </a>
                            )}
                            {project.links.demo && (
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-surfaceContainer text-textMain hover:text-primary transition-colors relative z-20" aria-label="Demo">
                                    <LuArrowUpRight size={20} />
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="text-textMuted text-lg leading-relaxed mb-8 grow">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((tech) => (
                            <span key={tech} className="px-3 py-1.5 bg-surfaceContainerHighest rounded-full text-sm font-medium text-textMain">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
