import React from 'react';
import Section from './Section';
import { PROJECTS, ACHIEVEMENTS } from '../constants';
import { LuCode, LuFileText, LuGraduationCap } from 'react-icons/lu';
import { FadeIn } from './ui/FadeIn';
import { ProjectCard } from './cards/ProjectCard';
import { PublicationCard } from './cards/PublicationCard';

const Projects: React.FC = () => {
  return (
    <Section disableAnimation>
      <div>
        {/* Publications / Research */}
        <FadeIn delay={0.2} className="relative scroll-mt-32 bg-surfaceContainer dark:bg-surfaceContainer rounded-[2.5rem] p-8 md:p-12 border border-transparent hover:border-outlineVariant/20 transition-colors" id="publications">
          <div className="absolute -top-7 -right-7 md:-top-9 md:-right-9 text-tertiary rotate-12 z-20">
            <LuGraduationCap className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg" />
          </div>
          <div className="flex items-center gap-3 mb-8">
            <LuFileText className="text-tertiary" size={28} />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-textMain">
              Academic Publications
            </h3>
          </div>

          <div className="space-y-6">
            {ACHIEVEMENTS.map((ach, index) => (
              <PublicationCard key={index} ach={ach} index={index} />
            ))}
          </div>
        </FadeIn>

        <div className="mt-20" />
        
        <div id="projects" className="scroll-mt-32">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-2xl bg-primaryContainer text-onPrimaryContainer">
                <LuCode size={24} />
              </div>
              <h2 className="font-display text-4xl font-bold text-textMain">Featured Projects</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;