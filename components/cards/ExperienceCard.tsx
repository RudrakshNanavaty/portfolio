"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface JobProps {
    company: string;
    role: string;
    period: string;
    description: string[];
}

interface ExperienceCardProps {
    job: JobProps;
    index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ job, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="group relative bg-surfaceContainer rounded-3xl p-8 transition-colors duration-300 hover:bg-surfaceContainerHigh"
        >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-textMain">{job.company}</h3>
                    <p className="text-lg text-primary font-medium mt-1">{job.role}</p>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-surfaceContainerHigh text-textMain text-sm font-mono self-start">
                    {job.period}
                </span>
            </div>

            <ul className="space-y-3">
                {job.description.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-textMuted leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};
