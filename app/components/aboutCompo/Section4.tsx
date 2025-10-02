import Image from "next/image";
import React from "react";
import { FaFingerprint } from "react-icons/fa";
import Link from "next/link";

const Section4 = () => {
  return (
    <div className="pt-14 md:pt-30 main-container bg-[#000] text-white">
      <div className="flex flex-col gap-12 items-start lg:flex-row justify-between mb-10 px-10 md:px-17">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8 ">
            <div
              className="flex items-center w-40 gap-3 px-2 py-2 rounded-full
                        bg-gradient-to-br from-purple-700/30 via-black to-black text-gray-100
                        shadow-[0_0_5px_rgba(140,0,255,0.6)] transition duration-300 cursor-pointer"
            >
              <div
                className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 
                            flex items-center justify-center shadow-inner shadow-black/40"
              >
                <FaFingerprint size={12} className="text-white text-xl" />
              </div>

              <span className="text-sm font-medium">About Nubien</span>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Shaping Tomorrow <br />
                <span className="text-gray-300">With Bold Ideas</span>
              </h2>
            </div>
          </div>

          <div className="mt- flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h4 className="text-lg font-medium">Smart Digital Solutions</h4>
                <p className="lg:max-w-[500px] text-[#FFFFFF80]">
                  We combine technology and creativity to build future-ready
                  solutions that help businesses thrive in a competitive
                  landscape.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="text-lg font-medium">Smart Digital Solutions</h4>
                <p className="lg:max-w-[500px] text-[#FFFFFF80]">
                  We combine technology and creativity to build future-ready
                  solutions that help businesses thrive in a competitive
                  landscape.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Link href="/book-meetings">
                <button
                  className="py-2.5 px-4.5 bg-gradient-to-b from-[#521ED6] to-[#7E56E2]
                            text-white font-[400] rounded-[10px] border-2 border-[#8D6AE6]
                             transition-all duration-300 ease-in-out hover:scale-105 transform shadow-lg hover:shadow-purple-500/25 "
                >
                  Book an Appointment
                </button>
              </Link>

              <div className="w-5 px-5">
                <hr className="bg-gray-700 h-6 w-[0.1px]" />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex gap-0.5 items-center">
                  <Image src="/star.png" alt="" height={15} width={15} />
                  <Image src="/star.png" alt="" height={15} width={15} />
                  <Image src="/star.png" alt="" height={15} width={15} />
                  <Image src="/star.png" alt="" height={15} width={15} />
                  <Image src="/star.png" alt="" height={15} width={15} />
                </div>
                <p className="text-[#FFFFff99]">900+ People Rated</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" border border-gray-800 rounded-2xl max-w-[full] lg:max-w-[520px] max-h-[520px] lg:max-h-[520px] p-2 sticky top-20 self-start">
          <Image
            src="/AboutSec4.avif"
            alt="About Nubien"
            width={1000}
            height={600}
            className="rounded-2xl shadow-lg object-cover max-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
