"use client";

import ProjectSection from "./components/ProjectsSection";
import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";

export default function PortfolioPages() {
  return (
    <>
      <div className="relative bg-black">
        <ProjectSection/>
        <FAQSection />
        <CTASection />
      </div>
    </>
  );
}
