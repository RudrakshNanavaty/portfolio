import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  disableAnimation?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, id, className = "", delay = 0, disableAnimation = false }) => {
  if (disableAnimation) {
    return (
      <section id={id} className={`py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
        {children}
      </section>
    );
  }

  return (
    <section id={id} className={`py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;