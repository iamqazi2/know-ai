import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      year: "2024",
      title: "Lemonide Tech",
      features: [
        "AI Integration",
        "Responsive Design", 
        "Custom Layouts",
        "Fast Loading"
      ],
      categories: ["E-Commerce", "Portfolio"],
      images: [
        "https://framerusercontent.com/images/6igmB60fniZZ2g62iKIWQ848llo.jpg",
        "https://framerusercontent.com/images/shPlLwe662SqZNtKzOhZzw5yDGQ.png"
      ]
    },
    {
      year: "2025",
      title: "Viper Studio", 
      features: [
        "Modern Typography",
        "User Friendly",
        "Flexible CMS",
        "SEO Optimized"
      ],
      categories: ["Business", "Agency"],
      images: [
        "https://framerusercontent.com/images/oITRaXEkBVhukMYINXV2xi05PY.jpg",
        "https://framerusercontent.com/images/BChNf0ssn5x1I9kAk4vwX8qT5o.png"
      ]
    },
    {
      year: "2025",
      title: "Million One",
      features: [
        "Easy Customization",
        "Interactive Elements", 
        "Retina Ready",
        "High Performance"
      ],
      categories: ["Portfolio", "Agency"],
      images: [
        "https://framerusercontent.com/images/h33bTK94GjgfacsggRpl9F5QXes.png",
        "https://framerusercontent.com/images/mdHohhCEac2dy5qj6Hz8xLx3o.png"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-background relative overflow-hidden" id="portfolio">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured
            <span className="text-white"> Projects</span>
          </h2>
        </motion.div>

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