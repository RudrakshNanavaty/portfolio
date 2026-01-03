import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import { Cpu } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { SkillGroup } from './cards/SkillGroup';

const Skills: React.FC = () => {
  return (
    <Section id="skills" disableAnimation>
      <div>
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-2xl bg-tertiary/20 text-tertiary">
              <Cpu size={24} />
            </div>
            <h2 className="font-display text-4xl font-bold text-textMain">Technical Arsenal</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <SkillGroup
              key={index}
              category={skillGroup.category}
              items={skillGroup.items}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;