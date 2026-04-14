"use client";
import React from 'react';
import { SiGithub } from 'react-icons/si';
import { LuExternalLink } from 'react-icons/lu';
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
    imagePaddingClassName?: string;
    imageContainerClassName?: string;
}

interface ProjectCardProps {
    project: ProjectProps;
    index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const primaryLink = project.links.demo || project.links.github;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
            whileHover={primaryLink ? { y: -8, transition: { duration: 0.3 } } : undefined}
            onClick={() => {
                if (primaryLink) {
                    window.open(primaryLink, '_blank');
                }
            }}
            className={`flex flex-col h-full bg-surfaceContainer hover:bg-surfaceContainerHigh hover:border-primary/20 rounded-4xl p-8 transition-colors duration-300 group shadow-sm hover:shadow-xl dark:hover:shadow-black/50 overflow-hidden relative ${primaryLink ? 'cursor-pointer' : ''}`}
        >
            <div className="flex flex-col lg:flex-row gap-6 h-full relative z-10 pointer-events-none">
                <div className="flex flex-col grow">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-4 min-w-0">
                            {project.image ? (
                                <div
                                    className={[
                                        "shrink-0 w-16 h-16 md:w-20 md:h-20 relative rounded-2xl overflow-hidden",
                                        "bg-white/90 dark:bg-white/90 ring-1 ring-black/10 dark:ring-black/15 shadow-sm",
                                        project.imageContainerClassName ?? "",
                                    ].join(" ")}
                                >
                                    <div className={["absolute inset-0", project.imagePaddingClassName ?? "p-2.5 md:p-3.5"].join(" ")}>
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.image}
                                                alt={`${project.title} logo`}
                                                fill
                                                className="object-contain"
                                                sizes="80px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                            <h3 className="text-2xl font-bold text-textMain group-hover:text-primary transition-colors truncate">
                                {project.title}
                            </h3>
                        </div>
                        <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-auto">
                            {project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full hover:bg-surfaceContainer text-textMain hover:text-primary transition-colors relative z-20"
                                    aria-label="GitHub"
                                    onClick={(e) => e.stopPropagation()} // Added stopPropagation
                                >
                                    <SiGithub size={20} />
                                </a>
                            )}
                            {project.links.demo && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full hover:bg-surfaceContainer text-textMain hover:text-primary transition-colors relative z-20"
                                    aria-label="Demo"
                                    onClick={(e) => e.stopPropagation()} // Added stopPropagation
                                >
                                    <LuExternalLink size={20} />
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
