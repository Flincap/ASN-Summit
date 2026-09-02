import React from "react";
import Countdown from "react-countdown";
import { ArrowUpRight } from "lucide-react";
import Aurora from "../components/Aurora";
import { event } from "../data/event";
import { useRegistration } from "../components/RegistrationContext";

const glance = [
  { value: "750", label: "Senior executives expected" },
  { value: "3 days", label: "Mixer, then two conference days" },
  { value: "Landmark Centre", label: "Victoria Island, Lagos" },
];

type CountdownRender = {
  days: number;
  hours: number;
  minutes: number;
  completed: boolean;
};

const CountdownStrip: React.FC = () => {
  const renderer = ({ days, hours, minutes, completed }: CountdownRender) => {
    if (completed) {
      return (
        <span className="font-display font-semibold text-indigo-700">
          The Summit is under way in Lagos.
        </span>
      );
    }

    const units = [
      { value: days, label: days === 1 ? "day" : "days" },
      { value: hours, label: hours === 1 ? "hour" : "hours" },
      { value: minutes, label: minutes === 1 ? "min" : "mins" },
    ];

    return (
      <div className="flex items-baseline gap-5">
        {units.map((unit) => (
          <div key={unit.label} className="flex items-baseline gap-1.5">
            <span className="font-display text-2xl font-bold tabular-nums tracking-tight text-indigo-700">
              {unit.value}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink/45">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return <Countdown date={new Date(event.startsAt)} renderer={renderer} />;
};

const HeroSection: React.FC = () => {
  const { openRegistration } = useRegistration();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-paper pb-20 pt-32 md:pb-24 md:pt-36"
    >
      <Aurora />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p
              className="eyebrow animate-rise"
              style={{ animationDelay: "0.05s" }}
            >
              Convened by the {event.convener}
            </p>

            {/* inline-block so the green rule ends exactly where the title does */}
            <div className="mt-5 inline-block">
              <h1
                className="animate-rise font-display text-[2.6rem] font-bold leading-[0.98] tracking-[-0.03em] text-indigo-700 sm:text-6xl lg:text-[4.6rem]"
                style={{ animationDelay: "0.12s" }}
              >
                Africa Payments &amp;
                <br />
                Stablecoin Summit
              </h1>
              <span
                className="mt-6 block h-[4px] w-full animate-rise bg-green-500"
                style={{ animationDelay: "0.2s" }}
              />
            </div>

            <p
              className="mt-7 max-w-xl animate-rise font-display text-xl font-medium leading-snug tracking-tight text-indigo-500 sm:text-2xl"
              style={{ animationDelay: "0.28s" }}
            >
              {event.strapline}
            </p>

            {/* The date and venue bar, carried straight over from the artwork. */}
            <div
              className="mt-9 inline-flex animate-rise flex-wrap overflow-hidden rounded-lg shadow-soft"
              style={{ animationDelay: "0.36s" }}
            >
              <span className="chip bg-indigo-700 px-5 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base">
                {event.dateLine}
              </span>
              <span className="chip px-5 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base">
                {event.city}
              </span>
            </div>

            <div
              className="mt-9 flex animate-rise flex-col gap-6 sm:flex-row sm:items-center sm:gap-8"
              style={{ animationDelay: "0.44s" }}
            >
              <button
                onClick={openRegistration}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-700 px-8 py-4 font-display text-base font-semibold tracking-tight text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:shadow-lift"
              >
                Register to attend
              </button>

              <a
                href={event.sponsorshipForm}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-display text-base font-semibold tracking-tight text-indigo-700 transition-colors hover:text-green-600"
              >
                Become a sponsor
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          <aside
            className="animate-rise rounded-2xl border border-white/70 bg-white/70 p-7 shadow-soft backdrop-blur-md md:p-8"
            style={{ animationDelay: "0.52s" }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink/40">
              Doors open in
            </p>
            <div className="mt-3">
              <CountdownStrip />
            </div>

            <dl className="mt-7 divide-y divide-indigo-100 border-t border-indigo-100">
              {glance.map((item) => (
                <div key={item.label} className="py-4">
                  <dt className="font-display text-lg font-bold tracking-tight text-indigo-700">
                    {item.value}
                  </dt>
                  <dd className="mt-0.5 text-[14px] leading-snug text-ink/60">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-5 text-[13px] leading-relaxed text-ink/50">
              The Tuesday evening mixer is by invitation. Both conference days
              are open to pass holders.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
