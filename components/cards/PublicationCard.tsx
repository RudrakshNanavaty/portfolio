"use client";
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Link {
    url: string;
    label: string;
}

interface AchievementProps {
    title: string;
    description: string;
    links: Link[];
}

interface PublicationCardProps {
    ach: AchievementProps;
    index: number;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ ach, index }) => {
    return (
        <motion.div
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 border-outlineVariant last:border-0 bg-surfaceContainerHigh rounded-xl px-4 -mx-4 transition-colors"
        >
            <div className="bg-surfaceContainerHigh">
                <h4 className="text-xl font-bold text-textMain mb-2">{ach.title}</h4>
                <p className="text-textMuted max-w-2xl">{ach.description}</p>
            </div>
            <div className="flex gap-3 shrink-0">
                {ach.links.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.url}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surfaceContainerHighest hover:border-primary text-textMain hover:text-primary transition-all font-medium text-sm shadow-sm"
                    >
                        {link.label} <ExternalLink size={14} />
                    </a>
                ))}
            </div>
        </motion.div>
    );
};
