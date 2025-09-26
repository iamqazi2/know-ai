"use client";
import Image from "next/image";
import BrandCards from "./automationCards/BrandCards";
import SliderCard from "./automationCards/SliderCard";
import VoiceRecorder from "./automationCards/VoiceRecorder";

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

const NewSection = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((item, index) => {
            const { image, title, description, Component } = item;

            return (
              <div
                key={index}
                className="relative w-full max-w-[397px] mx-auto rounded-[20px] border border-gray-700/40 
                  bg-[url('/AutomationBgImage.avif')] bg-cover bg-center flex flex-col items-center px-5 py-10 gap-5 overflow-hidden"
              >
                <div className="flex flex-col items-center gap-3 px-2">
                  <Image src={image} alt="icon" width={100} height={100} />

                  <div className="text-center flex flex-col gap-4">
                    <h3 className="font-urbanist font-medium text-[24px] sm:text-[28px] lg:text-[32px] leading-[100%] capitalize text-white">
                      {title}
                    </h3>
                    <p className="font-dmSans font-normal text-[14px] leading-[120%] text-center text-white opacity-50">
                      {description}
                    </p>
                  </div>
                </div>

                {/* Render the dynamic component */}
                <Component />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewSection;
