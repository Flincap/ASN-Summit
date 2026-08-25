import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../components/SectionHeading";
import { previousSpeakers } from "../data/speakers";

const SpeakersSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="speakers" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Previous speakers"
          title="Who has taken the stage before"
          intro="Speakers from earlier editions of the platform. The 2027 programme is announced closer to the date."
        />

        <div
          ref={ref}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-8 lg:grid-cols-4"
        >
          {previousSpeakers.map((speaker, i) => (
            <motion.figure
              key={speaker.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: (i % 4) * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl bg-indigo-100 shadow-soft">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="mt-5">
                <h3 className="font-display text-[17px] font-bold leading-tight tracking-tight text-indigo-700">
                  {speaker.name}
                </h3>
                <span className="rule mt-3 w-7" />
                <p className="mt-3 text-[14px] leading-snug text-ink/60">
                  {speaker.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
