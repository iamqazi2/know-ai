import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navigation = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-foreground font-bold text-xl">Nubien</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.1, color: "hsl(263 70% 60%)" }}
                className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="default"
              size="sm"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-medium px-6 py-2.5 rounded-full"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;