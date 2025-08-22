import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "./badge";

interface ProjectCardProps {
  year: string;
  title: string;
  features: string[];
  categories: string[];
  images: string[];
  className?: string;
  style?: React.CSSProperties;
  index?: number;
}

const ProjectCard = ({
  year,
  title,
  features,
  categories,
  images,
  className = "",
  style,
  index = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`group cursor-pointer ${className}`}
      style={style}
    >
      <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-2 shadow-card hover:shadow-glow transition-all duration-700 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-h-full md:max-h-[340px] relative z-10">
          {/* Left Side - Project Info */}
          <div className="py-6 px-4 sm:px-6 border border-border/50 rounded-3xl h-fit">
            {/* Year and Title */}
            <div className="flex flex-row gap-3 items-center">
              <motion.div
                className="text-primary font-bold text-white tracking-wide opacity-50 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
              >
                {year}
              </motion.div>
              <motion.h3
                className="text-lg sm:text-xl font-bold text-foreground leading-tight"
                whileHover={{ scale: 1.02 }}
              >
                {title}
              </motion.h3>
            </div>

            {/* Features List */}
            <div className="space-y-4 pt-6 sm:pt-12">
              {features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  className="flex items-center space-x-4 group/feature"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: featureIndex * 0.1 + 0.3 }}
                >
                  <motion.div
                    className="flex items-center space-x-4 group/feature"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 group-hover/feature:text-primary-glow transition-colors duration-300" />
                    </motion.div>
                    <span className="text-muted-foreground font-medium text-sm sm:text-md group-hover/feature:text-foreground transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Categories */}
            <motion.div
              className="flex flex-wrap gap-3 pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {categories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-muted/80 text-muted-foreground border-border/50 px-3 py-1.5 text-xs sm:text-sm font-medium hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300"
                  >
                    {category}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Images */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-2">
              {images.map((image, imageIndex) => (
                <motion.div
                  key={imageIndex}
                  className="aspect-square w-full max-h-[200px] sm:max-h-[240px] md:max-h-[327px] bg-muted/50 rounded-2xl overflow-hidden border border-border/30 group-hover:border-primary/30 transition-all duration-500"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: imageIndex * 0.1 + 0.4,
                    duration: 0.6,
                  }}
                >
                  <img
                    src={image}
                    alt={`${title} - Image ${imageIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
