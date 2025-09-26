"use client";
import { useEffect, useRef } from "react";
import Articles from "./components/about";
import AutomationSection from "./components/AutomationSection";
import Footer from "./components/Footer";
import HeroSection from "./components/hero-section";
import IntegrationsSection from "./components/IntegrationsSection";
import ProjectsSection from "./components/ProjectsSection";
import PersonalAssistantSlider from "./components/ServicesSection";
import BookConsultation from "./components/BookConsultation";
import Services from "./components/Services";
import NewSection from "./components/NewSection";

export default function Home() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    // place at 0,0 initial; keep hidden until first move
    dot.style.opacity = "0";
    dot.style.left = "0px";
    dot.style.top = "0px";
    // Use transform for smooth GPU-accelerated movement
    dot.style.transform = `translate3d(0px, 0px, 0px) translate(-50%, -50%)`;

    const ease = 0.14; // lower => more lag / smoother; adjust between 0.08 - 0.22

    const onMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      if (!visibleRef.current) {
        visibleRef.current = true;
        dot.style.opacity = "1";
      }
    };

    const animate = () => {
      const cur = currentRef.current;
      const tgt = targetRef.current;

      // Lerp towards target
      cur.x += (tgt.x - cur.x) * ease;
      cur.y += (tgt.y - cur.y) * ease;

      // Round to avoid subpixel jitter
      const x = Math.round(cur.x * 100) / 100;
      const y = Math.round(cur.y * 100) / 100;

      // Apply transform (first translate to position, then center)
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <HeroSection />
        <Articles />
        <Services />
        <PersonalAssistantSlider />
        <NewSection />
        <BookConsultation />
        <ProjectsSection />
        <IntegrationsSection />
        <Footer />
        <div className="backdrop-blur-md bg-transparent fixed -bottom-1 left-0 w-full h-[80px] z-60 rounded-t-xl shadow-lg" />
        {/* White cursor follower */}
        <div
          ref={dotRef}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: 15,
            height: 15,
            borderRadius: "50%",
            background: "white",
            pointerEvents: "none",
            // transform will be managed in JS for smoothing
            transition: "opacity 160ms ease",
            zIndex: 9999,
            boxShadow: "0 0 6px rgba(0,0,0,0.15)",
          }}
        />
      </div>
    </>
  );
}
