import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CardProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  content, 
  icon, 
  className = '',
  delay = 0 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        delay: 0.1 + delay,
        ease: "easeOut"
      } 
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition-shadow duration-300 ${className}`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
    >
      {icon && (
        <div className="mb-4 text-primary-600">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-heading font-bold text-dark-800 mb-3">{title}</h3>
      <p className="text-dark-500 leading-relaxed">{content}</p>
    </motion.div>
  );
};

export default Card;