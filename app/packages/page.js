"use client";
import React, { useState } from "react";
import { FaArrowUpRightFromSquare, FaXmark, FaPaperPlane } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { tourPackages } from "@/Data"; // Ensure your Data file path is correct
import { ArrowUpRight, Send } from "lucide-react";

const PackagesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    date: "",
    adults: "",
    kids: "",
    message: ""
  });

  const openForm = (packageName) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `*Explore All Packages - Booking Request*%0A*Package:* ${selectedPackage}%0A*Name:* ${formData.name}%0A*Mobile:* ${formData.mobile}%0A*Date:* ${formData.date}%0A*Adults:* ${formData.adults}%0A*Kids:* ${formData.kids}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container px-6 mx-auto">
        
        {/* Page Title */}
        <div className="max-w-4xl mb-20">
          <h1 className="text-3xl  font-black uppercase tracking-tighter leading-[0.85] text-white mb-2">
            The Complete <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ffe100] to-[#ffb700]">
              Travel Catalog
            </span>
          </h1>
          <p className="text-gray-100 font-medium tracking-wide max-w-xl">
            Browse our full range of curated luxury escapes. From hidden waterfalls to premium hill station retreats.
          </p>
        </div>

        {/* Static Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((tour) => (
            <motion.div key={tour.id} 
                className="group relative bg-amber-400/5 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-yellow-500/30 transition-all duration-500 h-full flex flex-col"
              >
                <div className="relative overflow-hidden h-52 cursor-pointer" onClick={() => openForm(tour.title)}>
                  <img src={tour.image} alt={tour.title} className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-5 left-5 p-[1px] bg-gradient-to-r from-yellow-600 to-yellow-200 rounded-full shadow-xl">
                    <div className="bg-black/80 backdrop-blur-md px-4 py-1 rounded-full">
                      <span className="text-[9px] font-black uppercase tracking-widest text-white">{tour.tag}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-grow p-6">
                  <h3 className="mb-2 text-sm font-black uppercase tracking-tight text-white leading-tight group-hover:text-yellow-400 transition-colors">
                    {tour.title}
                  </h3>
                   <p className="text-xs mb-4">{tour.duration}</p>

                  <div className="flex items-center justify-between pt-6 mt-auto border-t border-white/5">
                    <div>
                      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-1">Package Amount</p>
                      <p className="font-black tracking-tighter text-white">₹{tour.basePrice}</p>
                    </div>
                    
                    <button 
                      onClick={() => openForm(tour.title)}
                      className="relative w-10 h-10 bg-gradient-to-tr from-yellow-600 to-yellow-300 rounded-2xl flex items-center justify-center text-black shadow-[0_10px_20px_rgba(234,179,8,0.3)] hover:shadow-yellow-500/50 hover:-translate-y-1 transition-all duration-300"
                    >
                      <ArrowUpRight size={16} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              </motion.div>
          ))}
        </div>
      </div>

      {/* Shared Booking Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full max-w-xl bg-[#0f0f0f] border border-yellow-500/20 rounded-[3rem] p-8 md:p-12 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black uppercase text-white tracking-tighter">
                  Reserve <span className="text-yellow-500">Journey</span>
                </h3>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                  <FaXmark size={28} />
                </button>
              </div>

              <form onSubmit={handleWhatsApp} className="space-y-5">
                <div className="p-4 bg-yellow-500/5 border border-yellow-500/10 rounded-2xl mb-6">
                  <p className="text-[10px] uppercase font-black text-yellow-600 tracking-[0.3em] mb-1">Inquiry for</p>
                  <p className="text-base font-black text-white uppercase">{selectedPackage}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" required className="pkg-input" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  <input type="tel" placeholder="Contact Number" required className="pkg-input" onChange={(e) => setFormData({...formData, mobile: e.target.value})} />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <input type="date" required className="pkg-input" style={{colorScheme: 'dark'}} onChange={(e) => setFormData({...formData, date: e.target.value})} />
                  </div>
                  <input type="number" placeholder="Adults" className="pkg-input" onChange={(e) => setFormData({...formData, adults: e.target.value})} />
                  <input type="number" placeholder="Kids" className="pkg-input" onChange={(e) => setFormData({...formData, kids: e.target.value})} />
                </div>

                <textarea placeholder="Message (Optional)" rows="3" className="pkg-input resize-none" onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>

                <button
                  type="submit"
                  className="w-full mt-4 px-6 py-4 rounded-full bg-gradient-to-b from-yellow-300 to-amber-500 flex items-center justify-center text-black font-black text-[12px] uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,215,0,0.2)] hover:shadow-yellow-500/40 transition-all gap-3"
                >
                  <Send size={18} />
                  WhatsApp Now
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .pkg-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 1rem 1.25rem;
          font-size: 0.875rem;
          color: white;
          outline: none;
          transition: all 0.3s;
        }
        .pkg-input:focus {
          border-color: #d4af37;
          background: rgba(255, 255, 255, 0.06);
        }
      `}</style>
    </main>
  );
};

export default PackagesPage;