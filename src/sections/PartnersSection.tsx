import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart2, Radio, Users, Target, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        delay: 0.2 + (index * 0.1) 
      } 
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="flex space-x-4"
    >
      <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full text-primary-600 h-12 w-12 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-dark-700 mb-1">{title}</h3>
        <p className="text-dark-500">{description}</p>
      </div>
    </motion.div>
  );
};

const PartnersSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const benefits = [
    {
      icon: <BarChart2 size={20} />,
      title: "Brand Awareness",
      description: "Position your solution at the center of Africa's stablecoin future."
    },
    {
      icon: <Radio size={20} />,
      title: "Media Visibility",
      description: "Amplify your message through strategic media coverage."
    },
    {
      icon: <Users size={20} />,
      title: "Thought Leadership",
      description: "Take the stage to lead conversations that matter."
    },
    {
      icon: <Target size={20} />,
      title: "Lead Generation",
      description: "Meet customers and partners actively seeking new solutions."
    },
    {
      icon: <Award size={20} />,
      title: "Industry Credibility",
      description: "Be seen as a pioneer in the stablecoin space."
    }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Partner With Us" 
          subtitle="We offer curated partnership packages that connect your brand to key decision-makers, innovators, and institutions across Africa's digital finance ecosystem."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="order-2 lg:order-1">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-6"
            >
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  index={index}
                />
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-10"
            >
              <Button
                variant="primary"
                href="mailto:nath@africastablecoin.org?subject=Sponsorship%20Deck%20Request"
              >
                Request Sponsorship Deck
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-gray-50 p-8 rounded-xl shadow-custom h-full">
              <h3 className="font-heading font-bold text-2xl text-primary-700 mb-6">
                Partnership Tiers
              </h3>
              
              <div className="space-y-5">
                <div className="border-l-4 border-secondary-500 pl-4">
                  <h4 className="font-bold text-lg text-dark-800 mb-1">Diamond Partner</h4>
                  <p className="text-dark-500">Premium positioning and maximum visibility</p>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-bold text-lg text-dark-800 mb-1">Gold Partner</h4>
                  <p className="text-dark-500">Enhanced presence and speaking opportunities</p>
                </div>
                
                <div className="border-l-4 border-primary-400 pl-4">
                  <h4 className="font-bold text-lg text-dark-800 mb-1">Silver Partner</h4>
                  <p className="text-dark-500">Brand visibility and networking focus</p>
                </div>
                
                <div className="border-l-4 border-primary-300 pl-4">
                  <h4 className="font-bold text-lg text-dark-800 mb-1">Bronze Partner</h4>
                  <p className="text-dark-500">Entry-level participation and basic visibility</p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-dark-500 italic">
                    Custom packages are available to meet your specific objectives and budget.
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

export default PartnersSection;