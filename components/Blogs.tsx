import React from 'react';
import Section from './Section';
import { BLOGS } from '../constants';
import { BookOpen, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Blogs: React.FC = () => {
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
    <Section id="blogs" disableAnimation>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-2xl bg-secondaryContainer text-onSecondaryContainer">
            <BookOpen size={24} />
          </div>
          <h2 className="font-display text-4xl font-bold text-textMain">My Blogs</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOGS.map((blog, index) => (
            <motion.a
              key={index}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.3 } }}
              className="group flex flex-col justify-between p-8 rounded-[2rem] bg-surfaceContainerLow dark:bg-surfaceContainerHigh border border-transparent hover:border-primary/20 relative overflow-hidden h-full min-h-[340px] shadow-sm hover:shadow-xl dark:hover:shadow-black/50"
            >
              {/* Background Image Logic */}
              {blog.image ? (
                <div className="absolute inset-0 z-0">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Strong gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/30 transition-colors duration-500" />
                </div>
              ) : (
                /* Default Decorative Background for non-image blogs */
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
              )}

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  {blog.date && (
                    <span className={`text-xs font-mono font-bold tracking-wider px-3 py-1.5 rounded-lg uppercase ${
                      blog.image 
                        ? 'text-white bg-white/20 backdrop-blur-md border border-white/10' 
                        : 'text-primary bg-primaryContainer/30'
                    }`}>
                      {blog.date}
                    </span>
                  )}
                </div>

                <h3 className={`text-2xl font-bold mb-4 leading-tight ${
                  blog.image 
                    ? 'text-white drop-shadow-md' 
                    : 'text-textMain group-hover:text-primary transition-colors'
                }`}>
                  {blog.title}
                </h3>

                <p className={`text-lg leading-relaxed mb-8 flex-grow ${
                  blog.image 
                    ? 'text-gray-200 drop-shadow-sm font-medium' 
                    : 'text-textMuted'
                }`}>
                  {blog.description}
                </p>
                
                <div className={`mt-auto pt-6 border-t flex items-center text-sm font-bold group-hover:translate-x-2 transition-transform duration-300 ${
                  blog.image 
                    ? 'border-white/20 text-white' 
                    : 'border-outlineVariant/20 text-primary'
                }`}>
                  Read on Medium <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Blogs;