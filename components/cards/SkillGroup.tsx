"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface SkillGroupProps {
    category: string;
    items: string[];
    delay?: number;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ category, items, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            className="space-y-4"
        >
            <h3 className="text-xl font-bold text-secondary ml-1">
                {category}
            </h3>
            <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                    <span
                        key={skill}
                        className="px-4 py-2 rounded-xl bg-surfaceContainerHigh border border-outlineVariant/50 text-textMain font-medium text-sm hover:border-primary hover:text-primary transition-colors cursor-default select-none"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};
