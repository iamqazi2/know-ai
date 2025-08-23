"use client";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import FAQSection from "../components/portfolio/components/FAQSection";
import CTASection from "../components/portfolio/components/CTASection";
import BookConsultation from "../components/BookConsultation";

export default function ServicePage() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    // initial placement + hidden until first move
    dot.style.opacity = "0";
    dot.style.left = "0px";
    dot.style.top = "0px";
    dot.style.transform = `translate3d(0px, 0px, 0px) translate(-50%, -50%)`;

    const ease = 0.12; // adjust for more/less lag (lower = more lag)

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

      cur.x += (tgt.x - cur.x) * ease;
      cur.y += (tgt.y - cur.y) * ease;

      const x = Math.round(cur.x * 100) / 100;
      const y = Math.round(cur.y * 100) / 100;

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
      <div className="bg-black">
        <Navbar />
        <BookConsultation />
        <FAQSection />
        <CTASection />
        <Footer />
        <div className="backdrop-blur-md bg-transparent fixed -bottom-1 left-0 w-full h-[80px] z-60 rounded-t-xl shadow-lg" />

        {/* White cursor follower */}
        <div
          ref={dotRef}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "white",
            pointerEvents: "none",
            transition: "opacity 160ms ease",
            zIndex: 9999,
            boxShadow: "0 0 8px rgba(0,0,0,0.12)",
          }}
        />
      </div>
    </>
  );
}
