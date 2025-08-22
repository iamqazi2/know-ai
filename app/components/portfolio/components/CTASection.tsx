"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const CTASection = () => {
  return (
    <section className="py-20 px-0 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-6 sm:p-10 md:p-12 text-center overflow-hidden"
        >
          {/* Top badge */}
          <div
            className="absolute left-1/2 top-10 sm:top-12 md:top-14 -translate-x-1/2  
              flex items-center px-3 sm:px-4 py-1 rounded-full border border-[#FFFFFF1A] 
              bg-gradient-to-r from-white/10 to-transparent 
              shadow-[inset_0px_1px_10px_rgba(0,0,0,0.25)] gap-2 z-20 whitespace-nowrap"
          >
            <Image
                            src="/our-desk.png"
                            alt="Our Desk"
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white/10 p-[2px] object-contain"
                            width={32}
                            height={32}
                          />
            <span className="font-dmSans text-xs sm:text-sm md:text-base text-white">
              Become a Part of US
            </span>
          </div>

          {/* Background blur */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-xl z-0" />

          {/* Content */}
          <div className="relative z-10 mt-24 sm:mt-28">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 leading-tight">
              Ready to Elevate Your Brand <br />
              <span className="text-gray-400 font-normal">
                with Next-Gen Innovation?
              </span>
            </h2>

            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Ready to take the next step? Join us now and start transforming your vision into reality with expert
              support.
            </p>

            <button
              className="bg-gradient-to-b from-[#521ED6] to-[#7E56E2] 
                mt-4 sm:mt-6 
                h-[50px] sm:h-[60px] lg:h-[70px] 
                w-[160px] sm:w-[220px] lg:w-[260px] 
                text-white font-bold rounded-[10px] border-2 border-[#8D6AE6] 
                text-sm sm:text-base lg:text-lg 
                py-2 
                transition-all duration-300 ease-in-out 
                hover:scale-105 transform shadow-lg hover:shadow-purple-500/25"
            >
              Book an Appointment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
