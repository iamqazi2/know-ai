"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./navbar/button";

const IntegrationsSection = () => {
  const integrations = [
    { name: "Slack", icon: "/whatsapp.png" },
    { name: "GitHub", icon: "/icon1.0.png" },
    { name: "Google", icon: "/icon1.1.png" },
    { name: "Microsoft", icon: "/icon2.png" },
    { name: "AWS", icon: "/icon3.png" },
    { name: "Notion", icon: "/icon4.png" },
    { name: "Zapier", icon: "/icon5.png" },
    { name: "Stripe", icon: "/icon6.png" },
    { name: "Shopify", icon: "/icon6.png" },
    { name: "Spotify", icon: "/icon7.png" },
    { name: "Spotify", icon: "/icon8.png" },
    { name: "Spotify", icon: "/icon9.png" },
    { name: "Spotify", icon: "/icon10.png" },
  ];

  return (
    <section className="py-20 px-6 bg-[url('/pages-bg.png')] bg-[length:100%_100%] bg-no-repeat overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="py-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute left-1/2 -translate-x-1/2 top-6 sm:top-8
              flex items-center px-3 sm:px-4 py-1 rounded-full border border-[#FFFFFF1A] 
              bg-gradient-to-r from-white/10 to-transparent shadow-[inset_0px_1px_10px_rgba(0,0,0,0.25)] gap-2"
            >
              <Image
                width={32}
                height={32}
                src="/our-desk.png"
                alt="Our Desk"
                className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/10 p-[2px] object-contain"
              />
              <span className="font-dmSans text-xs sm:text-sm md:text-base text-white">
                Integrations
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-20 sm:mt-28 mb-4 sm:mb-6 
              text-center text-[28px] sm:text-[36px] lg:text-[62px] 
              font-medium leading-[110%] px-2"
            >
              <span className="text-foreground block">
                Seamless Integrations for
              </span>
              <span className="opacity-70 block">Maximum Efficiency.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 
              text-center text-[14px] sm:text-[18px] lg:text-[22px] 
              font-normal leading-[140%] opacity-50 px-4"
            >
              Know AI seamlessly integrates with leading tools and platforms,
              ensuring a smooth and efficient workflow.
            </motion.p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
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
              Get in Touch
            </Button>
          </motion.div>
        </div>

        {/* Auto-scrolling slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden"
        >
          {/* Fade overlays */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0E0C0B] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0F0D0D] to-transparent z-10" />

          <div className="flex animate-slide">
            {[...integrations, ...integrations].map((integration, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 opacity-70 hover:opacity-100 transition"
              >
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  className="w-10 h-10 object-contain"
                  width={40}
                  height={40}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Global CSS animation */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          display: flex;
          width: max-content;
          animation: slide 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default IntegrationsSection;
