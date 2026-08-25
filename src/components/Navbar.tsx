import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { event } from "../data/event";
import { useRegistration } from "./RegistrationContext";

const links = [
  { label: "About", href: "#about" },
  { label: "Programme", href: "#programme" },
  { label: "Speakers", href: "#speakers" },
  { label: "Sponsor", href: "#sponsor" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openRegistration } = useRegistration();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-indigo-100 bg-white/95 py-3 backdrop-blur-md"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-indigo-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={event.sponsorshipForm}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-indigo-200 px-5 py-2.5 font-display text-sm font-semibold tracking-tight text-indigo-700 transition-all duration-300 hover:border-indigo-700 hover:bg-indigo-50"
          >
            Become a sponsor
          </a>
          <button
            onClick={openRegistration}
            className="rounded-full bg-indigo-700 px-6 py-2.5 font-display text-sm font-semibold tracking-tight text-white transition-all duration-300 hover:bg-ink hover:shadow-soft"
          >
            Register
          </button>
        </div>

        <button
          className="rounded-full p-2 text-indigo-700 lg:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overflow-hidden lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mx-5 mt-3 flex flex-col gap-1 rounded-2xl border border-indigo-100 bg-white p-4 shadow-soft md:mx-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-3 font-display text-base font-semibold tracking-tight text-indigo-700 transition-colors hover:bg-indigo-50"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={event.sponsorshipForm}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-full border border-indigo-200 px-5 py-3 text-center font-display text-sm font-semibold tracking-tight text-indigo-700"
              >
                Become a sponsor
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  openRegistration();
                }}
                className="mt-2 rounded-full bg-indigo-700 px-5 py-3 font-display text-sm font-semibold tracking-tight text-white"
              >
                Register
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
