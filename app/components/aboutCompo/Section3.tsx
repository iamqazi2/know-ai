"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaFingerprint } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  useEffect(() => {
    // ✅ Animate all cards except last with scale + fade effect
    gsap.fromTo(
      ".card:not(:last-child)",
      { y: 100, opacity: 0, scale: 0.9 }, // starting state
      {
        y: 0,
        opacity: 1,
        scale: 1, // zoom to normal
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cards",
          start: "top 85%",
          end: "bottom 70%",
          scrub: true,
          markers: false,
        },
      }
    );

    // ✅ Animate last card separately (scale + fade-in)
    gsap.fromTo(
      ".card:last-child",
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".card:last-child",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const cardsData = [
    {
      tag: "Lead AI",
      title: "Dr. Sarah Chen - Chief AI Officer",
      description:
        "Leading our AI research initiatives with 15+ years in machine learning and deep neural networks. Sarah spearheads our breakthrough models and ensures cutting-edge innovation in every project we deliver.",
      buttons: ["AI Research", "Neural Networks"],
      singleButton: false,
    },
    {
      tag: "ML Expert",
      title: "Marcus Rodriguez - Head of Machine Learning",
      description:
        "Expert in large language models and natural language processing with extensive experience at Google DeepMind. Marcus transforms complex AI concepts into scalable solutions for enterprise clients.",
      buttons: ["LLM Specialist", "NLP Expert"],
      singleButton: false,
    },
    {
      tag: "Vision",
      title: "Alex Kim - Computer Vision Lead",
      description:
        "Pioneering computer vision applications and autonomous systems development. With a PhD from Stanford AI Lab, Alex drives our visual intelligence projects and robotics integrations.",
      buttons: ["Schedule Meeting"],
      singleButton: true,
    },
  ];

  return (
    <section className="relative bg-[#000] text-white pt-14  md:pt-30 w-full main-container ">
      <div className="flex flex-col lg:flex-row justify-between px-10 md:px-17 gap-10 ">
        {/* Left Image */}
        <div className="border border-gray-800 rounded-2xl max-w-full lg:max-w-[520px] max-h-[520px] lg:max-h-[520px] p-2 sticky top-20 self-start order-2 lg:order-0">
          <Image
            src="/AboutSec3.avif"
            alt="About Nubien"
            width={1000}
            height={600}
            className="rounded-2xl shadow-lg object-cover max-h-[500px]"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-8 cards ">
          <div
            className="flex items-center w-40 gap-3 px-2 py-2 rounded-full
          bg-gradient-to-br from-purple-700/30 via-black to-black text-gray-100
          shadow-[0_0_5px_rgba(140,0,255,0.6)]
          transition duration-300 cursor-pointer"
          >
            <div
              className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 
             flex items-center justify-center shadow-inner shadow-black/40"
            >
              <FaFingerprint size={12} className="text-white text-xl" />
            </div>

            <span className="text-sm font-medium">Our AI Team</span>
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Meet Our AI <br />
              <span className="text-gray-300">Research Leaders</span>
            </h2>
            <p className="mt-4 text-gray-400  lg:max-w-lg">
              Our world-class team of AI researchers, engineers, and visionaries
              are pushing the boundaries of artificial intelligence and machine
              learning.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="flex flex-col gap-6">
            {cardsData.map((item, idx) => (
              <div
                key={idx}
                className="card p-2 border border-gray-800 w-full lg:w-124 rounded-2xl opacity-0"
              >
                <div className="relative flex flex-col gap-5 p-6 rounded-2xl bg-gradient-to-br from-purple-950/30 to-transparent transition w-full lg:w-120">
                  <div className="flex justify-between items-center mb-4">
                    {/* <div
                      className="w-[60px] h-[60px] rounded shadow-[0_0_5px_rgba(140,0,255,0.6)]
                     bg-gradient-to-br from-purple-700/30 via-black to-black"
                    >
                      <Image
                        src="/AboutSec3.avif"
                        alt="cat"
                        width={20}
                        height={20}
                        className="w-[60px] h-[60px] object-contain"
                      />
                    </div> */}
                    <span className="text-sm shadow-[0_0_5px_rgba(140,0,255,0.6)] px-5 py-2 rounded-full     bg-gradient-to-br from-purple-700/30 via-black to-black">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>

                  <div className="mt-4 flex gap-2 flex-wrap">
                    {item.singleButton ? (
                      <span
                        className="py-2.5 px-4.5 bg-gradient-to-b mt-[30px] from-[#521ED6] to-[#7E56E2] 
                      text-white font-[400] rounded-[10px] border-2 border-[#8D6AE6] 
                      transition-all duration-300 ease-in-out hover:scale-105 transform shadow-lg hover:shadow-purple-500/25"
                      >
                        {item.buttons[0]}
                      </span>
                    ) : (
                      item.buttons.map((btn, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full bg-gradient-to-br from-purple-700/30 via-black to-black text-gray-100 shadow-[0_0_5px_rgba(140,0,255,0.6)]"
                        >
                          {btn}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
