import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import { Cpu } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Skills: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Section id="skills" disableAnimation>
       <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-2xl bg-tertiary/20 text-tertiary">
            <Cpu size={24} />
          </div>
          <h2 className="font-display text-4xl font-bold text-textMain">Technical Arsenal</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-secondary ml-1">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, idx) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 rounded-xl bg-surfaceContainerHigh border border-outlineVariant/50 text-textMain font-medium text-sm hover:border-primary hover:text-primary transition-colors cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Skills;