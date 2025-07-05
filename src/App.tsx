import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import TicketSection from "./sections/TicketSection";
import AboutSection from "./sections/AboutSection";
import StatsSection from "./sections/StatsSection";
import WhatsNewSection from "./sections/WhatsNewSection";
import ThemesSection from "./sections/ThemesSection";
import PitchSection from "./sections/PitchSection";
import EssayContestSection from "./sections/EssayContestSection";
import EventPartnersSection from "./sections/EventPartnersSection";
import PartnersSection from "./sections/PartnersSection";
import ExhibitionSection from "./sections/ExhibitionSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import EventSponsorsSection from "./sections/EventSponsorsSection";
import SpeakersSection from "./sections/SpeakersSection";

function App() {
  return (
    <div className="min-h-screen bg-white text-dark-700">
      <Navbar />
      <main>
        <HeroSection />
        <TicketSection />
        <AboutSection />
        <StatsSection />
        <WhatsNewSection />
        <ThemesSection />
        <SpeakersSection />
        <EventSponsorsSection />
        <EventPartnersSection />
        <PartnersSection />
        <PitchSection />
        <EssayContestSection />
        <ExhibitionSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
