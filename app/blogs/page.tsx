import React from 'react'
import Navbar from '../components/navbar'
import BlogSection1 from '../components/blogSections/BlogSection1'
import BlogSection2 from '../components/blogSections/BlogSection2'
import Footer from '../components/Footer'

const BlogPage = () => {
  return (
        <div className=" bg-black relative">
        <Navbar />  
        <BlogSection1 />
        <BlogSection2 />
        <Footer />
        <div className="backdrop-blur-md bg-transparent fixed -bottom-1 left-0 w-full h-[80px] z-60 rounded-t-xl shadow-lg" />
    </div>
  )
}

export default BlogPage