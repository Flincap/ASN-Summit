import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const ContactSection: React.FC = () => {
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

  return (
    <section id="contact" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Contact" 
          subtitle="Have questions? Need more information? Get in touch with us."
          center
        />
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-custom"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-dark-800 mb-2">
              Nathaniel Luz
            </h3>
            <p className="text-dark-500 font-medium">President, African Stablecoin Network</p>
            <p className="text-dark-500">Convener, African Stablecoin Conference</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-8">
              <a 
                href="mailto:nath@africastablecoin.org" 
                className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
              >
                <Mail size={20} className="mr-2" />
                <span>nath@africastablecoin.org</span>
              </a>
              <a 
                href="tel:+2349039830751" 
                className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
              >
                <Phone size={20} className="mr-2" />
                <span>+234 903 983 0751</span>
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-dark-600">
                For inquiries about sponsorships, speaking opportunities, or general event information, 
                please don't hesitate to reach out.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;