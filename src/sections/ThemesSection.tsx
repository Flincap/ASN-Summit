import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  TrendingUp, Globe, Scale, ArrowRightLeft, 
  Database, Link, ShieldCheck, Wallet 
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface ThemeItemProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
}

const ThemeItem: React.FC<ThemeItemProps> = ({ icon, title, delay }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        delay,
        ease: "easeOut" 
      } 
    },
  };

  return (
    <motion.div
      className="bg-white rounded-lg p-5 shadow-custom flex items-center hover:shadow-lg transition-shadow duration-300"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="p-3 bg-primary-50 rounded-full mr-4 text-primary-600 flex-shrink-0">
        {icon}
      </div>
      <h3 className="font-medium text-dark-700">{title}</h3>
    </motion.div>
  );
};

const ThemesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const themes = [
    { icon: <TrendingUp size={24} />, title: "Stablecoin Adoption" },
    { icon: <Globe size={24} />, title: "CBDCs and Digital Currencies" },
    { icon: <Scale size={24} />, title: "Regulatory Clarity" },
    { icon: <ArrowRightLeft size={24} />, title: "Cross-Border Payments" },
    { icon: <Database size={24} />, title: "Blockchain Infrastructure" },
    { icon: <Link size={24} />, title: "Interoperability" },
    { icon: <ShieldCheck size={24} />, title: "Privacy and Security" },
    { icon: <Wallet size={24} />, title: "Fiat On-Ramps and Off-Ramps" }
  ];

  return (
    <section id="themes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Key Content Themes" 
          subtitle="Explore the most important topics shaping the future of stablecoins in Africa"
          center
        />
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {themes.map((theme, index) => (
            <ThemeItem
              key={index}
              icon={theme.icon}
              title={theme.title}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;