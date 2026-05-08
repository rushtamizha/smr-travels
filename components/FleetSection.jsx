"use client";
import React, { useState } from "react";
import { Car, Send, X, Users, Fuel, Gauge } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const fleetData = [
  { id: 1, name: "Luxury Sedan", price: 13, image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800", capacity: "4+1" },
  { id: 2, name: "Innova", price: 18, image: "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?auto=format&fit=crop&q=80&w=800", capacity: "6+1" },
  { id: 3, name: "Innova Crysta", price: 20, image: "https://images.unsplash.com/photo-1621348160394-211805937224?auto=format&fit=crop&q=80&w=800", capacity: "7+1" },
  { id: 4, name: "Ertiga", price: 17, image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800", capacity: "6+1" },
  { id: 5, name: "Tempo Traveler", price: 24, image: "https://images.unsplash.com/photo-1532939163844-547f958e91b4?auto=format&fit=crop&q=80&w=800", capacity: "12-17" },
  { id: 6, name: "Urbania", price: 35, image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800", capacity: "17+1" },
  { id: 7, name: "Coach Van", price: 26, image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800", capacity: "21+1" },
  { id: 8, name: "Coach Van AC", price: 32, image: "https://images.unsplash.com/photo-1562620644-65bb470344c4?auto=format&fit=crop&q=80&w=800", capacity: "21+1" },
];

const FleetSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const openForm = (name) => {
    setSelectedVehicle(name);
    setIsModalOpen(true);
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const form = e.target;
    const text = `*New Vehicle Booking*%0A*Vehicle:* ${selectedVehicle}%0A*Name:* ${form.name.value}%0A*Date:* ${form.date.value}%0A*Message:* ${form.message.value}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, "_blank");
  };

  return (
    <section className="py-24 bg-[#050505] text-white">
      <div className="container px-6 mx-auto">
        
        {/* Title Section */}
        <div className="mb-16">
          <h2 className="text-3xl  font-black uppercase tracking-tighter mb-4 leading-none">
            Our Premium <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFE7A3] to-[#D4AF37]">Fleet Collection</span>
          </h2>
          <div className="h-1 w-20 bg-yellow-500 rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetData.map((car) => (
            <motion.div 
              key={car.id}
              whileHover={{ y: -10 }}
              className="group relative bg-[#0f0f0f] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-yellow-500/30"
            >
              {/* Image Area */}
              <div className="relative h-48 overflow-hidden">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-500 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-yellow-500/20">
                    Premium Class
                  </span>
                </div>
              </div>

              {/* Details Area */}
              <div className="p-6">
                <h3 className="text-lg font-black uppercase tracking-tight mb-4 group-hover:text-yellow-400 transition-colors">
                  {car.name}
                </h3>
                
                <div className="flex items-center gap-4 mb-6">
                   <div className="flex items-center gap-1.5 text-gray-500">
                      <Users size={14} className="text-yellow-600" />
                      <span className="text-[10px] font-bold">{car.capacity}</span>
                   </div>
                   <div className="flex items-center gap-1.5 text-gray-500">
                      <Gauge size={14} className="text-yellow-600" />
                      <span className="text-[10px] font-bold">Unlimited</span>
                   </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Per Kilometer</p>
                    <p className="text-xl font-black text-white">₹{car.price}<span className="text-xs text-gray-500 font-medium">/km</span></p>
                  </div>
                  
                  <button 
                    onClick={() => openForm(car.name)}
                    className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-yellow-600 to-yellow-300 flex items-center justify-center text-black shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/30 transition-all"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Modal (Reuse the same Logic) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full max-w-md bg-[#0f0f0f] border border-yellow-500/20 rounded-[2.5rem] p-8">
               <div className="flex justify-between mb-6">
                 <h3 className="text-xl font-black uppercase">Book {selectedVehicle}</h3>
                 <button onClick={() => setIsModalOpen(false)}><X className="text-gray-500 hover:text-white" /></button>
               </div>
               <form onSubmit={handleWhatsApp} className="space-y-4">
                  <input name="name" type="text" placeholder="Full Name" required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm outline-none focus:border-yellow-500" />
                  <input name="date" type="date" required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm outline-none focus:border-yellow-500" style={{colorScheme:'dark'}}/>
                  <textarea name="message" placeholder="Trip Details (Pickup location, Days...)" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm outline-none focus:border-yellow-500 h-24 resize-none" />
                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-black uppercase rounded-xl tracking-widest text-xs flex items-center justify-center gap-2">
                    Confirm on WhatsApp <Send size={16}/>
                  </button>
               </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FleetSection;