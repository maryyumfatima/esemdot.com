
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center group">
          <img 
            src="/lovable-uploads/873ac4b1-8db8-450d-82a5-4936b0825246.png" 
            alt="ESEMDOT Logo" 
            className="h-8 w-8 mr-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
          />
          <div className="text-2xl font-bold text-black transition-all duration-300 group-hover:scale-105">
            ESEM<span className="text-[#ff3900]">DOT</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-[#ff3900] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#ff3900] before:transition-all before:duration-300 hover:before:w-full">Services</a>
          <a href="#about" className="text-gray-700 hover:text-[#ff3900] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#ff3900] before:transition-all before:duration-300 hover:before:w-full">About</a>
          <a href="#portfolio" className="text-gray-700 hover:text-[#ff3900] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#ff3900] before:transition-all before:duration-300 hover:before:w-full">Portfolio</a>
        </nav>
        
        <Button className="bg-[#ff3900] hover:bg-[#e63300] text-white rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/50 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5">
          <a href="#contact" className="text-white no-underline">Get Started</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
