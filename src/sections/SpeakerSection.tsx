import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { Users, Star, Calendar, Award } from 'lucide-react';

const SpeakerSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Industry Leaders",
      description: "Central bank executives, fintech pioneers, and policy experts"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Global Perspective",
      description: "Speakers from across Africa and international markets"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Coming Soon",
      description: "First wave of speaker announcements in the coming weeks"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Thought Leadership",
      description: "Cutting-edge insights on stablecoins and digital finance"
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="First Set of Speakers Drops Soon" 
          subtitle="Get ready to hear from visionaries and veterans across blockchain, fintech, and public policy"
          center
        />
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-dark-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-dark-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-primary-600 font-medium">
            Stay tuned for our speaker announcements
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakerSection;