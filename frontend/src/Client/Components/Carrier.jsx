import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Users, TrendingUp, Heart, Award, ChevronRight, Send, Upload } from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Engineering', 'Software', 'Sales', 'Support'];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      desc: "Industry-leading compensation packages with performance bonuses",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      desc: "Clear career progression paths and skill development programs",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      desc: "Flexible work hours and remote work options",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Award,
      title: "Recognition",
      desc: "Employee recognition programs and awards",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Users,
      title: "Great Team",
      desc: "Work with talented professionals in a collaborative environment",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Briefcase,
      title: "Learning Budget",
      desc: "Annual budget for courses, certifications, and conferences",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const openings = [
    {
      title: "Senior RF Engineer",
      department: "Engineering",
      location: "New Delhi",
      type: "Full-Time",
      experience: "5-8 years",
      salary: "₹12-18 LPA",
      description: "Lead RF network planning, optimization, and deployment projects for major telecom operators",
      requirements: ["B.Tech/M.Tech in Electronics/Telecom", "5+ years RF engineering experience", "Expertise in 4G/5G networks", "Knowledge of planning tools"],
      gradient: "from-amber-500 to-orange-600"
    },
    {
      title: "Full Stack Developer",
      department: "Software",
      location: "Bangalore",
      type: "Full-Time",
      experience: "3-5 years",
      salary: "₹10-15 LPA",
      description: "Develop and maintain web applications using modern frameworks and cloud technologies",
      requirements: ["B.Tech/MCA in Computer Science", "React, Node.js expertise", "AWS/Azure experience", "Strong problem-solving skills"],
      gradient: "from-violet-500 to-purple-600"
    },
    {
      title: "Network Engineer",
      department: "Engineering",
      location: "Mumbai",
      type: "Full-Time",
      experience: "2-4 years",
      salary: "₹6-10 LPA",
      description: "Install, configure, and maintain enterprise network infrastructure and Wi-Fi solutions",
      requirements: ["B.Tech in IT/CS", "CCNA certification", "Wi-Fi deployment experience", "Strong troubleshooting skills"],
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Technical Sales Manager",
      department: "Sales",
      location: "Delhi NCR",
      type: "Full-Time",
      experience: "4-7 years",
      salary: "₹8-14 LPA + Incentives",
      description: "Drive business growth by identifying opportunities and managing key client relationships",
      requirements: ["MBA/B.Tech preferred", "Telecom sales experience", "Strong negotiation skills", "Existing client network"],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "DevOps Engineer",
      department: "Software",
      location: "Remote",
      type: "Full-Time",
      experience: "3-6 years",
      salary: "₹10-16 LPA",
      description: "Build and maintain CI/CD pipelines, manage cloud infrastructure and ensure system reliability",
      requirements: ["B.Tech in CS/IT", "Docker, Kubernetes expertise", "AWS/Azure/GCP experience", "Infrastructure as Code"],
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "Customer Support Engineer",
      department: "Support",
      location: "New Delhi",
      type: "Full-Time",
      experience: "1-3 years",
      salary: "₹4-7 LPA",
      description: "Provide technical support to clients and resolve network and system issues",
      requirements: ["B.Tech/Diploma", "Basic networking knowledge", "Excellent communication", "Problem-solving mindset"],
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const filteredJobs = selectedDepartment === 'All' 
    ? openings 
    : openings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 backdrop-blur-xl rounded-full border border-white/10 text-sm font-bold text-purple-400">
                Join Our Team
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              Build Your <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Career</span> With Us
            </h1>
            
            <p className="text-2xl text-slate-300 leading-relaxed mb-12">
              Join a dynamic team of innovators and help shape the future of telecommunications and technology in India
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="px-8 py-4 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-xl border border-white/10">
                <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">90+</div>
                <div className="text-slate-400 text-sm font-semibold">Team Members</div>
              </div>
              <div className="px-8 py-4 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-xl border border-white/10">
                <div className="text-3xl font-black bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-1">{openings.length}</div>
                <div className="text-slate-400 text-sm font-semibold">Open Positions</div>
              </div>
              <div className="px-8 py-4 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-xl border border-white/10">
                <div className="text-3xl font-black bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent mb-1">4.8★</div>
                <div className="text-slate-400 text-sm font-semibold">Employee Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-rose-500/20 backdrop-blur-xl rounded-full border border-white/10 text-sm font-bold text-amber-400">
                Why Aarna Digital
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              Employee <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">Benefits</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We invest in our people because we believe great employees build great companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500`}></div>
                  
                  <div className="relative h-full p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-3">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-black mb-4 text-white">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-16 bg-slate-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="text-slate-400 font-bold">Filter by Department:</span>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  selectedDepartment === dept
                    ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white shadow-2xl shadow-pink-500/50'
                    : 'bg-white/5 backdrop-blur-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-8">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${job.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  <div className="grid lg:grid-cols-3 gap-8 p-8">
                    {/* Left - Job Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-3xl font-black text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                            {job.title}
                          </h3>
                          <span className={`px-4 py-2 bg-gradient-to-r ${job.gradient} rounded-xl text-sm font-bold flex-shrink-0`}>
                            {job.type}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-6 text-sm text-slate-400 mb-6">
                          <div className="flex items-center space-x-2">
                            <Briefcase size={16} className="text-slate-500" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin size={16} className="text-slate-500" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock size={16} className="text-slate-500" />
                            <span>{job.experience}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign size={16} className="text-slate-500" />
                            <span>{job.salary}</span>
                          </div>
                        </div>

                        <p className="text-slate-300 leading-relaxed mb-6">
                          {job.description}
                        </p>

                        <div>
                          <h4 className="text-lg font-black text-white mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-slate-400">
                                <ChevronRight size={20} className="text-slate-600 flex-shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right - Apply CTA */}
                    <div className="flex flex-col justify-between">
                      <div className={`p-6 bg-gradient-to-br ${job.gradient} bg-opacity-10 rounded-2xl border border-white/10 mb-6`}>
                        <h4 className="text-xl font-black mb-4 text-white">Ready to Apply?</h4>
                        <p className="text-slate-300 text-sm mb-6">
                          Submit your resume and we'll get back to you within 48 hours
                        </p>
                        <div className="space-y-3">
                          <button className={`w-full px-6 py-4 bg-gradient-to-r ${job.gradient} rounded-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2`}>
                            <span>Apply Now</span>
                            <Send size={18} />
                          </button>
                          <button className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                            <span>Save Job</span>
                          </button>
                        </div>
                      </div>

                      <div className="text-center text-sm text-slate-500">
                        Posted 3 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form CTA */}
      <section className="relative py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-rose-500/20"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Don't See Your <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Dream Role?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <Upload size={20} />
              <span>Submit Resume</span>
            </button>
            <button className="px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Email Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;