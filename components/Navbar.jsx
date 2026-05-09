"use client";
import React, { useState } from "react";
import { 
  Menu, 
  X, 
  Home, 
  Briefcase, 
  Map, 
  BookOpen, 
  Info, 
  MessageSquare 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Added icons to the data array
  const navLinks = [
    { name: "Home", link: "/", icon: <Home size={18} /> },
    { name: "Cabs", link: "/cabs", icon: <Briefcase size={18} /> },
    { name: "Packages", link: "/packages", icon: <Map size={18} /> },
    { name: "Testimonials", link: "/#testimonials", icon: <BookOpen size={18} /> },
    { name: "About", link: "/about", icon: <Info size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] p-4">
      {/* GOLD OUTER BORDER (The Capsule) */}
      <div className="max-w-5xl mx-auto rounded-full p-[1px] bg-gradient-to-b from-[#FFE7A3] via-[#FFD700] to-[#B8962E] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        
        {/* INNER NAV CONTAINER */}
        <div className="px-4 bg-[#0b0b0b] backdrop-blur-md rounded-full border border-amber-400/20">
          <div className="flex items-center justify-between py-3">
            
            {/* LOGO SECTION */}
            <div className="text-xl inline-flex gap-2 items-center font-bold tracking-tight cursor-pointer">
              <div className="relative w-10 h-10 border rounded-full ">
                <img className="rounded-full object-cover"
                  src="/logo.jpg"
                  alt="RR Tours Logo" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ffe100] to-[#ffb700] logo px-1">
                SMR
              </span>
              <span className=" text-white logo">
                TRAVELS
              </span>
            </div>

            {/* DESKTOP NAV LINKS */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="relative text-xs font-semibold uppercase tracking-widest text-white transition duration-300
                  after:absolute after:left-0 after:-bottom-1 after:h-[1px]
                  after:w-0 after:bg-gradient-to-r after:from-[#FFE7A3] after:to-[#FFD700]
                  after:transition-all after:duration-300 hover:after:w-full hover:text-[#FFE7A3]"
                >
                  {item.name}
                </a>
              ))}

              {/* PREMIUM CONTACT BUTTON */}
              <a
                href="https://wa.me/919688168638"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full 
                bg-gradient-to-b from-yellow-300 to-amber-500
                text-black font-bold text-xs  leading-relaxed   uppercase text-[12px] tracking-wider
                shadow-[0_0_15px_rgba(255,215,0,0.35)]
                border border-[#FFD700]/40
                hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)]
                active:scale-95 transition-all duration-300"
              >
                Contact
              </a>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              className="md:hidden text-amber-300 p-1"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER (Under-Navbar Style) */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] md:hidden"
            />

            {/* MOBILE MENU CARD */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 15, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute left-4 right-4 top-20 bg-[#0b0b0b] border border-amber-400/30 rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-[-1] md:hidden"
            >
              <div className="flex flex-col gap-5">
                {navLinks.map((item, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={index}
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-white  hover:text-amber-300 transition-colors border-b border-white/5 pb-3 group"
                  >
                    {/* ICON CONTAINER WITH GOLD GLOW ON HOVER */}
                    <span className="text-amber-400 group-hover:text-amber-200 transition-colors">
                      {item.icon}
                    </span>
                    <span className="tracking-wide">
                      {item.name}
                    </span>
                  </motion.a>
                ))}

                <a
                  href="https://wa.me/919688168638"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-4 rounded-full text-center   
                  bg-gradient-to-b from-yellow-300 to-amber-500 
                   flex items-center justify-center   text-black  font-black text-[12px] uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all  gap-3 group"
                >
                  <MessageSquare size={20} />
                  WhatsApp Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}