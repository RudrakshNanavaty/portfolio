import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { LuBriefcase } from 'react-icons/lu';
import { FadeIn } from './ui/FadeIn';
import { ExperienceCard } from './cards/ExperienceCard';

const Experience: React.FC = () => {
  return (
    <Section id="experience" disableAnimation>
      <div>
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-2xl bg-secondaryContainer text-onSecondaryContainer">
              <LuBriefcase size={24} />
            </div>
            <h2 className="font-display text-4xl font-bold text-textMain">Experience</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6">
          {EXPERIENCE.map((job, index) => (
            <ExperienceCard key={index} job={job} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;