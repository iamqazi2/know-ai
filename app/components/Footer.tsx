"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 bg-[url('/footer-bg.png')] bg-[length:100%_100%] bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo & tagline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
             
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex gap-2 items-center justify-center">
                <img
                  src="/footer-logo.png"
                  alt="Krow AI Logo"
                  className="w-8 h-8 object-contain"
                />
                <img
                  src="/footer-logo1.png"
                  alt="Krow AI Logo"
                  className="w-24 h-10 object-contain"
                />
              </div>
            </div>
            <p className="font-urbanist font-medium text-base leading-[130%] capitalize text-gray-400 w-full">
              Experts In Identifying The Right AI Opportunities, Designing
              Custom Automation Workflows.
            </p>
          </motion.div>

          {/* Navigation + Social */}
          <div className="grid grid-cols-2 gap-8">
            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <h4 className="font-urbanist font-medium text-lg leading-[130%] text-white mb-4">
                Navigation
              </h4>

              <ul className="space-y-2 font-urbanist font-normal text-[15px] leading-[130%]">
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400">
                    Our Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400">
                    About Us
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <h4 className="font-urbanist font-medium text-lg leading-[130%] text-white mb-4">
                Social
              </h4>

              <ul className="space-y-2 font-urbanist font-normal text-[15px] leading-[130%]">
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400">
                    Twitter(X)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400">
                    Youtube
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400">
                    Facebook
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-urbanist font-medium text-lg leading-[130%] text-white mb-5 pl-2">
              Subscribe Us
            </h4>

            <form className="flex w-full max-w-md rounded-full border border-white/50 font-urbanist font-medium">
              {/* Input */}
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-1 w-full px-4 py-4 bg-transparent text-gray-300 placeholder-gray-400 focus:outline-none text-[15px] leading-[130%]"
              />

              {/* Button */}
              <button
                type="submit"
                className="px-2 h-8 my-auto mr-2 border border-white/50 text-white rounded-full whitespace-nowrap bg-gradient-to-b from-[#511ED5] to-[#8D6AE6] hover:opacity-90 transition"
              >
                Subscribe Us
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-gray-400 text-sm">© 2025 Krow AI</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
              Terms and Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
