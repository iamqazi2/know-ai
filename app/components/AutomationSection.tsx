"use client";
import Image from "next/image";
import BrandCards from "./automationCards/BrandCards";
import SliderCard from "./automationCards/SliderCard";
import VoiceRecorder from "./automationCards/VoiceRecorder";
import { motion, Variants } from "framer-motion";

const cardData = [
    {
        image: "/seamslessagentstop.png",
        title: "Seamless Agents Integration",
        description: "We seamlessly integrate with many third-party integrations.",
        Component: BrandCards,
    },
    {
        image: "/trustedauthenticationtop.png",
        title: "Trusted Authentication",
        description: "Quality systems and robust performance to workflows.",
        Component: SliderCard,
    },
    {
        image: "/aivoivetop.png",
        title: (
            <>
                AI Voice <br /> Agents
            </>
        ),
        description: "We support a wide range of third-party integrations.",
        Component: VoiceRecorder,
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }, // easeOut bezier
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }, // easeOut bezier
    },
};

const NewSection = () => {
    return (
        <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {cardData.map((item, index) => {

                        return (
                            <motion.div
                                variants={cardVariants}
                                key={index}
                                className="relative w-full max-w-[397px] mx-auto rounded-[20px] border border-gray-700/40 
                                bg-[url('/AutomationBgImage.avif')] bg-cover bg-center flex flex-col items-center px-5 py-10 gap-5 overflow-hidden"
                            >
                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-col items-center gap-3 px-2">
                                    <Image src={item.image} alt="icon" width={100} height={100} />

                                    <div className="text-center flex flex-col gap-4">
                                        <h3 className="font-urbanist font-medium text-[24px] sm:text-[28px] lg:text-[32px] leading-[100%] capitalize text-white">
                                            {item.title}
                                        </h3>
                                        <p className="font-dmSans font-normal text-[14px] leading-[120%] text-center text-white opacity-50">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Render the dynamic component */}
                                <item.Component />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default NewSection;
