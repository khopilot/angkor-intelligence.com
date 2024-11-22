import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Expertise from '@/components/sections/Expertise';
import Contact from '@/components/sections/Contact';
import Navigation from '@/components/Navigation';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import Stats from '@/components/sections/Stats';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <Features />
      <Expertise />
      <Testimonials />
      <Contact />
    </main>
  );
}