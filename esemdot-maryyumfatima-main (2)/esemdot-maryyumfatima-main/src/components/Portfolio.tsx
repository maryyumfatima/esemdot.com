
import { useState } from "react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Email Series",
      category: "Email Marketing",
      result: "+85% Revenue Increase",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      details: {
        client: "Fashion Retailer",
        duration: "3 months",
        description: "Complete email marketing overhaul with automated sequences, abandoned cart recovery, and personalized product recommendations.",
        results: ["85% increase in email revenue", "65% improvement in open rates", "45% boost in click-through rates"],
        technologies: ["Klaviyo", "Email Design", "Advanced Segmentation"]
      }
    },
    {
      id: 2,
      title: "SaaS Brand Identity",
      category: "Branding & Design",
      result: "Complete Brand Transformation",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
      details: {
        client: "Tech Startup",
        duration: "6 weeks",
        description: "Full brand identity design including logo, color palette, typography, and brand guidelines for a B2B SaaS platform.",
        results: ["75% brand recognition increase", "90% improvement in conversion rates", "Successfully raised $2M Series A"],
        technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy"]
      }
    },
    {
      id: 3,
      title: "Lead Gen Funnel Design",
      category: "Lead Generation",
      result: "95% More Qualified Leads",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      details: {
        client: "B2B Consulting Firm",
        duration: "2 months",
        description: "Strategic funnel design with conversion-optimized landing pages, lead magnets, and email sequences.",
        results: ["95% increase in qualified leads", "85% conversion rate improvement", "60% improvement in lead quality"],
        technologies: ["Landing Page Design", "Email Sequences", "CRM Integration"]
      }
    },
    {
      id: 4,
      title: "Restaurant Chain Rebrand",
      category: "Full Package Design",
      result: "85% Social Media Growth",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      details: {
        client: "Regional Restaurant Chain",
        duration: "4 months",
        description: "Complete rebrand with new visual identity, social media strategy, email marketing, and customer loyalty program.",
        results: ["85% social media follower growth", "75% increase in online orders", "95% customer retention rate"],
        technologies: ["Full Brand Suite", "Social Media Design", "Email Marketing", "Print Design"]
      }
    },
    {
      id: 5,
      title: "Professional Services Website",
      category: "Web Design",
      result: "90% More Consultations",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      details: {
        client: "Legal Firm",
        duration: "8 weeks",
        description: "Complete website redesign with focus on user experience, conversion optimization, and professional branding.",
        results: ["90% increase in consultation requests", "70% improvement in time on site", "60% reduction in bounce rate"],
        technologies: ["UI/UX Design", "Conversion Optimization", "Responsive Design"]
      }
    },
    {
      id: 6,
      title: "Real Estate Marketing Suite",
      category: "Lead Generation",
      result: "80% More Listings",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      details: {
        client: "Boutique Real Estate Agency",
        duration: "5 months",
        description: "Comprehensive marketing design including property brochures, social media templates, and lead generation campaigns.",
        results: ["80% increase in property listings", "95% growth in qualified leads", "Became #1 agency in local market"],
        technologies: ["Marketing Design", "Social Media Templates", "Lead Generation Funnels"]
      }
    },
    {
      id: 7,
      title: "Homeschool Hippo Newsletter",
      category: "Email Marketing & Branding",
      result: "Educational Content Platform",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      details: {
        client: "Educational Content Creator",
        duration: "4 months",
        description: "Complete branding and email marketing setup for educational newsletter platform focused on homeschooling resources and tips.",
        results: ["Established consistent brand identity", "Weekly newsletter automation", "Growing subscriber engagement"],
        technologies: ["Newsletter Design", "Brand Identity", "Content Strategy", "Email Automation"]
      }
    },
    {
      id: 8,
      title: "Khayi Formation Instagram",
      category: "Social Media Marketing",
      result: "Brand Presence & Engagement",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      details: {
        client: "Formation & Training Business",
        duration: "6 months",
        description: "Social media strategy and content creation for professional formation and training services, focusing on engagement and brand awareness.",
        results: ["Enhanced brand visibility", "Consistent content scheduling", "Professional visual identity"],
        technologies: ["Instagram Marketing", "Content Creation", "Visual Branding", "Social Media Strategy"]
      }
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16 transform transition-all duration-500 hover:scale-105">
            Portfolio <span className="text-[#ff3900]">Highlights</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer opacity-0 animate-fade-in" 
                style={{animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards'}}
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-125 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-white text-center">
                      <div className="text-lg font-bold">{project.result}</div>
                      <div className="text-sm mt-2">Click for details</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white group-hover:bg-gradient-to-r group-hover:from-orange-50 group-hover:to-white transition-all duration-300">
                  <div className="text-[#ff3900] font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#ff3900] transition-colors duration-300">{project.title}</h3>
                  <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">{project.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <div className="text-[#ff3900] font-semibold mb-2">{selectedProject.category}</div>
              <h2 className="text-3xl font-bold text-black mb-4">{selectedProject.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Client:</strong> {selectedProject.details.client}</p>
                    <p><strong>Duration:</strong> {selectedProject.details.duration}</p>
                  </div>
                  <p className="mt-4 text-gray-700">{selectedProject.details.description}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Results Achieved</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#ff3900] mr-2">•</span>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-xl font-bold mb-4 mt-6">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-orange-100 text-[#ff3900] px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
