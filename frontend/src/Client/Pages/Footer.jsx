import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const navItems = ['Home', 'About', 'Our Projects', 'Services', 'Careers', 'Contact Us'];

  return (
    <footer className="relative bg-slate-950 border-t border-white/5 py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 rounded-2xl flex items-center justify-center text-3xl font-black">
                A
              </div>
              <div>
                <h3 className="text-xl font-black">AARNA DIGITAL</h3>
                <p className="text-xs text-slate-500 tracking-widest">INDIA PVT. LTD.</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Leading provider of telecom services, RF engineering, and wireless network solutions in Delhi.
            </p>
            <div className="flex space-x-3">
              {['F', 'T', 'L', 'I'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-500/50 hover:bg-gradient-to-br hover:from-amber-500/20 hover:to-orange-500/20 transition-all transform hover:scale-110 font-bold"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-slate-400 hover:text-amber-400 transition-colors hover:translate-x-1 transform duration-200"
                >
                  → {item}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-black mb-6 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </h4>
            <div className="space-y-3 text-slate-400">
              <p className="hover:text-violet-400 transition-colors cursor-pointer">→ Network Integration</p>
              <p className="hover:text-violet-400 transition-colors cursor-pointer">→ Software Development</p>
              <p className="hover:text-violet-400 transition-colors cursor-pointer">→ CCTV Security Systems</p>
              <p className="hover:text-violet-400 transition-colors cursor-pointer">→ Wi-Fi Solutions</p>
              <p className="hover:text-violet-400 transition-colors cursor-pointer">→ Event Support</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-black mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a href="tel:+919717878530" className="flex items-start space-x-3 text-slate-400 hover:text-emerald-400 transition-colors group">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <span>+91-9717878530</span>
              </a>
              <a href="mailto:info@aarnadigitalindia.com" className="flex items-start space-x-3 text-slate-400 hover:text-emerald-400 transition-colors group">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <span>info@aarnadigitalindia.com</span>
              </a>
              <div className="flex items-start space-x-3 text-slate-400">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-emerald-400" />
                <span>U-157 First floor Sakarpur Near Laxminagar Metro Station, New Delhi-110092</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">
              © 2026 Aarna Digital India Pvt. Ltd. All rights reserved
            </p>
            <div className="flex space-x-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;