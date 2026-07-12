
import Hero from "./components/Hero";
import NailArtSection from "./components/NailArtSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import ReviewsSection from "./components/ReviewsSection";
import Announcementbar from "./components/Announcementbar";

export default function Home() {
  return (
    <main>
      <Announcementbar/>
      <Hero />
      <Divider />
      <NailArtSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ServicesSection />
      <ReviewsSection/>
      <LocationSection />
      <Footer />
    </main>
  );
}