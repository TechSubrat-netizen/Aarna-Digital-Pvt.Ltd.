import React, { useState } from 'react';
import { Radio, Wifi, Shield, Code, Calendar, MapPin, Clock, CheckCircle, ArrowRight, Filter } from 'lucide-react';

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Telecom', 'Networking', 'Security', 'Software', 'Events'];

  const projects = [
    {
      title: "BTS Installation - North India",
      category: "Telecom",
      client: "Airtel",
      location: "Punjab, Haryana",
      duration: "6 Months",
      status: "Completed",
      desc: "Installed and commissioned 50+ BTS sites including microwave links and fiber integration",
      icon: Radio,
      gradient: "from-amber-500 to-orange-600",
      image: "🗼",
      stats: { sites: "50+", type: "BTS", network: "4G" }
    },
    {
      title: "Corporate Wi-Fi Deployment",
      category: "Networking",
      client: "Karvy Corporate",
      location: "Bangalore",
      duration: "3 Months",
      status: "Completed",
      desc: "Enterprise-grade Wi-Fi network covering 100,000 sq ft office space with seamless roaming",
      icon: Wifi,
      gradient: "from-violet-500 to-purple-600",
      image: "📡",
      stats: { coverage: "100k sqft", aps: "150+", users: "2000+" }
    },
    {
      title: "IP CCTV Security System",
      category: "Security",
      client: "BSNL Headquarters",
      location: "New Delhi",
      duration: "4 Months",
      status: "Completed",
      desc: "Comprehensive IP-based surveillance system with 200+ cameras and centralized monitoring",
      icon: Shield,
      gradient: "from-emerald-500 to-teal-600",
      image: "🎥",
      stats: { cameras: "200+", storage: "500TB", areas: "50+" }
    },
    {
      title: "ERP System Development",
      category: "Software",
      client: "Innotion Technologies",
      location: "Mumbai",
      duration: "8 Months",
      status: "Completed",
      desc: "Custom ERP solution with inventory management, CRM, and analytics dashboard",
      icon: Code,
      gradient: "from-blue-500 to-indigo-600",
      image: "💻",
      stats: { modules: "12", users: "500+", integrations: "15+" }
    },
    {
      title: "Stadium Event Wi-Fi",
      category: "Events",
      client: "IPL Stadium",
      location: "Jaipur",
      duration: "2 Months",
      status: "Completed",
      desc: "High-density Wi-Fi network supporting 50,000+ concurrent users during live events",
      icon: Calendar,
      gradient: "from-pink-500 to-rose-600",
      image: "🏟️",
      stats: { capacity: "50k users", speed: "1Gbps", uptime: "99.9%" }
    },
    {
      title: "Small Cell Network",
      category: "Telecom",
      client: "Reliance Jio",
      location: "Mumbai Metro",
      duration: "5 Months",
      status: "Completed",
      desc: "Deployed small cell network across metro stations for enhanced 4G/5G coverage",
      icon: Radio,
      gradient: "from-orange-500 to-red-600",
      image: "📶",
      stats: { stations: "25", cells: "100+", network: "5G Ready" }
    },
    {
      title: "Enterprise Network Upgrade",
      category: "Networking",
      client: "Vodafone Idea",
      location: "Gurgaon",
      duration: "4 Months",
      status: "Ongoing",
      desc: "Complete network infrastructure upgrade with fiber backbone and managed switches",
      icon: Wifi,
      gradient: "from-cyan-500 to-blue-600",
      image: "🌐",
      stats: { switches: "50+", fiber: "10km", ports: "2000+" }
    },
    {
      title: "Data Center Security",
      category: "Security",
      client: "Huawei India",
      location: "Bangalore",
      duration: "6 Months",
      status: "Ongoing",
      desc: "Multi-layered security system with biometric access and 24/7 monitoring",
      icon: Shield,
      gradient: "from-red-500 to-pink-600",
      image: "🔐",
      stats: { zones: "10", sensors: "300+", monitoring: "24/7" }
    },
    {
      title: "Mobile App Development",
      category: "Software",
      client: "Startup Incubator",
      location: "Hyderabad",
      duration: "5 Months",
      status: "Completed",
      desc: "Cross-platform mobile application with real-time sync and cloud integration",
      icon: Code,
      gradient: "from-purple-500 to-pink-600",
      image: "📱",
      stats: { platforms: "iOS/Android", downloads: "50k+", rating: "4.8★" }
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-full border border-white/10 text-sm font-bold text-blue-400">
                Our Portfolio
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              Delivering <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Excellence</span> Across Industries
            </h1>
            
            <p className="text-2xl text-slate-300 leading-relaxed mb-12">
              Explore our successful projects spanning telecommunications, networking, security systems, and software development
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-8 py-4 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-xl border border-white/10">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">500+</div>
                <div className="text-slate-400 text-sm font-semibold">Total Projects</div>
              </div>
              <div className="px-8 py-4 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-xl border border-white/10">
                <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">250+</div>
                <div className="text-slate-400 text-sm font-semibold">Happy Clients</div>
              </div>
              <div className="px-8 py-4 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-xl border border-white/10">
                <div className="text-3xl font-black bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-1">98%</div>
                <div className="text-slate-400 text-sm font-semibold">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center space-x-2 text-slate-400">
              <Filter size={20} />
              <span className="font-bold">Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50'
                    : 'bg-white/5 backdrop-blur-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-32 bg-slate-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500`}></div>
                  
                  <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
                    {/* Project Header */}
                    <div className={`p-8 bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-6xl">{project.image}</div>
                        <div className={`px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-xs font-bold`}>
                          {project.status}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-black text-white mb-2">
                        {project.title}
                      </h3>
                      
                      <div className="flex items-center space-x-2 text-sm text-slate-400 mb-1">
                        <span className="font-semibold text-white">{project.client}</span>
                      </div>
                    </div>

                    {/* Project Body */}
                    <div className="p-8">
                      <p className="text-slate-400 leading-relaxed mb-6">
                        {project.desc}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {Object.entries(project.stats).map(([key, value], idx) => (
                          <div key={idx} className="text-center">
                            <div className={`text-lg font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-1`}>
                              {value}
                            </div>
                            <div className="text-xs text-slate-500 font-semibold uppercase">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Details */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3 text-sm text-slate-400">
                          <MapPin size={16} className="text-slate-500" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-slate-400">
                          <Clock size={16} className="text-slate-500" />
                          <span>{project.duration}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <button className={`w-full py-3 bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-white/10 rounded-xl font-bold text-sm hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:border-white/30`}>
                        <span>View Details</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Want to See <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Detailed Case Studies?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Download our comprehensive project portfolio with detailed case studies, technical specifications, and client testimonials
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
                Download Portfolio
              </button>
              <button className="px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProjects;