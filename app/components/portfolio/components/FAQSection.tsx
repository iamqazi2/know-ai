 
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import { motion } from "framer-motion"; 

const FAQSection = () => {
  const faqs = [
    {
      question: "What do I need to get started?",
      answer: "To get started, we'll need to understand your project requirements, target audience, and business goals. We'll schedule a consultation to discuss your vision and provide you with a detailed proposal."
    },
    {
      question: "What kind of customization is available?",
      answer: "We offer complete customization for all our projects. From design aesthetics to functionality, we tailor every aspect to match your brand identity and specific requirements."
    },
    {
      question: "How easy is it to edit for beginners?",
      answer: "Our solutions are designed with user-friendliness in mind. We provide intuitive content management systems and comprehensive documentation to make editing simple for users of all technical levels."
    },
    {
      question: "Let me know more about lovable's guarantee?",
      answer: "We stand behind our work with a satisfaction guarantee. If you're not completely satisfied with the deliverables, we'll work with you to make it right or provide a full refund within the specified timeframe."
    },
    {
      question: "Do I need to know how to code?",
      answer: "Absolutely not! Our solutions are built to be code-free for end users. We handle all the technical aspects while providing you with easy-to-use interfaces for content management and updates."
    },
    {
      question: "What will I get after purchasing the template?",
      answer: "You'll receive the complete source code, comprehensive documentation, setup instructions, and ongoing support. We also provide deployment assistance and training sessions if needed."
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-background relative overflow-hidden" id="faq">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-glow rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div 
            className="mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-primary text-base font-bold tracking-wide">FAQ</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Frequently
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Asked Questions
            </span>
          </h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                whileHover={{ x: 10 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl px-8 data-[state=open]:shadow-glow data-[state=open]:border-primary/50 transition-all duration-500 group"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors duration-300 text-lg md:text-xl font-semibold py-8 group-hover:scale-[1.02]">
                    <motion.span
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.question}
                    </motion.span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-8 text-base md:text-lg leading-relaxed font-medium">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;