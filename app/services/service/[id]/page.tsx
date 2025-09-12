"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import FAQSection from "@/app/components/portfolio/components/FAQSection";
import BookConsultation from "@/app/components/BookConsultation";

import { faqs as service1Faqs } from "@/app/servicesFAQs/service1";
import { faqs as service2Faqs } from "@/app/servicesFAQs/service2";
import { faqs as service3Faqs } from "@/app/servicesFAQs/service3";
import { faqs as service4Faqs } from "@/app/servicesFAQs/service4";
import { faqs as service5Faqs } from "@/app/servicesFAQs/service5";

// All services data
const allServices = [
  {
    id: 1,
    title: "AI Consultant and Strategy",
    description:
      "Identify high-impact areas where AI can deliver measurable business value.",
    detailedDescription: `We help organizations discover where artificial intelligence can generate measurable business
value. Our consulting begins with a deep assessment of current operations, data readiness, and digital maturity. We identify high-impact areas where AI adoption can reduce costs, increase revenue, or improve efficiency. By aligning AI opportunities with business goals, we ensure a clear roadmap for scalable adoption. Our strategy includes competitive analysis, risk assessment, and implementation prioritization. We focus on practical, results-driven AI initiatives rather than theoretical possibilities. From leadership workshops to executive-level roadmaps, we guide decision-makers in building an AI-first mindset. With our consulting, businesses gain clarity, confidence, and a future-proof AI adoption strategy.`,
    heroImage: "/hero-service.jpg",
  },
  {
    id: 2,
    title: "AI Solution Development",
    description:
      "Build tailored automation workflows aligned with specific operational needs.",
    detailedDescription:
      "We design and build customized AI solutions tailored to specific organizational needs. Our team collaborates closely with stakeholders to understand business challenges and operational workflows. Each solution is built to integrate seamlessly with existing tools, minimizing disruption. From predictive analytics to natural language processing and computer vision, we specialize in creating solutions that drive measurable outcomes. Our development approach follows agile methodology, ensuring flexibility and quick iterations. We emphasize transparency, scalability, and security at every stage. Our experts handle both proof-of-concept prototypes and full-scale production systems. With our solutions, businesses gain smarter decision-making tools, automation efficiency, and data-driven insights.",
    heroImage: "/service-automation.jpg",
  },
  {
    id: 3,
    title: "Seamless AI Deployment",
    description:
      "Integrate AI solutions into existing systems for minimal disruption and maximum benefit.",
    detailedDescription:
      "Deploying AI is more than just technical setup—it's about ensuring adoption with minimal disruption. We provide end-to-end AI deployment services, from model integration to system alignment. Our experts make sure AI solutions fit smoothly into your current workflows and infrastructure. We conduct rigorous testing, optimization, and performance benchmarking before launch. Deployment is followed by staff training and knowledge transfer for long-term usability. We provide scalable deployment strategies—whether on-premises, cloud, or hybrid environments. Our focus is on minimizing downtime, ensuring compliance, and maximizing ROI from day one. With a structured deployment plan, businesses experience AI as an enabler, not a disruptor.",
    heroImage: "/service-data.jpg",
  },
  {
    id: 4,
    title: "Process Automation",
    description:
      "Intelligent process optimization solutions. Replace repetitive manual work with AI-driven, reliable, and fast processes.",
    detailedDescription:
      "We help businesses eliminate repetitive manual tasks through AI-driven automation. From data entry to workflow approvals, our intelligent automation solutions save time and reduce errors. Our approach combines robotic process automation (RPA) with machine learning for advanced capabilities. Automating routine processes allows employees to focus on higher-value work. We design automation pipelines tailored to each business process, ensuring efficiency and scalability. Our solutions are secure, auditable, and easily adaptable to changing requirements. By replacing manual workflows with AI-powered automation, businesses gain speed, consistency, and cost savings. The outcome is a more agile, productive, and future-ready workforce.",
    heroImage: "/service-process.jpg",
  },
  {
    id: 5,
    title: "Operational Optimization",
    description:
      "Use AI insights to streamline workflows, reduce inefficiencies, and boost output.",
    detailedDescription:
      "We use AI insights to enhance workflows, reduce inefficiencies, and maximize productivity. Our optimization services identify bottlenecks in operations and recommend AI-powered solutions. By analyzing data patterns, we help organizations make smarter, faster decisions. We focus on cost reduction, output improvement, and quality enhancement simultaneously. Our optimization solutions adapt to multiple industries, from manufacturing to services. We emphasize measurable performance metrics, ensuring clear visibility into improvements. AI-enabled forecasting and resource allocation help organizations achieve sustainable growth. The goal is not just efficiency, but building resilient operations capable of adapting to future challenges.",
    heroImage: "/service-custom.jpg",
  },
];

