"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CTASection = () => {
  return (
    <section className="py-20  px-0 sm:px-6 mx-auto max-w-[1180px] w-full lg:px-8">
      <div className=" relative border-1 border-white/10 rounded-lg ">
        <Image
          src={"/project-section-bg.png"}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl p-6 sm:p-10 md:p-12 text-center overflow-hidden"
        >
          {/* Animated Top Glow Effects */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[25%] bg-gradient-to-b from-[#521ED6]/50 to-[#7E56E2]/10 blur-2xl"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[100%] h-[20%] bg-gradient-to-b from-[#521ED6]/40 to-transparent blur-xl"
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[15%] bg-gradient-to-b from-[#7E56E2]/60 to-transparent blur-3xl rounded-full"
            animate={{
              opacity: [0.1, 0.4, 0.1],
              x: [-20, 20, -20],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Animated Bottom Glow Effects */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[25%] bg-gradient-to-t from-[#521ED6]/50 to-[#7E56E2]/10 blur-2xl"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1.05, 0.95, 1.05],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[100%] h-[20%] bg-gradient-to-t from-[#521ED6]/40 to-transparent blur-xl"
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
          <motion.div
            className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[15%] bg-gradient-to-t from-[#7E56E2]/60 to-transparent blur-3xl rounded-full"
            animate={{
              opacity: [0.1, 0.4, 0.1],
              x: [20, -20, 20],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Top badge */}
          <div
            className="absolute left-1/2 top-10 sm:top-12 md:top-14 -translate-x-1/2  
              flex items-center px-3 sm:px-4 py-1 rounded-full border border-[#FFFFFF1A] 
             
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

          {/* Content */}
          <div className="relative z-10 mt-24 sm:mt-28">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 leading-tight">
              Ready to Elevate Your Brand <br />
              <span className="text-gray-400 font-normal">
                with Next-Gen Innovation?
              </span>
            </h2>

            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Ready to take the next step? Join us now and start transforming
              your vision into reality with expert support.
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
