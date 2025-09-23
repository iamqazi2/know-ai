"use client";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const BlogSection2 = () => {
  const blogContent = [
    {
      id: 1,
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      mainImage: "/blogImage1.jpg",
      userImage: "/BlogUser1.png",
      author: "Olivia Rhye",
      date: "20 Jan 2022",
    },
    {
      id: 2,
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      mainImage: "/blogImage2.jpg",
      userImage: "/BlogUser2.png",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
    },
    {
      id: 3,
      category: "SoftwareEngineering",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      mainImage: "/BlogImage3.jpg",
      userImage: "/BlogUser3.png",
      author: "Lana Steiner",
      date: "18 Jan 2022",
    },
    {
      id: 4,
      category: "Management",
      title: "Bill Walsh leadership lessons",
      description:
        "Like to know the secrets of transforming a 2-14 team into a Super Bowl winning dynasty?",
      mainImage: "/BlogImage4.jpg",
      userImage: "/BlogUser4.png",
      author: "Alec Whitten",
      date: "17 Jan 2022",
    },
    {
      id: 5,
      category: "Product",
      title: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      mainImage: "/BlogImage5.jpg",
      userImage: "/BlogUser5.png",
      author: "Demi Wilkinson",
      date: "16 Jan 2022",
    },
    {
      id: 6,
      category: "Design",
      title: "What is Wireframing?",
      description:
        "Introduction to Wireframing and its principles. Learn from the best in the industry.",
      mainImage: "/BlogImage6.jpg",
      userImage: "/BlogUser6.png",
      author: "Candice Wu",
      date: "15 Jan 2022",
    },
    {
      id: 7,
      category: "Design",
      title: "How collaboration makes us better designers",
      description:
        "Collaboration can make our teams stronger, our ideas better, and our individual designs better.",
      mainImage: "/BlogImage7.jpg",
      userImage: "/BlogUser7.png",
      author: "Natali Craig",
      date: "14 Jan 2022",
    },
    {
      id: 8,
      category: "Product",
      title: "Our top 10 Javascript frameworks to use",
      description:
        "JavaScript frameworks make development easier and more efficient. Here are our top picks.",
      mainImage: "/BlogImage8.jpg",
      userImage: "/BlogUser8.png",
      author: "Drew Cano",
      date: "13 Jan 2022",
    },
    {
      id: 9,
      category: "CustomerSuccess",
      title: "Podcast: Creating a better CX Community",
      description:
        "Starting a community doesn’t need to be difficult, but how do you get started?",
      mainImage: "/BlogImage9.jpg",
      userImage: "/BlogUser9.png",
      author: "Chukwu Ebuka",
      date: "12 Jan 2022",
    },
  ];

  return (
    <section className="relative text-white pt-14 md:pt-20 w-full main-container pb-10 md:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
        {blogContent.map((item, index) => (
          <motion.div
            key={item.id}
            className="border border-gray-800 flex flex-col text-white px-6 pt-6 pb-8 h-full cursor-pointer 
            bg-[url('/contact-bg.svg')] transition-shadow duration-300 hover:shadow-2xl hover:shadow-gray-700/60"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            {/* Blog Image */}
            <Image
              className="w-full object-cover"
              src={item.mainImage}
              alt="Blog Image"
              width={320}
              height={320}
            />

            {/* Content Wrapper */}
            <div className="flex flex-col justify-between flex-1 mt-6">
              {/* Top Part */}
              <div className="flex flex-col gap-3 flex-1">
                <h6 className="font-semibold text-purple-500 text-sm">
                  {item.category}
                </h6>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-2xl">{item.title}</h3>
                  <ArrowUpRight />
                </div>
                <p className="text-xs sm:text-base text-gray-500 flex-1">
                  {item.description}
                </p>
              </div>

              {/* Bottom Part (Author Info) */}
              <div className="flex items-center gap-4 mt-6">
                <div className="bg-[#C7B9DA] rounded-full">
                  <Image
                    className="rounded-full"
                    src={item.userImage}
                    alt="user Image"
                    width={55}
                    height={55}
                  />
                </div>
                <div className="flex flex-col">
                  <span>{item.author}</span>
                  <span className="text-gray-400">{item.date}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      <div
        className="text-sm md:text-base bg-gradient-to-b from-[#521ED6] to-[#7E56E2] mt-10 w-35 md:w-40 
        flex items-center justify-center py-2 md:py-3 m-auto gap-2 cursor-pointeryarn 
        border-2 border-[#8D6AE6] transition-all duration-300 ease-in-out 
        hover:scale-105 transform shadow-lg hover:shadow-purple-500/25 rounded"
      >
        <ArrowDown size={20} />
        <span>Load More</span>
      </div>
    </section>
  );
};

export default BlogSection2;
