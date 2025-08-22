"use client";

import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const AutomationSection = () => {
  const features = [
    {
      title: "Seamless Agents Integration",
      description:
        "We seamlessly integrate with many of third-party integrations.",
      topImage: "/seamslessagentstop.png",
      mainImage: "/seamslessagents.png",
    },
    {
      title: "Trusted Authentication",
      description: "Quality systems and robust performance to workflows.",
      topImage: "/trustedauthenticationtop.png",
      mainImage: "/trustedauthentication.png",
    },
    {
      title: "AI Voice Agents",
      description: "We support a wide range of third-party integrations.",
      topImage: "/aivoivetop.png",
      mainImage: "/aivoiceagent.png",
    },
  ];
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(headerRef.current, { opacity: 0, y: -50 }); // Header from top
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 50,
      }); // Text from bottom
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

  const formatTitle = (title: string) => {
    const words = title.split(" ");
    if (words.length > 1) {
      return (
        <>
          {words.slice(0, -1).join(" ")}{" "}
          <span className="block">{words[words.length - 1]}</span>
        </>
      );
    }
    return title;
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }, // easeOut bezier
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }, // easeOut bezier
    },
  };

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div
        className="
              h-[36px] sm:h-[40px] 
              flex items-center justify-between 
              px-[8px] md:px-[6px]  w-fit 
              rounded-[32px] border border-[#FFFFFF1A] 
              bg-gradient-to-r from-white/10 to-transparent 
              shadow-[inset_0px_1px_10px_0px_rgba(0,0,0,0.25)] 
              opacity-100 gap-[4px] md:gap-[4px] mb-8 max-w-[150px] mx-auto "
      >
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
          Our Services
        </span>
      </div>
      <div className="w-full max-w-4xl mx-auto">
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
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative w-full max-w-[397px] mx-auto rounded-[20px] border border-gray-700/40 
                         bg-[url('/card-bg.png')] bg-cover bg-center 
                         flex flex-col items-center px-5 pb-5 gap-[30px] overflow-hidden"
              variants={cardVariants}
            >
              {/* Top Image */}
              <motion.div
                className="w-full flex justify-center mt-6"
                variants={itemVariants}
              >
                <Image
                  height={100}
                  width={100}
                  src={feature.topImage}
                  alt={feature.title}
                  className="max-h-[100px] object-contain"
                />
              </motion.div>

              {/* Title + Description */}
              <motion.div
                className="flex flex-col items-center gap-3 text-center px-2"
                variants={itemVariants}
              >
                <h3 className="font-urbanist font-medium text-[24px] sm:text-[28px] lg:text-[32px] leading-[100%] capitalize text-white">
                  {formatTitle(feature.title)}
                </h3>
                <p className="font-dmSans font-normal text-[14px] leading-[100%] text-center text-white opacity-50 max-w-[280px]">
                  {feature.description}
                </p>
              </motion.div>

              {/* Main Image */}
              <motion.div
                className="flex-1 flex items-center justify-center"
                variants={itemVariants}
              >
                <Image
                  height={250}
                  width={250}
                  src={feature.mainImage}
                  alt={`${feature.title} visual`}
                  className="max-h-[220px] sm:max-h-[240px] lg:max-h-[250px] object-contain"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AutomationSection;
