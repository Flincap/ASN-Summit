import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { event } from "../data/event";

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="contact" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Contact"
            title="Speak to the Summit team"
            intro="For registration, speaking, partnership or press enquiries, write to us or call. The Summit secretariat sits with the Africa Stablecoin Network in Lagos."
          />

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pt-8"
          >
            <ul className="divide-y divide-indigo-100 border-y border-indigo-100">
              <li>
                <a
                  href={`mailto:${event.contact.email}`}
                  className="group flex items-center gap-5 py-6 transition-colors"
                >
                  <Mail size={20} className="shrink-0 text-green-500" />
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-eyebrow text-ink/40">
                      Email
                    </span>
                    <span className="mt-1 block font-display text-lg font-semibold tracking-tight text-indigo-700 transition-colors group-hover:text-green-600">
                      {event.contact.email}
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={`tel:${event.contact.phoneHref}`}
                  className="group flex items-center gap-5 py-6 transition-colors"
                >
                  <Phone size={20} className="shrink-0 text-green-500" />
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-eyebrow text-ink/40">
                      Phone
                    </span>
                    <span className="mt-1 block font-display text-lg font-semibold tracking-tight text-indigo-700 transition-colors group-hover:text-green-600">
                      {event.contact.phone}
                    </span>
                  </span>
                </a>
              </li>

              <li className="flex items-center gap-5 py-6">
                <MapPin size={20} className="shrink-0 text-green-500" />
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-eyebrow text-ink/40">
                    Venue
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold tracking-tight text-indigo-700">
                    {event.venue}
                  </span>
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
