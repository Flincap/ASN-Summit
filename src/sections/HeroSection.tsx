import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Countdown from "react-countdown";
import { MapPin, Clock, Calendar } from "lucide-react";
import Button from "../components/Button";

const HeroSection: React.FC = () => {
  const eventDate = new Date("2025-07-24T08:00:00").getTime();

  const backgroundImages = ["/hero-bg.jpg", "/hero-bg-2.JPG"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentIndex) => {
        const nextIndex = currentIndex + 1;
        if (nextIndex >= backgroundImages.length) {
          return 0;
        } else {
          return nextIndex;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Countdown renderer
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <span>Event has started!</span>;
    } else {
      return (
        <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
          <div className="bg-white bg-opacity-90 rounded-lg p-2 md:p-4">
            <div className="text-2xl md:text-4xl font-bold text-primary-700">
              {days}
            </div>
            <div className="text-xs md:text-sm text-gray-600">Days</div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-lg p-2 md:p-4">
            <div className="text-2xl md:text-4xl font-bold text-primary-700">
              {hours}
            </div>
            <div className="text-xs md:text-sm text-gray-600">Hours</div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-lg p-2 md:p-4">
            <div className="text-2xl md:text-4xl font-bold text-primary-700">
              {minutes}
            </div>
            <div className="text-xs md:text-sm text-gray-600">Minutes</div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-lg p-2 md:p-4">
            <div className="text-2xl md:text-4xl font-bold text-primary-700">
              {seconds}
            </div>
            <div className="text-xs md:text-sm text-gray-600">Seconds</div>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20">
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Nigeria Stablecoin Summit
            </h1>
            <h2 className="text-xl md:text-2xl text-white mb-8">
              Enhancing Adoption of a Borderless Digital Economy.
            </h2>
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <Countdown date={eventDate} renderer={renderer} />
          </motion.div>

          <motion.div
            className="flex items-center text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <MapPin className="mr-2 h-5 w-5 text-secondary-400" />
            <span>Oriental Hotel, VI, Lagos</span>
          </motion.div>

          <motion.div
            className="flex items-center text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="flex gap-3 items-center">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-secondary-400" />
                <span>July 24, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-secondary-400" />
                <span>8:00am WAT</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button variant="primary" href="https://tix.africa/ngstablecoin">
              Get Tickets
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
              href="mailto:nath@afristablecoin.org?subject=Sponsorship%20Deck%20Request"
            >
              Request Sponsorship Deck
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
