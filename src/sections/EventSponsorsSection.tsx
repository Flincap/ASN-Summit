import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const sponsors = [
  { src: "/sponsors/Flincap.png", alt: "Flincap" },
  { src: "/sponsors/Solana.png", alt: "Solana" },
  { src: "/sponsors/roqqu.png", alt: "Roqqu" },
  { src: "/sponsors/Flitaa.png", alt: "Flitaa" },
  { src: "/sponsors/Lisk.png", alt: "Lisk" },
];

const EventSponsorsSection: React.FC = () => {
  return (
    <section className="py-20 bg-primary-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Event Sponsors"
          subtitle="Special thanks to our sponsors for supporting the Nigeria Stablecoin Summit."
          center
          light
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-12 p-8 mt-10"
        >
          {sponsors.map((sponsor) => (
            <img
              key={sponsor.alt}
              src={sponsor.src}
              alt={sponsor.alt}
              className="h-16 md:h-40 object-contain max-w-[180px]"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventSponsorsSection;
