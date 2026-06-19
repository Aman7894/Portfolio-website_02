import { Section } from './ui/Section';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Tilt } from './ui/Tilt';

export const Contact = () => {
  const email = "ap7164772@gmail.com";

  return (
    <Section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to scale? <span className="text-gradient">Let's talk.</span></h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Currently exploring SDE roles, internships, and high-impact engineering opportunities. My inbox is open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Tilt>
            <form action="https://formsubmit.co/ap7164772@gmail.com" method="POST" className="glass p-8 rounded-2xl flex flex-col gap-6 relative">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary-purple/10 rounded-2xl pointer-events-none" />
              <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted">Name</label>
                  <input required name="name" type="text" id="name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors text-foreground" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted">Email</label>
                  <input required name="email" type="email" id="email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors text-foreground" placeholder="john@example.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2 relative z-10">
                <label htmlFor="message" className="text-sm font-medium text-muted">Message</label>
                <textarea required name="message" id="message" rows={4} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors text-foreground resize-none" placeholder="How can I help you?" />
              </div>
              <button type="submit" className="relative z-10 flex items-center justify-center gap-2 bg-foreground text-background font-medium px-8 py-4 rounded-lg hover:scale-[1.02] transition-transform">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </Tilt>

          <div className="flex flex-col gap-6">
            <a 
              href={`mailto:${email}`}
              className="flex items-center gap-4 glass p-6 rounded-2xl hover:bg-white/[0.05] transition-all group w-full text-left cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Mail className="text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Email Me</h3>
                <span className="font-mono text-muted text-sm">{email}</span>
              </div>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 glass p-6 rounded-2xl hover:bg-white/[0.05] transition-all group w-full text-left">
              <div className="w-12 h-12 rounded-full bg-primary-purple/20 flex items-center justify-center">
                <Linkedin className="text-primary-purple group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">LinkedIn</h3>
                <span className="font-mono text-muted text-sm">Let's connect professionally</span>
              </div>
            </a>

            <a href="https://github.com/Aman7894" target="_blank" rel="noreferrer" className="flex items-center gap-4 glass p-6 rounded-2xl hover:bg-white/[0.05] transition-all group w-full text-left">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Github className="text-white group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">GitHub</h3>
                <span className="font-mono text-muted text-sm">Check out my repositories</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
