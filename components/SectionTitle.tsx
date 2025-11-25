import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle: React.FC<Props> = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-12 md:mb-16 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-black mb-4 uppercase tracking-wide ${light ? 'text-white' : 'text-blue-900'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`w-24 h-1 mx-auto rounded-full mb-4 ${light ? 'bg-sky-400' : 'bg-red-600'}`} 
        />
      )}
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`text-lg max-w-2xl mx-auto ${light ? 'text-gray-200' : 'text-gray-600'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;