import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { GravityStarsBackground } from './components/animate-ui/components/backgrounds/gravity-stars';

const App: React.FC = () => {
  return (
    <div className="text-textMain min-h-screen selection:bg-primary selection:text-onPrimary transition-colors duration-500">
      <GravityStarsBackground className="fixed inset-0 -z-10 flex items-center justify-center bg-background transition-colors duration-500" />
      
      <Navbar />
      
      <main className="flex flex-col w-full">
        <Hero />
        <Experience />
        <Projects />
        <Blogs />
        <Skills />
      </main>

      <Footer />
    </div>
  );
};

export default App;