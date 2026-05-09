"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { ArrowRight, Globe } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";

// Assumed heroData structure from your data.js
import { heroData, companyConfig } from "@/Data";
import Link from "next/link";

const EnterpriseHero = () => {
  return (
    <section className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-[#050505]">
      
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          speed={3000}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {heroData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <motion.img 
                  src={slide.image} 
                  className="object-cover w-full h-full scale-110" 
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 10 }}
                  alt={slide.title} 
                />
                {/* Modern Dark Gradient Overlays */}
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CENTERED CONTENT */}
      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Status Badge: Matching the Navbar Capsule Border */}
          <div className="inline-flex p-[1px] rounded-full bg-gradient-to-r from-yellow-600/50 via-yellow-200/50 to-yellow-600/50 mb-8 shadow-2xl">
            <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-black/80 backdrop-blur-xl">
              <Globe size={14} className="text-yellow-400 animate-pulse" />
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">
                Premium Travel Experience
              </span>
            </div>
          </div>

          {/* Typography: Gold Gradient + High-Weight Bold */}
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFE7A3] to-[#D4AF37]">
              {companyConfig.name.split(' ')[0]}
            </span>
            <br/>
            <span className="text-white">
              {companyConfig.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <p className="max-w-xl mx-auto mb-12 font-medium leading-relaxed tracking-[0.1em] text-gray-300 uppercase text-[12px]">
            Bespoke logistics & luxury management. <br/>
            <span className="text-yellow-500 font-bold">Unparalleled professional standards.</span>
          </p>

          {/* Action Row: Matching Navbar Contact Button */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/packages">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-b from-yellow-300 to-amber-500 text-black rounded-full font-black text-[12px] uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all flex items-center gap-3 group"
              >
                Explore Packages
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Elements */}
      <div className="absolute z-20 flex items-end justify-between bottom-10 left-10 right-10">
        <div className="hidden lg:block border-l border-yellow-500/30 pl-4">
            <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.4em] mb-1">HQ Location</p>
            <p className="text-white text-[11px] font-bold uppercase tracking-widest">Kerala • India</p>
        </div>



        <div className="hidden text-right lg:block border-r border-yellow-500/30 pr-4">
            <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.4em] mb-1">Signature</p>
            <p className="text-white text-[11px] font-bold uppercase tracking-widest">© 2026 SMR TRAVELS</p>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseHero;