
import { Zap, Layers, Layout } from "lucide-react";

const WhyUs = () => {
  const points = [
    {
      icon: Layers,
      title: "Creative Precision",
      description: "Every pixel, every word, every interaction is crafted with purpose and intention."
    },
    {
      icon: Layout,
      title: "Business Strategy First",
      description: "Beautiful design means nothing without results. We lead with strategy, then create."
    },
    {
      icon: Zap,
      title: "Tech-Driven Growth",
      description: "Smart automation and systems that scale your business while you focus on what matters."
    }
  ];

  return (
    <section className="py-20 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 transform transition-all duration-500 hover:scale-105">
          Why Work With <span className="text-[#ff3900] animate-pulse">Us</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="text-center group opacity-0 animate-fade-in" style={{animationDelay: `${index * 0.3}s`, animationFillMode: 'forwards'}}>
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#ff3900] to-[#ffb380] flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/50">
                  <IconComponent className="w-10 h-10 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#ff3900] transition-all duration-300 transform group-hover:scale-105">{point.title}</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-all duration-300 transform group-hover:scale-105">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
