import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false,
  light = false 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, delay: 0.2 } 
    },
  };

  const lineVariants = {
    hidden: { width: '0%' },
    visible: { 
      width: '60px', 
      transition: { duration: 0.8, delay: 0.4 } 
    },
  };

  return (
    <div 
      ref={ref} 
      className={`mb-12 ${center ? 'text-center' : 'text-left'}`}
    >
      <motion.h2 
        className={`font-heading font-bold text-3xl md:text-4xl mb-4 ${
          light ? 'text-white' : 'text-primary-900'
        }`}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={titleVariants}
      >
        {title}
      </motion.h2>
      
      <motion.div
        className={`h-1 bg-secondary-500 mb-6 ${center ? 'mx-auto' : ''}`}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={lineVariants}
      />
      
      {subtitle && (
        <motion.p 
          className={`text-lg ${
            light ? 'text-gray-100' : 'text-dark-500'
          } max-w-3xl ${center ? 'mx-auto' : ''}`}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={subtitleVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;