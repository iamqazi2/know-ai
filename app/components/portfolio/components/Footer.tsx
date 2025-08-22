import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Twitter, Instagram, Youtube, Framer } from "lucide-react";

const Footer = () => {
  const templatePages = ["Home", "About", "Contact", "Portfolio"];
  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
    { name: "Framer", icon: Framer, href: "#" }
  ];

  return (
    <footer className="bg-background border-t border-border/50 py-16 px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-foreground font-bold text-2xl">Nubien</span>
            </motion.div>
            <div className="text-base text-muted-foreground leading-relaxed font-medium">
              <p>Made exclusively with ♥ and code.</p>
              <br />
              <p>View All Studio.</p>
            </div>
          </motion.div>

          {/* Template Pages */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="font-bold text-foreground mb-6 text-lg">Template Pages</h3>
            <ul className="space-y-4">
              {templatePages.map((page, index) => (
                <motion.li 
                  key={page}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={`#${page.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium"
                  >
                    {page}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-bold text-foreground mb-6 text-lg">Social</h3>
            <ul className="space-y-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.li 
                    key={social.name}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    whileHover={{ x: 5, scale: 1.05 }}
                  >
                    <a 
                      href={social.href}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium flex items-center space-x-3 group"
                    >
                      <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>{social.name}</span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Subscribe Form */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-bold text-foreground mb-6 text-lg">Subscribe Form</h3>
            <div className="space-y-4">
              <motion.div
                whileFocus={{ scale: 1.02 }}
              >
                <Input
                  type="email"
                  placeholder="Enter Your Email..."
                  className="bg-muted/80 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary/50 transition-all duration-300 py-3 px-4 rounded-xl"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 py-3 rounded-xl font-semibold"
                  size="sm"
                >
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-border/50 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0"
        >
          <p className="text-muted-foreground font-medium">
            © 2024 Nubien Studio.
          </p>
          <div className="flex items-center space-x-8 text-sm">
            <motion.a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Terms & Conditions
            </motion.a>
            <motion.a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
          </div>
          <div className="text-muted-foreground font-medium">
            Made in Framer
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;