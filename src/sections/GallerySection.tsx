import React, { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Marquee from "../components/Marquee";
import { event, gallery } from "../data/event";

const row = (prefix: string) =>
  Array.from(
    { length: 10 },
    (_, i) => `/gallery/${prefix}-${String(i + 1).padStart(2, "0")}-640.webp`
  );

const speaking = row("speaking");
const exhibiting = row("exhibiting");
const attending = row("attending");

const Frame: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="h-40 w-60 shrink-0 overflow-hidden rounded-xl bg-white/5 sm:h-44 sm:w-72 md:h-48 md:w-80">
    <img
      src={src}
      alt={alt}
      width={640}
      height={420}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover"
    />
  </div>
);

/**
 * Click-to-play YouTube embed. The iframe is only mounted once someone hits
 * play, so the page does not load YouTube's scripts for everyone who scrolls
 * past.
 */
const VideoRecap: React.FC = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-ink ring-1 ring-white/10">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${gallery.videoId}?autoplay=1&rel=0`}
          title="Summit recap film"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label="Play the Summit recap film"
        >
          <img
            src={`https://i.ytimg.com/vi/${gallery.videoId}/maxresdefault.jpg`}
            alt=""
            loading="lazy"
            onError={(e) => {
              // Not every video has a maxres still, but hqdefault always exists.
              const img = e.currentTarget;
              const fallback = `https://i.ytimg.com/vi/${gallery.videoId}/hqdefault.jpg`;
              if (img.src !== fallback) img.src = fallback;
            }}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-ink/35 transition-colors group-hover:bg-ink/20" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-ink shadow-lift transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white md:h-20 md:w-20">
              <Play size={26} className="ml-1 fill-current" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
};

const GallerySection: React.FC = () => (
  <section
    id="gallery"
    className="relative overflow-hidden bg-ink py-24 md:py-32"
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-40 top-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(93,79,183,0.45),rgba(93,79,183,0)_66%)]"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 bottom-0 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(10,174,120,0.22),rgba(10,174,120,0)_66%)]"
    />

    <div className="relative z-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Relive the moments"
          title="From the last edition"
          intro="The conversations, the show floor and the room itself, from the Nigeria Stablecoin Summit."
          light
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-14">
          <VideoRecap />

          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              The recap film
            </h3>
            <span className="rule mt-4 w-10" />
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/65">
              A few minutes inside the last edition, from the opening keynote to
              the closing roundtables. The full photo library is open to
              everyone, so help yourself to anything you want to use.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={gallery.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-display text-[15px] font-semibold tracking-tight text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500 hover:text-white"
              >
                Open the full gallery
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={gallery.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-display text-[15px] font-semibold tracking-tight text-white/70 transition-colors hover:text-green-400"
              >
                Watch on YouTube
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-16 space-y-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink to-transparent sm:w-28" />

        <Marquee direction="right" duration={70}>
          {speaking.map((src, i) => (
            <Frame key={src} src={src} alt={`On stage, moment ${i + 1}`} />
          ))}
        </Marquee>

        <Marquee direction="left" duration={80}>
          {exhibiting.map((src, i) => (
            <Frame key={src} src={src} alt={`Show floor, moment ${i + 1}`} />
          ))}
        </Marquee>

        <Marquee direction="right" duration={75}>
          {attending.map((src, i) => (
            <Frame key={src} src={src} alt={`In the room, moment ${i + 1}`} />
          ))}
        </Marquee>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-5 text-center md:px-8">
        <a
          href={gallery.driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-display text-[15px] font-semibold tracking-tight text-white transition-colors hover:text-green-400"
        >
          See every photo from the last edition
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
        <p className="mt-3 text-[13px] text-white/40">
          Hosted on Google Drive. For press enquiries write to{" "}
          {event.contact.email}.
        </p>
      </div>
    </div>
  </section>
);

export default GallerySection;
