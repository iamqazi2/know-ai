import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      year: "2024",
      title: "Lemonide Tech",
      features: [
        "AI Integration",
        "Responsive Design",
        "Custom Layouts",
        "Fast Loading",
      ],
      categories: ["E-Commerce", "Portfolio"],
      images: [
        "https://framerusercontent.com/images/6igmB60fniZZ2g62iKIWQ848llo.jpg",
        "https://framerusercontent.com/images/shPlLwe662SqZNtKzOhZzw5yDGQ.png",
      ],
    },
    {
      year: "2025",
      title: "Viper Studio",
      features: [
        "Modern Typography",
        "User Friendly",
        "Flexible CMS",
        "SEO Optimized",
      ],
      categories: ["Business", "Agency"],
      images: [
        "https://framerusercontent.com/images/oITRaXEkBVhukMYINXV2xi05PY.jpg",
        "https://framerusercontent.com/images/BChNf0ssn5x1I9kAk4vwX8qT5o.png",
      ],
    },
    {
      year: "2025",
      title: "Million One",
      features: [
        "Easy Customization",
        "Interactive Elements",
        "Retina Ready",
        "High Performance",
      ],
      categories: ["Portfolio", "Agency"],
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
      {/* Background gradient */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
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
