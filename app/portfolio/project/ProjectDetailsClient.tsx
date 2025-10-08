'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import FAQSection from '@/app/components/portfolio/components/FAQSection';
import CTASection from '@/app/components/portfolio/components/CTASection';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/Footer';

interface Project {
  id: number;
  year: string;
  title: string;
  description: string;
  services: string[];
  categories: string[];
  businessType: string;
  images: string[];
  client: string;
  date: string;
  role: string;
  analysis: {
    performance: {
      title: string;
      description: string;
      metrics: string[];
      responsiveness: string[];
    };
    problem: {
      title: string;
      description: string;
      improvements: string[];
    };
    solution: {
      title: string;
      description: string;
      communication: string[];
    };
  };
}

// Client component with interactive functionality
function ProjectDetailsClient({ project, otherProjects }: {
  project: Project,
  otherProjects: Project[]
}) {
  // State to track cursor position for each card
  const [cursorPosition, setCursorPosition] = useState<{[key: number]: {x: number, y: number, isHovering: boolean}}>({});

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#774EE0]/20 to-black pb-24 pt-32">
        <div className="max-w-6xl mx-auto px-7">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div className="pt-8">
              <p className="text-sm text-white mb-4">DATE {project.date}</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{project.title}</h1>
              <p className="text-lg text-gray-300 mb-6 max-w-xl">{project.description}</p>
              <div className="flex gap-3">
                {project.categories.map((cat, i) => (
                  <span key={i} className="px-4 py-1 bg-[#774EE0]/20 text-white rounded-full text-sm">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            {/* Right */}
            <div className="bg-[#774EE0]/10 border border-[#774EE0]/20 rounded-2xl p-8 space-y-6 mt-8">
              <div>
                <p className="text-sm text-gray-400">Services</p>
                <p className="font-medium">{project.services?.join(", ")}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Category</p>
                <p className="font-medium">{project.categories[0]}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Client</p>
                <p className="font-medium">{project.client}</p>
              </div>
              <button className="px-6 py-3 bg-[#774EE0] text-white rounded-lg font-medium hover:bg-[#6a45d4] transition-colors flex items-center gap-2">
                View Live Workflow / Demo <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Sections */}
      <main className="max-w-6xl mx-auto px-0 pt-12">
        {/* Main Image */}
        {/* Main Image with Strong Upward + Downward Glow */}
        <div className="relative mb-16">
          {/* Upward Glow */}
          <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[90%] h-[260px] bg-[#451FAB] blur-[140px] opacity-70 rounded-full"></div>

          {/* Downward Glow */}
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-[#451FAB] blur-[120px] opacity-50 rounded-full"></div>

          {/* Image Container */}
          <div className="relative rounded-3xl overflow-hidden border-4 border-[#451FAB]/40 shadow-[0_20px_60px_-10px_#451FAB]">
            <div className="aspect-[16/9] relative">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Analysis */}
        <section className="mb-20">
          <div className="px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8">{project.analysis.performance.title}</h2>
            <p className="text-gray-300 mb-12 max-w-4xl">{project.analysis.performance.description}</p>

            {/* Performance Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-semibold text-white">Performance</h3>
                <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full">SEO</span>
              </div>
              <ul className="space-y-3 mb-8">
                {project.analysis.performance.metrics.map((m, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-[#774EE0] text-lg">•</span>
                    <span className="text-sm">{m}</span>
                  </li>
                ))}
              </ul>

              {/* Responsiveness Section */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Responsiveness</h3>
                {project.analysis.performance.responsiveness.map((r, i) => (
                  <p key={i} className="text-sm text-gray-300 mb-4">{r}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Images stay wide */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] relative">
              <Image
                src={project.images[1]}
                alt="Detail 1"
                fill
                className="object-cover rounded-2xl border border-gray-800"
              />
            </div>
            <div className="aspect-[4/3] relative">
              <Image
                src={project.images[2]}
                alt="Detail 2"
                fill
                className="object-cover rounded-2xl border border-gray-800"
              />
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="mb-20">
          <div className="px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8">{project.analysis.problem.title}</h2>
            <p className="text-gray-300 mb-8 max-w-4xl">{project.analysis.problem.description}</p>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-semibold text-white">Site and Service Improvement</h3>
              <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">Core</span>
            </div>
            {project.analysis.problem.improvements.map((imp, i) => (
              <p key={i} className="text-sm text-gray-300">{imp}</p>
            ))}
          </div>

          {/* Image stays wide */}
          <div className="rounded-2xl overflow-hidden border border-gray-800 mt-8">
            <div className="aspect-[16/9] relative">
              <Image
                src={project.images[3]}
                alt="Problem Section"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-20">
          <div className="px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8">{project.analysis.solution.title}</h2>
            <p className="text-gray-300 mb-8 max-w-4xl">{project.analysis.solution.description}</p>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-semibold text-white">Communication</h3>
              <span className="px-3 py-1 bg-purple-600 text-white text-xs rounded-full">Email</span>
            </div>
            {project.analysis.solution.communication.map((c, i) => (
              <p key={i} className="text-sm text-gray-300">{c}</p>
            ))}
          </div>
        </section>

        {/* Enhanced More Other Cases Section */}
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-center mb-12 px-6 md:px-12">
              <h2 className="text-3xl font-bold">More Other cases</h2>
              <button className="px-6 py-3 bg-[#774EE0] text-white rounded-lg font-medium hover:bg-[#6a45d4] transition-colors">
                View more works
              </button>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherProjects.map((o) => (
                  <Link key={o.id} href={`/portfolio/project/${o.id}`} className="group">
                    <div
                      className="relative overflow-hidden rounded-2xl aspect-[11/8] border-2 border-gray-800 hover:border-[#774EE0] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(119,78,224,0.3)]"
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;

                        setCursorPosition(prev => ({
                          ...prev,
                          [o.id]: { x, y, isHovering: true }
                        }));
                      }}
                      onMouseEnter={() => {
                        setCursorPosition(prev => ({
                          ...prev,
                          [o.id]: { ...prev[o.id], isHovering: true }
                        }));
                      }}
                      onMouseLeave={() => {
                        setCursorPosition(prev => ({
                          ...prev,
                          [o.id]: { ...prev[o.id], isHovering: false }
                        }));
                      }}
                    >

                      {/* Business Type Badge - Shows on Hover */}
                      <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transform translate-x-5 group-hover:translate-x-0 transition-all duration-300">
                        <span className="px-3 py-1 bg-gradient-to-r from-[#774EE0] to-[#9333ea] text-white text-sm font-medium rounded-full shadow-lg">
                          {o.businessType}
                        </span>
                      </div>

                      {/* View Now Button - Follows Cursor */}
                      <div
                        className={`absolute z-30 transition-opacity duration-300 pointer-events-none ${
                          cursorPosition[o.id]?.isHovering ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                          left: cursorPosition[o.id]?.x || 0,
                          top: cursorPosition[o.id]?.y || 0,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        <button className="px-4 py-2 bg-white/95 text-gray-900 rounded-full font-medium text-sm shadow-lg backdrop-blur-sm">
                          View Now
                        </button>
                      </div>

                      {/* Overlay for darkening on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10"></div>

                      {/* Project Title and Year */}
                      <div className="absolute bottom-4 left-4 z-20">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#774EE0] transition-colors duration-300">
                          {o.title}
                        </h3>
                        <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                          {o.year}
                        </p>
                      </div>

                      {/* Project Image */}
                      <Image
                        src={o.images[0]}
                        alt={o.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default ProjectDetailsClient;