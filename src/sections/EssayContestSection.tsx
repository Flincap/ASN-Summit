import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const EssayContestSection: React.FC = () => {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle
            title="Undergraduate Essay Contest"
            subtitle="Spotlighting the next generation of thinkers and innovators."
            center
          />
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-custom mt-8">
            <p className="text-lg mb-6">
              As part of the Nigeria Stablecoin Summit 2025, we’re spotlighting
              the next generation of thinkers and innovators through a
              nationwide Essay Contest for undergraduates of tertiary
              institutions in Nigeria.
            </p>
            <div className="mb-6">
              <h3 className="font-heading font-bold text-xl text-primary-700 mb-2">
                This year’s theme:
              </h3>
              <blockquote className="border-l-4 border-primary-600 pl-4 italic text-primary-800 text-lg">
                “From 3MTT to Global Impact: How Stablecoins Can Empower
                Nigeria’s Digital Workforce”
              </blockquote>
            </div>
            <p className="mb-6">
              Whether you’re a developer, researcher, policy enthusiast, or just
              passionate about Nigeria’s future, we want to hear from you.
            </p>
            <div className="mb-6">
              <h4 className="font-bold text-primary-700 mb-2 flex items-center">
                <span className="mr-2" role="img" aria-label="trophy">
                  🏆
                </span>{" "}
                What’s at Stake:
              </h4>
              <ul className="list-disc list-inside text-dark-700 space-y-1">
                <li>Prizes for the top 3 essays</li>
                <li>Recognition at the Nigeria Stablecoin Summit</li>
                <li>Exclusive networking opportunities</li>
              </ul>
            </div>
            <div className="mb-8">
              <h4 className="font-bold text-primary-700 mb-2 flex items-center">
                <span className="mr-2" role="img" aria-label="pushpin">
                  📌
                </span>{" "}
                Key Details:
              </h4>
              <ul className="list-disc list-inside text-dark-700 space-y-1">
                <li>
                  Open to undergraduates across Nigerian tertiary institutions
                </li>
                <li>
                  Original essays only - AI-generated content will be
                  disqualified
                </li>
                <li>Application closes: July 10, 2024</li>
              </ul>
            </div>
            <div className="text-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdrFjm93BypPqf9XHv5XCBhqP0tHo7wyKws5i9o0EV-jI49Rw/viewform?usp=preview"
                className="inline-block px-8 py-3 rounded-md bg-primary-600 text-white font-semibold text-lg shadow-lg hover:bg-primary-700 transition-all"
              >
                Submit Essay
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EssayContestSection;
