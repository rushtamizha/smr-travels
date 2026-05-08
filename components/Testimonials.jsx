"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { Quote, Star } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Business Traveler",
    text: "The Innova Crysta was spotless and the driver was extremely professional. Best premium car service in the region. Highly recommended for corporate trips.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "International Tourist",
    text: "Booking our Valparai trip was seamless. The gold-standard service mentioned on their site is real. The Urbania was perfect for our large group.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rohan Das",
    role: "Family Vacation",
    text: "Exceptional experience! The per-km pricing is transparent with no hidden costs. The driver knew all the best spots in the Western Ghats.",
    rating: 5,
  },
  {
    id: 4,
    name: "Priyanka Nair",
    role: "Solo Traveler",
    text: "Safety was my priority and they delivered. Constant communication and a very well-maintained Sedan. Truly a 5-star experience.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#050505] overflow-hidden">
      <div className="container px-6 mx-auto">
        
        {/* Header */}
        <div className="text-start mb-16">
          <h2 className="text-3xl  font-black uppercase tracking-tighter mb-2 text-white">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFE7A3] to-[#D4AF37]">Perspectives</span>
          </h2>
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-bold">Verified Google Reviews</p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          className="testimonial-swiper !pb-20 overflow-visible"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 group hover:border-yellow-500/30">
                
                {/* Google Brand Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full p-2">
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    </div>
                    <div>
                        <p className="text-white text-[11px] font-black uppercase tracking-widest">Google Review</p>
                        <div className="flex gap-0.5 mt-1">
                            {[...Array(item.rating)].map((_, i) => (
                                <Star key={i} size={10} className="fill-yellow-500 text-yellow-500" />
                            ))}
                        </div>
                    </div>
                  </div>
                  <Quote className="text-white/10 group-hover:text-yellow-500/20 transition-colors" size={40} />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed italic mb-8">
                  "{item.text}"
                </p>

                {/* Author Details */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-600 to-yellow-300 flex items-center justify-center text-black font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase text-xs tracking-wider">{item.name}</h4>
                    <p className="text-yellow-500/60 text-[10px] font-bold uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2) !important;
          opacity: 1 !important;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #D4AF37 !important;
          width: 30px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;