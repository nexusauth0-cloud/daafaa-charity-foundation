import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { ImpactSection } from "./components/ImpactSection";
import { FounderSection } from "./components/FounderSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { OfficeProjectSection } from "./components/OfficeProjectSection";
import { SupportSection } from "./components/SupportSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-brand-950"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ImpactSection />
        <FounderSection />
        <LeadershipSection />
        <OfficeProjectSection />
        <SupportSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}