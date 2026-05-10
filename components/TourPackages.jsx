"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronRight, ArrowUpRight, X, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { tourPackages } from "@/Data";

const TourPackages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  // State for form data to handle WhatsApp redirect
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    date: "",
    adults: "",
    kids: "",
    message: "",
  });

  const openForm = (packageName) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `*New Booking Request*%0A*Package:* ${selectedPackage}%0A*Name:* ${formData.name}%0A*Mobile:* ${formData.mobile}%0A*Date:* ${formData.date}%0A*Adults:* ${formData.adults}%0A*Kids:* ${formData.kids}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/919080576365?text=${text}`, "_blank"); // Replace with your number
  };

  return (
    <section className="py-20 capitalize bg-[#050505] overflow-hidden">
      <div className="container px-6 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-end justify-between gap-8 mb-12 md:flex-row">
          <div className="max-w-2xl">
            <h2 className="text-white text-3xl  font-black tracking-tighter uppercase leading-[0.85] mb-2">
              Featured <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ffe100] to-[#ffb700]">
                Tour Packages
              </span>
            </h2>
            <p className="font-medium leading-relaxed tracking-wide text-gray-100 max-w-lg">
              Hand-picked luxury itineraries designed for those who seek the
              extraordinary in every journey.
            </p>
          </div>

          <Link
            href="/packages"
            className="group hidden lg:flex items-center gap-3 text-[11px] font-black tracking-[0.3em] uppercase text-white hover:text-yellow-500 transition-all"
          >
            View All Collections
            <div className="w-10 h-10 rounded-full border border-yellow-500/30 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all">
              <ChevronRight size={18} />
            </div>
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-20 tour-swiper overflow-visible"
        >
          {tourPackages.map((tour) => (
            <SwiperSlide key={tour.id}>
              <motion.div className="group relative bg-amber-400/5 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-yellow-500/30 transition-all duration-500 h-full flex flex-col border-yellow-300/50">
                <div
                  className="relative overflow-hidden h-52 cursor-pointer"
                  onClick={() => openForm(tour.title)}
                >
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-5 left-5 p-[1px] bg-gradient-to-r from-yellow-600 to-yellow-200 rounded-full shadow-xl">
                    <div className="bg-black/80 backdrop-blur-md px-4 py-1 rounded-full">
                      <span className="text-[9px] font-black uppercase tracking-widest text-white">
                        {tour.tag}
                      </span>
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
                      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-1">
                        Package Amount
                      </p>
                      <p className="font-black tracking-tighter text-white">
                        ₹{tour.basePrice}
                      </p>
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
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-4 text-center md:hidden">
          <Link
            href="/packages"
            className="mt-4 inline-flex px-6 py-4 rounded-full text-center   
                  bg-gradient-to-b from-yellow-300 to-amber-500 
                   flex items-center justify-center   text-black  font-black text-[12px] uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all  gap-3 group"
          >
            Explore Collections
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-[#0f0f0f] border border-yellow-500/20 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-black uppercase text-white tracking-tighter">
                  Book <span className="text-yellow-500">Package</span>
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleWhatsApp} className="space-y-4">
                <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                  <p className="text-[10px] uppercase font-bold text-yellow-500 tracking-widest mb-1">
                    Selected Journey
                  </p>
                  <p className="text-sm font-black text-white uppercase">
                    {selectedPackage}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="booking-input"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    required
                    className="booking-input"
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <label className="text-[9px] uppercase font-bold text-gray-500 mb-1 block">
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      className="booking-input py-[9px]"
                      style={{ colorScheme: "dark" }}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase font-bold text-gray-500 mb-1 block">
                      Adults
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="0"
                      className="booking-input"
                      onChange={(e) =>
                        setFormData({ ...formData, adults: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase font-bold text-gray-500 mb-1 block">
                      Kids
                    </label>
                    <input
                      type="number"
                      min="0"
                      placeholder="0"
                      className="booking-input"
                      onChange={(e) =>
                        setFormData({ ...formData, kids: e.target.value })
                      }
                    />
                  </div>
                </div>

                <textarea
                  placeholder="Special Requirements / Message"
                  rows="3"
                  className="booking-input resize-none w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>

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
        .booking-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: white;
          outline: none;
          transition: all 0.2s;
        }
        .booking-input:focus {
          border-color: #eab308;
          background: rgba(255, 255, 255, 0.08);
        }
      `}</style>

      <style jsx global>{`
        .tour-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(to bottom, #ffe7a3, #d4af37) !important;
          width: 30px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default TourPackages;
