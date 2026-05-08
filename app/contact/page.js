"use client";
import React, { useState } from "react";
import { 
  FaPhoneFlip, 
  FaEnvelope, 
  FaLocationDot, 
  FaWhatsapp, 
  FaClock 
} from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleWhatsAppInquiry = (e) => {
    e.preventDefault();
    const text = `*New Inquiry via Website*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    // Replace with SMR Travels official number
    window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, "_blank");
  };

  const contactDetails = [
    {
      icon: FaPhoneFlip,
      label: "Call for Booking",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: FaEnvelope,
      label: "Email Us",
      value: "info@smrtravels.com",
      href: "mailto:info@smrtravels.com"
    },
    {
      icon: FaLocationDot,
      label: "Main Office",
      value: "Valparai, Tamil Nadu, India",
      href: "#"
    },
    {
      icon: FaClock,
      label: "Operations",
      value: "24/7 Cab Service Available",
      href: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20">
      <div className="container px-6 mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFE7A3] to-[#D4AF37]">Touch</span>
          </h1>
          <p className="text-gray-400 font-medium text-lg">
            Plan your Tamil Nadu expedition with SMR Travels. Our concierge team is ready to assist with custom itineraries and luxury cab bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactDetails.map((item, i) => (
                <div key={i} className="flex items-start gap-6 p-6 rounded-[2rem] bg-[#0f0f0f] border border-white/5 hover:border-yellow-500/20 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-yellow-500" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-gray-500 mb-1">{item.label}</p>
                    <a href={item.href} className="text-sm font-bold text-white hover:text-yellow-500 transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick WhatsApp Button */}
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              className="flex items-center justify-center gap-3 w-full py-6 rounded-[2rem] bg-[#25D366] text-black font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform"
            >
              <FaWhatsapp size={20} />
              Chat Directly on WhatsApp
            </a>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f0f0f] p-8 md:p-12 rounded-[3rem] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-[80px]" />
              
              <h3 className="text-2xl font-black uppercase mb-8 tracking-tight">Send a Message</h3>
              
              <form onSubmit={handleWhatsAppInquiry} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-gray-500 ml-4 tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="contact-input" 
                      placeholder="e.g. John Doe"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-gray-500 ml-4 tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="contact-input" 
                      placeholder="name@company.com"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-gray-500 ml-4 tracking-widest">Subject</label>
                  <select 
                    className="contact-input appearance-none" 
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option className="bg-[#0f0f0f]">Cab Booking</option>
                    <option className="bg-[#0f0f0f]">Tour Package Inquiry</option>
                    <option className="bg-[#0f0f0f]">Corporate Tie-up</option>
                    <option className="bg-[#0f0f0f]">Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-gray-500 ml-4 tracking-widest">Your Message</label>
                  <textarea 
                    rows="5" 
                    required 
                    className="contact-input resize-none" 
                    placeholder="Tell us about your travel plans..."
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-yellow-500/10 hover:shadow-yellow-500/30 transition-all active:scale-95"
                >
                  Send to Concierge
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .contact-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.25rem;
          padding: 1rem 1.5rem;
          font-size: 0.875rem;
          color: white;
          outline: none;
          transition: all 0.3s;
        }
        .contact-input:focus {
          border-color: #d4af37;
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.05);
        }
      `}</style>
    </main>
  );
};

export default ContactPage;