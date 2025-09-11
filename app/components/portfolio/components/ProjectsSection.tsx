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
      images: [
        "https://framerusercontent.com/images/6igmB60fniZZ2g62iKIWQ848llo.jpg",
        "https://framerusercontent.com/images/shPlLwe662SqZNtKzOhZzw5yDGQ.png",
      ],
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
      images: [
        "https://framerusercontent.com/images/oITRaXEkBVhukMYINXV2xi05PY.jpg",
        "https://framerusercontent.com/images/BChNf0ssn5x1I9kAk4vwX8qT5o.png",
      ],
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
      images: [
        "https://framerusercontent.com/images/h33bTK94GjgfacsggRpl9F5QXes.png",
        "https://framerusercontent.com/images/mdHohhCEac2dy5qj6Hz8xLx3o.png",
      ],
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
