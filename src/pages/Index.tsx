
import { useEffect, useState } from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';
import { BackToTop } from '@/components/BackToTop';
import { CustomNavbar } from '@/components/CustomNavbar';
import Background from '@/components/Background';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      <Background />
      <CustomNavbar />

      {/* Content */}
      <div className="relative z-10">
        <section id="home"><Hero /></section>
        <About />
        <Education />
        <Experience />
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <Achievements />
        <Contact />
      </div>

      <BackToTop />
    </div>
  );
};

export default Index;
