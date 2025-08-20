"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";

interface Project {
  id: number;
  year: string;
  title: string;
  tags: string[];
  image: string;
  bgColor: string;
}

const PortfolioPages = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projects: Project[] = [
    {
      id: 1,
      year: "2025",
      title: "Lemonide Tech",
      tags: [
        "AI Integration",
        "Responsive Design",
        "Custom Layouts",
        "Fast Loading",
        "E-Commerce",
        "Portfolio",
      ],
      image: "/api/placeholder/600/400",
      bgColor: "bg-blue-600",
    },
    {
      id: 2,
      year: "2025",
      title: "Viper Studio",
      tags: [
        "Modern Typography",
        "User Friendly",
        "Flexible CMS",
        "SEO Optimized",
        "Business",
        "Agency",
      ],
      image: "/api/placeholder/600/400",
      bgColor: "bg-purple-600",
    },
    {
      id: 3,
      year: "2024",
      title: "Creative Labs",
      tags: [
        "Web Design",
        "Mobile App",
        "Brand Identity",
        "UX/UI",
        "Innovation",
        "Technology",
      ],
      image: "/api/placeholder/600/400",
      bgColor: "bg-green-600",
    },
  ];

  const faqs: string[] = [
    "What do I need to get started?",
    "What kind of customization is available?",
    "How easy is it to edit for beginners?",
    "Let me know more about moneyback guarantee?",
    "Do I need to know how to code?",
    "What will I get after purchasing the template?",
  ];

  const StackedCard = ({
    project,
    index,
    totalCards,
  }: {
    project: Project;
    index: number;
    totalCards: number;
  }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "end start"],
    });

    const startProgress = index / totalCards;
    const endProgress = (index + 1) / totalCards;

    const y = useTransform(
      scrollYProgress,
      [0, startProgress, endProgress, 1],
      [100, 0, -100, -200]
    );
    const scale = useTransform(
      scrollYProgress,
      [0, startProgress, endProgress, 1],
      [0.9, 1, 1, 1]
    );
    const opacity = useTransform(
      scrollYProgress,
      [0, startProgress, endProgress, 1],
      [0.7, 1, 1, 0]
    );
    const zIndex = totalCards - index;

    return (
      <motion.div
        ref={cardRef}
        style={{ y, scale, opacity, zIndex }}
        className={`sticky top-20 w-full max-w-4xl mx-auto mb-8 ${
          index === 0 ? "mt-20" : ""
        }`}
      >
        <div
          className={`${project.bgColor} rounded-3xl p-8 md:p-12 shadow-2xl`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-white/80 text-sm font-medium">
                {project.year}
              </span>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag: string, tagIndex: number) => (
                  <span
                    key={tagIndex}
                    className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                View Project
              </button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-white/60 text-lg">Project Preview</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <motion.section
        className="min-h-screen flex flex-col justify-center items-center px-4 relative"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="text-center max-w-6xl mx-auto"
          variants={fadeInUp}
        >
          <motion.p className="text-gray-400 text-lg mb-4" variants={fadeInUp}>
            2025
          </motion.p>
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none"
            variants={fadeInUp}
          >
            <span className="block">Browse Our Work</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Explore Our Most
            </span>
            <span className="block">Check Out</span>
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
            variants={fadeInUp}
          >
            <span className="block">Some Extra-Ordinary Work.</span>
            <span className="block text-gray-300">Remarkable Projects.</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            We craft customized solutions that empower both startups and
            established brands, driving success and delivering real impact. From
            startups to established brands, we create tailored solutions that
            drive success and make a real impact.
          </motion.p>
        </motion.div>
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-2000"></div>
        </motion.div>
      </motion.section>

      <section ref={cardsContainerRef} className="relative min-h-[300vh] px-4">
        <div className="sticky top-0 flex flex-col items-center justify-start pt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Featured
              </span>
              <span className="block">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover our most impactful work and creative solutions
            </p>
          </motion.div>
          <div className="relative w-full">
            {projects.map((project, index) => (
              <StackedCard
                key={project.id}
                project={project}
                index={index}
                totalCards={projects.length}
              />
            ))}
          </div>
        </div>
      </section>

      <motion.section
        ref={ref}
        className="py-20 px-4"
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={fadeInUp}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Frequently
            </span>
            <span className="block">Asked Questions</span>
          </h2>
          <motion.div className="space-y-6" variants={staggerContainer}>
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={scaleIn} className="group">
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-400 transition-colors duration-300 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-left group-hover:text-blue-400 transition-colors duration-300">
                      {faq}
                    </h3>
                    <div className="text-2xl text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                      +
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="py-20 px-4 text-center"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Start Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Next Project?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let&apos;s collaborate and create something extraordinary together.
            Your vision, our expertise.
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default PortfolioPages;
