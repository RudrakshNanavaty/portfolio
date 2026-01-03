import React from 'react';
import Section from './Section';
import { PROJECTS, ACHIEVEMENTS } from '../constants';
import { Code, ExternalLink, Github, FileText, ArrowUpRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Projects: React.FC = () => {
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
    <Section id="projects" disableAnimation>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-2xl bg-primaryContainer text-onPrimaryContainer">
            <Code size={24} />
          </div>
          <h2 className="font-display text-4xl font-bold text-textMain">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="flex flex-col h-full bg-surfaceContainerLow dark:bg-surfaceContainerHigh border border-transparent hover:border-primary/20 rounded-[2rem] p-8 transition-colors duration-300 group shadow-sm hover:shadow-xl dark:hover:shadow-black/50"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-textMain group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  {project.links.github && (
                    <a href={project.links.github} className="p-2 rounded-full hover:bg-surfaceContainer text-textMain hover:text-primary transition-colors" aria-label="GitHub">
                      <Github size={20} />
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} className="p-2 rounded-full hover:bg-surfaceContainer text-textMain hover:text-primary transition-colors" aria-label="Demo">
                      <ArrowUpRight size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-textMuted text-lg leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-surfaceContainer dark:bg-surfaceContainer rounded-lg text-sm font-medium text-secondary dark:text-secondary">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publications / Research */}
        <motion.div
          id="publications"
          variants={item}
          className="scroll-mt-32 bg-surfaceContainer dark:bg-surfaceContainerHigh/50 rounded-[2.5rem] p-8 md:p-12 border border-transparent hover:border-outlineVariant/20 transition-colors"
        >
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-tertiary" size={28} />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-textMain">
              Publications & Research
            </h3>
          </div>

          <div className="space-y-6">
            {ACHIEVEMENTS.map((ach, index) => (
              <motion.div
                key={index}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 border-b border-outlineVariant/30 last:border-0 hover:bg-surfaceContainerHigh/50 rounded-xl px-4 -mx-4 transition-colors"
              >
                <div>
                  <h4 className="text-xl font-bold text-textMain mb-2">{ach.title}</h4>
                  <p className="text-textMuted max-w-2xl">{ach.description}</p>
                </div>
                <div className="flex gap-3 shrink-0">
                  {ach.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-surfaceContainerHigh border border-outlineVariant/30 hover:border-primary text-textMain hover:text-primary transition-all font-medium text-sm shadow-sm"
                    >
                      {link.label} <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Projects;