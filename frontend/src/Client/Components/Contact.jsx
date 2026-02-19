import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, User, Building, ChevronRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91-9717878530", "+91-XXXXXXXXXX"],
      gradient: "from-amber-500 to-orange-600",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@aarnadigitalindia.com", "support@aarnadigitalindia.com"],
      gradient: "from-violet-500 to-purple-600",
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["U-157 First floor Sakarpur", "Near Laxminagar Metro Station", "New Delhi-110092"],
      gradient: "from-emerald-500 to-teal-600",
      action: "Get Directions"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      gradient: "from-blue-500 to-indigo-600",
      action: "View Calendar"
    }
  ];

  const offices = [
    {
      city: "New Delhi",
      type: "Headquarters",
      address: "U-157 First floor Sakarpur, Near Laxminagar Metro Station",
      phone: "+91-9717878530",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      city: "Mumbai",
      type: "Regional Office",
      address: "Coming Soon",
      phone: "+91-XXXXXXXXXX",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      city: "Bangalore",
      type: "Regional Office",
      address: "Coming Soon",
      phone: "+91-XXXXXXXXXX",
      gradient: "from-emerald-500 to-teal-600"
    }
  ];

  const services = [
    "Telecom Network Integration",
    "WI-FI & WI-Max Solutions",
    "IP CCTV Security Systems",
    "Software Development",
    "Event Wi-Fi Solutions",
    "Device Sales & Repair"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 backdrop-blur-xl rounded-full border border-white/10 text-sm font-bold text-emerald-400">
                Get In Touch
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              Let's Build Something <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Amazing</span>
            </h1>
            
            <p className="text-2xl text-slate-300 leading-relaxed">
              Have a project in mind? We'd love to hear from you. Get in touch and let's discuss how we can help transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500`}></div>
                  
                  <div className="relative h-full p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-3">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl mb-6 transform group-hover:rotate-12 transition-transform duration-300`}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                    
                    <h3 className="text-xl font-black mb-4 text-white">
                      {info.title}
                    </h3>
                    
                    <div className="space-y-2 mb-6">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-400 text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>

                    <button className={`w-full py-3 bg-gradient-to-r ${info.gradient} bg-opacity-10 border border-white/10 rounded-xl font-bold text-sm hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center space-x-2`}>
                      <span>{info.action}</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="relative py-32 bg-slate-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-black mb-4">
                  Send Us a <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Message</span>
                </h2>
                <p className="text-xl text-slate-400">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                    <Phone size={20} />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number *"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                  />
                </div>

                {/* Company */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                    <Building size={20} />
                  </div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                  />
                </div>

                {/* Service */}
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-slate-900">Select Service *</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service} className="bg-slate-900">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="relative">
                  <div className="absolute left-4 top-4 text-slate-500">
                    <MessageSquare size={20} />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project *"
                    required
                    rows="6"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Map & Offices */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="relative h-80 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={64} className="mx-auto mb-4 text-emerald-400" />
                    <p className="text-slate-400 font-semibold">Interactive Map</p>
                    <p className="text-slate-500 text-sm">Click to view location</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Offices */}
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-white mb-6">Our Offices</h3>
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${office.gradient} rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                        <MapPin size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-black text-white">{office.city}</h4>
                          <span className={`px-3 py-1 bg-gradient-to-r ${office.gradient} bg-opacity-20 rounded-lg text-xs font-bold border border-white/10`}>
                            {office.type}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm mb-2">{office.address}</p>
                        <p className="text-slate-500 text-sm">{office.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-white/10 text-sm font-bold text-blue-400">
                Common Questions
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { q: "What is your typical project timeline?", a: "Project timelines vary based on scope and complexity. Typically, projects range from 2-8 months." },
              { q: "Do you provide maintenance services?", a: "Yes, we offer comprehensive maintenance and support packages for all our solutions." },
              { q: "Which cities do you serve?", a: "We have operations across major cities in India including Delhi, Mumbai, Bangalore, and more." },
              { q: "Can I get a custom quote?", a: "Absolutely! Contact us with your requirements and we'll provide a detailed custom quote." }
            ].map((faq, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
              >
                <h4 className="text-lg font-black text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {faq.q}
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;