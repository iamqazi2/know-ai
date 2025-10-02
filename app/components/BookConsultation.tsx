"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface BookConsultationProps {
  currentServiceId?: number;
}

const BookConsultation = ({ currentServiceId }: BookConsultationProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardItemsRef = useRef<HTMLDivElement[]>([]);

  const allServices = [
    {
      id: 1,
      title: "AI Consulting & Strategy",
      description:
        "We help organizations discover where artificial intelligence can generate measurable business value. Our consulting begins with a deep assessment of current operations, data readiness, and digital maturity.",
      topImage: "/ai-consulting.png",
      banner: "/Graphics/AI-consulting.jpg",
    },
    {
      id: 2,
      title: "AI Solution Development",
      description:
        "We design and build customized AI solutions tailored to specific organizational needs. Our team collaborates closely with stakeholders to understand business challenges and operational workflows.",
      topImage: "/ai-solution.png",
      banner: "/Graphics/AI-solutions.png",
    },
    {
      id: 3,
      title: "Seamless AI Deployment",
      description:
        "Deploying AI is more than just technical setup—it’s about ensuring adoption with minimal disruption. We provide end-to-end AI deployment services, from model integration to system alignment.",
      topImage: "/seamless-ai.png",
      banner: "/Graphics/seamless.png",
    },
    {
      id: 4,
      title: "Process Automation",
      description:
        "Deploying AI is more than just technical setup—it’s about ensuring adoption with minimal disruption. We provide end-to-end AI deployment services, from model integration to system alignment.",
      topImage: "/process-automation.png",
      banner: "/Graphics/process.png",
    },
    {
      id: 5,
      title: "Operational Optimization",
      description:
        "We help businesses eliminate repetitive manual tasks through AI-driven automation. From data entry to workflow approvals, our intelligent automation solutions save time and reduce errors.",
      topImage: "/operational.png",
      banner: "/Graphics/operational.png",
    },
  ];
  const projects = currentServiceId
    ? allServices.filter((s) => s.id !== currentServiceId)
    : allServices;

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
      className="py-10 sm:py-20 px-4 sm:px-6 bg-black  bg-[url('/pages-bg.png')] bg-[length:100%_100%] bg-no-repeat"
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
              className="absolute left-1/2 -translate-x-1/2 mt-4 top-2 sm:top-8
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
              font-medium leading-[110%] px-2 max-w-[950px] mx-auto text-white"
            >
              Automations for Technology-Driven Businesses.
            </h2>

            {/* Description */}
            <p
              className="max-w-xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 
              text-center text-[14px] sm:text-[18px] lg:text-[22px] 
              font-normal leading-[140%] text-white opacity-50 px-4"
            >
              We specialize in building tailored AI-powered workflows that
              optimize operations, reduce manual effort, and accelerate growth.
              Whether you’re in finance, e-commerce, healthcare, or corporate
              services, our automation solutions are designed to scale with your
              business.
            </p>
          </div>

          {/* CTA Button */}
          <div
            ref={buttonRef}
            className="w-full flex justify-center mt-1 sm:mt-10 lg:mt-12"
          >
            <Link href="/book-meetings">
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
            </Link>
          </div>
        </div>

        {/* Project Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <Link key={project.id} href={`/services/service/${project.id}`}>
              <div
                ref={addToCardRefs}
                className="relative w-full max-w-[397px] h-auto 
                px-5 py-6 rounded-[20px] border border-white/10 
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

                {/* Description */}
                <p className="text-[13px] sm:text-[14px] font-dmSans font-normal h-[98px] text-white/50 leading-[140%] mt-2 ">
                  {project.description}
                </p>

                {/* Bottom placeholder */}
                <div className="relative w-full mt-[20px] h-[180px] md:h-[220px] overflow-hidden rounded-xl">
                  <Image
                    src={project.banner}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                    priority={true}
                    placeholder="blur"
                    blurDataURL="/placeholder-image.jpg"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
