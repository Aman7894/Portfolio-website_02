import { Section } from './ui/Section';
import { ExternalLink, Github } from 'lucide-react';
import driveEasyImage from '../assets/Drive.png';
import perceptronImage from '../assets/gpt.png';
import hirredImage from '../assets/hirred.png';
import cleanerImage from '../assets/cleaner.png';
import vibeloopImage from '../assets/vibeloop.png';
import codesphereImage from '../assets/codesphere.png';

const projects = [
  {
    title: "DriveEasy",
    role: "System Architect & Full Stack",
    description: "Engineered a highly concurrent ride-booking distributed system inspired by Ola. Built a multi-role architecture featuring real-time location tracking and dynamic fare estimation algorithms.",
    tech: ["React", "Node.js", "MongoDB", "WebSockets", "Redis"],
    impact: "Delivered a seamless, low-latency booking lifecycle, proving strong grasp of system design thinking and real-time data flows.",
    github: "https://github.com/Aman7894/DriveEasy",
    live: "#",
    image: driveEasyImage,
  },
  {
    title: "Perceptron",
    role: "AI Integration Specialist",
    description: "Developed a real-time conversational interface injecting the Gemini API. Focused relentlessly on optimizing API payload size, response latency, and stream rendering for a fluid UX.",
    tech: ["TypeScript", "Gemini API", "React", "Express", "Tailwind"],
    impact: "A deeply integrated AI solution that mirrors human-like response times, marrying advanced LLM capabilities with a beautifully crafted, zero-lag frontend.",
    github: "https://github.com/Aman7894/A-Chatbot",
    live: "https://a-chatbot-rho.vercel.app/",
    image: perceptronImage,
  },
  {
    title: "Hirred",
    role: "Full Stack Developer",
    description: "Architected a full-featured recruitment platform. Implemented robust role-based access control (RBAC) via Clerk, and wired up a scalable real-time database via Supabase.",
    tech: ["Next.js", "Supabase", "Clerk Auth", "ShadCN UI"],
    impact: "Created a production-ready, secure, and visually stunning marketplace for recruiters and candidates to interact without friction.",
    github: "#",
    live: "#",
    image: hirredImage,
  },
  {
    title: "AI Smart Data Cleaner",
    role: "AI Integration & Full Stack",
    description: "Architected an intelligent data preprocessing and validation engine. Utilizes Large Language Models to automate data profiling, clean noisy datasets, impute missing entries, and extract schema types from unstructured records.",
    tech: ["React", "Python", "FastAPI", "Pandas", "Gemini API", "Tailwind"],
    impact: "Empowers developers to automate tedious data prep pipelines, turning unstructured data into clean, formatted JSON or CSV formats in seconds.",
    github: "https://github.com/Aman7894/AI-smart-Data-cleaner",
    live: "#",
    image: cleanerImage,
  },
  {
    title: "vibeLoop",
    role: "Full Stack Developer",
    description: "Engineered a high-performance, real-time social networking platform similar to Instagram, supporting interactive media feeds, robust comments/likes, secure messaging, and low-latency audio/video calls.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Clerk Auth", "Socket.IO", "WebRTC", "Cloudinary"],
    impact: "Combines social networking features with WebRTC-based real-time communication protocols to offer a frictionless peer-to-peer social media calling experience.",
    github: "https://github.com/Aman7894/vibeLoop",
    live: "#",
    image: vibeloopImage,
  },
  {
    title: "Codesphere",
    role: "Backend & System Architect",
    description: "Designed and built a collaborative web IDE and remote code execution platform. Features real-time multi-user document sharing, sandboxed compiler execution environment, and custom terminal simulator.",
    tech: ["React", "Node.js", "Express", "Socket.IO", "Docker", "Monaco Editor"],
    impact: "Enables developer teams to pair-program and compile multiple programming languages simultaneously in a secure, containerized sandbox.",
    github: "https://github.com/Aman7894/Codesphere",
    live: "#",
    image: codesphereImage,
  }
];

export const Projects = () => {
  return (
    <Section id="projects">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Systems.</h2>
        <p className="text-muted text-lg max-w-2xl">
          Production-ready applications built with scalability and user experience in mind.
        </p>
      </div>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="grid lg:grid-cols-2 gap-8 items-center bg-white/[0.02] border border-border rounded-2xl p-6 lg:p-10 hover:bg-white/[0.04] transition-colors duration-500">
            <div className={`order-2 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="aspect-video rounded-xl border border-white/10 overflow-hidden relative group">
                 <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-500 z-10" />
                 <img 
                   src={project.image} 
                   alt={`${project.title} Preview`}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 />
              </div>
            </div>
            
            <div className={`order-1 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <span className="text-primary-purple font-mono text-sm mb-4 block">// {project.role}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{project.title}</h3>
              
              <div className="space-y-4 text-muted mb-6">
                <p className="leading-relaxed"><strong className="text-foreground">Problem/Solution:</strong> {project.description}</p>
                <p className="leading-relaxed border-l-2 border-primary/50 pl-4 italic"><strong className="text-foreground not-italic">Impact:</strong> {project.impact}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 glass rounded-md text-xs font-mono text-primary">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <ExternalLink size={16} /> Live Deployment
                  </a>
                )}
                {project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-foreground text-muted transition-colors">
                    <Github size={16} /> Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
