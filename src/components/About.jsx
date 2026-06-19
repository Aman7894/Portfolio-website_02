import { Section } from './ui/Section';
import { Tilt } from './ui/Tilt';
import { ArrowRight, Download } from 'lucide-react';
import profileImage from '../assets/profile.png';

export const About = () => {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me.</h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed mb-8">
            <p>
              I'm an ambitious Software Developer passionate about building intelligent applications that matter. I specialize in integrating AI technologies into modern software solutions, creating products that are both innovative and practical.
            </p>
            <p>
              With expertise spanning full-stack development and artificial intelligence, I transform complex challenges into elegant, scalable solutions. My approach combines technical precision with creative problem-solving, ensuring every project delivers real value.
            </p>
            <p className="text-foreground font-medium">
              I'm constantly exploring new technologies and pushing the boundaries of what's possible when code meets intelligence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/resume.pdf" 
              download="Aman_Pal_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass text-primary font-medium hover:bg-white/10 transition-colors duration-200 border border-primary/20"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a href="#projects" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass font-medium hover:bg-white/10 transition-colors duration-200">
              See My Work
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="relative">
          <Tilt className="aspect-[4/5] rounded-2xl border border-white/10 p-2 glass">
            <div className="w-full h-full rounded-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500 z-10" />
              <img
                src={profileImage}
                alt="Aman Pal - Software Developer"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </Section>
  );
};
