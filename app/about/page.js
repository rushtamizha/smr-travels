"use client";
import React from "react";
import { FaMapLocationDot, FaCarRear, FaAward } from "react-icons/fa6";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20">
      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            SMR <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ffe100] to-[#ffb700]">Travels</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl leading-relaxed">
            Your gateway to the soul of Tamil Nadu. From the misty peaks of the Nilgiris to the sacred shores of Rameswaram, we provide the gold standard in regional travel and cab services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: FaMapLocationDot, title: "TN Specialists", desc: "Expertise in Ooty, Kodaikanal, Madurai, and all major Tamil Nadu heritage sites." },
            { icon: FaCarRear, title: "Premium Fleet", desc: "From economical hatchbacks to luxury Innova Crystas for family comfort." },
            { icon: FaAward, title: "Local Expertise", desc: "Our drivers speak the language, know the shortcuts, and understand the culture." }
          ].map((item, i) => (
            <div key={i} className="bg-[#0f0f0f] p-10 rounded-[2.5rem] border border-white/5 group hover:border-yellow-500/20 transition-all">
              <item.icon className="text-yellow-500 mb-6" size={40} />
              <h3 className="text-lg font-black uppercase mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutPage;