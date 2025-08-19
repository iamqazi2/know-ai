import Image from "next/image";

const AutomationSection = () => {
  const features = [
    {
      title: "Seamless Agents Integration",
      description:
        "We seamlessly integrate with many of third-party integrations.",
      topImage: "/seamslessagentstop.png",
      mainImage: "/seamslessagents.png",
    },
    {
      title: "Trusted Authentication",
      description: "Quality systems and robust performance to workflows.",
      topImage: "/trustedauthenticationtop.png",
      mainImage: "/trustedauthentication.png",
    },
    {
      title: "AI Voice Agents",
      description: "We support a wide range of third-party integrations.",
      topImage: "/aivoivetop.png",
      mainImage: "/aivoiceagent.png",
    },
  ];

  // helper to force last word on new line
  const formatTitle = (title: string) => {
    const words = title.split(" ");
    if (words.length > 1) {
      return (
        <>
          {words.slice(0, -1).join(" ")}{" "}
          <span className="block">{words[words.length - 1]}</span>
        </>
      );
    }
    return title;
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative w-full max-w-[397px] mx-auto rounded-[20px] border border-gray-700/40 
                         bg-[url('/card-bg.png')] bg-cover bg-center 
                         flex flex-col items-center px-5 pb-5 gap-[30px] overflow-hidden"
            >
              {/* Top Image */}
              <div className="w-full flex justify-center mt-6">
                <Image
                  height={100}
                  width={100}
                  src={feature.topImage}
                  alt={feature.title}
                  className="max-h-[100px] object-contain"
                />
              </div>

              {/* Title + Description */}
              <div className="flex flex-col items-center gap-3 text-center px-2">
                <h3 className="font-urbanist font-medium text-[24px] sm:text-[28px] lg:text-[32px] leading-[100%] capitalize text-white">
                  {formatTitle(feature.title)}
                </h3>
                <p className="font-dmSans font-normal text-[14px] leading-[100%] text-center text-white opacity-50 max-w-[280px]">
                  {feature.description}
                </p>
              </div>

              {/* Main Image */}
              <div className="flex-1 flex items-center justify-center">
                <Image
                  height={250}
                  width={250}
                  src={feature.mainImage}
                  alt={`${feature.title} visual`}
                  className="max-h-[220px] sm:max-h-[240px] lg:max-h-[250px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
