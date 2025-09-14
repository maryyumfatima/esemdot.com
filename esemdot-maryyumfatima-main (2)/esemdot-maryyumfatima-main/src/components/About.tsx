import ServiceIcons from "./ServiceIcons";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 transform transition-all duration-500 hover:scale-105">
          About <span className="text-[#ff3900] animate-pulse">ESEMDOT</span>
        </h2>
        <div className="prose prose-xl mx-auto text-gray-700 leading-relaxed">
          <p className="text-xl md:text-2xl mb-8 opacity-0 animate-fade-in transition-all duration-500 hover:text-gray-900" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            At ESEMDOT, we believe in the power of merging creativity with intelligent systems. 
            We're not just another creative agency — we're your strategic partner in building 
            brands that don't just look good, but work smart.
          </p>
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in transition-all duration-500 hover:text-gray-800" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            Our approach combines stunning visual identity with cutting-edge automation, 
            creating workflows that scale your business while maintaining that personal touch 
            your customers love. From email campaigns that convert to automation systems 
            that run like clockwork, we make technology work for your brand's unique story.
          </p>
        </div>
        
        {/* Service Icons */}
        <ServiceIcons />
      </div>
    </section>
  );
};

export default About;
