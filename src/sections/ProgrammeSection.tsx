import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { event, programme } from "../data/event";

const ProgrammeSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="programme" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(93,79,183,0.5),rgba(93,79,183,0)_66%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Programme"
          title="How the two days run"
          intro="Wednesday evening is a closed room. Thursday is the main stage. Both sit in the same building, so the conversations carry over."
          light
        />

        <div ref={ref} className="mt-16 grid gap-6 md:grid-cols-2">
          {programme.map((day, i) => (
            <motion.article
              key={day.date}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-green-500/40 md:p-10"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-white px-3 py-1.5 font-display text-xs font-bold tracking-tight text-ink">
                  {day.date}
                </span>
                <span className="rounded-md border border-white/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-eyebrow text-white/60">
                  {day.access}
                </span>
              </div>

              <h3 className="mt-7 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                {day.title}
              </h3>
              <span className="rule mt-4 w-10" />

              <p className="mt-6 flex-1 text-[16px] leading-relaxed text-white/65">
                {day.description}
              </p>

              <p className="mt-8 text-[11px] font-semibold uppercase tracking-eyebrow text-white/40">
                {day.day} &middot; {day.time}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-3 text-white/60">
          <MapPin size={18} className="shrink-0 text-green-400" />
          <p className="text-[15px]">
            {event.venue}. Full agenda and speaker programme announced closer to
            the date.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
