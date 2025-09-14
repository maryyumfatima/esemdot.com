
import { Rocket, TrendingUp, Wrench, Palette, Globe, Server, Flame, Mail, Bot, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  
  const services = [
    {
      icon: Palette,
      title: "Visual Identity & Branding",
      description: "Complete brand identity that makes your business memorable and professional",
      services: ["Custom Logo Design", "Brand Color Palette & Typography", "Business Card & Stationery Design", "Brand Guidelines Document", "Social Media Brand Kit"],
      buttonText: "Build Your Brand",
      color: "from-[#ff3900] to-[#ffb380]",
      tier: "branding"
    },
    {
      icon: Globe,
      title: "No-Code Website",
      description: "Beautiful, responsive websites built without traditional coding",
      services: ["Custom Website Design", "Mobile Responsive Layout", "SEO Optimization", "Contact Forms & Integrations", "Content Management System", "Domain Setup & SSL Certificate"],
      buttonText: "Get Your Website",
      color: "from-[#ffb380] to-[#ffd8b1]",
      tier: "nocode",
      isPopular: true
    },
    {
      icon: TrendingUp,
      title: "Social Media Marketing",
      description: "Strategic social media presence to grow your audience and engagement",
      services: ["Content Strategy & Planning", "10-20 Custom Posts per Month", "Story Templates & Highlights", "Hashtag Research & Strategy", "Engagement Analytics & Reports", "Brand Consistency Across Platforms"],
      buttonText: "Grow Your Presence",
      color: "from-[#ffd8b1] to-[#ffc299]",
      tier: "social"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Comprehensive email marketing to nurture leads and drive conversions",
      services: ["Mailchimp/ConvertKit Setup", "Email Template Design", "Automated Welcome Series", "Newsletter Campaigns", "Email List Management", "A/B Testing & Analytics"],
      buttonText: "Start Email Marketing",
      color: "from-[#ffc299] to-[#ffaa80]",
      tier: "email"
    },
    {
      icon: Rocket,
      title: "Meta Ads Management",
      description: "Professional Facebook & Instagram advertising to reach your target audience",
      services: ["Campaign Strategy & Setup", "Audience Research & Targeting", "Creative Ad Design", "Budget Optimization", "Performance Monitoring", "Monthly Analytics Reports"],
      buttonText: "Launch Your Ads",
      color: "from-[#ffaa80] to-[#ff9166]",
      tier: "meta-ads"
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Strategic lead generation systems to convert visitors into paying customers",
      services: ["Landing Page Optimization", "Lead Magnet Creation", "Email Capture Forms", "CRM Integration", "Lead Nurturing Campaigns", "Conversion Analytics & Reports"],
      buttonText: "Generate More Leads",
      color: "from-[#ffaa80] to-[#ff9166]",
      tier: "lead-generation"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16 transform transition-all duration-500 hover:scale-105">
          What We <span className="text-[#ff3900]">Offer</span>
        </h2>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div 
                key={index}
                className="group h-full flex flex-col p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 opacity-0 animate-fade-in relative"
                style={{animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards'}}
              >
                {/* Popular Badge */}
                {service.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Flame className="w-3 h-3" />
                    Popular
                  </div>
                )}

                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#ff3900] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>


                {/* Features Section - Grows to fill space */}
                <div className="flex-grow mb-8">
                  <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide text-center">
                    What's Included:
                  </h4>
                  <ul className="text-gray-600 space-y-3">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#ff3900] mr-3 mt-1 text-sm font-bold">✓</span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button Section - Always at bottom */}
                <div className="mt-auto">
                  <Button 
                    className="w-full h-12 bg-gradient-to-r from-[#ff3900] to-[#ffb380] hover:from-[#e63300] hover:to-[#ff9d66] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <a href="#contact" className="text-white no-underline font-semibold">
                      {service.buttonText}
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
