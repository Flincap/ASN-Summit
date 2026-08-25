import React from "react";
import SectionHeading from "../components/SectionHeading";
import Marquee from "../components/Marquee";
import { previousSpeakers } from "../data/speakers";

const SpeakerCard: React.FC<{
  name: string;
  title: string;
  image: string;
}> = ({ name, title, image }) => (
  <figure className="group w-56 shrink-0 overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-soft sm:w-64">
    <div className="aspect-square overflow-hidden bg-indigo-100">
      <img
        src={image}
        alt={name}
        width={512}
        height={512}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
    </div>
    <figcaption className="p-5">
      <h3 className="font-display text-[15px] font-bold leading-tight tracking-tight text-indigo-700">
        {name}
      </h3>
      <span className="rule mt-3 w-7" />
      <p className="mt-3 text-[13px] leading-snug text-ink/60">{title}</p>
    </figcaption>
  </figure>
);

const SpeakersSection: React.FC = () => {
  // Split into two rows so the wall reads as a wall, not a single ribbon.
  const half = Math.ceil(previousSpeakers.length / 2);
  const rowOne = previousSpeakers.slice(0, half);
  const rowTwo = previousSpeakers.slice(half);

  return (
    <section id="speakers" className="overflow-hidden bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Previous speakers"
          title="Who has taken the stage before"
          intro="Regulators, bank executives, founders and academics from earlier editions of the platform. The 2027 programme is announced closer to the date."
        />
      </div>

      <div className="relative mt-16">
        {/* Edge fades so cards slide in and out rather than being cut off */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-paper to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-paper to-transparent sm:w-28" />

        <div className="space-y-5">
          <Marquee direction="left" duration={80} gap={20}>
            {rowOne.map((s) => (
              <SpeakerCard key={s.name} {...s} />
            ))}
          </Marquee>

          <Marquee direction="right" duration={90} gap={20}>
            {rowTwo.map((s) => (
              <SpeakerCard key={s.name} {...s} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
