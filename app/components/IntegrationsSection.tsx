"use client";
import Image from "next/image";
import { Button } from "./navbar/button";

const IntegrationsSection = () => {
  const integrations = [
    {
      name: "Slack",
      logo: "/1.svg",
    },
    {
      name: "GitHub",
      logo: "/2.svg",
    },
    {
      name: "Google",
      logo: "/3.svg",
    },
    {
      name: "Microsoft",
      logo: "/4.svg",
    },
    {
      name: "AWS",
      logo: "/5.svg",
    },
    {
      name: "Notion",
      logo: "/6.svg",
    },
    {
      name: "Zapier",
      logo: "/7.svg",
    },
    {
      name: "Stripe",
      logo: "/8.svg",
    },
    {
      name: "Stripe",
      logo: "/9.svg",
    },
    {
      name: "Stripe",
      logo: "/10.svg",
    },
    {
      name: "Stripe",
      logo: "/11.svg",
    },
    {
      name: "Stripe",
      logo: "/12.svg",
    },
    {
      name: "Stripe",
      logo: "/13.svg",
    },
    {
      name: "Stripe",
      logo: "/14.svg",
    },
  ];

  return (
    <section className="py-20   overflow-hidden">
      <div className=" mx-auto text-center">
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

        {/* Animated Banner with Gradients */}
        <div className="relative w-full">
          {/* Left gradient overlay */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll">
            {/* First set of logos */}
            {integrations.map((integration, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex flex-col items-center space-y-3 hover:scale-110 transition-transform duration-300 group"
              >
                <div className="w-16 h-16    flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    height={32}
                    width={32}
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    className="w-12 h-12 object-contain rounded-lg"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {integrations.map((integration, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex flex-col items-center space-y-3 hover:scale-110 transition-transform duration-300 group"
              >
                <div className="w-16 h-16   flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    height={32}
                    width={32}
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    className="w-12 h-12 object-contain rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default IntegrationsSection;
