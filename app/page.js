import FleetSection from "@/components/FleetSection";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import TourPackages from "@/components/TourPackages";



export default function Home() {
  return (
    <div>
      <Hero/>
      <TourPackages/>
      <FleetSection/>
      <Testimonials/>
    </div>
  );
}
