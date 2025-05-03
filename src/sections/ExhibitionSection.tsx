import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Store, Monitor, Users, MessageCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const ExhibitionSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Store className="w-10 h-10" />,
      title: "Premium Booth Space",
      description: "Showcase your products in a high-traffic, dedicated area"
    },
    {
      icon: <Monitor className="w-10 h-10" />,
      title: "Live Demos",
      description: "Interactive product demonstrations to engage potential clients"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Networking Opportunities",
      description: "Direct access to decision-makers, investors, and partners"
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "Media Exposure",
      description: "Featured in conference materials and media coverage"
    }
  ];

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

  return (
    <section id="exhibition" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Exhibition" 
          subtitle="Demonstrate your product. Showcase your infrastructure. Convert interest into traction."
          center
        />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-dark-600">
            The Africa Stablecoin Conference exhibition floor is a hotspot for discovery, 
            demo sessions, and direct B2B engagement with active players in the digital finance space.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-custom text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4 text-primary-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-dark-800">{feature.title}</h3>
              <p className="text-dark-500">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button 
            variant="primary" 
            href="mailto:nath@africastablecoin.org?subject=Exhibition%20Deck%20Request"
          >
            Request Exhibition Deck
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExhibitionSection;