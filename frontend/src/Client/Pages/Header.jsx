import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Our Projects', path: '/projects' },
    { label: 'Services', path: '/services' },
    { label: 'Careers', path: '/carrier' },
    { label: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-purple-500/5' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 rounded-2xl flex items-center justify-center text-3xl font-black transform group-hover:rotate-6 transition-all duration-300 shadow-2xl">
                A
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                  AARNA
                </span>
                {' '}
                <span className="text-white">DIGITAL</span>
              </h1>
              <p className="text-xs text-slate-400 tracking-[0.3em] font-semibold">INDIA PVT. LTD.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-5 py-2 text-sm font-bold text-slate-300 hover:text-white transition-colors group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden xl:flex items-center space-x-6">
            <div className="flex items-center space-x-6 text-sm border-r border-white/10 pr-6">
              <a href="tel:+919717878530" className="flex items-center space-x-2 text-slate-400 hover:text-amber-400 transition-colors group">
                <Phone size={16} className="group-hover:rotate-12 transition-transform" />
                <span className="font-medium">+91-9717878530</span>
              </a>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-xl font-bold text-sm hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-2xl border-t border-white/5">
          <div className="px-6 py-8 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-slate-300 hover:text-white transition-colors py-3 px-4 rounded-xl hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <a href="tel:+919717878530" className="flex items-center space-x-3 text-slate-300 px-4">
                <Phone size={18} />
                <span>+91-9717878530</span>
              </a>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-xl font-bold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;