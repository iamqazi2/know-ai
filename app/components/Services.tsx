"use client";
import React, { useEffect, useState } from "react";
import { CheckCircle, RefreshCw, Clock, Mail, Layers, User, Star, X, Command, Figma } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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

const Services = () => {

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
        <section className="bg-black  bg-[url('/pages-bg.png')] bg-[length:100%_100%] bg-no-repeat text-white py-20 px-6">

            <div className="text-center max-w-3xl mx-auto mb-16 relative ">
                <div className=" w-fit h-[36px] sm:h-[40px] flex items-center justify-between 
                        px-[8px] sm:px-[10px] rounded-[32px] border border-[#FFFFFF1A] 
                          bg-gradient-to-r from-white/10 to-transparent 
                          shadow-[inset_0px_1px_10px_0px_rgba(0,0,0,0.25)] 
                          opacity-100 gap-[8px] sm:gap-[10px] mx-auto mb-10"
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
                        Services
                    </span>
                </div>

                <h2 className="text-5xl font-bold">
                    Smarter Services, <span className=" text-gray-300">Built with AI</span>
                </h2>
                <p className="text-gray-400 mt-4">
                    Everything you need to automate operations, boost productivity
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 lg:px-20 justify-center main-container">
                {/* Left Card */}
                <div className="bg-black rounded-2xl p-8 shadow-lg border-t-2 border border-gray-800">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between bg-[#1A202C] rounded-lg p-3">
                            <span className="flex items-center gap-2 text-gray-300">
                                <CheckCircle size={18} /> Social media post
                            </span>
                            <CheckCircle className="text-green-400" size={18} />
                        </div>

                        <div className="flex items-center justify-between bg-[#1A202C] rounded-lg p-3">
                            <span className="flex items-center gap-2 text-gray-300">
                                <RefreshCw size={18} /> Employee Tracking
                            </span>
                        </div>

                        <div className="flex items-center justify-between bg-[#1A202C] rounded-lg p-3">
                            <span className="flex items-center gap-2 text-gray-300">
                                <Clock size={18} /> Payment reminder
                            </span>
                            <CheckCircle className="text-green-400" size={18} />
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2">Automate repetitive tasks</h3>
                        <p className="text-gray-400 text-sm">
                            We help you streamline internal operations by automating manual workflows
                        </p>
                    </div>
                </div>

                {/* Right Card */}
                <div className="bg-black rounded-2xl md:w-[1000px] p-8 shadow-lg border-t-2 border border-gray-800 relative overflow-hidden">
                    {icons.map((item, index) => {
                        const isGroup1 = group1.includes(index);
                        const shouldAnimate = activeGroup ? isGroup1 : group2.includes(index);

                        return (
                            <motion.div
                                key={item.id}
                                className={`absolute ${item.pos} text-gray-400 bg-gray-900 p-3 rounded`}
                                variants={variants}
                                animate={shouldAnimate ? "active" : "idle"}
                            >
                                <item.Icon size={28} />
                            </motion.div>
                        );
                    })}

                    {/* Center Glow Icon */}
                    <div className="relative top-12 sm:top-8 z-10 flex flex-col items-center justify-center mb-24">
                        {/* Background Blur Circle */}
                        <div className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-18 md:h-18 lg:w-48 lg:h-48 bg-blue-500/20 rounded-full blur-3xl" />


                        {/* Icon Container */}
                        <div className="bg-black rounded-full p-4 sm:p-5 md:p-6 lg:p-8 
                        z-10 shadow-inner shadow-blue-500/30">
                            <Star className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                        </div>
                    </div>


                    {/* Text */}
                    <div className="text-left mt-35 sm:mt-8 md:mt-10">
                        <h3 className="text-xl font-semibold mb-2">Automated Workflows</h3>
                        <p className="text-gray-400 text-sm max-w-md">
                            Boost efficiency across teams with smart automation. Build intelligent workflows
                            that automate multi-step processes across tools and platforms.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
