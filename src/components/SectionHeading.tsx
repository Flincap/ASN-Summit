import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  intro,
  center = false,
  light = false,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div ref={ref} className={`${center ? "text-center" : ""} max-w-3xl ${center ? "mx-auto" : ""}`}>
      {eyebrow && (
        <motion.span
          className={`eyebrow ${light ? "text-green-400" : ""}`}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        className={`mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight md:text-[2.6rem] ${
          light ? "text-white" : "text-indigo-700"
        }`}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        {title}
      </motion.h2>

      <motion.span
        className={`rule mt-5 ${center ? "mx-auto" : ""}`}
        initial={{ width: 0 }}
        animate={inView ? { width: 64 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      />

      {intro && (
        <motion.p
          className={`mt-6 text-[17px] leading-relaxed ${
            light ? "text-white/70" : "text-ink/65"
          }`}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
