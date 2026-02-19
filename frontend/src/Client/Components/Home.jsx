import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Wifi, Radio, Code, Calendar, Shield, Zap, Award, Users, TrendingUp, Network, Wrench, ShoppingCart } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const slides = [
    {
      title: "Telecom Network Integration",
      desc: "We are enrolled in BTS, Microwave, SMALL cell, IBS, VMUX, DXE installation and commissioning.",
      icon: Radio,
      gradient: "from-amber-400 via-orange-500 to-rose-600",
      accentColor: "amber"
    },
    {
      title: "WI-FI and WI-Max Network Integration",
      desc: "We are having expertise in corporate Wi-Fi and Wi-Max network Installation and commissioning.",
      icon: Wifi,
      gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
      accentColor: "violet"
    },
    {
      title: "IP Based CCTV Security System",
      desc: "We are enrolled in High-tech IP based CCTV security system",
      icon: Shield,
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      accentColor: "emerald"
    },
    {
      title: "Software Development Services",
      desc: "Our recent development projects includes providing Distributed Storage, Queuing, Messaging, Caching solutions, Web & Mobile App development, Service Virtualization – Including ERP, Auth, Payment processors, SAP, Database, external service providers, Elastic search & Solr based indexing",
      icon: Code,
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
      accentColor: "blue"
    },
    {
      title: "Event Programs",
      desc: "We provide a complete range of wireless networking solution, from design and planning, through to installation and commissioning your network. We also offer on-going maintenance, support and health checks to keep your network in good working order.",
      icon: Calendar,
      gradient: "from-pink-400 via-rose-500 to-red-600",
      accentColor: "pink"
    }
  ];

  const services = [
    {
      icon: Wifi,
      title: "Network Setup",
      desc: "Aarna Digital provide Wired or wireless Network setup",
      color: "from-amber-500 to-orange-600",
      bgGlow: "bg-amber-500/20"
    },
    {
      icon: Code,
      title: "Software Development",
      desc: "Aarna Digital provide software development projects Web & Mobile App development ERT and Service Virtualization",
      color: "from-violet-500 to-purple-600",
      bgGlow: "bg-violet-500/20"
    },
    {
      icon: Zap,
      title: "Device Sale Purchase & Repairings",
      desc: "Network device and RF device the most popular Wireless Broadband Products sale purchase & repair of wireless network equipment.",
      color: "from-emerald-500 to-teal-600",
      bgGlow: "bg-emerald-500/20"
    },
    {
      icon: Calendar,
      title: "Event Program",
      desc: "Aarna Digital provides temporary WiFi and onsite technical support for event venues Indoor & Outdoor, hotels and concerts",
      color: "from-pink-500 to-rose-600",
      bgGlow: "bg-pink-500/20"
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Projects Delivered", icon: TrendingUp },
    { number: "50+", label: "Expert Engineers", icon: Users },
    { number: "24/7", label: "Support Available", icon: Shield }
  ];

  const partners = [
    { name: "Karvy Corporate", initial: "K", logo: "https://www.karvy.com/Content/Images/logo.png" },
    { name: "BSNL", initial: "B", logo: "https://www.bsnl.in/opweb/assets/img/bsnl_logo.png" },
    { name: "Huawei", initial: "H", logo: "https://www.huawei.com/favicon.ico" },
    { name: "Reliance Jio", initial: "J", logo: "https://www.jio.com/assets/img/logo-jio.png" },
    { name: "Airtel", initial: "A", logo: "https://www.airtel.in/images/logo-new.png" },
    { name: "Vodafone Idea", initial: "V", logo: "https://www.vodafoneidea.in/web/wcm/connect/vodafone-idea/home/vi-logo" },
    { name: "Innotion Technologies", initial: "I", logo: "https://innotiontech.com/assets/logo.png" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl"
          style={{
            right: `${mousePosition.x / 30}px`,
            bottom: `${mousePosition.y / 30}px`,
            transition: 'all 0.5s ease-out'
          }}
        />
      </div>

      {/* Hero Slider */}
      <div className="relative h-screen overflow-hidden pt-24">
        {slides.map((slide, index) => {
          const IconComponent = slide.icon;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-10`}></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
              
              <div className="relative h-full flex items-center">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                      <div className="inline-block">
                        <div className={`px-6 py-3 bg-gradient-to-r ${slide.gradient} bg-opacity-20 backdrop-blur-xl rounded-full border border-white/20 text-sm font-bold text-white animate-fade-in-up`}>
                          <span className="flex items-center space-x-2">
                            <IconComponent size={18} />
                            <span>Premium Service</span>
                          </span>
                        </div>
                      </div>
                      
                      <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                        {slide.title.split(' ').map((word, idx) => (
                          <span key={idx}>
                            {idx === 0 ? (
                              <span className={`bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>
                                {word}{' '}
                              </span>
                            ) : (
                              <span>{word} </span>
                            )}
                          </span>
                        ))}
                      </h2>
                      
                      <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                        {slide.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                        <button className={`px-8 py-4 bg-gradient-to-r ${slide.gradient} rounded-xl font-bold hover:shadow-2xl hover:shadow-${slide.accentColor}-500/50 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2`}>
                          <span>Explore Services</span>
                          <ArrowRight size={20} />
                        </button>
                        <button className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all duration-300">
                          Contact Us
                        </button>
                      </div>
                    </div>

                    <div className="hidden lg:flex justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} rounded-full blur-3xl opacity-30 animate-pulse`}></div>
                        <div className={`relative w-80 h-80 bg-gradient-to-br ${slide.gradient} rounded-full flex items-center justify-center shadow-2xl`}>
                          <IconComponent size={160} className="text-white/90" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Slider Controls */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 z-10">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="p-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentSlide === index 
                    ? `w-16 bg-gradient-to-r ${slides[currentSlide].gradient}` 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="p-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-rose-500 rounded-2xl mb-4 group-hover:rotate-6 transition-transform duration-300">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <div className="text-5xl font-black bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 font-semibold">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <section className="relative py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900 opacity-50"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-rose-500/20 backdrop-blur-xl rounded-full border border-white/10 text-sm font-bold text-amber-400">
                Our Expertise
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              What <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">We Do?</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Delivering cutting-edge technology solutions across telecom, networking, and software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={`absolute inset-0 ${service.bgGlow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative h-full p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <IconComponent size={28} className="text-white" strokeWidth={2.5} />
                    </div>
                    
                    <h3 className="text-2xl font-black mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-rose-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    
                    <button className="flex items-center space-x-2 text-sm font-bold text-slate-400 group-hover:text-amber-400 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-6 py-3 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-full border border-white/10 text-sm font-bold text-violet-400">
                  About Us
                </span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-black leading-tight">
                Company <br/>
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Introduction
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white font-black">Aarna Digital India Pvt Ltd</strong> is a Delhi-based company that deals in Telecom Services. Our RF engineers have expertised and skilled.
                </p>
                <p>
                  We are also offered in FIBER technology, Radio Frequency Engineering services for all wireless Networks (GSM, CDMA & WiMax, Fiber).
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
                  View Company Profile
                </button>
                <button className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all duration-300">
                  Our Projects
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { 
                  title: "Network Setup", 
                  desc: "There are two types of Network setup Wired or wireless Wired networks are fast and reliable, but mean running cables throughout your premises.",
                  tag: "Wireless • Wired",
                  gradient: "from-amber-500 to-orange-600",
                  icon: Wifi
                },
                { 
                  title: "Wireless and RF Device", 
                  desc: "Aarna Digital India Pvt.Ltd. specializes in the repair of wireless network equipment. Some of the most popular Wireless Broadband Products repair services.",
                  tag: "Ubiquiti • Mikrotik",
                  gradient: "from-violet-500 to-purple-600",
                  icon: Radio
                },
                { 
                  title: "Software Development", 
                  desc: "Our recent development projects includes providing Distributed Storage, Queueing, Messaging, Caching solutions, Web & Mobile App development",
                  tag: "Web • Mobile",
                  gradient: "from-emerald-500 to-teal-600",
                  icon: Code
                },
                { 
                  title: "Event Programs", 
                  desc: "Aarna Digital India Pvt. Ltd. provides temporary WiFi and onsite technical support for event venues, hotels and concerts.",
                  tag: "2G/3G/4G • WiFi",
                  gradient: "from-pink-500 to-rose-600",
                  icon: Calendar
                }
              ].map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                    
                    <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500 cursor-pointer">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}>
                            <ItemIcon size={24} className="text-white" />
                          </div>
                          <h4 className="text-xl font-black text-white">
                            {item.title}
                          </h4>
                        </div>
                        <ArrowRight className="text-slate-600 group-hover:text-white transform group-hover:translate-x-1 transition-all" size={20} />
                      </div>
                      
                      <p className="text-slate-400 text-sm leading-relaxed mb-4 ml-16">
                        {item.desc}
                      </p>
                      
                      <div className="ml-16">
                        <span className={`inline-block px-4 py-2 bg-gradient-to-r ${item.gradient} bg-opacity-10 rounded-lg text-xs font-bold tracking-wider border border-white/10`}>
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 backdrop-blur-xl rounded-full border border-white/10 text-sm font-bold text-emerald-400">
                Our Strengths
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              Why <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Choose Us?</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Network Setup', color: 'from-amber-500 to-orange-600', Icon: Network },
              { name: 'Softwares', color: 'from-violet-500 to-purple-600', Icon: Code },
              { name: 'Event Program', color: 'from-emerald-500 to-teal-600', Icon: Calendar },
              { name: '2G/3G/4G', color: 'from-blue-500 to-indigo-600', Icon: Radio },
              { name: 'Device Repairing', color: 'from-pink-500 to-rose-600', Icon: Wrench },
              { name: 'Sales Purchase', color: 'from-cyan-500 to-blue-600', Icon: ShoppingCart }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 text-center cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    <item.Icon size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-white/10 text-sm font-bold text-blue-400">
                Trusted Partnerships
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Partners</span>
            </h2>
            <p className="text-xl text-slate-400">Working with industry leaders to deliver excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 flex flex-col items-center justify-center text-center cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg p-2 border border-slate-200">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23e2e8f0" width="100" height="100"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" font-weight="bold" fill="%23475569"%3E' + partner.initial + '%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                  <p className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors leading-tight">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;