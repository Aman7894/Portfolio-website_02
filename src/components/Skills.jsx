import { Section } from './ui/Section';
import { Database, Layout, Server, Sparkles, Shield, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <Layout className="text-primary mb-4" size={24} />,
    skills: ["React.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
  },
  {
    title: "Backend & APIs",
    icon: <Server className="text-primary-purple mb-4" size={24} />,
    skills: ["Node.js", "Express.js", "RESTful Architectures", "GraphQL"],
  },
  {
    title: "Data & Real-Time",
    icon: <Database className="text-blue-400 mb-4" size={24} />,
    skills: ["MongoDB", "Supabase", "PostgreSQL", "Redis"],
  },
  {
    title: "AI & Integrations",
    icon: <Sparkles className="text-yellow-400 mb-4" size={24} />,
    skills: ["Gemini API", "OpenAI API", "Conversational AI"],
  },
  {
    title: "Core Engineering",
    icon: <Cpu className="text-green-400 mb-4" size={24} />,
    skills: ["Data Structures (C++)", "Algorithms", "System Design"],
  },
  {
    title: "Security & Cloud",
    icon: <Shield className="text-red-400 mb-4" size={24} />,
    skills: ["JWT", "OAuth", "Clerk", "AWS Basics"],
  },
];

export const Skills = () => {
  return (
    <Section id="skills">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Architecture Arsenal.</h2>
        <p className="text-muted text-lg max-w-2xl">
          The foundational technologies and concepts I use to architect scalable systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="glass p-6 rounded-xl hover:bg-white/[0.05] transition-colors duration-300 group"
          >
            {category.icon}
            <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="text-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary-purple transition-colors" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
