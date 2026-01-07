"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { LuArrowDown } from 'react-icons/lu';
import ContactLinks from './ContactLinks';
import Image from 'next/image';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0, filter: "blur(5px)" },
    show: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
    },
  };

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">

          {/* Left Column: Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 text-center md:text-left"
          >
            <motion.div variants={item} className="mb-8 flex justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondaryContainer text-textMain dark:text-onSecondaryContainer text-sm font-medium border border-outlineVariant/20 shadow-sm">
                <span className="relative flex h-2 w-2">
                  {/* Status Dot - Smooth pulse instead of blink */}
                  <motion.span
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inline-flex h-full w-full rounded-full bg-primary"
                  ></motion.span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Open to Work
              </span>
            </motion.div>

            <motion.h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-textMain mb-6 text-balance drop-shadow-sm leading-[1.1]">
              Rudraksh <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-primary bg-size-[200%_auto] animate-[gradient_8s_linear_infinite]">
                Nanavaty
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-xl md:text-2xl text-textMuted max-w-2xl leading-relaxed mb-10 text-balance mx-auto md:mx-0">
              Building scalable backend systems and AI agents designed to solve real-world problems.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#experience"
                className="px-8 py-4 bg-primary text-onPrimary rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-shadow duration-300"
              >
                See My Work
              </motion.a>

              <ContactLinks iconSize={24} />
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            className="flex-1 relative flex justify-center md:justify-end"
          >
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              {/* Profile Image */}
              <Image
                src="/profile.webp"
                alt="Rudraksh Nanavaty"
                width={450}
                height={450}
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="relative w-full h-full object-cover drop-shadow-2xl z-10 mask-image-gradient"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-textMuted"
      >
        <LuArrowDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;