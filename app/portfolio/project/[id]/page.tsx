'use client';

import { notFound } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import FAQSection from '@/app/components/portfolio/components/FAQSection';
import CTASection from '@/app/components/portfolio/components/CTASection';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/Footer';

// ✅ Updated projects data (Case Studies)
const projects = [
  {
    id: 1,
    year: "2024",
    title: "WhatsApp Blog Automation",
    description:
      "We developed an end-to-end automation that enables clients to create blog content instantly through WhatsApp, without needing technical expertise.",
    services: [
      "AI Automation",
      "WordPress Integration",
      "n8n Workflow"
    ],
    categories: ["Content Automation & Publishing"],
    businessType: "E-Commerce",
    images: [
      "https://framerusercontent.com/images/6igmB60fniZZ2g62iKIWQ848llo.jpg",
      "https://framerusercontent.com/images/wIkfS2B4PLN8e56l2tauOjIs4.jpg",
      "https://framerusercontent.com/images/EnDwPLRTX3We8xhTEDKAWKPM.png",
      "https://framerusercontent.com/images/eMdqbqVkbMYbHIshhsnZkU0YM.jpg",
    ],
    client: "Internal Demo / SME Clients",
    date: "10/06/2024",
    role: "Workflow Architect",
    analysis: {
      performance: {
        title: "Analysis – Performance and Responsiveness",
        description:
          "The system was designed for speed, scalability, and user-friendliness. By combining n8n workflows, OpenRouter, OpenAI, and WordPress, we ensured seamless integration and a smooth user journey.",
        metrics: [
          "Fast Processing: Messages sent via WhatsApp are captured and processed in seconds.",
          "Automated Content Flow: AI-generated titles, text, and images are created without manual intervention.",
          "Scalability: The workflow can handle multiple simultaneous client requests without performance issues."
        ],
        responsiveness: [
          "The solution delivers instant feedback to clients via WhatsApp, ensuring quick turnaround times. Regardless of device—desktop or mobile—the experience remains consistent and engaging."
        ]
      },
      problem: {
        title: "Problem – Site and Service Improvement",
        description:
          "The client's challenge was the time and complexity of creating blog content.",
        improvements: [
          "Drafting SEO-friendly titles, writing long-form content, generating visuals, and uploading everything to WordPress was slow and resource-intensive. They needed a solution that removed manual effort while maintaining quality."
        ]
      },
      solution: {
        title: "Solution – Communication and Deployment",
        description:
          "We ensured the client remained fully engaged during the project. Clear communication at each stage helped refine the workflow, ensuring the end solution matched expectations.",
        communication: [
          "The final workflow was deployed on n8n with integrations to OpenRouter, OpenAI (DALL·E), and WordPress. Deployment was smooth, with clients able to generate their first blog draft within minutes."
        ]
      }
    }
  },
  {
    id: 2,
    year: "2024",
    title: "Corporate Workflow Automation",
    description:
      "A large corporate client faced inefficiencies in administrative workflows, including leave approvals, expense tracking, and reporting.",
    services: [
      "Workflow Automation",
      "AI Integration",
      "CRM & HR Automation"
    ],
    categories: ["Corporate Process Optimization"],
    businessType: "Corporate",
    images: [
      "https://framerusercontent.com/images/oITRaXEkBVhukMYINXV2xi05PY.jpg",
      "https://framerusercontent.com/images/BPEedBVqFey75HW49TPbSktrQ.jpg",
      "https://framerusercontent.com/images/nIWCXDZYVF7vYxiEOoTQCy0Sdk.jpg",
      "https://framerusercontent.com/images/bvayy8dANcD4eW8aJOgXk3nwM.jpg?scale-down-to=1024",
    ],
    client: "Confidential Corporate Client",
    date: "22/07/2024",
    role: "Automation Consultant",
    analysis: {
      performance: {
        title: "Analysis – Performance and Responsiveness",
        description:
          "Our AI-powered automation system was designed to integrate seamlessly with the client's existing CRM and HR tools, ensuring high performance and responsiveness.",
        metrics: [
          "Time Savings: Automated workflows replaced manual tasks, saving over 1,500 admin hours annually.",
          "Error Reduction: AI validation reduced reporting and approval errors by 40%.",
          "Scalability: The solution adapts as the client's workforce and data grow."
        ],
        responsiveness: [
          "Employees gained instant feedback on leave approvals and expense submissions through the integrated system. Whether on desktop or mobile, the experience remained smooth and intuitive."
        ]
      },
      problem: {
        title: "Problem – Site and Service Improvement",
        description:
          "The client's admin team struggled with repetitive manual tasks that drained resources and caused delays.",
        improvements: [
          "Reporting errors and approval backlogs were common. They required a solution that simplified workflows while maintaining accuracy and transparency."
        ]
      },
      solution: {
        title: "Solution – Communication and Deployment",
        description:
          "We worked closely with the client's HR and IT teams, maintaining transparent communication to ensure requirements were met.",
        communication: [
          "The automation was deployed directly into the CRM and HR environment. A phased rollout allowed smooth adoption, and staff were trained effectively. Within weeks, the client reported major time savings and productivity gains."
        ]
      }
    }
  },
  {
    id: 3,
    year: "2024",
    title: "SlayCanvas",
    description:
      "SlayCanvas is a next-gen creative hub combining moodboards, AI chat, and research notebooks into a single platform.",
    services: [
      "AI Product Design",
      "Creative Workspace Development",
      "UX Research"
    ],
    categories: ["AI-Powered Research & Creativity Platform"],
    businessType: "Branding",
    images: [
      "https://framerusercontent.com/images/h33bTK94GjgfacsggRpl9F5QXes.png",
      "https://framerusercontent.com/images/cmQEswT5KlDnITTWpFJi1ycWpA.png",
      "https://framerusercontent.com/images/y6nsXyFCXVHybL6AG2drPt8Xug.png",
      "https://framerusercontent.com/images/nv6wvWEhx82tRYYO7GpPtdr8iq0.png",
    ],
    client: "KnowAI (Product Development)",
    date: "16/09/2024",
    role: "UX Lead",
    analysis: {
      performance: {
        title: "Analysis – Performance and Responsiveness",
        description:
          "It was designed to ensure smooth performance while handling diverse content like documents, images, audio, and web links.",
        metrics: [
          "Efficient Content Handling: Supports voice uploads, PDFs, and images with instant AI processing.",
          "AI-Powered Summaries: Generates contextual summaries, highlights, and insights instantly.",
          "Scalability: Supports individuals and teams managing large projects."
        ],
        responsiveness: [
          "The platform is optimized for fluid navigation across devices. Real-time collaboration, drag-and-drop boards, and AI-powered mind maps provide an intuitive, responsive experience."
        ]
      },
      problem: {
        title: "Problem – Site and Service Improvement",
        description:
          "Creative teams and researchers often juggle scattered tools for brainstorming, organizing, and collaborating.",
        improvements: [
          "Switching between note apps, design boards, and AI tools created inefficiencies. The challenge was to unify these processes while keeping it user-friendly and adaptable."
        ]
      },
      solution: {
        title: "Solution – Communication and Deployment",
        description:
          "We collaborated with stakeholders through workshops, feedback loops, and iterative prototypes.",
        communication: [
          "SlayCanvas was deployed as a web platform with seamless integrations for uploads, AI chat, and visual boards. The rollout included onboarding and tutorials to help users adapt quickly."
        ]
      }
    }
  }
];

// Main async component for Next.js 15
export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.id.toString() === id);
  if (!project) notFound();

  const otherProjects = projects.filter(p => p.id.toString() !== id);
  
  return <ProjectDetailsClient project={project} otherProjects={otherProjects} />;
}

// Client component with interactive functionality
function ProjectDetailsClient({ project, otherProjects }: { 
  project: typeof projects[0], 
  otherProjects: typeof projects 
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