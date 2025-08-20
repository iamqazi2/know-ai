"use client";
import { motion } from "framer-motion";
import { Button } from "./navbar/button";
import Image from "next/image";

const ProjectsSection = () => {
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
            <Button
              className="flex items-center justify-center 
    gap-[8px] sm:gap-[10px] lg:gap-[12px] 
    w-[180px] h-[50px] sm:w-[220px] sm:h-[60px] lg:w-[277px] lg:h-[70px] 
    rounded-[10px] sm:rounded-[14px] lg:rounded-[16px] 
    border-[2px] sm:border-[3px] lg:border-[4px] 
    bg-[linear-gradient(180deg,#511ED5_0%,#8D6AE6_100%)] 
    text-white font-dmSans font-semibold 
    text-[15px] sm:text-[18px] lg:text-[22px] 
    leading-[100%] tracking-[-0.02em] text-center
    px-[20px] sm:px-[32px] lg:px-[40px] 
    py-[8px] sm:py-[10px] lg:py-[12px] 
    transition-all duration-300 hover:scale-105"
            >
              View More Projects
            </Button>
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
};

export default ProjectsSection;
