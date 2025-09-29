"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../navbar";
import Image from "next/image";

const ContactSection = () => {
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
      <Navbar />
      <div
        ref={sectionRef}
        className="min-h-screen relative flex flex-col items-center bg-black bg-[url('/contact-bg.svg')]  justify-center px-4 py-26"
      >
        {" "}
        <div className="h-[36px] sm:h-[40px] flex items-center justify-between px-[8px] md:px-[6px] rounded-[32px] border border-[#FFFFFF1A] bg-gradient-to-r from-white/10 to-transparent shadow-[inset_0px_1px_10px_0px_rgba(0,0,0,0.25)] opacity-100 gap-[4px] md:gap-[4px] mb-8">
          <Image
            src="/contacts.svg"
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
            Collaborate With Us
          </span>
        </div>
        <div className="w-full max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-[400] text-white mb-6 leading-tight"
            >
              Have Any Doubts? We
              <br />
              <span className="text-white">are Ready to Help.</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-white text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            >
              Whether you need guidance, support,
              <br className="hidden sm:block" />
              or a fresh start, our team is ready to assist you.
            </p>
          </div>

          {/* Form Section */}
          <div
            ref={formRef}
            className="glow-effect bg-black backdrop-blur-sm border border-gray-800/50 rounded-2xl p-2 md:p-4 lg:p-4 max-w-7xl mx-auto "
          >
            <div className="border-1 border-white/30 rounded-[12px] py-20 px-4 ">
              {" "}
              {/* Name Fields Row */}
              <div className="grid grid-cols-1  md:grid-cols-2 gap-4 md:gap-6 mb-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-3">
                    First Name*
                  </label>
                  <input
                    id="full_name_input"
                    type="text"
                    placeholder="Enter your Email"
                    className="w-full bg-transparent border border-white/40 rounded-lg px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-3">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="w-full bg-transparent border border-white/40 rounded-lg px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 transition-all duration-300"
                  />
                </div>
              </div>
              {/* Contact Field */}
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-3">
                  How can we reach you?*
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full bg-transparent border border-white/40 rounded-lg px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 transition-all duration-300"
                />
              </div>
              {/* Location and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-3">
                    Where Are you from?*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="w-full bg-transparent border border-white/40 rounded-lg px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-3">
                    What&apos;s the type of your company?*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="w-full bg-transparent border border-white/40 rounded-lg px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 transition-all duration-300"
                  />
                </div>
              </div>
              {/* Message Field */}
              <div className="mb-8">
                <label className="block text-white text-sm font-medium mb-3">
                  Message*
                </label>
                <textarea
                  rows={5}
                  placeholder="Type your message..."
                  className="w-full bg-transparent border border-white/40 rounded-lg px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 transition-all duration-300 resize-vertical min-h-[120px]"
                />
              </div>
              {/* Submit Button */}
              <button
                type="button"
                onClick={() => {
                  // Handle form submission logic here
                  console.log("Form submitted");
                }}
                className="w-full bg-gradient-to-b border-1 border-white/20 from-[#521ED6] to-[#7E56E2] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
