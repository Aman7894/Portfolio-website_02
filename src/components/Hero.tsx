import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section } from './ui/Section';
import { Tilt } from './ui/Tilt';

export const Hero = () => {
  return (
    <Section id="home" className="min-h-screen flex items-center pt-32 pb-20 relative">
      <Tilt className="max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8 cursor-default"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted font-mono">// Aman Pal</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Crafting Intelligent <br className="hidden md:block" />
          <span className="text-gradient">Software Solutions</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-muted mb-12 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Software Developer specialized in integrating AI technologies into modern products. I transform complex challenges into elegant, scalable solutions.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background font-medium hover:scale-105 transition-transform duration-200">
            View Case Studies
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg glass font-medium hover:bg-white/10 transition-colors duration-200">
            Let's Connect
          </a>
        </motion.div>
      </Tilt>

      {/* Abstract background elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-primary-purple/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </Section>
  );
};
