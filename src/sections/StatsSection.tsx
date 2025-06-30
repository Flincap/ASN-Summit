import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Users,
  Building2,
  Store,
  MessageSquare,
  Award,
  Mic2,
} from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      className="bg-white rounded-lg p-6 shadow-custom flex flex-col items-center text-center"
    >
      <div className="p-3 bg-primary-50 rounded-full mb-4 text-primary-600">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-primary-700 font-heading mb-2">
        {value}
      </h3>
      <p className="text-dark-500">{label}</p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { icon: <Users size={24} />, value: "1000+", label: "Attendees", delay: 0 },
    {
      icon: <Building2 size={24} />,
      value: "100+",
      label: "Companies",
      delay: 0.1,
    },
    {
      icon: <Store size={24} />,
      value: "20+",
      label: "Exhibitors",
      delay: 0.2,
    },
    { icon: <Mic2 size={24} />, value: "15+", label: "Speakers", delay: 0.3 },
    {
      icon: <MessageSquare size={24} />,
      value: "5+",
      label: "Expert Sessions",
      delay: 0.4,
    },
    {
      icon: <Award size={24} />,
      value: "1",
      label: "Pitch Competition",
      delay: 0.5,
    },
  ];

  return (
    <section id="stats" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-primary-900 mb-12">
          At a Glance
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
