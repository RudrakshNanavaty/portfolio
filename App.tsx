import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background text-textMain min-h-screen selection:bg-primary selection:text-onPrimary transition-colors duration-500">
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