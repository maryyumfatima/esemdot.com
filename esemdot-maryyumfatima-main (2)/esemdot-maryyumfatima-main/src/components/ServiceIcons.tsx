import { useState } from "react";

const ServiceIcons = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const services = [
    {
      id: "branding",
      name: "Branding",
      description: "Visual Identity Design"
    },
    {
      id: "social",
      name: "Social Media",
      description: "Strategic Growth"
    },
    {
      id: "automation",
      name: "AI Automation",
      description: "Smart Workflows"
    },
    {
      id: "email",
      name: "Email Marketing",
      description: "Targeted Campaigns"
    },
    {
      id: "meta",
      name: "Meta Ads",
      description: "Facebook Advertising"
    }
  ];

  // Hand-drawn SVG icons
  const BrandingIcon = () => (
    <svg viewBox="0 0 64 64" className="w-8 h-8">
      <path
        d="M12 20c0-2 2-4 4-4h32c2 0 4 2 4 4v24c0 2-2 4-4 4H16c-2 0-4-2-4-4V20z"
        fill="none"
        stroke="#ff3900"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="32" r="6" fill="none" stroke="#ff3900" strokeWidth="2.5"/>
      <path d="M38 26h8M38 32h8M38 38h8" stroke="#ff3900" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );

  const SocialIcon = () => (
    <svg viewBox="0 0 64 64" className="w-8 h-8">
      <circle cx="20" cy="20" r="6" fill="none" stroke="#ff3900" strokeWidth="2.5"/>
      <circle cx="44" cy="20" r="6" fill="none" stroke="#ff3900" strokeWidth="2.5"/>
      <circle cx="32" cy="44" r="6" fill="none" stroke="#ff3900" strokeWidth="2.5"/>
      <path d="M25 23l14 0M38 26l-6 12M26 26l6 12" stroke="#ff3900" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );

  const AutomationIcon = () => (
    <svg viewBox="0 0 64 64" className="w-8 h-8">
      <circle cx="32" cy="32" r="12" fill="none" stroke="#ff3900" strokeWidth="2.5"/>
      <path d="M32 8v8M32 48v8M8 32h8M48 32h8" stroke="#ff3900" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M18 18l6 6M40 40l6 6M46 18l-6 6M24 40l-6 6" stroke="#ff3900" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="32" cy="32" r="4" fill="#ff3900"/>
    </svg>
  );

  const EmailIcon = () => (
    <svg viewBox="0 0 64 64" className="w-8 h-8">
      <path
        d="M8 16h48c2 0 4 2 4 4v24c0 2-2 4-4 4H8c-2 0-4-2-4-4V20c0-2 2-4 4-4z"
        fill="none"
        stroke="#ff3900"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M60 20L32 36 4 20" stroke="#ff3900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const MetaIcon = () => (
    <svg viewBox="0 0 64 64" className="w-8 h-8">
      <path
        d="M32 8C18 8 8 18 8 32s10 24 24 24 24-10 24-24S46 8 32 8z"
        fill="none"
        stroke="#ff3900"
        strokeWidth="2.5"
      />
      <path
        d="M20 24c4-4 8-2 12 2s8 6 12 2"
        fill="none"
        stroke="#ff3900"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 40c4 4 8 2 12-2s8-6 12-2"
        fill="none"
        stroke="#ff3900"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );

  const getIcon = (id: string) => {
    switch (id) {
      case "branding": return <BrandingIcon />;
      case "social": return <SocialIcon />;
      case "automation": return <AutomationIcon />;
      case "email": return <EmailIcon />;
      case "meta": return <MetaIcon />;
      default: return <BrandingIcon />;
    }
  };

  return (
    <div className="py-16">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {services.map((service) => {
          const isHovered = hoveredIcon === service.id;
          
          return (
            <div
              key={service.id}
              className="relative flex flex-col items-center group"
              onMouseEnter={() => setHoveredIcon(service.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {/* Icon Container */}
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-200 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-orange-300 overflow-hidden">
                {/* Icon */}
                <div className={`transition-all duration-300 ${isHovered ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
                  {getIcon(service.id)}
                </div>
                
                {/* Text Overlay - appears on hover */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-2 transition-all duration-300 ${
                  isHovered 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-75'
                }`}>
                  <h4 className="text-xs font-bold text-slate-800 leading-tight mb-1">
                    {service.name}
                  </h4>
                  <p className="text-[10px] text-slate-600 leading-tight">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceIcons;