"use client";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const slides = [
    {
      title: "Personal Assistant",
      description:
        "Lorem Ipsum dolor sit amet consectetur. Quam viverra sed urna cursus blandit non sem. Vestibulum quis mauris et diam varius ut risus lectus arcu diam eget mollit.",
      videoPlaceholder: true,
    },
    {
      title: "Smart Automation",
      description:
        "Advanced AI-powered automation workflows that adapt to your business needs and scale efficiently.",
      videoPlaceholder: true,
    },
    {
      title: "Data Analytics",
      description:
        "Comprehensive analytics and insights to help you make informed decisions with real-time data.",
      videoPlaceholder: true,
    },
    {
      title: "Process Optimization",
      description:
        "Streamline your operations with intelligent process optimization and workflow management.",
      videoPlaceholder: true,
    },
    {
      title: "Custom Solutions",
      description:
        "Tailored AI solutions designed specifically for your industry and business requirements.",
      videoPlaceholder: true,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <motion.div
      className="relative mx-auto px-4 py-10 bg-[url('/deck.svg')] bg-[length:100%_100%] bg-no-repeat"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // 0.3 = trigger jab 30% section viewport me aaye
    >
      {/* Dark mode indicator */}
      <div
        className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 
         w-fit h-[36px] sm:h-[40px] 
          flex items-center justify-between 
          px-[8px] sm:px-[10px] 
          rounded-[32px] border border-[#FFFFFF1A] 
          bg-gradient-to-r from-white/10 to-transparent 
          shadow-[inset_0px_1px_10px_0px_rgba(0,0,0,0.25)] 
          opacity-100 gap-[8px] sm:gap-[10px]"
      >
        <Image
          src="/our-desk.png"
          alt="Our Desk"
          width={32}
          height={32}
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

      {/* Main slider container */}
      <div className="relative bg-krow-dark mt-8 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 overflow-hidden">
        {/* Animate slide content */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Video placeholder */}
              <div className="mb-6 flex justify-center">
                <div className="w-full max-w-[840px] h-[200px] sm:h-[260px] md:h-[320px] lg:h-[376px] bg-gray-300 rounded-[10px] flex items-center justify-center text-gray-500 text-xs sm:text-sm md:text-base font-medium">
                  Video Content
                </div>
              </div>

              {/* Text content */}
              <div className="text-center max-w-2xl mx-auto mb-6">
                <h2 className="font-urbanist font-medium text-2xl sm:text-4xl md:text-5xl lg:text-[62px] leading-[110%] text-white mb-3">
                  {slides[currentSlide].title}
                </h2>
                <p className="font-dmSans font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-snug text-gray-300 opacity-50 mb-6">
                  {slides[currentSlide].description}
                </p>

                <button
                  className="bg-gradient-to-b from-[#521ED6] to-[#7E56E2] 
                  mt-6 sm:mt-10 
                  h-[50px] sm:h-[60px] lg:h-[70px] 
                  w-[160px] sm:w-[200px] lg:w-[240px] 
                  text-white font-bold rounded-[10px] border-2 border-[#8D6AE6] 
                  text-[14px] sm:text-[18px] lg:text-[20px] 
                  py-2 
                  transition-all duration-300 ease-in-out 
                  hover:scale-105 transform shadow-lg hover:shadow-purple-500/25"
                >
                  {" "}
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between lg:justify-center lg:gap-60 items-center mb-2 px-2 sm:px-4">
        <button
          onClick={prevSlide}
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full flex items-center justify-center transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white/10 text-white text-xs sm:text-sm font-medium w-7 h-7 sm:w-8 sm:h-8"
                  : "bg-white/10 text-gray-400 hover:bg-white/20 hover:text-gray-300 text-[11px] sm:text-xs font-medium w-6 h-6 sm:w-7 sm:h-7"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              0{index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
