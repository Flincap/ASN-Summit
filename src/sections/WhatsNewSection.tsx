import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Store, Users, LayoutList, Presentation } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const WhatsNewSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Store size={36} />,
      title: "Stablecoin Expo",
      content: "A dynamic showcase of wallets, protocols, infrastructure providers, and ecosystem projects shaping stablecoin utility across Africa.",
      delay: 0
    },
    {
      icon: <Users size={36} />,
      title: "Pre-Event Networking Night",
      content: "An intimate evening for delegates to unwind, connect, and build strategic relationships — before the conference kicks off.",
      delay: 0.1
    },
    {
      icon: <LayoutList size={36} />,
      title: "New Content Tracks",
      content: "CBDCs, asset-backed stablecoins, interoperability, real-world stablecoin use cases, and on-chain financial infrastructure.",
      delay: 0.2
    },
    {
      icon: <Presentation size={36} />,
      title: "Pitch Live",
      content: "Africa's brightest early-stage startups take the spotlight to present transformative ideas and compete for investor attention.",
      delay: 0.3
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={headerVariants}
        >
          <SectionTitle
            title="What's New in 2025"
            subtitle="Exciting new features and experiences at this year's conference"
            center
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              content={feature.content}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsNewSection;