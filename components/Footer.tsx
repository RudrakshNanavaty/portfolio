import React from 'react';
import Section from './Section';
import { LuMail } from 'react-icons/lu';
import { SOCIAL_LINKS } from '../constants';
import { Tooltip } from './ui/Tooltip';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surfaceContainerLow border-t border-outlineVariant mt-20">
      <Section id="contact" className="py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-textMain">
          Let's  <span className="text-primary">build</span> something.
        </h2>
        <p className="text-textMuted max-w-2xl mx-auto mb-12 text-xl">
          Always open to discussing new backend architectures, AI agents, or just geek out over the latest tech.
        </p>

        <Tooltip content="rudrakshnanavaty@gmail.com">
          <a
            href="mailto:rudrakshnanavaty@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primaryContainer text-onPrimaryContainer rounded-full font-bold text-lg hover:brightness-110 transition-transform duration-300 hover:scale-105"
          >
            <LuMail size={22} />
            Send me an Email
          </a>
        </Tooltip>

        <div className="flex justify-center gap-6 mt-16 mb-12">
          {SOCIAL_LINKS.map((link, index) => (
            <Tooltip key={index} content={link.label}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textMuted hover:text-secondary transition-colors duration-300"
                aria-label={link.label}
              >
                {React.cloneElement(link.icon as any, { size: 28 })}
              </a>
            </Tooltip>
          ))}
        </div>

        <div className="text-sm text-outline font-medium">
          <p>© {new Date().getFullYear()} Rudraksh Nanavaty</p>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;