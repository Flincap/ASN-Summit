import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Minus, Plus } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { event } from "../data/event";

const facts = [
  { value: "750", label: "Senior executives in the room" },
  { value: "3", label: "Days, mixer and two conference days" },
  { value: "3rd", label: "Edition of the platform" },
];

const fullBrief = [
  "Africa's payment systems are being rebuilt in real time. Instant payment rails now operate in more than thirty African countries. Cross-border settlement in African currencies is no longer theoretical. And stablecoins have become a working part of how value moves between African markets, whether or not the rules have caught up.",
  "The Africa Payments and Stablecoin Summit exists to put the people making those decisions in the same room.",
  "Convened by the Africa Stablecoin Network, the Summit gathers 750 senior executives from banking, payments, fintech and financial regulation across the continent. The programme is built around the institutions that write and operate the rules, alongside the operators building on top of them. Sessions cover stablecoin regulation and legislative design, cross-border settlement infrastructure, the treatment of digital assets under African law, and what the next generation of payment rails means for banks and their customers.",
  "The Summit is the successor to the Nigeria Stablecoin Summit, which established itself as Nigeria's leading forum on stablecoin policy over two editions. The 2027 edition takes the platform continental.",
  "Proceedings open with an invitation-only executive mixer on the evening of Tuesday 8 June, followed by two full conference days on Wednesday 9 and Thursday 10 June.",
];

const AboutSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="About the Summit" title="Three days in Lagos" />

            <div className="mt-8 space-y-6 text-[17px] leading-relaxed text-ink/75">
              <p>
                The Africa Payments and Stablecoin Summit brings together 750
                senior executives from banking, payments and finance across
                Africa for three days in Lagos. Convened by the Africa Stablecoin
                Network, it is the continent's foremost gathering on stablecoin
                regulation, cross-border settlement and the future of African
                payment infrastructure. The Summit opens with an
                invitation-only mixer on the evening of Tuesday 8 June,
                followed by two full conference days on Wednesday 9 and
                Thursday 10 June.
              </p>
            </div>

            <button
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="group mt-8 inline-flex items-center gap-2.5 font-display text-[15px] font-semibold tracking-tight text-indigo-700 transition-colors hover:text-green-600"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-indigo-200 transition-colors group-hover:border-green-500">
                {expanded ? <Minus size={13} /> : <Plus size={13} />}
              </span>
              {expanded ? "Show less" : "Read the full brief"}
            </button>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="brief"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-8 space-y-6 border-l-2 border-green-500 pl-6 text-[17px] leading-relaxed text-ink/75">
                    {fullBrief.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                    <p className="font-display font-semibold text-indigo-700">
                      Lagos, Nigeria. 8 to 10 June 2027.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pt-4"
          >
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <img
                src="/hero-bg.jpg"
                alt="Delegates in conversation at the Nigeria Stablecoin Summit"
                loading="lazy"
                className="h-64 w-full object-cover md:h-80"
              />
            </div>

            <dl className="mt-8 divide-y divide-indigo-100 border-y border-indigo-100">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline gap-6 py-5"
                >
                  <dt className="w-16 shrink-0 font-display text-3xl font-bold tracking-tight text-indigo-700">
                    {fact.value}
                  </dt>
                  <dd className="text-[15px] leading-snug text-ink/65">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-[15px] leading-relaxed text-ink/60">
              Successor to the Nigeria Stablecoin Summit, whose second edition
              was held on 30 July 2026 at the {event.venue.split(",")[0]},
              Victoria Island.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
