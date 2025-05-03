import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      } 
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="About the Event" 
          subtitle="Empowering Africa's Stablecoin Ecosystem"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={contentVariants}
            className="order-2 lg:order-1"
          >
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Africa is undergoing a financial awakening. From fintech to blockchain, digital 
                currencies to CBDCs, the conversation is rapidly evolving — and stablecoins are 
                leading the charge.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Now in its most anticipated edition yet, the Africa Stablecoin Conference is the 
                continent's premier platform for deep insights, live showcases, and high-value 
                networking across the digital currency and stablecoin space.
              </p>
              <p className="text-lg leading-relaxed">
                Join experts from payments, blockchain, policy, banking, fintech, and regtech 
                as they discuss what's next — and how we build it. This November, we convene 
                the continent's most forward-thinking builders, regulators, innovators, and 
                investors to explore how stablecoins are reshaping finance, empowering people, 
                and accelerating economic transformation across Africa.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 p-8 rounded-xl">
              <h3 className="font-heading font-bold text-2xl text-primary-800 mb-6">
                The Future of Money, Built in Africa
              </h3>
              
              <div className="space-y-4">
                <p className="text-primary-700">
                  This isn't just a conference. It's a launchpad for the next era of 
                  financial infrastructure.
                </p>
                
                <div className="bg-white p-5 rounded-lg shadow-even">
                  <p className="italic text-primary-600 font-medium">
                    "The Africa Stablecoin Conference brings together the entire ecosystem —
                    from builders to regulators — creating a unique platform for collaboration 
                    that's driving innovation forward."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;