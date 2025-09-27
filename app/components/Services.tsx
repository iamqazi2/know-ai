"use client";
import Image from "next/image";
import AutomatedCard from "./servicesCards/AutomatedCard";
import TaskCard from "./servicesCards/TaskCard";

const Services = () => {

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
                <TaskCard />

                {/* Right Card */}
                <AutomatedCard />
            </div>
        </section>
    );
};

export default Services;
