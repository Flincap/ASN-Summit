import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, DollarSign, Users, LineChart } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

const PitchSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const benefits = [
    {
      icon: <DollarSign size={24} />,
      title: "$10,000+ in Prizes",
      description: "Cash and in-kind resources to accelerate your startup",
    },
    {
      icon: <Users size={24} />,
      title: "Investor Exposure",
      description: "Present to leading VCs and angel investors",
    },
    {
      icon: <LineChart size={24} />,
      title: "Media Coverage",
      description: "Featured across partner media platforms",
    },
  ];

  return (
    <section id="pitch" className="py-20 bg-primary-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Pitch Competition"
          subtitle="Calling All Builders!"
          light
          center
        />

        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-gray-200 text-lg">
            Register now for the Stablecoin Startup Innovation Pitch Competition
            and stand a chance to win over $10,000 in prizes, exposure, and
            early partnerships.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-primary-800 rounded-lg p-6 shadow-lg"
            >
              <div className="bg-primary-700 p-3 rounded-full inline-block mb-4 text-secondary-400">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              variant="secondary"
              className="group flex items-center"
              href="https://forms.gle/rNwRzo9r8s75f2cf9"
            >
              <span>Register for Pitch Competition</span>
              <Award className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PitchSection;
