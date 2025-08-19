import { Button } from "./ui/button";

const IntegrationsSection = () => {
  const integrations = [
    { name: "Slack", icon: "💬" },
    { name: "GitHub", icon: "🐙" },
    { name: "Google", icon: "🔍" },
    { name: "Microsoft", icon: "🪟" },
    { name: "AWS", icon: "☁️" },
    { name: "Notion", icon: "📝" },
    { name: "Zapier", icon: "⚡" },
    { name: "Stripe", icon: "💳" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-foreground">Seamless Integrations for</span>
          <br />
          <span className="text-primary">Maximum Efficiency</span>
        </h2>
        <p className="text-text-muted text-lg max-w-3xl mx-auto leading-relaxed mb-12">
          Connect with your favorite tools and platforms effortlessly. Our AI
          solutions integrate seamlessly with your existing workflow to enhance
          productivity.
        </p>

        <Button
          size="lg"
          className="bg-gradient-primary hover:opacity-90 transition-opacity mb-16"
        >
          View All
        </Button>

        {/* Integrations Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 items-center justify-center opacity-60">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 hover:opacity-100 transition-opacity"
            >
              <div className="text-3xl">{integration.icon}</div>
              <span className="text-text-muted text-sm">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
