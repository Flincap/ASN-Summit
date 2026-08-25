import React from "react";
import SectionHeading from "../components/SectionHeading";
import Marquee from "../components/Marquee";
import { brands, sponsors, type Brand } from "../data/brands";

const LogoCard: React.FC<Brand> = ({ name, logo }) => (
  <div className="flex h-24 w-44 shrink-0 items-center justify-center rounded-xl bg-white px-6 shadow-soft ring-1 ring-indigo-100 sm:h-28 sm:w-52">
    <img
      src={logo}
      alt={name}
      loading="lazy"
      decoding="async"
      className="max-h-12 w-auto max-w-full object-contain sm:max-h-14"
    />
  </div>
);

const BrandsSection: React.FC = () => (
  <section id="brands" className="overflow-hidden bg-white py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <SectionHeading
        eyebrow="On the show floor"
        title="Brands that have graced the stage"
        intro="Sponsors, exhibitors and institutional partners from previous editions. Sponsorship for the 2027 edition is open now."
      />
    </div>

    <div className="relative mt-16">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-28" />

      <div className="space-y-5">
        <Marquee direction="left" duration={55} gap={20}>
          {sponsors.map((b) => (
            <LogoCard key={b.name} {...b} />
          ))}
        </Marquee>

        <Marquee direction="right" duration={70} gap={20}>
          {brands.map((b) => (
            <LogoCard key={b.name} {...b} />
          ))}
        </Marquee>
      </div>
    </div>
  </section>
);

export default BrandsSection;
