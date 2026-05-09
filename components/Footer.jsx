"use client";
import React from "react";
import Link from "next/link";
// Importing from React Icons
import { 
  FaFacebookF, 
  FaInstagram, 
  FaXTwitter, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaLocationDot,
  FaChevronRight,
  FaArrowUpRightFromSquare,
  FaPhone
} from "react-icons/fa6"; 
import { Verified } from "lucide-react";
FaPhone
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Cabs", href: "/cabs" },
      { name: "Tour Packages", href: "/packages" },
      { name: "Airport Transfers", href: "/cabs" },
      { name: "Corporate Booking", href: "/cabs" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="bg-[#050505] border-t uppercase border-white/5 pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-2xl font-black tracking-tighter text-white uppercase logo">
                SMR <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ffe100] to-[#ffb700] logo pr-2">TRAVELS</span>
              </h2>
              <p className="mt-4 text-gray-100 text-xs leading-relaxed max-w-xs">
                No.8 North Car Street <br/>
                thiruvanaiKovil Trichy
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors">
                  <Verified size={14} className="text-yellow-500" />
                </div>
                <span className="text-sm text-gray-300 font-bold">GST : 33BWEPR1141J1ZO</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors">
                  <FaPhone size={14} className="text-yellow-500" />
                </div>
                <span className="text-sm text-gray-300 font-bold">+91 9080576365</span>
                <span className="text-sm text-gray-300 font-bold">+91 9688168638</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors">
                  <FaEnvelope size={14} className="text-yellow-500" />
                </div>
                <span className="text-sm text-gray-300 font-bold">smrtravels2@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-4 hidden">
              {[FaFacebookF, FaInstagram, FaXTwitter].map((Icon, idx) => (
                <Link key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-yellow-500 hover:border-yellow-500 transition-all">
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-100 hover:text-yellow-500 text-xs font-medium flex items-center gap-2 transition-colors group">
                    <FaChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white">Company</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-100 hover:text-yellow-500 text-xs font-medium flex items-center gap-2 transition-colors group">
                    <FaChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Map Integration */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white flex items-center justify-between">
              Find Us <FaLocationDot size={14} className="text-yellow-500" />
            </h4>
            <div className="relative w-full h-48 rounded-[2rem] overflow-hidden border border-white/5 group">
              {/* Dark Overlay for Map */}
              <div className="absolute inset-0  pointer-events-none group-hover:bg-transparent transition-colors z-10" />
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4407626717502!2d78.70401861132044!3d10.854042157711271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf42c2e41c059%3A0x5346df832bbe5441!2sN%20Car%20St%2C%20Srirangam%2C%20Thiruvanaikoil%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620005!5e0!3m2!1sen!2sin!4v1778307193383!5m2!1sen!2sin"
                className="w-full h-full -[0.9] "
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
            © {currentYear} SMR TRAVELS. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              Designed with <FaArrowUpRightFromSquare size={10} className="text-yellow-500" /> by YourAgency
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;