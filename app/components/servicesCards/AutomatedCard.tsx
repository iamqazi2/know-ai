"use client";
import React, { useEffect, useState } from "react";
import { Mail, Layers, User, X, Command, Figma } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const AutomatedCard = () => {
  const icons = [
    { id: 1, Icon: Mail, pos: "top-7 left-10" },
    { id: 2, Icon: Layers, pos: "top-35 left-45" },
    { id: 3, Icon: User, pos: "top-30 left-10" },
    { id: 4, Icon: Command, pos: "top-7 left-40" },
    { id: 5, Icon: Command, pos: "top-35 right-45" },
    { id: 6, Icon: X, pos: "top-7 right-10" },
    { id: 7, Icon: Figma, pos: "top-7 right-40" },
    { id: 8, Icon: Layers, pos: "top-30 right-10" },
  ];

  const group1 = [0, 1, 2, 4]; // 3 icons
  const group2 = [3, 5, 6, 7]; // 4 icons

  const [activeGroup, setActiveGroup] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGroup((prev) => !prev);
    }, 3000); // har 3s baad toggle
    return () => clearInterval(interval);
  }, []);

  const variants = {
    active: {
      scale: [0.6, 1, 0.6],
      opacity: [0.4, 1, 0.4],
      transition: { duration: 4 },
    },
    idle: {
      scale: 0.6,
      opacity: 0.4,
    },
  };

  return (
    <div className="bg-black/20 rounded-2xl md:w-[1000px] p-8 shadow-lg border-t-2 border border-[#8D6AE6]/30 relative overflow-hidden">
      {icons.map((item, index) => {
        const isGroup1 = group1.includes(index);
        const shouldAnimate = activeGroup ? isGroup1 : group2.includes(index);

        return (
          <motion.div
            key={item.id}
            className={`absolute ${item.pos} text-gray-400 bg-[#8D6AE6]/20 p-3 rounded`}
            variants={variants}
            animate={shouldAnimate ? "active" : "idle"}
          >
            <item.Icon size={28} color="white" />
          </motion.div>
        );
      })}

      {/* Center Glow Icon */}
      <div className="relative top-12 sm:top-8 z-10 flex flex-col items-center justify-center mb-24">
        {/* Background Blur Circle */}
        <div className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-18 md:h-18 lg:w-48 lg:h-48 bg-[#8D6AE6]/20 rounded-full blur-3xl" />

        {/* Icon Container */}
        <div className="bg-[#8D6AE6]/20 backdrop-blur-3xl rounded-full p-3 md:p-4 lg:p-4 z-10 shadow-inner shadow-[#8D6AE6]/90">
          <Image
            src={"/single-logo.svg"}
            alt="logo"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
          />
        </div>
      </div>

      {/* Text */}
      <div className="text-left mt-35 sm:mt-8 md:mt-10">
        <h3 className="text-xl font-semibold mb-2">Automated Workflows</h3>
        <p className="text-gray-400 text-sm max-w-md">
          Boost efficiency across teams with smart automation. Build intelligent
          workflows that automate multi-step processes across tools and
          platforms.
        </p>
      </div>
    </div>
  );
};

export default AutomatedCard;
