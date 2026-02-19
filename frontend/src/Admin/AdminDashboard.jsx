import React, { useState } from 'react';
import { 
  Plus, Edit, Trash2, Bell, User, Briefcase, MapPin, DollarSign, 
  Clock, Search, Filter, X, Save, Eye, Download, Mail, Phone,
  CheckCircle, XCircle, AlertCircle, BarChart3, Users, FileText,
  Calendar, TrendingUp, Settings, LogOut, Menu
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [showJobModal, setShowJobModal] = useState(false);
  const [showAppModal, setShowAppModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [selectedApp, setSelectedApp] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sample data
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior RF Engineer",
      department: "Engineering",
      location: "New Delhi",
      type: "Full-Time",
      experience: "5-8 years",
      salary: "₹12-18 LPA",
      status: "Active",
      applicants: 15,
      postedDate: "2024-01-15",
      description: "Lead RF network planning and optimization projects",
      requirements: ["B.Tech in Electronics", "5+ years experience", "RF expertise"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "Software",
      location: "Bangalore",
      type: "Full-Time",
      experience: "3-5 years",
      salary: "₹10-15 LPA",
      status: "Active",
      applicants: 28,
      postedDate: "2024-01-20",
      description: "Develop web applications using modern frameworks",
      requirements: ["React, Node.js", "AWS experience", "Problem solving"]
    },
    {
      id: 3,
      title: "Network Engineer",
      department: "Engineering",
      location: "Mumbai",
      type: "Full-Time",
      experience: "2-4 years",
      salary: "₹6-10 LPA",
      status: "Draft",
      applicants: 0,
      postedDate: "2024-02-01",
      description: "Install and maintain network infrastructure",
      requirements: ["CCNA certified", "Wi-Fi experience", "Troubleshooting"]
    }
  ]);

  const [applications, setApplications] = useState([
    {
      id: 1,
      jobId: 1,
      jobTitle: "Senior RF Engineer",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@email.com",
      phone: "+91-9876543210",
      experience: "6 years",
      currentCompany: "Airtel",
      appliedDate: "2024-02-15",
      status: "New",
      resume: "rajesh_kumar_resume.pdf",
      coverLetter: "Experienced RF engineer with strong background in 4G/5G networks..."
    },
    {
      id: 2,
      jobId: 1,
      jobTitle: "Senior RF Engineer",
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91-9876543211",
      experience: "7 years",
      currentCompany: "Vodafone",
      appliedDate: "2024-02-14",
      status: "Reviewed",
      resume: "priya_sharma_resume.pdf",
      coverLetter: "Passionate about wireless technologies with proven track record..."
    },
    {
      id: 3,
      jobId: 2,
      jobTitle: "Full Stack Developer",
      name: "Amit Patel",
      email: "amit.patel@email.com",
      phone: "+91-9876543212",
      experience: "4 years",
      currentCompany: "TCS",
      appliedDate: "2024-02-16",
      status: "New",
      resume: "amit_patel_resume.pdf",
      coverLetter: "Full stack developer with expertise in React and Node.js..."
    },
    {
      id: 4,
      jobId: 2,
      jobTitle: "Full Stack Developer",
      name: "Sneha Reddy",
      email: "sneha.reddy@email.com",
      phone: "+91-9876543213",
      experience: "5 years",
      currentCompany: "Infosys",
      appliedDate: "2024-02-13",
      status: "Shortlisted",
      resume: "sneha_reddy_resume.pdf",
      coverLetter: "Skilled developer with cloud deployment experience..."
    }
  ]);

  const [jobForm, setJobForm] = useState({
    title: '',
    department: '',
    location: '',
    type: 'Full-Time',
    experience: '',
    salary: '',
    status: 'Draft',
    description: '',
    requirements: ''
  });

  const stats = [
    { 
      icon: Briefcase, 
      label: "Active Jobs", 
      value: jobs.filter(j => j.status === 'Active').length, 
      change: "+2",
      gradient: "from-amber-500 to-orange-600" 
    },
    { 
      icon: Users, 
      label: "Total Applicants", 
      value: applications.length, 
      change: "+12",
      gradient: "from-violet-500 to-purple-600" 
    },
    { 
      icon: AlertCircle, 
      label: "New Applications", 
      value: applications.filter(a => a.status === 'New').length, 
      change: "+3",
      gradient: "from-emerald-500 to-teal-600" 
    },
    { 
      icon: CheckCircle, 
      label: "Shortlisted", 
      value: applications.filter(a => a.status === 'Shortlisted').length, 
      change: "+1",
      gradient: "from-blue-500 to-indigo-600" 
    }
  ];

  // Job CRUD Operations
  const handleCreateJob = () => {
    const newJob = {
      id: jobs.length + 1,
      ...jobForm,
      requirements: jobForm.requirements.split('\n').filter(r => r.trim()),
      applicants: 0,
      postedDate: new Date().toISOString().split('T')[0]
    };
    setJobs([...jobs, newJob]);
    resetJobForm();
  };

  const handleUpdateJob = () => {
    setJobs(jobs.map(job => job.id === editingJob.id ? { ...editingJob, ...jobForm } : job));
    resetJobForm();
  };

  const handleDeleteJob = (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      setJobs(jobs.filter(job => job.id !== id));
    }
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setJobForm({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      experience: job.experience,
      salary: job.salary,
      status: job.status,
      description: job.description,
      requirements: job.requirements.join('\n')
    });
    setShowJobModal(true);
  };

  const resetJobForm = () => {
    setJobForm({
      title: '',
      department: '',
      location: '',
      type: 'Full-Time',
      experience: '',
      salary: '',
      status: 'Draft',
      description: '',
      requirements: ''
    });
    setEditingJob(null);
    setShowJobModal(false);
  };

  // Application Status Update
  const handleStatusChange = (appId, newStatus) => {
    setApplications(applications.map(app => 
      app.id === appId ? { ...app, status: newStatus } : app
    ));
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'New': return 'from-blue-500 to-indigo-600';
      case 'Reviewed': return 'from-yellow-500 to-orange-600';
      case 'Shortlisted': return 'from-emerald-500 to-teal-600';
      case 'Rejected': return 'from-red-500 to-pink-600';
      default: return 'from-slate-500 to-slate-600';
    }
  };

  const newApplicationsCount = applications.filter(a => a.status === 'New').length;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-slate-900/95 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="h-full px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 rounded-xl flex items-center justify-center text-xl font-black">
                A
              </div>
              <div>
                <h1 className="text-lg font-black">AARNA ADMIN</h1>
                <p className="text-xs text-slate-400">Dashboard</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-3 hover:bg-white/5 rounded-lg transition-colors">
              <Bell size={20} />
              {newApplicationsCount > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-xs flex items-center justify-center font-bold">
                  {newApplicationsCount}
                </span>
              )}
            </button>

            {/* Admin Profile */}
            <div className="flex items-center space-x-3 pl-4 border-l border-white/10">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                <User size={20} />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-bold">Admin User</p>
                <p className="text-xs text-slate-400">admin@aarna.com</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className={`fixed left-0 top-20 bottom-0 w-64 bg-slate-900/50 backdrop-blur-xl border-r border-white/5 transition-transform duration-300 z-40 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}>
          <div className="p-6 space-y-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'dashboard' 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <BarChart3 size={20} />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('jobs')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'jobs' 
                  ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Briefcase size={20} />
              <span>Manage Jobs</span>
            </button>

            <button
              onClick={() => setActiveTab('applications')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all relative ${
                activeTab === 'applications' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FileText size={20} />
              <span>Applications</span>
              {newApplicationsCount > 0 && (
                <span className="absolute right-3 px-2 py-1 bg-red-500 rounded-full text-xs font-bold">
                  {newApplicationsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'settings' 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Settings size={20} />
              <span>Settings</span>
            </button>

            <div className="pt-4 border-t border-white/10">
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : ''}`}>
          <div className="p-6 lg:p-12">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-black mb-2">Dashboard Overview</h2>
                  <p className="text-slate-400">Welcome back! Here's what's happening with your job postings.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="group relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity`}></div>
                        <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center`}>
                              <IconComponent size={24} />
                            </div>
                            <span className="text-emerald-400 text-sm font-bold">{stat.change}</span>
                          </div>
                          <div className="text-3xl font-black mb-1">{stat.value}</div>
                          <div className="text-sm text-slate-400 font-semibold">{stat.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Recent Activity */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10">
                    <h3 className="text-xl font-black mb-4 flex items-center space-x-2">
                      <Calendar size={20} className="text-violet-400" />
                      <span>Recent Applications</span>
                    </h3>
                    <div className="space-y-3">
                      {applications.slice(0, 5).map(app => (
                        <div key={app.id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                          <div>
                            <p className="font-bold text-sm">{app.name}</p>
                            <p className="text-xs text-slate-400">{app.jobTitle}</p>
                          </div>
                          <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(app.status)} rounded-lg text-xs font-bold`}>
                            {app.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10">
                    <h3 className="text-xl font-black mb-4 flex items-center space-x-2">
                      <TrendingUp size={20} className="text-emerald-400" />
                      <span>Top Performing Jobs</span>
                    </h3>
                    <div className="space-y-3">
                      {jobs.filter(j => j.status === 'Active').sort((a, b) => b.applicants - a.applicants).slice(0, 5).map(job => (
                        <div key={job.id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                          <div className="flex-1">
                            <p className="font-bold text-sm">{job.title}</p>
                            <p className="text-xs text-slate-400">{job.location}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-black text-emerald-400">{job.applicants}</p>
                            <p className="text-xs text-slate-400">applicants</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Jobs Management Tab */}
            {activeTab === 'jobs' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-4xl font-black mb-2">Manage Jobs</h2>
                    <p className="text-slate-400">Create, edit, and manage job postings</p>
                  </div>
                  <button
                    onClick={() => setShowJobModal(true)}
                    className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all flex items-center space-x-2"
                  >
                    <Plus size={20} />
                    <span>Create New Job</span>
                  </button>
                </div>

                {/* Jobs Table */}
                <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-white/5 border-b border-white/10">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-black">Job Title</th>
                          <th className="px-6 py-4 text-left text-sm font-black">Department</th>
                          <th className="px-6 py-4 text-left text-sm font-black">Location</th>
                          <th className="px-6 py-4 text-left text-sm font-black">Applicants</th>
                          <th className="px-6 py-4 text-left text-sm font-black">Status</th>
                          <th className="px-6 py-4 text-left text-sm font-black">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {jobs.map(job => (
                          <tr key={job.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4">
                              <div>
                                <p className="font-bold">{job.title}</p>
                                <p className="text-xs text-slate-400">{job.type} • {job.experience}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-slate-300">{job.department}</td>
                            <td className="px-6 py-4 text-slate-300">{job.location}</td>
                            <td className="px-6 py-4">
                              <span className="px-3 py-1 bg-violet-500/20 border border-violet-500/50 rounded-lg font-bold text-sm">
                                {job.applicants}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                                job.status === 'Active' 
                                  ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-400' 
                                  : 'bg-slate-500/20 border border-slate-500/50 text-slate-400'
                              }`}>
                                {job.status}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handleEditJob(job)}
                                  className="p-2 hover:bg-blue-500/20 rounded-lg transition-colors"
                                  title="Edit"
                                >
                                  <Edit size={18} className="text-blue-400" />
                                </button>
                                <button
                                  onClick={() => handleDeleteJob(job.id)}
                                  className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                                  title="Delete"
                                >
                                  <Trash2 size={18} className="text-red-400" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Applications Tab */}
            {activeTab === 'applications' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-black mb-2">Job Applications</h2>
                  <p className="text-slate-400">Review and manage candidate applications</p>
                </div>

                {/* Applications Grid */}
                <div className="grid gap-6">
                  {applications.map(app => (
                    <div key={app.id} className="group p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-2xl font-black">
                            {app.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-xl font-black mb-1">{app.name}</h3>
                            <p className="text-sm text-slate-400 mb-2">Applied for: {app.jobTitle}</p>
                            <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                              <span className="flex items-center space-x-1">
                                <Mail size={14} />
                                <span>{app.email}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Phone size={14} />
                                <span>{app.phone}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Briefcase size={14} />
                                <span>{app.experience} at {app.currentCompany}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className={`px-4 py-2 bg-gradient-to-r ${getStatusColor(app.status)} rounded-xl text-sm font-bold`}>
                          {app.status}
                        </span>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-slate-300 line-clamp-2">{app.coverLetter}</p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => {
                              setSelectedApp(app);
                              setShowAppModal(true);
                            }}
                            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-bold text-sm transition-all flex items-center space-x-2"
                          >
                            <Eye size={16} />
                            <span>View Details</span>
                          </button>
                          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-bold text-sm transition-all flex items-center space-x-2">
                            <Download size={16} />
                            <span>Download Resume</span>
                          </button>
                        </div>

                        <div className="flex items-center space-x-2">
                          <select
                            value={app.status}
                            onChange={(e) => handleStatusChange(app.id, e.target.value)}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-bold outline-none cursor-pointer hover:bg-white/10 transition-all"
                          >
                            <option value="New" className="bg-slate-900">New</option>
                            <option value="Reviewed" className="bg-slate-900">Reviewed</option>
                            <option value="Shortlisted" className="bg-slate-900">Shortlisted</option>
                            <option value="Rejected" className="bg-slate-900">Rejected</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-black mb-2">Settings</h2>
                  <p className="text-slate-400">Manage your admin preferences and notifications</p>
                </div>

                <div className="p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-black mb-6">Notification Preferences</h3>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-4 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                      <div>
                        <p className="font-bold">Email notifications for new applications</p>
                        <p className="text-sm text-slate-400">Receive emails when candidates apply</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5" />
                    </label>
                    <label className="flex items-center justify-between p-4 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                      <div>
                        <p className="font-bold">Daily summary reports</p>
                        <p className="text-sm text-slate-400">Get daily stats on applications</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5" />
                    </label>
                    <label className="flex items-center justify-between p-4 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                      <div>
                        <p className="font-bold">Browser notifications</p>
                        <p className="text-sm text-slate-400">Show desktop notifications</p>
                      </div>
                      <input type="checkbox" className="w-5 h-5" />
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Job Modal */}
      {showJobModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 border-b border-white/10 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-black">
                {editingJob ? 'Edit Job' : 'Create New Job'}
              </h3>
              <button onClick={resetJobForm} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Job Title *</label>
                  <input
                    type="text"
                    value={jobForm.title}
                    onChange={(e) => setJobForm({...jobForm, title: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors"
                    placeholder="e.g. Senior RF Engineer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Department *</label>
                  <select
                    value={jobForm.department}
                    onChange={(e) => setJobForm({...jobForm, department: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors"
                  >
                    <option value="" className="bg-slate-900">Select Department</option>
                    <option value="Engineering" className="bg-slate-900">Engineering</option>
                    <option value="Software" className="bg-slate-900">Software</option>
                    <option value="Sales" className="bg-slate-900">Sales</option>
                    <option value="Support" className="bg-slate-900">Support</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Location *</label>
                  <input
                    type="text"
                    value={jobForm.location}
                    onChange={(e) => setJobForm({...jobForm, location: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors"
                    placeholder="e.g. New Delhi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Type *</label>
                  <select
                    value={jobForm.type}
                    onChange={(e) => setJobForm({...jobForm, type: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors"
                  >
                    <option value="Full-Time" className="bg-slate-900">Full-Time</option>
                    <option value="Part-Time" className="bg-slate-900">Part-Time</option>
                    <option value="Contract" className="bg-slate-900">Contract</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Status *</label>
                  <select
                    value={jobForm.status}
                    onChange={(e) => setJobForm({...jobForm, status: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors"
                  >
                    <option value="Draft" className="bg-slate-900">Draft</option>
                    <option value="Active" className="bg-slate-900">Active</option>
                    <option value="Closed" className="bg-slate-900">Closed</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Experience *</label>
                  <input
                    type="text"
                    value={jobForm.experience}
                    onChange={(e) => setJobForm({...jobForm, experience: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors"
                    placeholder="e.g. 5-8 years"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Salary Range *</label>
                  <input
                    type="text"
                    value={jobForm.salary}
                    onChange={(e) => setJobForm({...jobForm, salary: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors"
                    placeholder="e.g. ₹12-18 LPA"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Description *</label>
                <textarea
                  value={jobForm.description}
                  onChange={(e) => setJobForm({...jobForm, description: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors resize-none"
                  placeholder="Job description..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Requirements (one per line) *</label>
                <textarea
                  value={jobForm.requirements}
                  onChange={(e) => setJobForm({...jobForm, requirements: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors resize-none"
                  placeholder="B.Tech in Electronics&#10;5+ years experience&#10;RF expertise"
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  onClick={editingJob ? handleUpdateJob : handleCreateJob}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center space-x-2"
                >
                  <Save size={20} />
                  <span>{editingJob ? 'Update Job' : 'Create Job'}</span>
                </button>
                <button
                  onClick={resetJobForm}
                  className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Details Modal */}
      {showAppModal && selectedApp && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 border-b border-white/10 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-black">Application Details</h3>
              <button onClick={() => {setShowAppModal(false); setSelectedApp(null);}} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-4xl font-black">
                  {selectedApp.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-black mb-2">{selectedApp.name}</h4>
                  <div className="space-y-2 text-slate-400">
                    <p className="flex items-center space-x-2"><Mail size={16} /><span>{selectedApp.email}</span></p>
                    <p className="flex items-center space-x-2"><Phone size={16} /><span>{selectedApp.phone}</span></p>
                    <p className="flex items-center space-x-2"><Briefcase size={16} /><span>{selectedApp.experience} at {selectedApp.currentCompany}</span></p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-xl">
                <h5 className="font-black mb-2">Applied For:</h5>
                <p className="text-slate-300">{selectedApp.jobTitle}</p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl">
                <h5 className="font-black mb-2">Cover Letter:</h5>
                <p className="text-slate-300 leading-relaxed">{selectedApp.coverLetter}</p>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center justify-center space-x-2">
                  <CheckCircle size={20} />
                  <span>Shortlist</span>
                </button>
                <button className="flex-1 px-6 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center justify-center space-x-2">
                  <XCircle size={20} />
                  <span>Reject</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;