export default function ServicePage() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const strategicBadgeRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const visibleRef = useRef(false);
  
  const params = useParams();
  const serviceId = Number(params.id);
  const service = allServices.find((s) => s.id === serviceId);

  // Determine which FAQs to use
  let serviceFaqs;
  switch (service?.id) {
    case 1:
      serviceFaqs = service1Faqs;
      break;
    case 2:
      serviceFaqs = service2Faqs;
      break;
    case 3:
      serviceFaqs = service3Faqs;
      break;
    case 4:
      serviceFaqs = service4Faqs;
      break;
    case 5:
      serviceFaqs = service5Faqs;
      break;
    default:
      serviceFaqs = undefined;
  }

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    dot.style.opacity = "0";
    dot.style.left = "0px";
    dot.style.top = "0px";
    dot.style.transform = `translate3d(0px,0px,0) translate(-50%, -50%)`;

    const ease = 0.12;
    const onMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      if (!visibleRef.current) {
        visibleRef.current = true;
        dot.style.opacity = "1";
      }
    };

    const animate = () => {
      const cur = currentRef.current;
      const tgt = targetRef.current;
      cur.x += (tgt.x - cur.x) * ease;
      cur.y += (tgt.y - cur.y) * ease;
      dot.style.transform = `translate3d(${Math.round(cur.x)}px, ${Math.round(
        cur.y
      )}px, 0) translate(-50%, -50%)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!service) {
    return (
      <div className="text-white text-center mt-20">Service not found</div>
    );
  }

  return (
    <div className="bg-black text-white relative">
      <Navbar />

      {/* Hero Section */}

      <section
        className="relative w-full flex flex-col items-center justify-start text-center
             px-4 pt-56 pb-32 bg-gradient-to-b from-[#774EE0]/40 via-[#774EE0]/20 to-black"
      >
        <div
          ref={strategicBadgeRef}
          className="absolute top-36 md:top-48 left-1/2 transform -translate-x-1/2
               bg-gradient-to-r from-white/20 to-black/40 backdrop-blur-md
               border border-white/10 rounded-full px-3 py-2 text-xs sm:text-sm md:text-base z-20"
        >
          <span className="flex items-center gap-2">
            <Image
              src="/our-desk.png"
              alt="Our Desk"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white/10 p-[2px] object-contain"
              width={28}
              height={28}
            />
            Our Services
          </span>
        </div>

        {/* Title & Description */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 z-10 mt-12">
          {service.title}
        </h1>
        <p className="max-w-2xl text-gray-300 z-10">{service.description}</p>
      </section>

      {/* Detailed description + Book Appointment */}
      <section className="px-6 md:px-12 py-16 text-center relative z-10 max-w-4xl mx-auto">
        <p className="text-gray-300 mb-8">{service.detailedDescription}</p>
        <button
          className="bg-gradient-to-b from-[#521ED6] to-[#7E56E2] 
          h-[60px] w-[220px] text-white font-bold rounded-[10px] border-2 border-[#8D6AE6] 
          text-[18px] py-2 transition-all duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-purple-500/25"
        >
          Book an Appointment
        </button>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={serviceFaqs} />

      <BookConsultation currentServiceId={service.id} />

      <Footer />

      <div
        ref={dotRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "white",
          pointerEvents: "none",
          transition: "opacity 160ms ease",
          zIndex: 9999,
          boxShadow: "0 0 8px rgba(0,0,0,0.12)",
        }}
      />
      <div className="backdrop-blur-md bg-transparent fixed -bottom-1 left-0 w-full h-[80px] z-60 rounded-t-xl shadow-lg" />
    </div>
  );
}