import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 glass border-b border-white/5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
          Aman Pal <span className="text-muted font-normal hidden sm:inline">| Software Developer × AI Integration</span>
        </a>
        
        <nav className="flex items-center gap-6">
          <a href="#projects" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
            View Case Studies
          </a>
          <a 
            href="/resume.pdf" 
            download="Aman_Pal_Resume.pdf"
            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <a href="#contact" className="text-sm font-medium px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
};
