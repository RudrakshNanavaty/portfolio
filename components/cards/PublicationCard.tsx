"use client";
import React from 'react';
import { LuExternalLink } from 'react-icons/lu';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Link {
    url: string;
    label: string;
}

interface AchievementProps {
    title: string;
    description: string;
    links: Link[];
    image?: string;
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
            onClick={() => {
                if (ach.links && ach.links.length > 0) {
                    window.open(ach.links[0].url, '_blank');
                }
            }}
            className={`flex flex-col md:flex-row items-stretch md:items-center gap-6 py-6 bg-surfaceContainerHigh rounded-xl hover:bg-surfaceContainerHighest px-6 mx-4 transition-colors relative overflow-hidden ${ach.links?.length > 0 ? 'cursor-pointer' : ''}`}
        >
            {ach.image && (
                <div className="shrink-0 w-24 h-24 md:w-32 md:h-32 relative rounded-lg overflow-hidden bg-surfaceContainerHighest self-start md:self-center">
                    <Image
                        src={ach.image}
                        alt={ach.title}
                        fill
                        className="object-contain"
                    />
                </div>
            )}

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 grow">
                <div>
                    <h4 className="text-xl font-bold text-textMain mb-2">{ach.title}</h4>
                    <p className="text-textMuted max-w-2xl">{ach.description}</p>
                </div>
                <div className="flex gap-3 shrink-0">
                    {ach.links.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondaryContainer hover:border-primary text-textMain hover:text-primary transition-all font-medium text-sm shadow-sm"
                        >
                            {link.label} <LuExternalLink size={14} />
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
