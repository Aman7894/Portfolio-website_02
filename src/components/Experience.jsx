import { Section } from './ui/Section';
import { Calendar, Award, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
  return (
    <Section id="experience">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience.</h2>
            <p className="text-muted text-lg">Building production-level features and optimizing architectures.</p>
          </div>
          
          <div className="relative border-l border-white/10 pl-8 ml-4">
            {/* Timeline item */}
            <div className="relative mb-12 last:mb-0">
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-background border-2 border-primary ring-4 ring-primary/20" />
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-foreground">Web Development Intern</h3>
                <span className="flex items-center gap-2 text-sm text-primary font-mono glass px-3 py-1 rounded-full w-fit">
                  <Calendar size={14} /> 2023 - Present
                </span>
              </div>
              <h4 className="text-lg text-muted mb-4">CodTech Solutions</h4>
              <ul className="space-y-3">
                {[
                  "Engineered full-stack applications leveraging React and Node.js, directly contributing to production-level features.",
                  "Designed and optimized REST APIs and MongoDB schemas, tangibly reducing query bottlenecks and improving client-side load times.",
                  "Worked directly on modernizing legacy systems and adopting scalable architectures."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <CheckCircle2 className="w-5 h-5 text-primary-purple shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements.</h2>
            <p className="text-muted text-lg">Milestones and simulations proving enterprise readiness.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "GATE 2026 Qualified",
                desc: "Top percentile in engineering fundamentals, data structures, and algorithmic problem solving."
              },
              {
                title: "AWS Solutions Architecture Simulation",
                desc: "Tested on scalable cloud infrastructure patterns, load balancing, and secure data storage."
              },
              {
                title: "Tata GenAI Simulation",
                desc: "Applied enterprise-level Generative AI problem-solving strategies and AI model integrations."
              }
            ].map((ach, i) => (
              <div key={i} className="glass p-6 rounded-xl flex gap-4 items-start group hover:bg-white/[0.05] transition-colors cursor-default">
                <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{ach.title}</h3>
                  <p className="text-muted leading-relaxed">{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
