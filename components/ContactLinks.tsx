"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { Tooltip } from './ui/Tooltip';

interface ContactLinksProps {
  className?: string;
  iconSize?: number;
}

const ContactLinks: React.FC<ContactLinksProps> = ({ className = "flex gap-2", iconSize }) => {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map((link, index) => (
        <Tooltip key={index} content={link.label}>
          <motion.a
            whileHover={{ y: -3, backgroundColor: 'var(--surface-container-highest)' }}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-textMuted hover:text-primary rounded-full transition-colors duration-300"
            aria-label={link.label}
          >
            {iconSize ? React.cloneElement(link.icon as any, { size: iconSize }) : link.icon}
          </motion.a>
        </Tooltip>
      ))}
    </div>
  );
};

export default ContactLinks;
