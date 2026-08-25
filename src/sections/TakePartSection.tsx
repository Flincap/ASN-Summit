import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { event } from "../data/event";
import { useRegistration } from "../components/RegistrationContext";

const TakePartSection: React.FC = () => {
  const { openRegistration } = useRegistration();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="register" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Take part" title="Two ways in" />

        <div ref={ref} className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between rounded-2xl bg-ink p-8 md:p-11"
          >
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                Attend
              </h3>
              <span className="rule mt-4 w-10" />
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/65">
                General and delegate passes are open now. Delegate passes carry
                reserved seating and access to the closed executive sessions.
                The Wednesday mixer is by invitation.
              </p>
            </div>

            <button
              onClick={openRegistration}
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-white px-8 py-4 font-display text-base font-semibold tracking-tight text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500 hover:text-white"
            >
              Register to attend
            </button>
          </motion.div>

          <motion.div
            id="sponsor"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex scroll-mt-28 flex-col justify-between rounded-2xl border border-indigo-100 bg-paper p-8 md:p-11"
          >
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-indigo-700 md:text-3xl">
                Sponsor
              </h3>
              <span className="rule mt-4 w-10" />
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink/65">
                Sponsorship puts your institution in front of 750 senior
                banking, payments and finance executives from across the
                continent. Tell us what you want out of the room and we will
                come back with the options.
              </p>
            </div>

            <a
              href={event.sponsorshipForm}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-indigo-700 px-8 py-4 font-display text-base font-semibold tracking-tight text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:shadow-soft"
            >
              Open the sponsorship form
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TakePartSection;
