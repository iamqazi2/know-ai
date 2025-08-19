"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Declare global GSAP types
declare global {
  interface Window {
    gsap: {
      registerPlugin: (plugin: unknown) => void;
      context: (
        func: () => void,
        scope?: HTMLElement | null
      ) => { revert: () => void };
      to: (
        targets: Element[] | NodeListOf<Element>,
        vars: Record<string, unknown>
      ) => void;
    };
    ScrollTrigger: unknown;
  }
}

export default function AIAssistant() {
  // Properly type the ref as HTMLParagraphElement
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Load GSAP and ScrollTrigger from CDN
    const loadGSAP = () => {
      if (!window.gsap) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
        script.onload = () => {
          const scrollTriggerScript = document.createElement("script");
          scrollTriggerScript.src =
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
          scrollTriggerScript.onload = () => {
            window.gsap.registerPlugin(window.ScrollTrigger);
            initAnimation();
          };
          document.head.appendChild(scrollTriggerScript);
        };
        document.head.appendChild(script);
      } else {
        initAnimation();
      }
    };

    const initAnimation = () => {
      if (!textRef.current || !window.gsap) return;

      // Use a safer approach with GSAP's context to avoid TS errors with innerHTML
      const ctx = window.gsap.context(() => {
        // Get the current text content
        const content = textRef.current?.textContent || "";
        const words = content.split(" ");

        // Clear the current content
        if (textRef.current) {
          textRef.current.textContent = "";

          // Create and append spans for each word
          words.forEach((word, index) => {
            const span = document.createElement("span");
            span.className = "word";
            span.style.color = "#5b5a5aec";
            span.style.display = "inline-block";
            span.textContent = word;

            textRef.current?.appendChild(span);

            // Add a space after each word (except the last one)
            if (index < words.length - 1) {
              textRef.current?.appendChild(document.createTextNode(" "));
            }
          });

          // Select all word spans and animate them
          const wordSpans = textRef.current.querySelectorAll(".word");

          window.gsap.to(wordSpans, {
            color: "white",
            stagger: 0.05,
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
              toggleActions: "play reverse play reverse",
            },
          });
        }
      }, textRef.current); // Scope the context to the text ref

      // Clean up the context when component unmounts
      return () => ctx.revert();
    };

    loadGSAP();
  }, []);

  return (
    <main className="bg-black h-fit relative flex py-10 md:py-30 flex-col space-y-12 items-center">
      <div
        className="
  h-[36px] sm:h-[40px] 
  flex items-center justify-between 
  px-[8px] md:px-[6px] 
  rounded-[32px] border border-[#FFFFFF1A] 
  bg-gradient-to-r from-white/10 to-transparent 
  shadow-[inset_0px_1px_10px_0px_rgba(0,0,0,0.25)] 
  opacity-100 gap-[4px] md:gap-[4px]"
      >
        <Image
          src="/about.svg"
          alt="Our Desk"
          height={32}
          width={32}
          className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] 
    rounded-[20px] border border-white/10 
    p-[1px] sm:p-[2px] object-contain"
        />

        <span
          className="font-dmSans whitespace-nowrap 
    font-normal text-[14px] sm:text-[16px] 
    leading-[100%] text-center text-white"
        >
          Our Deck
        </span>
      </div>
      <div>
        {" "}
        <p
          ref={textRef}
          className="heading-md my-5 text-center text-[19px] md:text-[60px] leading-tight max-w-[1280]  mx-auto"
        >
          We provide services to organizations which helps uncover high-impact
          AI opportunities, develop tailored automation systems, and deploy them
          for maximum business benefit
        </p>
      </div>
      <button className="bg-gradient-to-b from-[#521ED6] to-[#7E56E2] h-[70px] text-white px-6 py-2 text-[20px] font-bold rounded-[10px] border-2 border-[#8D6AE6] transition-all duration-300 ease-in-out hover:scale-105 transform shadow-lg hover:shadow-purple-500/25">
        Book an Appointment
      </button>
    </main>
  );
}
