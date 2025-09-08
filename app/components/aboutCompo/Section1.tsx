"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Section2 from "./Section2";

const PortfolioMainSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(headerRef.current, { opacity: 0, y: -50 }); // Header from top
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 50 }); // Text from bottom
      gsap.set(formRef.current, { opacity: 0, y: 50 }); // Form from bottom

      // Create timeline for simultaneous animations
      const tl = gsap.timeline();

      // All animations start at the same time
      tl.to(
        headerRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        0
      )
        .to(
          [titleRef.current, subtitleRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.1,
          },
          0
        )
        .to(
          formRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          0.2
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {" "}
      <div
        ref={sectionRef}
        className="relative flex flex-col items-center bg-black bg-[url('/contact-bg.svg')]  justify-center px-4 pt-26 pb-10x "
      >
        {" "}
        <div
          className="
        h-[36px] sm:h-[40px] flex items-center justify-between px-2.5 md:pl-1 md:pr-4  rounded-[32px] border border-[#FFFFFF1A] 
        bg-gradient-to-r from-white/10 to-transparent shadow-[inset_0px_1px_10px_0px_rgba(0,0,0,0.25)] 
        opacity-100 gap-[4px] md:gap-[4px] mb-8"
        >
          <Image
            src="/contacts.svg"
            alt="Our Desk"
            height={32}
            width={32}
            className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-[20px] border border-white/10 p-[1px] sm:p-[2px] object-contain"
          />

          <span
            className="font-dmSans whitespace-nowrap font-normal text-[14px] sm:text-[16px] leading-[100%] text-center text-white"
          >
            Explore Our Journey

          </span>
        </div>

        <div className="w-full max-w-4xl">
          {/* Header Section */}

          <div className="text-center mb-12">

            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-[60px] font-[400] text-white mb-6 leading-tight"
            >
              Pioneering AI Innovation
              <br />
              <span className="text-white/70">with Revolution!</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-white text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            >
            Reboot is your trusted agency for creative strategy. We specialize in cutting-edge digital business solutions.
            </p>

            <button
              className="bg-gradient-to-b mt-[30px] from-[#521ED6] to-[#7E56E2] sm:mt-8 
              h-[48px] sm:h-[56px] lg:h-[64px]  w-[150px] sm:w-[200px] lg:w-[240px] text-white font-[400] rounded-[10px] border-2 border-[#8D6AE6] 
              text-[12px]  lg:text-[20px] transition-all duration-300 ease-in-out hover:scale-105 transform shadow-lg hover:shadow-purple-500/25"
            >
              View About Reboot
            </button>

          </div>

        </div>

        <Section2 />
      </div>
    </div>
  );
};

export default PortfolioMainSection;
