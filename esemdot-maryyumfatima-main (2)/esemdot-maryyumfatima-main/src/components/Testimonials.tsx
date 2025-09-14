
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Startup",
      text: "ESEMDOT transformed our entire customer journey. Our email open rates went from 18% to 67% and our automation saves us 20 hours per week.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      company: "Creative Collective",
      text: "The brand identity they created for us perfectly captures our vision. Plus, their automation systems have streamlined our entire client onboarding process.",
      rating: 5
    },
    {
      name: "Emily Watson",
      company: "Growth Agency Pro",
      text: "Working with ESEMDOT was a game-changer. They don't just design — they think strategically about every touchpoint in our business.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16 transform transition-all duration-500 hover:scale-105">
          Client <span className="text-[#ff3900] animate-pulse">Testimonials</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:rotate-1 opacity-0 animate-fade-in group" style={{animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards'}}>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#ff3900] text-xl group-hover:animate-pulse transition-all duration-300" style={{animationDelay: `${i * 0.1}s`}}>★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed group-hover:text-gray-900 transition-colors duration-300">"{testimonial.text}"</p>
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <div className="font-bold text-black group-hover:text-[#ff3900] transition-colors duration-300">{testimonial.name}</div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
