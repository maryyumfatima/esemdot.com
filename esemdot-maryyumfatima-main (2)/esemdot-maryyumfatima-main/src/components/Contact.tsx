
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    location: "",
    projectType: "",
    duration: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ 
      name: "", 
      email: "", 
      company: "", 
      phone: "", 
      location: "", 
      projectType: "", 
      duration: "", 
      message: "" 
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:esemdot@gmail.com?subject=Project Inquiry&body=Hi ESEMDOT,%0D%0A%0D%0AI'd like to discuss a project with you.%0D%0A%0D%0ABest regards,`;
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 transform transition-all duration-500 hover:scale-105">
            Let's <span className="text-[#ff3900] animate-pulse">Talk</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in transition-all duration-300 hover:text-white" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            Ready to transform your brand and streamline your business? 
            Let's discuss how we can help you grow smarter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="opacity-0 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <h3 className="text-2xl font-bold mb-6 text-[#ff3900]">Want to Send a Message?</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:bg-white/20 focus:scale-105 focus:border-[#ff3900]"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:bg-white/20 focus:scale-105 focus:border-[#ff3900]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company" className="text-white mb-2 block">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:bg-white/20 focus:scale-105 focus:border-[#ff3900]"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:bg-white/20 focus:scale-105 focus:border-[#ff3900]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="location" className="text-white mb-2 block">Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="Your Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:bg-white/20 focus:scale-105 focus:border-[#ff3900]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-white mb-2 block">Project Type *</Label>
                  <Select onValueChange={(value) => handleSelectChange('projectType', value)} required>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="branding">Branding</SelectItem>
                      <SelectItem value="marketing">Email Marketing</SelectItem>
                      <SelectItem value="automation">No-Code Automation</SelectItem>
                      <SelectItem value="lead-generation">Lead Generation</SelectItem>
                      <SelectItem value="full-package">Full Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-white mb-2 block">Duration *</Label>
                  <Select onValueChange={(value) => handleSelectChange('duration', value)} required>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Project timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-week">Within 1 Week</SelectItem>
                      <SelectItem value="2-weeks">Within 2 Weeks</SelectItem>
                      <SelectItem value="1-month">Within 1 Month</SelectItem>
                      <SelectItem value="2-months">Within 2 Months</SelectItem>
                      <SelectItem value="flexible">Flexible Timeline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-white mb-2 block">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-32 transition-all duration-300 focus:bg-white/20 focus:scale-105 focus:border-[#ff3900]"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#ff3900] to-[#ffb380] hover:from-[#e63300] hover:to-[#ff9d66] text-white py-6 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/50"
              >
                Send Message
              </Button>
            </form>

            {/* Direct Email Button */}
            <div className="text-center">
              <p className="text-gray-300 mb-4">Or send us an email directly:</p>
              <Button 
                onClick={handleEmailClick}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-[#ff3900] transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 h-4 w-4" />
                esemdot@gmail.com
              </Button>
            </div>
          </div>
          
          {/* Contact Info and Strategy Call */}
          <div className="space-y-8 opacity-0 animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
            {/* Strategy Call */}
            <div className="transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-[#ff3900]/20 to-[#ffb380]/20 p-6 rounded-2xl border border-[#ff3900]/30">
              <h4 className="text-2xl font-bold mb-4 text-[#ff3900]">Book a Free 15-Minute Strategy Call</h4>
              <p className="text-gray-300 mb-6">
                Get personalized insights and a custom roadmap for your business growth in just 15 minutes.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-[#ff3900] to-[#ffb380] hover:from-[#e63300] hover:to-[#ff9d66] text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/50"
                onClick={() => window.open('https://calendly.com/esemdot/15-min-strategy-call', '_blank')}
              >
                Book Your Strategy Call
              </Button>
            </div>

            {/* What to Expect */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <h4 className="text-xl font-bold mb-4 text-[#ff3900] animate-pulse">What to Expect</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start hover:text-white transition-colors duration-300 transform hover:translate-x-2">
                  <span className="text-[#ff3900] mr-3 animate-pulse">•</span>
                  15-minute strategy session to understand your goals
                </li>
                <li className="flex items-start hover:text-white transition-colors duration-300 transform hover:translate-x-2">
                  <span className="text-[#ff3900] mr-3 animate-pulse">•</span>
                  Custom roadmap for your brand and automation needs
                </li>
                <li className="flex items-start hover:text-white transition-colors duration-300 transform hover:translate-x-2">
                  <span className="text-[#ff3900] mr-3 animate-pulse">•</span>
                  Clear next steps and investment options
                </li>
                <li className="flex items-start hover:text-white transition-colors duration-300 transform hover:translate-x-2">
                  <span className="text-[#ff3900] mr-3 animate-pulse">•</span>
                  No commitment required - just valuable insights
                </li>
              </ul>
            </div>
            
            {/* Contact Details */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <h4 className="text-xl font-bold mb-4 text-[#ff3900] animate-pulse">Contact Details</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center hover:text-white transition-colors duration-300 transform hover:translate-x-2">
                  <Mail className="mr-3 h-5 w-5 text-[#ff3900]" />
                  <span>esemdot@gmail.com</span>
                </div>
                <div className="flex items-center hover:text-white transition-colors duration-300 transform hover:translate-x-2">
                  <Phone className="mr-3 h-5 w-5 text-[#ff3900]" />
                  <span>Response time: Within 24 hours</span>
                </div>
                <div className="flex items-center hover:text-white transition-colors duration-300 transform hover:translate-x-2">
                  <MapPin className="mr-3 h-5 w-5 text-[#ff3900]" />
                  <span>Based in San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
