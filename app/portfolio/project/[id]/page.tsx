import { notFound } from 'next/navigation';
import ProjectDetailsClient from '../ProjectDetailsClient';

// ✅ Updated projects data (Case Studies)
const projects = [
  {
    id: 1,
    year: "2024",
    title: "WhatsApp Blog Automation",
    description:
      "We developed an end-to-end automation that enables clients to create blog content instantly through WhatsApp, without needing technical expertise. The system was designed for speed, scalability, and user-friendliness. By combining n8n workflows, OpenRouter, OpenAI, and WordPress, we ensured seamless integration and a smooth user journey.",
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
          "We developed an end-to-end automation that enables clients to create blog content instantly through WhatsApp, without needing technical expertise. The system was designed for speed, scalability, and user-friendliness. By combining n8n workflows, OpenRouter, OpenAI, and WordPress, we ensured seamless integration and a smooth user journey.",
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
          "The client's challenge was the time and complexity of creating blog content. Drafting SEO-friendly titles, writing long-form content, generating matching visuals, and uploading everything to WordPress was slow and resource-intensive. They needed a solution that removed manual effort while maintaining quality and consistency.",
        improvements: [
          "Drafting SEO-friendly titles, writing long-form content, generating matching visuals, and uploading everything to WordPress was slow and resource-intensive. They needed a solution that removed manual effort while maintaining quality and consistency."
        ]
      },
      solution: {
        title: "Solution – Communication and Deployment",
        description:
          "We ensured the client remained fully engaged during the project. Clear communication at each stage helped refine the workflow, ensuring the end solution matched their expectations. The final workflow was deployed on n8n with integrations to OpenRouter, OpenAI (DALL·E), and WordPress. Deployment was smooth, with clients able to generate their first blog draft within minutes of going live.",
        communication: [
          "We ensured the client remained fully engaged during the project. Clear communication at each stage helped refine the workflow, ensuring the end solution matched their expectations. The final workflow was deployed on n8n with integrations to OpenRouter, OpenAI (DALL·E), and WordPress. Deployment was smooth, with clients able to generate their first blog draft within minutes of going live."
        ]
      }
    }
  },
  {
    id: 2,
    year: "2024",
    title: "Video & Channel Analysis Automation",
    description:
      "A digital marketing agency faced challenges in analyzing large volumes of YouTube videos and channels for campaign planning. Manual reviews of audience reactions, content style, and sentiment consumed valuable hours and left room for inconsistencies. Our AI-powered Video Analysis Bot was designed to handle these tasks with speed, accuracy, and seamless reporting.",
    services: [
      "AI Video Analysis",
      "Sentiment Detection",
      "Content Categorization",
      "Automated Reporting"
    ],
    categories: ["Media & Content Intelligence"],
    businessType: "Digital Marketing",
    images: [
      "https://framerusercontent.com/images/oITRaXEkBVhukMYINXV2xi05PY.jpg",
      "https://framerusercontent.com/images/BPEedBVqFey75HW49TPbSktrQ.jpg",
      "https://framerusercontent.com/images/nIWCXDZYVF7vYxiEOoTQCy0Sdk.jpg",
      "https://framerusercontent.com/images/bvayy8dANcD4eW8aJOgXk3nwM.jpg?scale-down-to=1024",
    ],
    client: "Confidential Digital Marketing Agency",
    date: "22/07/2024",
    role: "Automation Consultant",
    analysis: {
      performance: {
        title: "Analysis – Performance and Responsiveness",
        description:
          "A digital marketing agency faced challenges in analyzing large volumes of YouTube videos and channels for campaign planning. Manual reviews of audience reactions, content style, and sentiment consumed valuable hours and left room for inconsistencies. Our AI-powered Video Analysis Bot was designed to handle these tasks with speed, accuracy, and seamless reporting.",
        metrics: [
          "Time Savings: Automated analysis replaced manual reviews, cutting research time by 80%.",
          "Comprehensive Insights: AI identified positive & negative reviews, engagement levels, and content style.",
          "Scalability: The system processed entire channels or bulk video lists without performance drop."
        ],
        responsiveness: [
          "Users received instant analysis sheets with structured results including sentiment distribution, video type, and audience feedback summaries. Whether accessed from desktop or mobile, the experience was smooth and intuitive."
        ]
      },
      problem: {
        title: "Problem – Site and Service Improvement",
        description:
          "The client's team struggled with repetitive video reviews and inconsistent evaluations of YouTube channels. This caused delays in content strategy planning and led to missed marketing opportunities. They needed a solution that could standardize insights, highlight risks, and speed up analysis.",
        improvements: [
          "The client's team struggled with repetitive video reviews and inconsistent evaluations of YouTube channels. This caused delays in content strategy planning and led to missed marketing opportunities. They needed a solution that could standardize insights, highlight risks, and speed up analysis."
        ]
      },
      solution: {
        title: "Solution – Communication and Deployment",
        description:
          "We collaborated with the client's marketing and analytics teams to identify their exact needs. The Video Analysis Bot was deployed with integrations to YouTube APIs and reporting dashboards. A phased rollout ensured smooth adoption, and the client's staff were trained to use automated reports effectively. Within weeks, the agency was generating faster, data-backed content strategies with greater accuracy and consistency.",
        communication: [
          "We collaborated with the client's marketing and analytics teams to identify their exact needs. The Video Analysis Bot was deployed with integrations to YouTube APIs and reporting dashboards. A phased rollout ensured smooth adoption, and the client's staff were trained to use automated reports effectively. Within weeks, the agency was generating faster, data-backed content strategies with greater accuracy and consistency."
        ]
      }
    }
  },
  {
    id: 3,
    year: "2024",
    title: "SlayCanvas",
    description:
      "SlayCanvas is a next-gen creative hub combining moodboards, AI chat, and research notebooks into a single platform. It was designed to ensure smooth performance while handling diverse content like documents, images, audio, and web links. With AI-powered chat, the system transforms raw inputs into structured insights, enabling creators and researchers to work smarter.",
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
          "SlayCanvas is a next-gen creative hub combining moodboards, AI chat, and research notebooks into a single platform. It was designed to ensure smooth performance while handling diverse content like documents, images, audio, and web links. With AI-powered chat, the system transforms raw inputs into structured insights, enabling creators and researchers to work smarter.",
        metrics: [
          "Efficient Content Handling: Supports voice uploads, PDFs, and images with instant AI processing.",
          "AI-Powered Summaries: Generates contextual summaries, highlights, and insights instantly.",
          "Scalability: Supports individuals and teams managing large projects."
        ],
        responsiveness: [
          "The platform is optimized for fluid navigation across devices, ensuring seamless access. Real-time collaboration, drag-and-drop boards, and AI-powered mind maps provide an intuitive, responsive experience."
        ]
      },
      problem: {
        title: "Problem – Site and Service Improvement",
        description:
          "Creative teams and researchers often juggle scattered tools for brainstorming, organizing, and collaborating. Switching between note apps, design boards, and AI tools created inefficiencies. The challenge was to unify these processes while keeping it user-friendly and adaptable.",
        improvements: [
          "Creative teams and researchers often juggle scattered tools for brainstorming, organizing, and collaborating. Switching between note apps, design boards, and AI tools created inefficiencies. The challenge was to unify these processes while keeping it user-friendly and adaptable."
        ]
      },
      solution: {
        title: "Solution – Communication and Deployment",
        description:
          "We collaborated with stakeholders through workshops, feedback loops, and iterative prototypes. SlayCanvas was deployed as a web platform with seamless integrations for uploads, AI chat, and visual boards. The rollout included onboarding and tutorials to help users adapt quickly, ensuring long-term adoption and scalability.",
        communication: [
          "We collaborated with stakeholders through workshops, feedback loops, and iterative prototypes. SlayCanvas was deployed as a web platform with seamless integrations for uploads, AI chat, and visual boards. The rollout included onboarding and tutorials to help users adapt quickly, ensuring long-term adoption and scalability."
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
