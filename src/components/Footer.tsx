import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";
import { event } from "../data/event";
import { useRegistration } from "./RegistrationContext";

const socials = [
  { label: "X", href: event.social.x, Icon: Twitter },
  { label: "LinkedIn", href: event.social.linkedin, Icon: Linkedin },
  { label: "Instagram", href: event.social.instagram, Icon: Instagram },
  { label: "Facebook", href: event.social.facebook, Icon: Facebook },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { openRegistration } = useRegistration();

  return (
    <footer className="bg-ink pb-10 pt-20 text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/60">
              Convened by the {event.convener}, the continent's stablecoin
              policy body.
            </p>
            <div className="mt-7 flex gap-4">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/50 transition-colors hover:text-green-400"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-eyebrow text-white/40">
              The Summit
            </h3>
            <ul className="mt-5 space-y-2.5 text-[15px] text-white/70">
              <li>Wednesday 9 June 2027, executive mixer, by invitation</li>
              <li>Thursday 10 June 2027, main conference</li>
              <li>{event.venue}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-eyebrow text-white/40">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-2.5 text-[15px]">
              <li>
                <a
                  href={`mailto:${event.contact.email}`}
                  className="text-white/70 transition-colors hover:text-green-400"
                >
                  {event.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${event.contact.phoneHref}`}
                  className="text-white/70 transition-colors hover:text-green-400"
                >
                  {event.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={event.conveneUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-green-400"
                >
                  afristablecoin.org
                </a>
              </li>
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={openRegistration}
                className="rounded-full bg-white px-6 py-2.5 font-display text-sm font-semibold tracking-tight text-ink transition-colors hover:bg-green-500 hover:text-white"
              >
                Register
              </button>
              <a
                href={event.sponsorshipForm}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/25 px-6 py-2.5 font-display text-sm font-semibold tracking-tight text-white transition-colors hover:border-green-400 hover:text-green-400"
              >
                Sponsor
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-7 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {event.convener}. All rights reserved.
          </p>
          <p>Africa Payments and Stablecoin Summit, Lagos, 9 and 10 June 2027.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
