import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import StatsSection from "./sections/StatsSection";
import WhatsNewSection from "./sections/WhatsNewSection";
import ThemesSection from "./sections/ThemesSection";
import PitchSection from "./sections/PitchSection";
import EssayContestSection from "./sections/EssayContestSection";
import EventPartnersSection from "./sections/EventPartnersSection";
import PartnersSection from "./sections/PartnersSection";
import ExhibitionSection from "./sections/ExhibitionSection";
import SpeakerSection from "./sections/SpeakerSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import EventSponsorsSection from "./sections/EventSponsorsSection";

function App() {
  return (
    <div className="min-h-screen bg-white text-dark-700">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <WhatsNewSection />
        <ThemesSection />
        <PitchSection />
        <EssayContestSection />
        <EventSponsorsSection />
        <EventPartnersSection />
        <PartnersSection />
        <ExhibitionSection />
        <SpeakerSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
