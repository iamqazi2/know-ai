"use client";
import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const BlogSection1 = () => {
  return (
    <div>
      <motion.div
        className="relative flex flex-col items-center bg-black bg-[url('/contact-bg.svg')] justify-center px-4 pt-26 pb-[100px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Tag Section */}
        <motion.div
          className="h-[36px] sm:h-[40px] flex items-center justify-between px-2.5 md:pl-1 md:pr-4 rounded-[32px] border border-[#FFFFFF1A] 
          bg-gradient-to-r from-white/10 to-transparent shadow-[inset_0px_1px_10px_0px_rgba(0,0,0,0.25)] 
          opacity-100 gap-[4px] md:gap-[4px] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <Image
            src="/contacts.svg"
            alt="Our Desk"
            height={32}
            width={32}
            className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-[20px] border border-white/10 p-[1px] sm:p-[2px] object-contain"
          />

          <span className="font-dmSans whitespace-nowrap font-normal text-[14px] sm:text-[16px] leading-[100%] text-center text-white">
            Our Blogs
          </span>
        </motion.div>

        {/* Header Section */}
        <motion.div
          className="w-full max-w-4xl text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-[400] text-white mb-6 leading-tight">
            Resources and insights
          </h1>
          <p className="text-white text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            The latest industry news, interviews, technologies, and resources.
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          className="flex items-center border border-gray-300 rounded-[5px] px-3 py-2 w-72 m-auto bg-transparent shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <Search className="w-5 h-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full text-white placeholder-gray-400 bg-transparent"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogSection1;
