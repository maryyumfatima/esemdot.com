
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 px-4 md:px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/873ac4b1-8db8-450d-82a5-4936b0825246.png" 
                alt="ESEMDOT Logo" 
                className="h-6 w-6 md:h-8 md:w-8 mr-3"
              />
              <div className="text-xl md:text-2xl font-bold">
                ESEM<span className="text-[#ff3900]">DOT</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm md:text-base mb-4 lg:mb-0">
              Creative-tech service studio combining strategy, design, and automation.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Services</h4>
            <ul className="space-y-1 md:space-y-2 text-gray-400 text-sm md:text-base">
              <li><a href="#services" className="hover:text-[#ff3900] transition-colors duration-300">Visual Identity & Branding</a></li>
              <li><a href="#services" className="hover:text-[#ff3900] transition-colors duration-300">No-Code Website</a></li>
              <li><a href="#services" className="hover:text-[#ff3900] transition-colors duration-300">Social Media Marketing</a></li>
              <li><a href="#services" className="hover:text-[#ff3900] transition-colors duration-300">Email Marketing</a></li>
              <li><a href="#services" className="hover:text-[#ff3900] transition-colors duration-300">Meta Ads Management</a></li>
              <li><a href="#services" className="hover:text-[#ff3900] transition-colors duration-300">Lead Generation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Company</h4>
            <ul className="space-y-1 md:space-y-2 text-gray-400 text-sm md:text-base">
              <li><a href="#about" className="hover:text-[#ff3900] transition-colors duration-300">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-[#ff3900] transition-colors duration-300">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-[#ff3900] transition-colors duration-300">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#ff3900] transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Connect</h4>
            <div className="space-y-1 md:space-y-2 text-gray-400 text-sm md:text-base">
              <p>esemdot@gmail.com</p>
              <div className="flex space-x-4 mt-3 md:mt-4">
                <a 
                  href="https://www.linkedin.com/in/maryyumfatima/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ff3900] transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/esemdot/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ff3900] transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
          <p>&copy; 2024 ESEMDOT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
