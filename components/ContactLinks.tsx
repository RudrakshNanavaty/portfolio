"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { Tooltip } from './ui/Tooltip';

import { LuMail } from "react-icons/lu";
import { SiGithub, SiLinkedin, SiMedium, SiGooglescholar } from "react-icons/si";

interface ContactLinksProps {
  className?: string;
  iconSize?: number;
}

const ICON_MAP: Record<string, React.ElementType> = {
  email: LuMail,
  github: SiGithub,
  linkedin: SiLinkedin,
  medium: SiMedium,
  scholar: SiGooglescholar
};

const ContactLinks: React.FC<ContactLinksProps> = ({ className = "flex gap-2", iconSize = 20 }) => {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map((link, index) => {
        const Icon = ICON_MAP[link.id];
        if (!Icon) return null;
        
        return (
        <Tooltip key={index} content={link.label}>
          <motion.a
            whileHover={{ y: -3, backgroundColor: 'var(--surface-container-highest)' }}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-textMuted hover:text-primary rounded-full transition-colors duration-300"
            aria-label={link.label}
          >
            <Icon size={iconSize} />
          </motion.a>
        </Tooltip>
      )})}
    </div>
  );
};

export default ContactLinks;
