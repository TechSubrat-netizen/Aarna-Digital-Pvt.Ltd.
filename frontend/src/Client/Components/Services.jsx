import React, { useState } from 'react';
import { Radio, Wifi, Shield, Code, Calendar, Wrench, ArrowRight, CheckCircle, Zap, Globe, Server, Smartphone } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Radio,
      title: "Telecom Network Integration",
      tagline: "Building the backbone of connectivity",
      gradient: "from-amber-500 to-orange-600",
      description: "Comprehensive telecommunications infrastructure solutions including BTS, microwave links, small cells, and fiber optic networks. Our expert engineers deliver end-to-end network integration services.",
      features: [
        "BTS Installation & Commissioning",
        "Microwave Link Setup",
        "Small Cell Deployment",
        "IBS (In-Building Solutions)",
        "VMUX Configuration",
        "DXE Installation",
        "Network Optimization",
        "24/7 Technical Support"
      ],
      technologies: ["GSM", "CDMA", "LTE", "5G", "Fiber Optic"],
      stats: { projects: "200+", sites: "1000+", uptime: "99.9%" }
    },
    {
      icon: Wifi,
      title: "WI-FI & WI-Max Solutions",
      tagline: "Seamless wireless connectivity everywhere",
      gradient: "from-violet-500 to-purple-600",
      description: "Enterprise-grade wireless networking solutions for corporate offices, campuses, and public spaces. We design, deploy, and manage high-performance Wi-Fi networks with seamless roaming capabilities.",
      features: [
        "Site Survey & Planning",
        "Network Design & Architecture",
        "Access Point Installation",
        "Controller Configuration",
        "Guest Network Setup",
        "Captive Portal Solutions",
        "Network Monitoring",
        "Performance Optimization"
      ],
      technologies: ["Wi-Fi 6", "Wi-Fi 6E", "WiMAX", "Mesh Networks"],
      stats: { coverage: "500k+ sqft", users: "10k+", aps: "2000+" }
    },
    {
      icon: Shield,
      title: "IP CCTV Security Systems",
      tagline: "Advanced surveillance for complete peace of mind",
      gradient: "from-emerald-500 to-teal-600",
      description: "State-of-the-art IP-based CCTV surveillance systems with high-definition cameras, intelligent analytics, and centralized monitoring. Protect your premises with our comprehensive security solutions.",
      features: [
        "HD/4K Camera Installation",
        "NVR/DVR Setup",
        "Video Analytics",
        "Motion Detection",
        "Remote Monitoring",
        "Cloud Storage Integration",
        "Access Control Systems",
        "Alarm Integration"
      ],
      technologies: ["IP Cameras", "AI Analytics", "Cloud Storage", "Face Recognition"],
      stats: { cameras: "5000+", locations: "300+", storage: "2PB+" }
    },
    {
      icon: Code,
      title: "Software Development",
      tagline: "Custom solutions for your unique challenges",
      gradient: "from-blue-500 to-indigo-600",
      description: "Full-stack software development services including web applications, mobile apps, enterprise systems, and cloud solutions. We build scalable, secure, and user-friendly software tailored to your business needs.",
      features: [
        "Web Application Development",
        "Mobile App Development",
        "ERP Solutions",
        "CRM Systems",
        "Database Design",
        "API Development",
        "Cloud Integration",
        "DevOps Services"
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "Azure", "Docker"],
      stats: { apps: "100+", users: "50k+", clients: "75+" }
    },
    {
      icon: Calendar,
      title: "Event Wi-Fi Solutions",
      tagline: "Connectivity that scales with your events",
      gradient: "from-pink-500 to-rose-600",
      description: "Temporary high-capacity Wi-Fi networks for events, conferences, and exhibitions. Our solutions handle thousands of concurrent users with reliable, high-speed connectivity and on-site technical support.",
      features: [
        "High-Density Network Design",
        "Temporary Infrastructure",
        "Load Balancing",
        "Bandwidth Management",
        "On-Site Support Team",
        "Real-Time Monitoring",
        "Custom Branding",
        "Analytics & Reporting"
      ],
      technologies: ["Enterprise APs", "Load Balancers", "Fiber Backhaul", "Satellite Links"],
      stats: { events: "150+", attendees: "500k+", capacity: "50k users" }
    },
    {
      icon: Wrench,
      title: "Device Sales & Repair",
      tagline: "Expert care for your network equipment",
      gradient: "from-cyan-500 to-blue-600",
      description: "Specialized sales, repair, and maintenance services for wireless network equipment. We work with leading brands including Ubiquiti, MikroTik, and Cisco to keep your network running smoothly.",
      features: [
        "Equipment Sales",
        "Hardware Repair",
        "Firmware Updates",
        "Configuration Services",
        "Performance Testing",
        "Replacement Parts",
        "Warranty Support",
        "Technical Consultation"
      ],
      technologies: ["Ubiquiti", "MikroTik", "Cisco", "Ruckus", "Aruba"],
      stats: { devices: "10k+", brands: "20+", warranty: "1 Year" }
    }
  ];

  const whyChoose = [
    {
      icon: Zap,
      title: "Fast Deployment",
      desc: "Quick turnaround times without compromising quality",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Globe,
      title: "Pan-India Presence",
      desc: "Service coverage across major cities in India",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: Server,
      title: "24/7 Support",
      desc: "Round-the-clock technical assistance",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Smartphone,
      title: "Latest Technology",
      desc: "Cutting-edge solutions and equipment",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-fuchsia-500/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-full border border-white/10 text-sm font-bold text-violet-400">
                Our Services
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              Comprehensive <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Technology</span> Solutions
            </h1>
            
            <p className="text-2xl text-slate-300 leading-relaxed">
              From telecommunications to software development, we deliver end-to-end solutions that power your business growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="relative py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`group p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    activeService === index
                      ? `bg-gradient-to-br ${service.gradient} shadow-2xl`
                      : 'bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20'
                  }`}
                >
                  <IconComponent 
                    size={32} 
                    className={`mx-auto mb-3 ${
                      activeService === index ? 'text-white' : 'text-slate-400 group-hover:text-white'
                    }`}
                  />
                  <div className={`text-sm font-bold text-center ${
                    activeService === index ? 'text-white' : 'text-slate-400 group-hover:text-white'
                  }`}>
                    {service.title.split(' ')[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="relative py-32 bg-slate-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  activeService === index ? 'block' : 'hidden'
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  {/* Left Column */}
                  <div className="space-y-8">
                    <div>
                      <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6`}>
                        <IconComponent size={40} className="text-white" />
                      </div>
                      
                      <h2 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
                        {service.title}
                      </h2>
                      
                      <p className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-6`}>
                        {service.tagline}
                      </p>
                      
                      <p className="text-lg text-slate-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(service.stats).map(([key, value], idx) => (
                        <div key={idx} className="p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10 text-center">
                          <div className={`text-3xl font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-2`}>
                            {value}
                          </div>
                          <div className="text-xs text-slate-400 font-semibold uppercase">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-black mb-4 text-white">Technologies We Use</h3>
                      <div className="flex flex-wrap gap-3">
                        {service.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-4 py-2 bg-gradient-to-r ${service.gradient} bg-opacity-10 rounded-lg text-sm font-bold border border-white/10`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className={`px-10 py-5 bg-gradient-to-r ${service.gradient} rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2`}>
                      <span>Request a Quote</span>
                      <ArrowRight size={20} />
                    </button>
                  </div>

                  {/* Right Column - Features */}
                  <div className="space-y-6">
                    <div className="p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl border border-white/10">
                      <h3 className="text-2xl font-black mb-6 text-white">Key Features</h3>
                      <div className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3 group">
                            <div className={`flex-shrink-0 w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mt-0.5 group-hover:rotate-12 transition-transform duration-300`}>
                              <CheckCircle size={16} className="text-white" />
                            </div>
                            <span className="text-slate-300 group-hover:text-white transition-colors">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Card */}
                    <div className={`p-8 bg-gradient-to-br ${service.gradient} bg-opacity-10 backdrop-blur-xl rounded-3xl border border-white/10`}>
                      <h3 className="text-xl font-black mb-3 text-white">Need This Service?</h3>
                      <p className="text-slate-300 mb-6">
                        Get in touch with our team for a personalized consultation and quote
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <button className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all duration-300">
                          Schedule Call
                        </button>
                        <button className="flex-1 px-6 py-3 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-100 transition-all duration-300">
                          Contact Sales
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-emerald-500/20 backdrop-blur-xl rounded-full border border-white/10 text-sm font-bold text-amber-400">
                Why Aarna Digital
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              Why Choose <span className="bg-gradient-to-r from-amber-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Us?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-3 text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-fuchsia-500/20"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Ready to Get <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Started?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a customized solution for your business
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
              Request Consultation
            </button>
            <button className="px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;