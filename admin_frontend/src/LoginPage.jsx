import { useState, useContext } from 'react';
import { User, Lock, Eye, EyeOff, LogIn, Briefcase } from 'lucide-react';
import { AuthContext } from './context/AuthContext';

const LoginPage = ({ onLogin }) => {
  const [adminname, setAdminname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useContext(AuthContext) || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!adminname || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      // Attempt server login, but fall back to demo success when server unreachable
      let adminData = { name: adminname, email: `${adminname}@aarna.com` };
      try {
        const response = await fetch("https://aarna-digital-india-pvt-ltd.onrender.com/admin/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: adminname, password }),
        });

        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.message || 'Login failed');
        adminData = data.admin || adminData;
        const accessToken = data.accessToken ;
        const refreshToken = data.refreshToken ;
        if (login) login(adminData, accessToken, refreshToken);
      } catch (err) {
        throw err
      }

      // Notify parent app
      if (onLogin) onLogin(adminData);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      
      <div className="w-full max-w-md z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">
              A
            </div>
          </div>
          <h1 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600 mb-2">
            AARNA
          </h1>
          <p className="text-slate-400 flex items-center justify-center space-x-2">
            <Briefcase size={16} />
            <span>Admin Portal</span>
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-2xl">

          <div className="mb-8">
            <h2 className="text-2xl font-black text-white mb-2">Welcome Back</h2>
            <p className="text-slate-400 text-sm">Sign in to access the admin dashboard</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* AdminName Input */}
            <div>
              <label className="block text-sm font-bold text-slate-200 mb-2">
                Admin Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  value={adminname}
                  onChange={(e) => setAdminname(e.target.value)}
                  placeholder="admin"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 transition-all"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-bold text-slate-200 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 transition-all"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
                  disabled={loading}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 flex items-center justify-center space-x-2 shadow-lg"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <LogIn size={18} />
                  <span>Sign In</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;