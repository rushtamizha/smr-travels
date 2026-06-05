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
                "name": "Sarath K",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjV8mOw2FgQv3Trnnm2GIFbQVtgl1e2_y-aFMmRia3ChPHsfY1kd=s120-c-rp-mo-br100",
                "time": "2026-06-01T13:14:56.356Z",
                "rating": 5,
                "description": "Traveling in your vehicle was comfortable and stress-free for us,Thank you very much for waiting for us for such a long time at so many tourist spots and bringing us along.💚💚👍👍👍👌👌👌👏👏👏",
                "images": null
            },
            {
                "name": "M.Mahesh Waran",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjXf1QmMJungGPAhLKPFQlJGCXcD_ziR5yPEkRqpEOQWo6ejtObtVQ=s120-c-rp-mo-ba12-br100",
                "time": "2026-05-27T17:58:22.695Z",
                "rating": 5,
                "description": "Good maintainance car, and very polite driver,self drive car also very low price,very experienced driver",
                "images": null
            },
            {
                "name": "Karna 8800",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocLGhKN9yK6b9p74QpMejSdjHoL7C_zjyWEm5nwPDbamJxlftA=s120-c-rp-mo-br100",
                "time": "2026-05-27T02:59:17.146Z",
                "rating": 5,
                "description": "Reasonable price and well maintained car driver is also helpful maintained she is worth full for money...",
                "images": null
            },
            {
                "name": "karthi keyan",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjVYb-jnWygxJHwWSPrfMNlhu77wvipTHZ-vLwaPs4yopjsXo9yL=s120-c-rp-mo-br100",
                "time": "2026-05-26T16:39:53.913Z",
                "rating": 5,
                "description": "Good service",
                "images": null
            },
            {
                "name": "Thayu Manavan",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocLeXV9y_epjEr9QhlD1fkz1Z7Wi7IfABskstDGEsqIME6-qog=s120-c-rp-mo-br100",
                "time": "2026-05-26T14:35:57.589Z",
                "rating": 5,
                "description": "Good travel",
                "images": null
            },
            {
                "name": "Rockford Rajesh",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjWRtiDYCvXvElYrTMJGmUSufbKZM7fPBX-wVoUYrTKN5DPu4YhL=s120-c-rp-mo-br100",
                "time": "2026-05-26T13:55:51.525Z",
                "rating": 5,
                "description": "Excellent Guides & Drivers",
                "images": null
            },
            {
                "name": "Elango",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjWuL2DOCLWmNEmMnfNrhNU39ch4t6ZV1z3vTy3kI18ODwp5oiUo=s120-c-rp-mo-br100",
                "time": "2026-05-26T13:14:46.479Z",
                "rating": 5,
                "description": "Very nice travels and good drivers",
                "images": null
            },
            {
                "name": "Divakar gayu",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjX4prwYE6btwOdG57YrRA_vMMGEFZjYkurMxeNrYYCAM79iyEs=s120-c-rp-mo-br100",
                "time": "2026-05-26T12:53:33.916Z",
                "rating": 5,
                "description": "Good service 💯",
                "images": null
            },
            {
                "name": "Manikandan Raina",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjVICIOnrGDFtnBHUlYdNTFCPvEOxO5AXz-NbyUntUGlTEY8SObG=s120-c-rp-mo-br100",
                "time": "2026-05-26T12:42:21.285Z",
                "rating": 5,
                "description": "Smr travel in safe journey and smooth driving and time pickup and traveling mood in happy",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIABIhCCcmnruh6spWin4pmZtSOs&fid=0x0:0x6758b2d034c4734f"
                ]
            },
            {
                "name": "Surendhar S",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjW6TJRnRboxEih0g0Sxb7HKkiFixw5NP97Kju-aRLnZBt26AXCo=s120-c-rp-mo-ba12-br100",
                "time": "2026-05-26T12:35:06.625Z",
                "rating": 5,
                "description": "Good Service and Affordable price. Thank you Rajendran😊",
                "images": null
            },
            {
                "name": "Simply Rider",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocK3M1aBC6HqmdtGt5XXkR6rp3xRd04upUo10oHXAt3-DVkh7J0=s120-c-rp-mo-br100",
                "time": "2026-05-26T12:25:39.589Z",
                "rating": 5,
                "description": "👍👍👍best experience",
                "images": null
            },
            {
                "name": "S. BALASUBRAMANI",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjXO9PyxXNbD8yCBYM5AzpqfTqrkGgaxE25OlHzSi69LRol8MLcTEg=s120-c-rp-mo-br100",
                "time": "2026-05-26T12:10:06.624Z",
                "rating": 5,
                "description": "Very nice",
                "images": null
            },
            {
                "name": "Muthu Official",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocLyncS1tsZjPpmzVV8W_mLgOkds5y7-mYDZwLi_Shu-qGnLbw=s120-c-rp-mo-br100",
                "time": "2026-05-26T12:02:00.005Z",
                "rating": 5,
                "description": "Good time meing k up",
                "images": null
            },
            {
                "name": "Vinoth Vino",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjV2dYRbyi4WH2gwdgBpxB3XEdenMo5_sM2g6hRJBphBL5MbEjzh=s120-c-rp-mo-br100",
                "time": "2026-05-26T11:43:14.275Z",
                "rating": 5,
                "description": "Nice drive 😄",
                "images": null
            },
            {
                "name": "Abdul daheeir",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjXyUptNYG_ROr286PPUh2V1R2UHfgEQq7fQTtcjqo2qn6B6PJSK=s120-c-rp-mo-br100",
                "time": "2026-05-26T11:20:32.450Z",
                "rating": 5,
                "description": "Bmw car 100km only 2,000rs with petrol I was grab this deal with smr travel... You also get this deal and enjoy",
                "images": null
            },
            {
                "name": "PRAVEEN KUMAR",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjWIKKaB5XGtyGmMkVuwlF0fOxIDnrBHLCtYRx-rwtBPyjMortxC=s120-c-rp-mo-br100",
                "time": "2026-05-26T11:13:56.802Z",
                "rating": 5,
                "description": "Best travels",
                "images": null
            },
            {
                "name": "Salman Khan",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjWYYIVh1_UdK7P700zHIHR1H8TsDg9ErJfwY-a42Y5D3iUubAjl=s120-c-rp-mo-ba12-br100",
                "time": "2026-05-26T11:09:37.867Z",
                "rating": 5,
                "description": "Gud service…on time cab…neat and clean Vechiles",
                "images": null
            },
            {
                "name": "Vishnu",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjUC_8H-0yftD0xUXtmrlYm39U0_rv34eWow3xcmvA4EZaB6gkzQrA=s120-c-rp-mo-ba12-br100",
                "time": "2026-05-26T11:09:34.046Z",
                "rating": 5,
                "description": "Excellent service! Punctual and dedicated to work. 💯 #Service #Punctuality #Dedication",
                "images": null
            },
            {
                "name": "Rajesh Kanna",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjVzR2jqeHF-fMZLq_sSLpw0aXFMXApk9K8dunXv49SH4J0fNW_h=s120-c-rp-mo-ba12-br100",
                "time": "2026-05-26T10:57:34.157Z",
                "rating": 5,
                "description": "Best cab service. Friendly driver and experienced person.",
                "images": null
            },
            {
                "name": "Ranjith krish",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocLbSkznMVeuXlnvqiCcMfr6p_Rc34Qi2FgyQv_bKt7Ry_Cyeg=s120-c-rp-mo-br100",
                "time": "2026-05-26T10:56:19.544Z",
                "rating": 5,
                "description": "I booked family trip and going to kodaikanal. Good experience, good location awareness",
                "images": null
            }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#050505] overflow-hidden">
      <div className="container px-6 mx-auto">
        
        {/* Header */}
        <div className="text-start mb-16">
          <h2 className="text-3xl  font-black uppercase tracking-tighter mb-2 text-white">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ffe100] to-[#ffb700]">Perspectives</span>
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
                  "{item.description}"
                </p>

                {/* Author Details */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-600 to-yellow-300 flex items-center justify-center text-black font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase text-xs tracking-wider">{item.name}</h4>
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