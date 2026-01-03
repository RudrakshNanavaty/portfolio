import React from 'react';
import Section from './Section';
import { BLOGS } from '../constants';
import { BookOpen } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { BlogCard } from './cards/BlogCard';

const Blogs: React.FC = () => {
  return (
    <Section id="blogs" disableAnimation>
      <FadeIn>
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-2xl bg-secondaryContainer text-onSecondaryContainer">
            <BookOpen size={24} />
          </div>
          <h2 className="font-display text-4xl font-bold text-textMain">My Blogs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOGS.map((blog, index) => (
            <BlogCard key={index} blog={blog} index={index} />
          ))}
        </div>
      </FadeIn>
    </Section>
  );
};

export default Blogs;