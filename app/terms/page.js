"use client";
import React from "react";

const TermsPage = () => {
  const sections = [
    { title: "1. Booking & Payments", content: "Bookings with SMR Travels are confirmed upon a 25% advance. Final payment is due upon arrival at the destination." },
    { title: "2. Permit & Toll Charges", content: "For travel within Tamil Nadu, state permits are included. Interstate permits (Kerala/Karnataka) are extra. All toll and parking fees are to be settled by the client." },
    { title: "3. Driver Allowance", content: "For outstation trips, a daily driver allowance (Batta) is applicable for trips exceeding 10 PM or starting before 6 AM." },
    { title: "4. Vehicle Capacity", content: "To ensure safety, passenger count must not exceed the legal seating capacity of the vehicle booked (4+1 for Sedans, 7+1 for Innova)." }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20">
      <div className="container max-w-4xl px-6 mx-auto">
        <h1 className="text-4xl font-black uppercase tracking-tight mb-4">SMR <span className="text-yellow-500">Terms</span></h1>
        <p className="text-gray-500 text-sm mb-12 uppercase tracking-widest italic">Reliable Service. Transparent Terms.</p>
        
        <div className="space-y-12">
          {sections.map((s, i) => (
            <div key={i} className="border-l-2 border-yellow-500/30 pl-8">
              <h3 className="text-lg font-black uppercase mb-4 text-white">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TermsPage;