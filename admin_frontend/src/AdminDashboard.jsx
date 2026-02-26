import { useState, useEffect } from 'react';
import { 
  Plus, Edit, Trash2, Bell, User, Briefcase, MapPin, DollarSign, 
  Clock, Search, Filter, X, Save, Eye, Download, Mail, Phone,
  CheckCircle, XCircle, AlertCircle, BarChart3, Users, FileText,
  Calendar, TrendingUp, Settings, LogOut, Menu, Loader, ChevronDown
} from 'lucide-react';


const AdminDashboard = ({ admin, onLogout }) => {
  // UI State for Navigation and Modals (Design Only)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showJobModal, setShowJobModal] = useState(false);
  const [showAppModal, setShowAppModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  // Job form state
  const [jobForm, setJobForm] = useState({
    title: '',
    jobType: 'Full-time',
    location: '',
    experienceLevel: 'Junior',
    status: 'Open',
    salary: '',
    description: '',
    skills: '' // comma-separated input
  });
  const [creatingJob, setCreatingJob] = useState(false);
  const [editingJobId, setEditingJobId] = useState(null);

  const handleSaveJob = async () => {
    // validate
    if (!jobForm.title || !jobForm.description || !jobForm.skills) {
      alert('Please fill required fields: title, description, skills');
      return;
    }
    setCreatingJob(true);
    try {
      const token = localStorage.getItem('accessToken');
      const payload = { ...jobForm };
      payload.skills = jobForm.skills.split(',').map(s => s.trim()).filter(Boolean);

      const url = editingJobId ? `https://aarna-digital-india-pvt-ltd.onrender.com/jobs/update/${editingJobId}` : 'https://aarna-digital-india-pvt-ltd.onrender.com/jobs/create';
      const method = editingJobId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to save job');
      }

      // parse saved job
      const data = await res.json().catch(() => ({}));
      const saved = data.job || data.updatedJob || data || {};

      // If backend didn't return an _id, create a temporary one
      if (!saved._id && !saved.id) saved._id = `${Date.now()}`;

      if (editingJobId) {
        setJobs(prev => prev.map(j => (j._id === (saved._id || saved.id) ? { ...j, ...saved } : j)));
      } else {
        setJobs(prev => [saved, ...prev]);
      }

      // success
      setShowJobModal(false);
      setEditingJobId(null);
      setJobForm({ title: '', jobType: 'Full-time', location: '', experienceLevel: 'Junior', status: 'Open', salary: '', description: '', skills: '' });
    } catch (err) {
      console.error('Save job error:', err);
      alert(err.message || 'Error saving job');
    } finally {
      setCreatingJob(false);
    }
  };

  const handleDeleteJob = async (jobId) => {
    if (!confirm('Delete this job? This action cannot be undone.')) return;
    try {
      const token = localStorage.getItem('accessToken');
      const res = await fetch(`https://aarna-digital-india-pvt-ltd.onrender.com/jobs/delete/${jobId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        }
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to delete job');
      }

      setJobs(prev => prev.filter(j => j._id !== jobId && j.id !== jobId));
    } catch (err) {
      console.error('Delete job error:', err);
      alert(err.message || 'Error deleting job');
    }
  };

  // Jobs state (initially empty until fetched from server)
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  // helper to ensure we always work with a real array
  const apps = Array.isArray(applications) ? applications : [];

  // load jobs and applications
  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    const fetchJobs = async () => {
      try {
        const res = await fetch('https://aarna-digital-india-pvt-ltd.onrender.com/jobs');
        if (!res.ok) throw new Error('Failed to fetch jobs');
        const data = await res.json();
        console.log('fetchJobs response', data);
        setJobs(data.jobs || data || []);
      } catch (err) {
        console.error('Error loading jobs:', err);
      }
    };

    const fetchApplications = async () => {
      try {
        const res = await fetch('https://aarna-digital-india-pvt-ltd.onrender.com/applications', {
          headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {})
          }
        });
        if (!res.ok) throw new Error('Failed to load applications');
        const data = await res.json();
        console.log('fetchApplications response', data);
        // map backend schema to fields previously used in UI (dummy data)
        const raw = data.applications || data || [];
        const normalized = Array.isArray(raw)
          ? raw.map(a => ({
              ...a,
              name: a.fullName || a.name,
              email: a.email,
              phone: a.phone,
              experience: a.yearsOfExperience ? `${a.yearsOfExperience} years` : a.experience || '',
              jobTitle: a.jobTitle || (a.jobId && a.jobId.title) || '',
              coverLetter: a.coverLetter || a.message || '',
              status: a.status || 'New',
              skills: Array.isArray(a.skills) ? a.skills.join(', ') : a.skills || '',
              currentCTC: a.currentCTC || '',
              expectedCTC: a.expectedCTC || '',
            }))
          : [];
        setApplications(normalized);
        // fetch contact/messages as well
        try {
          const msgRes = await fetch('https://aarna-digital-india-pvt-ltd.onrender.com/contacts', {
            headers: {
              'Content-Type': 'application/json',
              ...(token ? { Authorization: `Bearer ${token}` } : {})
            }
          });
          if (!msgRes.ok) throw new Error('Failed to load messages');
          const msgData = await msgRes.json();
          const rawMsgs = msgData.contacts || msgData || [];
          const normalizedMsgs = Array.isArray(rawMsgs)
            ? rawMsgs.map(m => ({
                ...m,
                name: m.name || '',
                email: m.email || '',
                message: m.message || '',
                status: m.status || 'Unread',
                createdAt: m.createdAt || m.timestamp || ''
              }))
            : [];
          setMessages(normalizedMsgs);
        } catch (err) {
          console.error('Error loading messages:', err);
        }
      } catch (err) {
        console.error('Error loading applications:', err);
      }
    };

    fetchJobs();
    fetchApplications();
  }, []);

  const stats = [
    { 
      icon: Briefcase, 
      label: "Open Jobs", 
      value: jobs.filter(j => j.status === 'Open').length,
      change: "+2",
      gradient: "from-amber-500 to-orange-600" 
    },
    { 
      icon: Users, 
      label: "Total Applicants", 
      value: apps.length, 
      change: "+12",
      gradient: "from-violet-500 to-purple-600" 
    },
    { 
      icon: AlertCircle, 
      label: "New Applications", 
      value: apps.filter(a => a.status === 'New').length, 
      change: "+3",
      gradient: "from-emerald-500 to-teal-600" 
    },
    { 
      icon: CheckCircle, 
      label: "Shortlisted", 
      value: apps.filter(a => a.status === 'Shortlisted').length, 
      change: "+1",
      gradient: "from-blue-500 to-indigo-600" 
    }
  ];

  // Helper function for status colors
  const getStatusColor = (status) => {
    switch(status) {
      case 'New': return 'from-blue-500 to-cyan-600';
      case 'Reviewed': return 'from-yellow-500 to-orange-600';
      case 'Shortlisted': return 'from-emerald-500 to-teal-600';
      case 'Rejected': return 'from-red-500 to-pink-600';
      default: return 'from-slate-400 to-slate-500';
    }
  };

  const newApplicationsCount = apps.filter(a => a.status === 'New').length;
  const adminName = admin?.name || 'Admin';
  const adminEmail = admin?.email || 'admin@aarna.com';

  const handleLogoutClick = () => {
    setShowProfileMenu(false);
    onLogout();
  };

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

            {/* Admin Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-3 pl-4 border-l border-white/10 hover:bg-white/5 pr-2 py-2 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User size={20} />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-bold text-left">{adminName}</p>
                  <p className="text-xs text-slate-400">{adminEmail}</p>
                </div>
                <ChevronDown size={16} className={`transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-40">
                  <button className="w-full px-4 py-3 hover:bg-white/5 transition-colors flex items-center space-x-2 text-sm font-semibold border-b border-white/10">
                    <User size={16} />
                    <span>Profile Settings</span>
                  </button>
                  <button 
                    onClick={handleLogoutClick}
                    className="w-full px-4 py-3 hover:bg-red-500/10 transition-colors flex items-center space-x-2 text-sm font-semibold text-red-400"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className={`fixed left-0 top-20 bottom-0 w-64 bg-slate-900/50 backdrop-blur-xl border-r border-white/5 transition-transform duration-300 z-40 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static`}>
          <div className="p-6 space-y-2 h-full overflow-y-auto">
            <button
              onClick={() => {
                setActiveTab('dashboard');
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'dashboard' 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <BarChart3 size={20} />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('jobs');
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'jobs' 
                  ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Briefcase size={20} />
              <span>Manage Jobs</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('applications');
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all relative ${
                activeTab === 'applications' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg' 
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
              onClick={() => {
                setActiveTab('messages');
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'messages' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Mail size={20} />
              <span>Messages</span>
              {messages.length > 0 && (
                <span className="absolute right-3 px-2 py-1 bg-red-500 rounded-full text-xs font-bold">
                  {messages.length}
                </span>
              )}
            </button>

            <div className="pt-4 border-t border-white/10 mt-auto">
              <button 
                onClick={handleLogoutClick}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-slate-400 hover:text-white hover:bg-red-500/10 transition-all"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <div className="p-6 lg:p-12">
            {/* Error Alert */}
            {false && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center justify-between animate-in">
                <div className="flex items-center space-x-2">
                  <AlertCircle size={20} className="text-red-400" />
                  <span className="text-red-200">Error message</span>
                </div>
                <button 
                  className="p-1 hover:bg-red-500/20 rounded transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            )}

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
                      {apps.slice(0, 5).map(app => (
                        <div key={app._id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                          <div>
                            <p className="font-bold text-sm">{app.name}</p>
                            <p className="text-xs text-slate-400">{app.jobTitle}</p>
                          </div>
                          <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(app.status)} rounded-lg text-xs font-bold`}>
                            {app.status || 'New'}
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
                      {jobs.filter(j => j.status === 'Open').sort((a, b) => (b.applicants || 0) - (a.applicants || 0)).slice(0, 5).map(job => (
                        <div key={job._id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                          <div className="flex-1">
                            <p className="font-bold text-sm">{job.title}</p>
                            <p className="text-xs text-slate-400">{job.location}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-black text-emerald-400">{job.applicants || 0}</p>
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
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-4xl font-black mb-2">Manage Jobs</h2>
                    <p className="text-slate-400">Create, edit, and manage job postings</p>
                  </div>
                  <button
                    onClick={() => setShowJobModal(true)}
                    className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all flex items-center space-x-2 w-full md:w-auto justify-center"
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
                          <th className="px-6 py-4 text-left text-sm font-black">Location</th>
                          <th className="px-6 py-4 text-left text-sm font-black">Type</th>
                          <th className="px-6 py-4 text-left text-sm font-black">Applicants</th>
                          <th className="px-6 py-4 text-left text-sm font-black">Status</th>
                          <th className="px-6 py-4 text-left text-sm font-black">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {jobs.map(job => (
                          <tr key={job._id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4">
                              <div>
                                <p className="font-bold">{job.title}</p>
                                <p className="text-xs text-slate-400">{job.experienceLevel}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-slate-300">{job.location}</td>
                            <td className="px-6 py-4">
                              <span className="px-3 py-1 bg-slate-700/50 rounded-lg font-bold text-xs text-slate-300">
                                {job.jobType}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                                              <span className="px-3 py-1 bg-violet-500/20 border border-violet-500/50 rounded-lg font-bold text-sm">
                                  {apps.filter(a => a.jobId === job._id || a.jobId === job.id).length}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                                job.status === 'Open' 
                                  ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-400' 
                                  : job.status === 'Closed'
                                  ? 'bg-red-500/20 border border-red-500/50 text-red-400'
                                  : 'bg-yellow-500/20 border border-yellow-500/50 text-yellow-400'
                              }`}>
                                {job.status}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => {
                                    // populate form for editing
                                    setJobForm({
                                      title: job.title || '',
                                      jobType: job.jobType || 'Full-time',
                                      location: job.location || '',
                                      experienceLevel: job.experienceLevel || 'Junior',
                                      status: job.status || 'Open',
                                      salary: job.salary || '',
                                      description: job.description || '',
                                      skills: Array.isArray(job.skills) ? job.skills.join(', ') : (job.skills || '')
                                    });
                                    setEditingJobId(job._id || job.id || null);
                                    setShowJobModal(true);
                                  }}
                                  className="p-2 hover:bg-blue-500/20 rounded-lg transition-colors"
                                  title="Edit"
                                >
                                  <Edit size={18} className="text-blue-400" />
                                </button>
                                <button
                                  onClick={() => handleDeleteJob(job._id || job.id)}
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
                  <h2 className="text-4xl font-black mb-2">Job Applications ({apps.length})</h2>
                  <p className="text-slate-400">Review and manage candidate applications</p>
                </div>

                {/* Applications Grid */}
                <div className="grid gap-6">
                  {apps.length === 0 ? (
                    <div className="p-8 text-center text-slate-400 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10">
                      <FileText size={40} className="mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-bold">No applications yet</p>
                      <p className="text-sm">Applications will appear here when candidates apply for your jobs.</p>
                    </div>
                  ) : (
                    apps.map(app => (
                      <div key={app._id} className="group p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-2xl font-black flex-shrink-0">
                            {app.name ? app.name.charAt(0) : ''}
                          </div>
                          <div className="flex-1">
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
                                <span>{app.experience}</span>
                              </span>
                              {app.skills && (
                                <span className="flex items-center space-x-1">
                                  <Users size={14} />
                                  <span>{app.skills}</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <span className={`px-4 py-2 bg-gradient-to-r ${getStatusColor(app.status)} rounded-xl text-sm font-bold whitespace-nowrap`}>
                          {app.status}
                        </span>
                        <div className="mt-2 text-sm text-slate-400">
                          {app.currentCTC && <div>Current CTC: {app.currentCTC}</div>}
                          {app.expectedCTC && <div>Expected CTC: {app.expectedCTC}</div>}
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-slate-300 line-clamp-2">{app.coverLetter}</p>
                      </div>

                      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setSelectedApplication(app);
                              setShowAppModal(true);
                            }}
                            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-bold text-sm transition-all flex items-center space-x-2"
                          >
                            <Eye size={16} />
                            <span>View Details</span>
                          </button>
                        </div>

                        <div className="flex items-center space-x-2">
                          <select
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
                      ))
                  )}
                </div>
              </div>
            )}

            {/* Messages Tab */}
            {activeTab === 'messages' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-black mb-2">Messages ({messages.length})</h2>
                  <p className="text-slate-400">Recent visitor messages sent via the contact form</p>
                </div>

                <div className="grid gap-4">
                  {messages.length === 0 ? (
                    <div className="p-8 text-center text-slate-400 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10">
                      <p className="text-lg font-bold">No messages yet</p>
                      <p className="text-sm">Messages will appear here when visitors use the contact form.</p>
                    </div>
                  ) : (
                    messages.map(msg => (
                      <div key={msg._id || msg.id} className="group p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-bold text-lg">{msg.name}</p>
                            <p className="text-sm text-slate-400">{msg.email}</p>
                            <p className="text-sm text-slate-300 mt-2 line-clamp-2">{msg.message}</p>
                          </div>
                          <div className="text-right">
                            <div className={`px-3 py-1 rounded-lg text-xs font-bold ${msg.status === 'Unread' ? 'bg-red-500/10 text-red-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                              {msg.status}
                            </div>
                            <div className="text-xs text-slate-400 mt-2">{msg.createdAt ? new Date(msg.createdAt).toLocaleString() : ''}</div>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setSelectedMessage(msg)}
                              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-bold text-sm transition-all"
                            >
                              View Message
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
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
              <h3 className="text-2xl font-black">{editingJobId ? 'Edit Job' : 'Create New Job'}</h3>
              <button onClick={() => setShowJobModal(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
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
                    onChange={(e) => setJobForm(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors"
                    placeholder="e.g. Senior RF Engineer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Job Type *</label>
                  <select
                    value={jobForm.jobType}
                    onChange={(e) => setJobForm(prev => ({ ...prev, jobType: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors"
                  >
                    <option value="Full-time" className="bg-slate-900">Full-time</option>
                    <option value="Part-time" className="bg-slate-900">Part-time</option>
                    <option value="Internship" className="bg-slate-900">Internship</option>
                    <option value="Contract" className="bg-slate-900">Contract</option>
                    <option value="Remote" className="bg-slate-900">Remote</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Location *</label>
                  <input
                    type="text"
                    value={jobForm.location}
                    onChange={(e) => setJobForm(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors"
                    placeholder="e.g. New Delhi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Experience Level *</label>
                  <select
                    value={jobForm.experienceLevel}
                    onChange={(e) => setJobForm(prev => ({ ...prev, experienceLevel: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors"
                  >
                    <option value="Fresher" className="bg-slate-900">Fresher</option>
                    <option value="Junior" className="bg-slate-900">Junior</option>
                    <option value="Mid" className="bg-slate-900">Mid</option>
                    <option value="Senior" className="bg-slate-900">Senior</option>
                    <option value="Experienced" className="bg-slate-900">Experienced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Status *</label>
                  <select
                    value={jobForm.status}
                    onChange={(e) => setJobForm(prev => ({ ...prev, status: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors"
                  >
                    <option value="Open" className="bg-slate-900">Open</option>
                    <option value="Closed" className="bg-slate-900">Closed</option>
                    <option value="Paused" className="bg-slate-900">Paused</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Salary Range</label>
                <input
                  type="text"
                  value={jobForm.salary}
                  onChange={(e) => setJobForm(prev => ({ ...prev, salary: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors"
                  placeholder="e.g. ₹12-18 LPA"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Description *</label>
                <textarea
                  rows="4"
                  value={jobForm.description}
                  onChange={(e) => setJobForm(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors resize-none"
                  placeholder="Job description..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Skills (comma separated)</label>
                <input
                  type="text"
                  value={jobForm.skills}
                  onChange={(e) => setJobForm(prev => ({ ...prev, skills: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 transition-colors"
                  placeholder="e.g. React, Node.js, RF Engineering"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 pt-4">
                <button
                  onClick={handleSaveJob}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center space-x-2"
                >
                  {creatingJob ? <Loader size={18} className="animate-spin" /> : <Save size={20} />}
                  <span>{creatingJob ? (editingJobId ? 'Saving...' : 'Creating...') : (editingJobId ? 'Save Changes' : 'Create Job')}</span>
                </button>
                <button
                  onClick={() => setShowJobModal(false)}
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
      {showAppModal && selectedApplication && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 border-b border-white/10 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-black">Application Details</h3>
              <button onClick={() => setShowAppModal(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-4xl font-black flex-shrink-0">
                  {selectedApplication.name ? selectedApplication.name.charAt(0) : ''}
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-black mb-2">{selectedApplication.name || ''}</h4>
                  <div className="space-y-2 text-slate-400">
                    <p className="flex items-center space-x-2"><Mail size={16} /><span>{selectedApplication.email}</span></p>
                    <p className="flex items-center space-x-2"><Phone size={16} /><span>{selectedApplication.phone}</span></p>
                    <p className="flex items-center space-x-2"><Briefcase size={16} /><span>{selectedApplication.experience}</span></p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-xl">
                <h5 className="font-black mb-2">Applied For:</h5>
                <p className="text-slate-300">{selectedApplication.jobTitle || selectedApplication.job || ''}</p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl">
                <h5 className="font-black mb-2">Cover Letter:</h5>
                <p className="text-slate-300 leading-relaxed">{selectedApplication.coverLetter || selectedApplication.message || ''}</p>
              </div>

              {selectedApplication.resumeUrl && (
                <div className="p-4 bg-white/5 rounded-xl">
                  <h5 className="font-black mb-2">Resume:</h5>
                  <a
                    href={`https://aarna-digital-india-pvt-ltd.onrender.com/${selectedApplication.resumeUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 underline"
                  >
                    View PDF
                  </a>
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-4">
                <button 
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
                >
                  <CheckCircle size={20} />
                  <span>Shortlist</span>
                </button>
                <button 
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
                >
                  <XCircle size={20} />
                  <span>Reject</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Message Details Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 border-b border-white/10 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-black">Message</h3>
              <button onClick={() => setSelectedMessage(null)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-xl font-black">{selectedMessage.name}</h4>
                <p className="text-sm text-slate-400">{selectedMessage.email}</p>
                <div className="text-xs text-slate-400 mt-2">{selectedMessage.createdAt ? new Date(selectedMessage.createdAt).toLocaleString() : ''}</div>
              </div>

              <div className="p-4 bg-white/5 rounded-xl">
                <h5 className="font-black mb-2">Message:</h5>
                <p className="text-slate-300 leading-relaxed">{selectedMessage.message}</p>
              </div>

              <div className="flex justify-end">
                <button onClick={() => setSelectedMessage(null)} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
