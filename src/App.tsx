import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import RegisterModal from "./components/RegisterModal";
import { RegistrationProvider } from "./components/RegistrationContext";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProgrammeSection from "./sections/ProgrammeSection";
import ThemesSection from "./sections/ThemesSection";
import SpeakersSection from "./sections/SpeakersSection";
import BrandsSection from "./sections/BrandsSection";
import GallerySection from "./sections/GallerySection";
import TakePartSection from "./sections/TakePartSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <RegistrationProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProgrammeSection />
          <ThemesSection />
          <SpeakersSection />
          <BrandsSection />
          <GallerySection />
          <TakePartSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
        <RegisterModal />
      </div>
    </RegistrationProvider>
  );
}

export default App;
