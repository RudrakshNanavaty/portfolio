import React from 'react';
import Section from './Section';
import { Mail, Github, Linkedin, BookOpen } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

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
        
        <a 
          href="mailto:rudrakshnanavaty@gmail.com"
          className="inline-flex items-center gap-3 px-10 py-5 bg-primaryContainer text-onPrimaryContainer rounded-full font-bold text-lg hover:brightness-110 transition-transform duration-300 hover:scale-105"
        >
          <Mail size={22} />
          Send me an Email
        </a>

        <div className="flex justify-center gap-6 mt-16 mb-12">
           {SOCIAL_LINKS.map((link, index) => (
             <a
               key={index}
               href={link.url}
               className="text-textMuted hover:text-secondary transition-colors duration-300"
               aria-label={link.label}
             >
               {React.cloneElement(link.icon as any, { size: 28 })}
             </a>
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