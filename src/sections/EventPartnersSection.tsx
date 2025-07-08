import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const partners = [
  { src: "/partners/condia.png", alt: "Condia" },
  { src: "/partners/siban.png", alt: "SIBAN" },
  { src: "/partners/web3bridge.png", alt: "Web3Bridge" },
  { src: "/partners/Women%20in%20DeFi.png", alt: "Women in DeFi" },
  { src: "/partners/nirvana.png", alt: "Nirvana Academy" },
  { src: "/partners/base.svg", alt: "Base Network" },
];

const EventPartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Event Partners"
          subtitle="Proudly partnering with leading organizations in the digital finance ecosystem."
          center
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-12 bg-white rounded-xl p-8 shadow-custom mt-10"
        >
          {partners.map((partner) => (
            <img
              key={partner.alt}
              src={partner.src}
              alt={partner.alt}
              className="h-16 md:h-20 object-contain max-w-[180px]"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventPartnersSection;
