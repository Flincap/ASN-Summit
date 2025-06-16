import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Coins } from "lucide-react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="z-50">
            <Logo className="h-12" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://tix.africa/ngstablecoin"
              className="px-5 py-2.5 rounded-md bg-primary-600 text-white font-medium text-sm hover:bg-primary-700 transition-all transform hover:scale-105 duration-300"
            >
              Get Tickets
            </a>
            <a
              href="mailto:nath@africastablecoin.org?subject=Sponsorship%20Deck%20Request"
              className="px-5 py-2.5 rounded-md border-2 border-primary-600 text-primary-600 font-medium text-sm hover:bg-primary-50 transition-all transform hover:scale-105 duration-300"
            >
              Request Sponsorship Deck
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-dark-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 bg-white shadow-lg rounded-b-lg">
          <nav className="flex flex-col space-y-4">
            <a
              href="https://tix.africa/afristablecoin"
              className="px-5 py-2.5 rounded-md bg-primary-600 text-white font-medium text-center hover:bg-primary-700 transition-all"
              onClick={toggleMenu}
            >
              Get Tickets
            </a>
            <a
              href="mailto:nath@africastablecoin.org?subject=Sponsorship%20Deck%20Request"
              className="px-5 py-2.5 rounded-md border-2 border-primary-600 text-primary-600 font-medium text-center hover:bg-primary-50 transition-all"
              onClick={toggleMenu}
            >
              Request Sponsorship Deck
            </a>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
