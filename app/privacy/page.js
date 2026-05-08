"use client";
import React from "react";

const PrivacyPage = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20">
      <div className="container max-w-4xl px-6 mx-auto">
        <h1 className="text-4xl font-black uppercase tracking-tight mb-4">Privacy <span className="text-yellow-500">Notice</span></h1>
        <p className="text-gray-500 text-sm mb-12 uppercase tracking-widest">SMR Travels Data Commitment</p>
        
        <div className="bg-[#0f0f0f] rounded-[2rem] p-8 md:p-12 border border-white/5 space-y-8">
          <section>
            <h3 className="text-white font-black uppercase mb-4 text-sm tracking-widest">Client Privacy</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We respect your privacy. SMR Travels only collects information (Name, Contact, Location) required for taxi dispatch and itinerary planning. We do not use your data for third-party marketing.
            </p>
          </section>

          <section>
            <h3 className="text-white font-black uppercase mb-4 text-sm tracking-widest">Secure Bookings</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our WhatsApp-based booking system ensures your details are transmitted directly to our official business number without middle-man interception.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;