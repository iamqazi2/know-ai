import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 bg-[url('/footer-bg.png')] bg-[length:100%_100%] bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo & tagline */}
          <div className="max-w-68">
            <div className="flex items-center space-x-2 mb-4">
              <div className=" flex gap-2 items-center justify-center">
                <Image
                  src={"/footer-logo.svg"}
                  alt="logo"
                  width={160}
                  height={50}
                />
              </div>
            </div>
            <p className="leading-normal font-medium text-base  capitalize text-gray-400 w-full">
              Experts In Identifying The Right AI Opportunities, Designing
              Custom Automation Workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Navigation */}
            <div className="flex flex-col items-start">
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
            </div>

            {/* Social */}
            <div className="flex flex-col  items-start">
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
            </div>
          </div>
          {/* Subscribe */}
          <div className="">
            <h4 className="font-urbanist font-medium text-lg leading-[130%] text-white mb-5 pl-2">
              Subscribe Us
            </h4>

            <form className="flex w-full max-w-md p-2 rounded-full border border-white/50 font-urbanist font-medium   ">
              {/* Input */}
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-1 w-full px-4 py-4 bg-transparent text-gray-300 placeholder-gray-400 focus:outline-none text-[15px] leading-[130%]"
              />

              {/* Button */}
              <button className="bg-gradient-to-b from-[#521ED6] to-[#7E56E2]  text-white px-6 py-2 text-[20px] font-[400] rounded-full border-2 border-[#8D6AE6] transition-all duration-300 ease-in-out hover:scale-105 transform shadow-lg hover:shadow-purple-500/25">
                Subscribe Us
              </button>
            </form>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">© 2025 Krow AI</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
              Terms and Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
