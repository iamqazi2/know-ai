import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogById, getBlogList } from '../../data/blogs'

interface BlogPageProps {
  params: Promise<{
    id: string
  }>
}

const BlogDetailPage = async ({ params }: BlogPageProps) => {
  const { id } = await params;
  const blogId = parseInt(id)
  const blog = getBlogById(blogId)
  const allBlogs = getBlogList()
  const relatedBlogs = allBlogs
    .filter(b => b.id !== blogId)
    .filter(b => b.category === blog?.category)
    .slice(0, 3)

  if (!blog) {
    notFound()
  }

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <article className="relative pt-20 pb-20 px-4 md:px-10 max-w-4xl mx-auto">
        {/* Ambient background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#451FAB]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#774EE0]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Category Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#451FAB] to-[#774EE0] text-white text-sm font-semibold mb-6">
            {blog.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {blog.description}
          </p>

          {/* Author and Date */}
          <div className="flex items-center gap-4 mb-12">
            <Image
              src={blog.userImage}
              alt={blog.author}
              width={56}
              height={56}
              className="rounded-full border-2 border-[#774EE0]/50"
            />
            <div>
              <p className="text-white font-semibold">{blog.author}</p>
              <p className="text-gray-400 text-sm">{blog.date} • {blog.readTime}</p>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12">
            <Image
              src={blog.mainImage}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Introduction */}
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <p className="text-gray-300 leading-relaxed text-lg">
              {blog.content.introduction}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {blog.content.sections.map((section, index) => (
              <section key={index} className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {section.heading}
                </h2>

                <p className="text-gray-300 leading-relaxed text-lg">
                  {section.content}
                </p>

                {section.subheading && (
                  <>
                    <h3 className="text-2xl font-semibold text-[#C084FC] mt-8 mb-4">
                      {section.subheading}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {section.content2}
                    </p>
                  </>
                )}

                {section.bulletPoints && (
                  <ul className="space-y-3 mt-6">
                    {section.bulletPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#774EE0] rounded-full mt-3 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Section Image */}
                {blog.content.images[index] && (
                  <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mt-8">
                    <Image
                      src={blog.content.images[index]}
                      alt={`Section ${index + 1} illustration`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#451FAB]/20 to-[#774EE0]/20 border border-[#774EE0]/30">
            <h3 className="text-2xl font-bold text-white mb-4">Conclusion</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              {blog.content.conclusion}
            </p>
          </div>

          {/* Related Blogs */}
          {relatedBlogs.length > 0 && (
            <div className="mt-20">
              <h3 className="text-3xl font-bold text-white mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <Link key={relatedBlog.id} href={`/blogs/${relatedBlog.id}`}>
                    <div className="group relative flex flex-col h-full cursor-pointer overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-[#774EE0]/50 hover:shadow-2xl hover:shadow-[#451FAB]/25">
                      {/* Image container */}
                      <div className="relative overflow-hidden rounded-t-2xl h-80">
                        <Image
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          src={relatedBlog.mainImage}
                          alt={relatedBlog.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-white bg-gradient-to-r from-[#451FAB] to-[#774EE0] backdrop-blur-sm text-xs font-semibold border border-[#774EE0]/30">
                          {relatedBlog.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative flex flex-col justify-between flex-1 p-8">
                        <div className="flex flex-col gap-3 flex-1">
                          <h4 className="font-semibold text-xl leading-tight text-white group-hover:text-[#C084FC] transition-colors duration-300">
                            {relatedBlog.title}
                          </h4>
                          <p className="text-base text-gray-300 leading-relaxed flex-1 group-hover:text-gray-200 transition-colors duration-300">
                            {relatedBlog.description}
                          </p>
                        </div>

                        {/* Author info */}
                        <div className="flex items-center gap-3 mt-4">
                          <Image
                            width={32}
                            height={32}
                            className="rounded-full border-2 border-[#774EE0]/50 object-cover"
                            src={relatedBlog.userImage}
                            alt={relatedBlog.author}
                          />
                          <div className="flex flex-col">
                            <span className="font-medium text-sm text-white">
                              {relatedBlog.author}
                            </span>
                            <span className="text-xs text-gray-400">{relatedBlog.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  )
}

export default BlogDetailPage