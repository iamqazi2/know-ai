"use client";
import { motion } from "framer-motion";

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
              <img
                src="/our-desk.png"
                alt="Our Desk"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white/10 p-[2px] object-contain"
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
              Get in Touch
            </button>
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
                <img
                  src={integration.icon}
                  alt={integration.name}
                  className="w-10 h-10 object-contain"
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
