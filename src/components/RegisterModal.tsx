import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { event } from "../data/event";
import { useRegistration } from "./RegistrationContext";

const passes = [
  {
    key: "general",
    label: "General pass",
    href: event.registration.general,
    summary:
      "Access to both conference days, Wednesday 9 and Thursday 10 June, including plenaries, panels and the exhibition floor.",
    forWho: "Builders, analysts, media and the wider ecosystem",
  },
  {
    key: "delegate",
    label: "Delegate pass",
    href: event.registration.delegate,
    summary:
      "Everything in the general pass, plus reserved seating, the delegate lounge and access to the closed executive sessions.",
    forWho: "Banking, payments and finance executives",
  },
];

const RegisterModal: React.FC = () => {
  const { isOpen, closeRegistration } = useRegistration();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeRegistration();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus into the dialog for keyboard and screen reader users.
    window.setTimeout(() => panelRef.current?.focus(), 40);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, closeRegistration]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <motion.button
            aria-label="Close registration"
            className="absolute inset-0 h-full w-full cursor-default bg-ink/50 backdrop-blur-sm"
            onClick={closeRegistration}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="register-heading"
            className="relative w-full max-w-2xl overflow-hidden rounded-t-3xl bg-white shadow-lift outline-none sm:rounded-3xl"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between gap-6 border-b border-indigo-100 px-6 pb-6 pt-7 sm:px-9">
              <div>
                <span className="eyebrow">Register</span>
                <h2
                  id="register-heading"
                  className="mt-2 font-display text-2xl font-bold tracking-tight text-indigo-700 sm:text-3xl"
                >
                  Choose your pass
                </h2>
                <p className="mt-1 text-sm text-ink/60">
                  {event.dateLine} &middot; {event.city}
                </p>
              </div>
              <button
                onClick={closeRegistration}
                aria-label="Close"
                className="-mr-1 -mt-1 rounded-full p-2 text-ink/40 transition-colors hover:bg-indigo-50 hover:text-indigo-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid gap-4 px-6 py-7 sm:grid-cols-2 sm:px-9">
              {passes.map((pass) => (
                <a
                  key={pass.key}
                  href={pass.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeRegistration}
                  className="group flex flex-col rounded-2xl border border-indigo-100 bg-paper p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-white hover:shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold tracking-tight text-indigo-700">
                      {pass.label}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="text-indigo-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-green-500"
                    />
                  </div>
                  <span className="rule mt-3 w-8" />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                    {pass.summary}
                  </p>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-eyebrow text-ink/40">
                    {pass.forWho}
                  </p>
                </a>
              ))}
            </div>

            <p className="border-t border-indigo-100 px-6 py-4 text-xs text-ink/50 sm:px-9">
              Both links open with our ticketing partners in a new tab. The
              Tuesday mixer is by invitation and is not sold as a pass.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RegisterModal;
