import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Section = ({ children, id, className, ...props }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-20 md:py-32 container mx-auto px-6 max-w-6xl", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
};
