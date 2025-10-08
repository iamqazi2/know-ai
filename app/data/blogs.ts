export interface BlogContent {
  introduction: string;
  sections: {
    heading: string;
    content: string;
    subheading?: string;
    content2?: string;
    bulletPoints?: string[];
  }[];
  images: string[];
  conclusion: string;
}

export interface Blog {
  id: number;
  category: string;
  title: string;
  description: string;
  mainImage: string;
  userImage: string;
  author: string;
  date: string;
  readTime: string;
  content: BlogContent;
}

export const blogData: Record<number, Blog> = {
  1: {
    id: 1,
    category: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    mainImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    userImage: "https://i.pravatar.cc/150?img=1",
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    readTime: "5 min read",
    content: {
      introduction:
        "Creating compelling UX review presentations is an art that combines design principles, storytelling, and strategic communication. In this comprehensive guide, we'll explore the key elements that make presentations memorable and effective.",
      sections: [
        {
          heading: "Understanding Your Audience",
          content:
            "Before diving into design, it's crucial to understand who you're presenting to. Different stakeholders have different priorities and levels of technical knowledge.",
          bulletPoints: [
            "Identify key decision-makers and their concerns",
            "Tailor technical depth to audience expertise",
            "Consider the context and timing of the presentation",
          ],
        },
        {
          heading: "Structuring Your Presentation",
          content:
            "A well-structured presentation follows a logical flow that guides your audience through your thought process and recommendations.",
          subheading: "The Problem-Solution-Benefits Framework",
          content2:
            "Start with the problem, present your solution, and end with clear benefits. This structure helps stakeholders quickly grasp the value proposition.",
        },
        {
          heading: "Visual Design Principles",
          content:
            "Good design isn't just about aesthetics—it's about clarity and comprehension. Use visual hierarchy, consistent typography, and meaningful imagery to enhance your message.",
          bulletPoints: [
            "Maintain consistent color schemes and fonts",
            "Use high-contrast ratios for readability",
            "Incorporate relevant icons and illustrations",
            "Keep slides uncluttered and focused",
          ],
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      ],
      conclusion:
        "Mastering UX review presentations takes practice, but the impact on your career and project success is invaluable. Remember to always focus on clarity, relevance, and actionable insights.",
    },
  },
  2: {
    id: 2,
    category: "Product",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    mainImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    userImage: "https://i.pravatar.cc/150?img=2",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    readTime: "7 min read",
    content: {
      introduction:
        "Migrating to a new project management tool can be daunting, but Linear's streamlined approach makes the transition smoother than you might think. This guide covers everything you need to know to get started.",
      sections: [
        {
          heading: "Why Choose Linear?",
          content:
            "Linear stands out from other project management tools with its focus on speed, simplicity, and developer experience.",
          bulletPoints: [
            "Intuitive interface designed for technical teams",
            "Powerful filtering and search capabilities",
            "Real-time collaboration features",
            "Seamless integration with development workflows",
          ],
        },
        {
          heading: "Planning Your Migration",
          content:
            "A successful migration requires careful planning and clear communication with your team.",
          subheading: "Assess Your Current Workflow",
          content2:
            "Take time to document your current processes, pain points, and requirements before making the switch.",
        },
        {
          heading: "Setting Up Your Workspace",
          content:
            "Linear's workspace setup is straightforward, but there are best practices to ensure optimal configuration.",
          bulletPoints: [
            "Create clear team structures and hierarchies",
            "Set up custom workflows that match your processes",
            "Configure integrations with your existing tools",
            "Establish naming conventions and labeling systems",
          ],
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
      ],
      conclusion:
        "Migrating to Linear can transform how your team manages projects. With its focus on efficiency and developer experience, it's a tool that grows with your team's needs.",
    },
  },
  3: {
    id: 3,
    category: "SoftwareEngineering",
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    mainImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    userImage: "https://i.pravatar.cc/150?img=3",
    author: "Lana Steiner",
    date: "18 Jan 2022",
    readTime: "6 min read",
    content: {
      introduction:
        "Building a robust API stack is essential for modern web applications. This guide explores the tools and best practices for creating scalable, maintainable APIs.",
      sections: [
        {
          heading: "Choosing the Right Framework",
          content:
            "Selecting the appropriate framework depends on your project requirements, team expertise, and scalability needs.",
          bulletPoints: [
            "Express.js for Node.js applications",
            "FastAPI for Python-based services",
            "Spring Boot for enterprise Java applications",
            "Django REST Framework for rapid Python development",
          ],
        },
        {
          heading: "API Design Principles",
          content:
            "Well-designed APIs follow established patterns and conventions that make them intuitive and maintainable.",
          subheading: "RESTful Design Patterns",
          content2:
            "REST APIs should use HTTP methods appropriately and follow resource-based URL structures.",
        },
        {
          heading: "Testing and Documentation",
          content:
            "Comprehensive testing and clear documentation are crucial for API reliability and developer experience.",
          bulletPoints: [
            "Unit and integration testing with tools like Jest or pytest",
            "API documentation using Swagger/OpenAPI",
            "Automated testing in CI/CD pipelines",
            "Performance testing and monitoring",
          ],
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      ],
      conclusion:
        "Building a solid API stack requires careful consideration of frameworks, design patterns, and testing strategies. The right foundation will support your application's growth and maintainability.",
    },
  },
  4: {
    id: 4,
    category: "Management",
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a Super Bowl winning dynasty?",
    mainImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    userImage: "https://i.pravatar.cc/150?img=4",
    author: "Alec Whitten",
    date: "17 Jan 2022",
    readTime: "8 min read",
    content: {
      introduction:
        "Bill Walsh's leadership philosophy revolutionized how we think about building high-performing teams. His Stanford background and NFL success provide timeless lessons for modern leaders.",
      sections: [
        {
          heading: "The Standard of Performance",
          content:
            "Walsh believed that establishing clear standards was the foundation of success. Every team member needed to understand exactly what excellence looked like.",
          bulletPoints: [
            "Define clear expectations for every role",
            "Create measurable performance standards",
            "Regularly communicate and reinforce standards",
            "Lead by example in maintaining high standards",
          ],
        },
        {
          heading: "Building Character",
          content:
            "Walsh emphasized that talent alone wasn't enough—character and work ethic were equally important in building championship teams.",
          subheading: "The Character Factor",
          content2:
            "He looked for players who demonstrated reliability, discipline, and the ability to put team success above personal glory.",
        },
        {
          heading: "The Winning Process",
          content:
            "Success comes from following a proven process, not just hoping for good outcomes. Walsh's systematic approach to team building is legendary.",
          bulletPoints: [
            "Develop a clear team philosophy and strategy",
            "Focus on fundamentals and execution",
            "Build depth through smart player evaluation",
            "Create a culture of continuous improvement",
          ],
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      ],
      conclusion:
        "Bill Walsh's leadership principles continue to influence coaches, executives, and managers across industries. His emphasis on standards, character, and process provides a blueprint for building winning teams.",
    },
  },
  5: {
    id: 5,
    category: "Product",
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    mainImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    userImage: "https://i.pravatar.cc/150?img=5",
    author: "Demi Wilkinson",
    date: "16 Jan 2022",
    readTime: "6 min read",
    content: {
      introduction:
        "Mental models help product managers navigate complex decisions and communicate effectively with stakeholders. These frameworks simplify complex realities into actionable insights.",
      sections: [
        {
          heading: "The Jobs To Be Done Framework",
          content:
            "Understanding what job customers are hiring your product to do is crucial for product success.",
          bulletPoints: [
            "Focus on the progress customers want to make",
            "Identify the circumstances that trigger product usage",
            "Design solutions that help customers achieve their goals",
            "Measure success by how well you help customers progress",
          ],
        },
        {
          heading: "The Kano Model",
          content:
            "Different features deliver different types of customer satisfaction. Understanding these categories helps prioritize development efforts.",
          subheading: "Three Types of Features",
          content2:
            "Basic features are expected, performance features scale with investment, and delighters create loyalty through unexpected value.",
        },
        {
          heading: "The RICE Scoring Model",
          content:
            "When prioritizing features, consider Reach, Impact, Confidence, and Effort to make data-driven decisions.",
          bulletPoints: [
            "Reach: How many users will this affect?",
            "Impact: How much will it improve their experience?",
            "Confidence: How sure are we about our estimates?",
            "Effort: How much work will this require?",
          ],
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
      ],
      conclusion:
        "Mental models provide product managers with structured ways to think about complex problems. Mastering these frameworks leads to better decisions and more successful products.",
    },
  },
  6: {
    id: 6,
    category: "Design",
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its principles. Learn from the best in the industry.",
    mainImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
    userImage: "https://i.pravatar.cc/150?img=6",
    author: "Candice Wu",
    date: "15 Jan 2022",
    readTime: "4 min read",
    content: {
      introduction:
        "Wireframing is the blueprint of digital design. It's the structural foundation that guides the creation of user interfaces and experiences.",
      sections: [
        {
          heading: "Understanding Wireframes",
          content:
            "Wireframes are low-fidelity representations of a digital product's structure and layout.",
          bulletPoints: [
            "Focus on structure over visual design",
            "Show content hierarchy and navigation",
            "Demonstrate user flow and interaction patterns",
            "Serve as a communication tool for stakeholders",
          ],
        },
        {
          heading: "Wireframing Tools",
          content:
            "From simple sketching to sophisticated software, there are tools for every level of fidelity and complexity.",
          subheading: "Digital vs. Analog",
          content2:
            "While digital tools offer precision and collaboration features, analog wireframes encourage creativity and quick iteration.",
        },
        {
          heading: "Best Practices",
          content:
            "Effective wireframing requires understanding both design principles and user needs.",
          bulletPoints: [
            "Start with user research and requirements",
            "Keep wireframes simple and focused",
            "Use consistent symbols and annotations",
            "Iterate based on feedback and testing",
          ],
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=400&fit=crop",
      ],
      conclusion:
        "Wireframing is an essential skill for designers and product teams. It bridges the gap between ideas and implementation, ensuring everyone is aligned on the product's structure.",
    },
  },
  7: {
    id: 7,
    category: "Design",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, our ideas better, and our individual designs better.",
    mainImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    userImage: "https://i.pravatar.cc/150?img=7",
    author: "Natali Craig",
    date: "14 Jan 2022",
    readTime: "5 min read",
    content: {
      introduction:
        "Design is increasingly a collaborative discipline. The best work emerges from diverse perspectives, constructive feedback, and shared ownership of solutions.",
      sections: [
        {
          heading: "The Power of Diverse Perspectives",
          content:
            "Different backgrounds and experiences bring unique insights to design challenges.",
          bulletPoints: [
            "Cross-functional teams combine technical and creative expertise",
            "User research incorporates real-world perspectives",
            "Stakeholder feedback ensures business alignment",
            "Peer reviews catch potential issues early",
          ],
        },
        {
          heading: "Building a Collaborative Culture",
          content:
            "Creating an environment where collaboration thrives requires intentional effort and leadership.",
          subheading: "Psychological Safety",
          content2:
            "Team members need to feel safe sharing ideas, admitting mistakes, and asking questions without fear of judgment.",
        },
        {
          heading: "Effective Collaboration Tools",
          content:
            "The right tools can enhance collaboration and make remote work seamless.",
          bulletPoints: [
            "Design systems for consistency across teams",
            "Version control for tracking design iterations",
            "Feedback platforms for structured critique",
            "Documentation tools for knowledge sharing",
          ],
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
      ],
      conclusion:
        "Collaboration doesn't diminish individual creativity—it amplifies it. By working together effectively, design teams can achieve outcomes that surpass what any individual could accomplish alone.",
    },
  },
  8: {
    id: 8,
    category: "Product",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easier and more efficient. Here are our top picks.",
    mainImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&h=600&fit=crop",
    userImage: "https://i.pravatar.cc/150?img=8",
    author: "Drew Cano",
    date: "13 Jan 2022",
    readTime: "7 min read",
    content: {
      introduction:
        "JavaScript frameworks have revolutionized web development, offering powerful tools for building complex applications efficiently. Choosing the right framework depends on your project needs and team expertise.",
      sections: [
        {
          heading: "React - The Industry Standard",
          content:
            "React's component-based architecture and virtual DOM make it perfect for building interactive user interfaces.",
          bulletPoints: [
            "Declarative programming model",
            "Rich ecosystem and community support",
            "Excellent for single-page applications",
            "Strong mobile development options with React Native",
          ],
        },
        {
          heading: "Vue.js - The Progressive Framework",
          content:
            "Vue offers an approachable learning curve while providing powerful features for complex applications.",
          subheading: "Why Vue Excels",
          content2:
            "Its gentle learning curve and flexibility make it ideal for teams transitioning from vanilla JavaScript or jQuery.",
        },
        {
          heading: "Angular - The Full-Featured Framework",
          content:
            "Angular provides a complete solution with built-in tools for large-scale enterprise applications.",
          bulletPoints: [
            "Comprehensive framework with everything included",
            "Strong typing with TypeScript",
            "Excellent for large teams and complex applications",
            "Built-in testing and state management tools",
          ],
        },
        {
          heading: "Svelte - The Compiler Framework",
          content:
            "Svelte shifts work from runtime to compile time, resulting in smaller bundles and better performance.",
          bulletPoints: [
            "No virtual DOM overhead",
            "Truly reactive programming model",
            "Small bundle sizes out of the box",
            "Intuitive syntax and learning curve",
          ],
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&h=400&fit=crop",
      ],
      conclusion:
        "The JavaScript ecosystem continues to evolve rapidly. Each framework has its strengths, so choose based on your project requirements, team skills, and long-term maintenance considerations.",
    },
  },
  9: {
    id: 9,
    category: "CustomerSuccess",
    title: "Podcast: Creating a better CX Community",
    description:
      "Starting a community doesn't need to be difficult, but how do you get started?",
    mainImage:
      "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&h=600&fit=crop",
    userImage: "https://i.pravatar.cc/150?img=9",
    author: "Chukwu Ebuka",
    date: "12 Jan 2022",
    readTime: "6 min read",
    content: {
      introduction:
        "Building a thriving customer community requires strategy, authenticity, and consistent effort. This podcast episode explores practical approaches to creating meaningful customer connections.",
      sections: [
        {
          heading: "Why Communities Matter",
          content:
            "Customer communities provide value beyond products—they create loyalty, generate insights, and drive growth.",
          bulletPoints: [
            "Peer support reduces support ticket volume",
            "User-generated content provides social proof",
            "Community feedback improves product development",
            "Brand advocates amplify your marketing efforts",
          ],
        },
        {
          heading: "Getting Started",
          content:
            "Building a community requires a clear strategy and realistic expectations about the time investment required.",
          subheading: "Platform Selection",
          content2:
            "Choose platforms that align with your audience's preferences and your team's capacity to manage them effectively.",
        },
        {
          heading: "Content and Engagement Strategies",
          content:
            "Successful communities require consistent, valuable content and active engagement from both company and community members.",
          bulletPoints: [
            "Create content that educates and entertains",
            "Encourage user-generated content and discussions",
            "Recognize and reward active community members",
            "Monitor sentiment and address concerns promptly",
          ],
        },
        {
          heading: "Measuring Success",
          content:
            "Track both quantitative and qualitative metrics to understand your community's health and impact.",
          bulletPoints: [
            "Engagement rates and active user counts",
            "Customer satisfaction and NPS scores",
            "Support ticket deflection rates",
            "Revenue impact from community-driven sales",
          ],
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&h=400&fit=crop",
      ],
      conclusion:
        "Building a customer community is a long-term investment that pays dividends in customer loyalty and business growth. Start small, stay consistent, and focus on delivering genuine value.",
    },
  },
};

export const getBlogList = (): Omit<Blog, "content">[] => {
  return Object.values(blogData).map(({ content, ...blog }) => blog);
};

export const getBlogById = (id: number): Blog | undefined => {
  return blogData[id];
};
