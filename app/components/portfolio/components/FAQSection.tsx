import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What do I need to get started?",
      answer:
        "To get started, we'll need to understand your project requirements, target audience, and business goals. We'll schedule a consultation to discuss your vision and provide you with a detailed proposal.",
    },
    {
      question: "What kind of customization is available?",
      answer:
        "We offer complete customization for all our projects. From design aesthetics to functionality, we tailor every aspect to match your brand identity and specific requirements.",
    },
    {
      question: "How easy is it to edit for beginners?",
      answer:
        "Our solutions are designed with user-friendliness in mind. We provide intuitive content management systems and comprehensive documentation to make editing simple for users of all technical levels.",
    },
    {
      question: "Let me know more about lovable's guarantee?",
      answer:
        "We stand behind our work with a satisfaction guarantee. If you're not completely satisfied with the deliverables, we'll work with you to make it right or provide a full refund within the specified timeframe.",
    },
    {
      question: "Do I need to know how to code?",
      answer:
        "Absolutely not! Our solutions are built to be code-free for end users. We handle all the technical aspects while providing you with easy-to-use interfaces for content management and updates.",
    },
    {
      question: "What will I get after purchasing the template?",
      answer:
        "You'll receive the complete source code, comprehensive documentation, setup instructions, and ongoing support. We also provide deployment assistance and training sessions if needed.",
    },
  ];

  return (
    <section
      className=" px-6 lg:px-8 bg-background relative overflow-hidden py-[80px]"
      id="faq"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Sticky Header */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="sticky ltop-0 self-start flex flex-col justify-start"
          >
            <div
              className="
                 h-[36px] sm:h-[40px] 
                 flex items-center justify-between 
                 px-[8px] md:px-[6px] 
                 rounded-[32px] border border-[#FFFFFF1A] 
                 bg-gradient-to-r from-white/10 to-transparent 
                 shadow-[inset_0px_1px_10px_0px_rgba(0,0,0,0.25)] 
                 opacity-100 gap-[4px] md:gap-[4px] mb-8 w-fit"
            >
              <Image
                src="/contacts.svg"
                alt="Our Desk"
                height={32}
                width={32}
                className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] 
                   rounded-[20px] border border-white/10 
                   p-[1px] sm:p-[2px] object-contain "
              />

              <span
                className="font-dmSans px-4 whitespace-nowrap 
                   font-normal text-[14px] sm:text-[16px] 
                   leading-[100%] text-center text-white"
              >
                Faq
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Frequently Asked Questions
              <br />
              <span className="text-white">Asked Questions</span>
            </h2>
            <motion.p
              className="text-lg lg:text-xl text-white opacity-70 leading-relaxed font-medium"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Have questions? Our FAQ section has you covered with quick answers
              to the most common inquiries.
            </motion.p>
          </motion.div>

          {/* Right Column - Custom FAQ Accordion */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  whileHover={{ x: 10 }}
                >
                  <div
                    className={`backdrop-blur-sm bg-black/50 border rounded-2xl px-8 
                     transition-all duration-500 group cursor-pointer
                     hover:border-white/70 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
                     ${
                       openIndex === index
                         ? "border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.6)]"
                         : "border-white/20"
                     }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    {/* Question Header */}
                    <div className="flex items-center justify-between text-left text-white py-8 group-hover:scale-[1.02] transition-transform duration-300">
                      <motion.span
                        className="text-lg md:text-xl font-semibold flex-1 mr-4"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.question}
                      </motion.span>

                      {/* Icon Container */}
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        {openIndex === index ? (
                          <Minus className="w-6 h-6 text-purple-400" />
                        ) : (
                          <Plus className="w-6 h-6 text-white/70" />
                        )}
                      </motion.div>
                    </div>

                    {/* Answer Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: openIndex === index ? "auto" : 0,
                        opacity: openIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{
                          opacity: openIndex === index ? 1 : 0,
                          y: openIndex === index ? 0 : -10,
                        }}
                        transition={{ duration: 0.3 }}
                        className="pb-8 text-base md:text-lg leading-relaxed font-medium text-white/70"
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
