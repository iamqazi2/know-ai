import Articles from "./components/about";
import AutomationSection from "./components/AutomationSection";
import Footer from "./components/Footer";
import HeroSection from "./components/hero-section";
import IntegrationsSection from "./components/IntegrationsSection";
import ProjectsSection from "./components/ProjectsSection";
import PersonalAssistantSlider from "./components/ServicesSection";
import BookConsultation from "./components/BookConsultation";

export default function Home() {
  return (
    <>
      <div className="relative">
        <HeroSection />
        <Articles />
        <PersonalAssistantSlider />
        <AutomationSection />
        <BookConsultation />
        <ProjectsSection />
        <IntegrationsSection />
        <Footer />
        <div className="backdrop-blur-md bg-transparent fixed -bottom-1 left-0 w-full h-[80px] z-60 rounded-t-xl shadow-lg" />
      </div>
    </>
  );
}
