
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-orange-100"></div>
      
      {/* Motion gradient overlay */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 via-transparent to-red-400/20 animate-pulse"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-bl from-transparent via-orange-300/20 to-yellow-400/30"
          style={{
            animation: 'heroGradientFlow 12s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-red-300/25 via-orange-200/15 to-transparent"
          style={{
            animation: 'heroGradientFlow 15s ease-in-out infinite reverse'
          }}
        ></div>
      </div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/873ac4b1-8db8-450d-82a5-4936b0825246.png" 
              alt="ESEMDOT Logo" 
              className="h-16 w-16 transition-all duration-300 hover:scale-110 hover:rotate-6"
              onError={(e) => {
                // Fallback to a simple logo if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-16 h-16 bg-gradient-to-br from-[#ff3900] to-[#ffb380] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6">
              <span className="text-white text-lg font-bold">ED</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight">
            Crafted{" "}
            <span className="text-[#ff3900] inline-block transform hover:scale-105 transition-transform duration-300">
              Visuals.
            </span>
            <br />
            Calculated{" "}
            <span className="text-[#ff3900] inline-block transform hover:scale-105 transition-transform duration-300">
              Reach.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            We combine crafted visuals and calculated reach with smart systems to grow your brand.
          </p>
        </div>
        
        <div className="opacity-0 animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
          <Button 
            className="bg-gradient-to-r from-[#ff3900] to-[#ffb380] hover:from-[#e63300] hover:to-[#ff9d66] text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto"
            size="lg"
          >
            <a 
              href="https://calendly.com/esemdot/15-min-strategy-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white no-underline"
            >
              Book Your Free 15-Min Strategy Call
            </a>
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
