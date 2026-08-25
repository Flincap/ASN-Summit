import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../components/SectionHeading";
import { themes } from "../data/event";

const ThemesSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="themes" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="On the agenda"
          title="What the room will be working on"
        />

        <div ref={ref} className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-t border-indigo-100 pt-7"
            >
              <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-indigo-700 md:text-[1.4rem]">
                {theme.title}
              </h3>
              <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-ink/65">
                {theme.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
