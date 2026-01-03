import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Experience: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <Section id="experience" disableAnimation>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-2xl bg-secondaryContainer text-onSecondaryContainer">
            <Briefcase size={24} />
          </div>
          <h2 className="font-display text-4xl font-bold text-textMain">Experience</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-surfaceContainerHigh rounded-3xl p-8 transition-colors duration-300 hover:bg-surfaceContainerHighest"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-textMain">{job.company}</h3>
                  <p className="text-lg text-primary font-medium mt-1">{job.role}</p>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-surfaceContainer text-textMuted text-sm font-mono border border-outlineVariant/50 self-start">
                  {job.period}
                </span>
              </div>

              <ul className="space-y-3">
                {job.description.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-textMuted leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Experience;