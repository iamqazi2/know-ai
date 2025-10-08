"use client";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { getBlogList } from "../../data/blogs";

const BlogSection2 = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const allBlogs = getBlogList();
  const blogContent = showAllBlogs ? allBlogs : allBlogs.slice(0, 6);

  return (
    <section className="relative text-white z-10 pt-14 md:pt-20 w-full pb-10 md:pb-20 px-4 md:px-10 overflow-hidden ">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#451FAB]/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#774EE0]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {blogContent.map((item) => (
          <Link key={item.id} href={`/blogs/${item.id}`}>
            <div
              className="group relative flex flex-col h-full cursor-pointer overflow-hidden rounded-2xl"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Glassmorphic card */}
              <div className="relative flex flex-col h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-[#774EE0]/50 hover:shadow-2xl hover:shadow-[#451FAB]/25">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#451FAB]/20 via-transparent to-[#774EE0]/20 opacity-0 transition-opacity duration-500 ${
                    hoveredId === item.id ? "opacity-100" : ""
                  }`}
                ></div>

                {/* Image container with overlay */}
                <div className="relative overflow-hidden rounded-t-2xl h-52">
                  <Image
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    src={item.mainImage}
                    alt="Blog Image"
                  />
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#451FAB] to-[#774EE0] backdrop-blur-sm text-xs font-semibold border border-[#774EE0]/30 transform transition-all duration-300 group-hover:scale-110">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-col justify-between flex-1 p-6">
                  {/* Top content */}
                  <div className="flex flex-col gap-3 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-xl leading-tight text-white group-hover:text-[#C084FC] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="flex-shrink-0 p-2 rounded-full bg-[#451FAB]/20 backdrop-blur-sm border border-[#774EE0]/30 transform transition-all duration-300 group-hover:bg-[#774EE0]/40 group-hover:scale-110 group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4 text-[#C084FC]" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed flex-1 group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#774EE0]/50 to-transparent my-4"></div>

                  {/* Author info */}
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#774EE0]/50 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                      <Image
                        width={48}
                        height={48}
                        className="relative rounded-full border-2 border-[#774EE0]/50 object-cover"
                        src={item.userImage}
                        alt="user Image"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm text-white">
                        {item.author}
                      </span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom glow effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#451FAB]/0 to-transparent group-hover:via-[#774EE0]/80 transition-all duration-500"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {allBlogs.length > 6 && (
        <div className="relative mt-12 flex justify-center">
          <button
            onClick={() => setShowAllBlogs(!showAllBlogs)}
            className="group relative px-8 py-3 rounded-full overflow-hidden backdrop-blur-xl bg-gradient-to-r from-[#451FAB] to-[#774EE0] border border-[#774EE0]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#774EE0]/50 hover:scale-105 active:scale-95"
          >
            {/* Animated gradient background */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#451FAB] via-[#774EE0] to-[#451FAB] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                backgroundSize: "200% 100%",
                animation: "shimmer 3s infinite",
              }}
            ></div>

            {/* Button content */}
            <div className="relative flex items-center gap-2">
              <ArrowDown className={`w-5 h-5 transition-transform duration-300 group-hover:translate-y-1 ${showAllBlogs ? 'rotate-180' : ''}`} />
              <span className="font-semibold">{showAllBlogs ? 'Show Less' : 'Load More'}</span>
            </div>
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogSection2;
