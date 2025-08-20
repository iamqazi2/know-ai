"use client";
import { motion } from "framer-motion";
import { Button } from "./navbar/button";
import Image from "next/image";

export default function ProjectSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="bg-[url('/project-section-bg.png')] bg-cover bg-center py-4 relative">
            {/* Top badge centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute left-1/2 -translate-x-1/2 top-6 sm:top-8
              w-fit h-[32px] sm:h-[40px] 
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
                className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] 
                rounded-[20px] border border-white/10 
                p-[1px] sm:p-[2px] object-contain"
              />
              <span
                className="font-dmSans whitespace-nowrap 
                font-normal text-[12px] sm:text-[16px] 
                leading-[100%] text-center text-white"
              >
                Our Projects
              </span>
            </motion.div>

            {/* Section Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-20 sm:mt-28 mb-4 sm:mb-6 
              text-center text-[28px] sm:text-[36px] lg:text-[62px] 
              font-medium leading-[110%] px-2"
            >
              <span className="text-foreground block">Showcasing Our Best</span>
              <span className="opacity-70 block">
                Projects with Pure Precision
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 
              text-center text-[14px] sm:text-[18px] lg:text-[22px] 
              font-normal leading-[140%] opacity-50 px-4"
            >
              A portfolio is more than just projects—it’s your story, vision,
              and expertise. Reboot ensures your work stands out with a rank.
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="w-full flex justify-center mt-1 sm:mt-10 lg:mt-12"
          >
            <button
              className="bg-gradient-to-b from-[#521ED6] to-[#7E56E2] 
  mt-2
  h-[50px] sm:h-[60px] lg:h-[70px] 
  w-[160px] sm:w-[200px] lg:w-[240px] 
  text-white font-bold rounded-[10px] border-2 border-[#8D6AE6] 
  text-[14px] sm:text-[18px] lg:text-[20px] 
  py-2 
  transition-all duration-300 ease-in-out 
  hover:scale-105 transform shadow-lg hover:shadow-purple-500/25"
            >
              View More Projects
            </button>
          </motion.div>
        </motion.div>

        {/* Project Images */}
        <div className="flex flex-col items-center justify-center gap-1 sm:gap-5">
          {["/project1.png", "/project2.png", "/project3.png"].map(
            (src, idx) => (
              <motion.img
                key={src}
                src={src}
                alt={`Project ${idx + 1}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2 * idx,
                }}
                viewport={{ once: true }}
                className="w-full max-w-[1100px] object-contain"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
