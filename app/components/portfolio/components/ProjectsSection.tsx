import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      year: "2024",
      title: "WhatsApp Blog Automation",
      features: [
        "Date: 10/06/2024",
        "Services: AI + WordPress + n8n",
        "Category: Content Automation",
        "Client: Demo / SMEs",
      ],
      categories: ["Live Workflow"],
      images: ["/Mockups/slaycanvas1.jpg", "/Mockups/slaycanvas.jpg"],
    },
    {
      id: 2,
      year: "2024",
      title: "Corporate Workflow ",
      features: [
        "Date: 22/07/2024",
        "Services: AI + CRM + HR",
        "Category: Process Optimization",
        "Client: Corporate",
      ],
      categories: ["Project Overview"],
      images: ["/icons/3.jpg", "/Mockups/youtube.jpg"],
    },
    {
      id: 3,
      year: "2024",
      title: "SlayCanvas",
      features: [
        "Date: 16/09/2024",
        "Services: AI Design + UX",
        "Category: Research Platform",
        "Client: KnowAI",
      ],
      categories: ["Figma Prototype"],
      images: ["/Mockups/wordpress.jpg", "/icons/1.jpg"],
    },
  ];

  return (
    <section
      className="py-24 px-6 lg:px-8 bg-background relative overflow-hidden"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              year={project.year}
              title={project.title}
              features={project.features}
              categories={project.categories}
              images={project.images}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
