"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    id?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "", id }) => {
    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
