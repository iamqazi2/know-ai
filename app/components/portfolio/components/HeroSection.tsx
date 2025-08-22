import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main gradient glow */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl"
      />
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Badge 
            variant="secondary" 
            className="bg-primary/20 text-primary border-primary/40 px-6 py-3 text-sm font-semibold rounded-full backdrop-blur-sm hover:bg-primary/30 transition-all duration-300"
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              2025
            </motion.span>
            <span className="ml-2">Browse Our Work</span>
          </Badge>
        </motion.div>

        {/* Main Heading */}
        <div className="mb-8">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-tight tracking-tight"
          >
            Explore Our Most
          </motion.h1>
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight tracking-tight bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent"
          >
            Remarkable Projects.
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
        >
          We craft customized solutions that empower both startups and established brands, driving success and delivering real impact.
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-500 px-10 py-6 text-lg font-semibold rounded-full group relative overflow-hidden"
          >
            <motion.span
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              Build Your Product
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;