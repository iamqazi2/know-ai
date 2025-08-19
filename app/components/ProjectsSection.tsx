import { Button } from "./ui/button";

const ProjectsSection = () => {
  const projects = [
    { id: 1, title: "AI Analytics Dashboard", category: "Analytics" },
    { id: 2, title: "Smart Automation System", category: "Automation" },
    { id: 3, title: "Predictive AI Model", category: "Machine Learning" },
    { id: 4, title: "Customer Intelligence", category: "Analytics" },
    { id: 5, title: "Process Optimization", category: "Automation" },
    { id: 6, title: "Data Pipeline", category: "Infrastructure" },
  ];

  return (
    <section className="py-20 px-6 bg-card-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Showcasing Our Best</span>
            <br />
            <span className="text-primary">Projects with Pure Precision</span>
          </h2>
          <p className="text-text-muted text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our portfolio of cutting-edge AI solutions that have transformed businesses 
            across various industries. Each project represents our commitment to excellence and innovation.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            View All Projects
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gradient-card border border-border rounded-2xl p-6 hover:shadow-glow transition-all duration-300 group">
              <div className="h-40 bg-card-dark rounded-xl mb-4 flex items-center justify-center border border-border/50">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <div className="w-6 h-6 bg-primary rounded"></div>
                  </div>
                  <span className="text-text-muted text-sm">{project.category}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-text-muted text-sm">
                Advanced AI solution delivering exceptional results and business value.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;