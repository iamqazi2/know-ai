"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Navbar from "../navbar";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const strategicBadgeRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(
        [
          headingRef.current,
          subtextRef.current,
          leftButtonRef.current,
          rightButtonRef.current,
          bannerRef.current,
        ],
        {
          opacity: 0,
        }
      );

      gsap.set(headingRef.current, { y: -50 });
      gsap.set(subtextRef.current, { y: 50 });
      gsap.set(leftButtonRef.current, { x: -100 });
      gsap.set(rightButtonRef.current, { x: 100 });
      gsap.set(bannerRef.current, { y: 100 });

      // All animations start simultaneously with same delay
      const animationDelay = 0.5;

      // Heading animation - fade in from top to bottom
      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: animationDelay,
      });

      // Subtext animation - fade in from bottom to top
      gsap.to(subtextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: animationDelay,
      });

      // Left button animation - from left
      gsap.to(leftButtonRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: animationDelay,
      });

      // Right button animation - from right
      gsap.to(rightButtonRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: animationDelay,
      });

      // Banner slider - fade in from bottom to top
      gsap.to(bannerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: animationDelay,
        onComplete: () => {
          // Start continuous sliding animation after reveal
          if (sliderRef.current) {
            gsap.to(sliderRef.current, {
              x: "-100%",
              duration: 15,
              ease: "none",
              repeat: -1,
            });
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen bg-black text-white overflow-hidden"
    >
      <Navbar />
      {/* Fixed Strategic Badge */}
      <Image
        src={"/ellipse.svg"}
        alt="ellipse"
        width={100}
        height={100}
        className="w-full h-full absolute -bottom-80"
      />
      <div
        ref={strategicBadgeRef}
        className="absolute top-44 left-1/2 transform -translate-x-1/2 z-0 bg-gradient-to-r from-white/20 to-black backdrop-blur-sm border-1 border-white/20 rounded-full px-1 py-2 text-sm"
      >
        <span className="flex items-center gap-2">
          <Image
            src="/about.svg"
            alt="Our Desk"
            height={32}
            width={32}
            className="
             object-contain"
          />
          Your strategic partner from start to scale
        </span>
      </div>
      {/* Fixed Eclipse Background */}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-4">
        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="text-[30px] md:text-[48px] lg:text-[56px] xl:text-[60px] font-bold text-center max-w-6xl leading-tight mb-2"
        >
          Building and scaling AI
          <br />
          solutions is a journey
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="text-[14px] md:text-[18px] text-gray-300 text-center max-w-3xl mb-6 leading-relaxed"
        >
          Lorem ipsum dolor sit amet consectetur. Quam viverra sed urna cursus
          hendrerit nibh ipsum. Volutpat nunc malesuadas placerat varius nam sed
          morbi.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16">
          <button
            ref={leftButtonRef}
            className="bg-white text-black px-8 py-4 rounded-[16px] font-normal text-lg hover:bg-gray-200 transition-colors duration-300 min-w-[200px]"
          >
            Contact With Us
          </button>
          <button
            ref={rightButtonRef}
            className="border border-white text-white px-8 py-4 rounded-[16px] font-normal text-lg hover:bg-white hover:text-black transition-all duration-300 min-w-[200px]"
          >
            What is Know AI?
          </button>
        </div>

        {/* Brand Slider */}
        <div
          ref={bannerRef}
          className="w-full max-w-2xl  rounded-3xl   px-8 py-6 overflow-hidden"
        >
          <div
            ref={sliderRef}
            className="flex items-center justify-center space-x-8 sm:space-x-12 md:space-x-16 whitespace-nowrap"
            style={{ width: "200%" }}
          >
            {/* First set of Brand Logos */}
            <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <span className="text-2xl sm:text-3xl font-bold">LOGO</span>
            </div>
            <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-xl font-bold">%</span>
              </div>
            </div>
            <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <span className="text-2xl sm:text-3xl font-bold">NJ</span>
            </div>
            <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <span className="text-2xl sm:text-3xl font-bold text-blue-400">
                Google
              </span>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <span className="text-2xl sm:text-3xl font-bold">LOGO</span>
            </div>
            <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-xl font-bold">%</span>
              </div>
            </div>
            <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <span className="text-2xl sm:text-3xl font-bold">NJ</span>
            </div>
            <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <span className="text-2xl sm:text-3xl font-bold text-blue-400">
                Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
