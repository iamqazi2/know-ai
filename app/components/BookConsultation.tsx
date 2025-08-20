"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button } from "./navbar/button";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const BookConsultation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardItemsRef = useRef<HTMLDivElement[]>([]);

  const projects = [
    {
      id: 1,
      title: "AI Consulting & Strategy",
      category: "AI Opportunity Assessment",
      description:
        "Identify high-impact areas where AI can deliver measurable business value.",
      topImage: "/ai-consulting.png",
    },
    {
      id: 2,
      title: "AI Solution Development",
      category: "Custom AI Workflow Design",
      description:
        "Build tailored automation workflows aligned with specific operational needs.",
      topImage: "/ai-solution.png",
    },
    {
      id: 3,
      title: "Seamless AI Deployment",
      category: "AI Implementation & Integration",
      description:
        "Integrate AI solutions into existing systems for minimal disruption and maximum benefit.",
      topImage: "/seamless-ai.png",
    },
    {
      id: 4,
      title: "Process Automation",
      category: "Intelligent Task Automation",
      description:
        "Replace repetitive manual work with AI-driven, reliable, and fast processes.",
      topImage: "/process-automation.png",
    },
    {
      id: 5,
      title: "Operational Optimization",
      category: "AI-Powered Process Enhancement",
      description:
        "Use AI insights to streamline workflows, reduce inefficiencies, and boost output.",
      topImage: "/operational.png",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([headerRef.current, buttonRef.current], {
        opacity: 0,
        y: 40,
      });

      gsap.set(cardItemsRef.current, {
        opacity: 0,
        y: 40,
      });

      // Header animation
      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Button animation (slightly delayed after header)
      gsap.to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Cards animation with stagger
      gsap.to(cardItemsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  // Function to add card refs
  const addToCardRefs = (el: HTMLDivElement | null) => {
    if (el && !cardItemsRef.current.includes(el)) {
      cardItemsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 sm:px-6 bg-[url('/pages-bg.png')] bg-[length:100%_100%] bg-no-repeat"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            ref={headerRef}
            className="bg-[url('/project-section-bg.png')] bg-cover bg-center py-4 relative"
          >
            {/* Top badge */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-6 sm:top-8
              flex items-center px-3 sm:px-4 py-1 rounded-full border border-[#FFFFFF1A] 
              bg-gradient-to-r from-white/10 to-transparent shadow-[inset_0px_1px_10px_rgba(0,0,0,0.25)] gap-2"
            >
              <Image
                src="/our-desk.png"
                alt="Our Desk"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white/10 p-[2px] object-contain"
                width={32}
                height={32}
              />
              <span className="font-dmSans text-xs sm:text-sm md:text-base text-white">
                Our Services
              </span>
            </div>

            {/* Section Heading */}
            <h2
              className="mt-20 sm:mt-28 mb-4 sm:mb-6 
              text-center text-[28px] sm:text-[36px] lg:text-[62px] 
              font-medium leading-[110%] px-2"
            >
              <span className="text-foreground block">
                Automations for Technology
              </span>
              <span className="opacity-70 block">Driven Businesses</span>
            </h2>

            {/* Description */}
            <p
              className="max-w-xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 
              text-center text-[14px] sm:text-[18px] lg:text-[22px] 
              font-normal leading-[140%] opacity-50 px-4"
            >
              A portfolio is more than just projects—it&apos;s your story,
              vision, and expertise. Reboot ensures your work stands out with a
              rank.
            </p>
          </div>

          {/* CTA Button */}
          <div
            ref={buttonRef}
            className="w-full flex justify-center mt-1 sm:mt-10 lg:mt-12"
          >
            <button
              className="bg-gradient-to-b from-[#521ED6] to-[#7E56E2] 
                  mt-0 sm:mt-10 
                  h-[50px] sm:h-[60px] lg:h-[70px] 
                  w-[160px] sm:w-[200px] lg:w-[240px] 
                  text-white font-bold rounded-[10px] border-2 border-[#8D6AE6] 
                  text-[14px] sm:text-[18px] lg:text-[20px] 
                  py-2 
                  transition-all duration-300 ease-in-out 
                  hover:scale-105 transform shadow-lg hover:shadow-purple-500/25"
            >
              Book a Consultation
            </button>
          </div>
        </div>

        {/* Project Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              ref={addToCardRefs}
              className="relative w-full max-w-[397px] h-auto md:h-[509px] 
                px-5 pt-6 rounded-[20px] border border-white/10 
                bg-black/20 hover:shadow-[0_0_30px_rgba(145,94,255,0.35)] 
                transition-all duration-300 group mx-auto"
            >
              {/* Top row with icon + arrow */}
              <div className="flex justify-between">
                <Image
                  width={80}
                  height={80}
                  src={project.topImage}
                  alt={project.title}
                  className="w-20 h-20 -mt-1 -ml-4 object-contain"
                />
                <Image
                  width={32}
                  height={32}
                  src="/right-arrow.png"
                  alt="Arrow"
                  className="w-12 h-12 mt-1 object-contain"
                />
              </div>

              {/* Title + Category */}
              <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-urbanist font-medium text-white leading-[100%] mb-2">
                {project.title}
              </h3>
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-urbanist font-normal capitalize text-white/50 w-fit rounded mb-4">
                {project.category}
              </p>

              {/* Description */}
              <p className="text-[13px] sm:text-[14px] font-dmSans font-normal text-white/50 leading-[140%] mt-6 sm:mt-10">
                {project.description}
              </p>

              {/* Bottom placeholder */}
              <div className="mt-6 mb-4 h-[180px] md:h-[220px] rounded-xl border border-white/10 bg-black/40"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
