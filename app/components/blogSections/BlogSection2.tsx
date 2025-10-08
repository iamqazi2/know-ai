"use client";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const BlogSection2 = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const blogContent = [
    {
      id: 1,
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      mainImage:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      userImage: "https://i.pravatar.cc/150?img=1",
      author: "Olivia Rhye",
      date: "20 Jan 2022",
    },
    {
      id: 2,
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      mainImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      userImage: "https://i.pravatar.cc/150?img=2",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
    },
    {
      id: 3,
      category: "SoftwareEngineering",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      mainImage:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      userImage: "https://i.pravatar.cc/150?img=3",
      author: "Lana Steiner",
      date: "18 Jan 2022",
    },
    {
      id: 4,
      category: "Management",
      title: "Bill Walsh leadership lessons",
      description:
        "Like to know the secrets of transforming a 2-14 team into a Super Bowl winning dynasty?",
      mainImage:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      userImage: "https://i.pravatar.cc/150?img=4",
      author: "Alec Whitten",
      date: "17 Jan 2022",
    },
    {
      id: 5,
      category: "Product",
      title: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      mainImage:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      userImage: "https://i.pravatar.cc/150?img=5",
      author: "Demi Wilkinson",
      date: "16 Jan 2022",
    },
    {
      id: 6,
      category: "Design",
      title: "What is Wireframing?",
      description:
        "Introduction to Wireframing and its principles. Learn from the best in the industry.",
      mainImage:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop",
      userImage: "https://i.pravatar.cc/150?img=6",
      author: "Candice Wu",
      date: "15 Jan 2022",
    },
    {
      id: 7,
      category: "Design",
      title: "How collaboration makes us better designers",
      description:
        "Collaboration can make our teams stronger, our ideas better, and our individual designs better.",
      mainImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      userImage: "https://i.pravatar.cc/150?img=7",
      author: "Natali Craig",
      date: "14 Jan 2022",
    },
    {
      id: 8,
      category: "Product",
      title: "Our top 10 Javascript frameworks to use",
      description:
        "JavaScript frameworks make development easier and more efficient. Here are our top picks.",
      mainImage:
        "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=300&fit=crop",
      userImage: "https://i.pravatar.cc/150?img=8",
      author: "Drew Cano",
      date: "13 Jan 2022",
    },
    {
      id: 9,
      category: "CustomerSuccess",
      title: "Podcast: Creating a better CX Community",
      description:
        "Starting a community doesn't need to be difficult, but how do you get started?",
      mainImage:
        "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=400&h=300&fit=crop",
      userImage: "https://i.pravatar.cc/150?img=9",
      author: "Chukwu Ebuka",
      date: "12 Jan 2022",
    },
  ];

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
          <div
            key={item.id}
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
        ))}
      </div>

      {/* Load More Button */}
      <div className="relative mt-12 flex justify-center">
        <button className="group relative px-8 py-3 rounded-full overflow-hidden backdrop-blur-xl bg-gradient-to-r from-[#451FAB] to-[#774EE0] border border-[#774EE0]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#774EE0]/50 hover:scale-105 active:scale-95">
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
            <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
            <span className="font-semibold">Load More</span>
          </div>
        </button>
      </div>

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
