import {
  MapPin,
  Ship,
  Waves,
  Car,
  Package,
  Home,
  Hotel,
  Info,
  Camera,
  Users,
  Star,
  Palmtree,
  Mountain,
  Briefcase,
  Heart,
  Zap,
} from "lucide-react";
import { BsCash } from "react-icons/bs";

export const companyConfig = {
  name: "SMR TOURS & Travels",
  founderImg: "founder.jpg",
  logo: "logo.jpg",
  contact: {
    phone: "+91 9626850192",
    whatsapp: "919626850192", // International format for URL linking
    email: "info@maheshtours.com", // Added missing data
  },
  address: {
    street: "133/Chellandiamman Kovil Street",
    city: "Valparai",
    state: "Tamil Nadu",
    pincode: "642127",
    country: "India",
  },
  socials: {
    facebook: "https://facebook.com/maheshtours",
    instagram: "https://instagram.com/maheshtours",
    googleMaps: "https://maps.app.goo.gl/example",
  },
  metadata: {
    foundingYear: "2000s",
    serviceAreas: ["Valparai", "Pollachi", "Kerala", "South India"],
  },
};



// data/data.js
export const tourPackages = [
  // --- TAMIL NADU (6 PACKAGES) ---
  {
    id: 1,
    title: "Nilgiri Executive Circuit",
    duration: "The Nilgiri Executive Circuit is a premium, strategic, and vehicular touring route designed to connect the key economic, administrative, and scenic hubs within the Nilgiris district of Tamil Nadu",
    basePrice: "On Request",
    image: "/packages/nilgris.jpg",
    tag: "Hill Station",
  },
  {
    id: 2,
    title: "Kodaikanal Premium Escape",
    duration: "Eco Escape in Kodaikanal offers a premium, secluded getaway located about an hour (45 km) from the main town in Kilavarai",
    basePrice: "On Request",
    image: "/packages/Kodaikanal.webp",
    tag: "Signature Retreat",
  },
  {
    id: 3,
    title: "Rameswaram Spiritual Corridor",
    duration: "The Ramanathaswamy Temple corridor in Rameswaram, Tamil Nadu, is renowned as the world’s longest temple corridor, stretching over \(1,200\) meters with 1,212 intricately carved, 30-foot-tall sandstone pillars",
    basePrice: "On Request",
    image: "/packages/Rameswaram.jpg",
    tag: "Pilgrimage",
  },
  {
    id: 4,
    title: "Madurai Heritage Immersion",
    duration: "Heritage Madurai is a serene 5-star, 17-acre resort that offers a tranquil, eco-chic retreat in the heart of Tamil Nadu’s cultural capital",
    basePrice: "On Request",
    image: "/packages/Madurai.jpg",
    tag: "Cultural Tour",
  },
  {
    id: 5,
    title: "Chennai – Pondicherry Coastal Route",
    duration: "The Chennai–Pondicherry Coastal Route (East Coast Road/ECR) is a scenic 150–160 km drive along the Bay of Bengal, taking roughly 3–4 hours",
    basePrice: "On Request",
    image: "/packages/Mahabalipuram.webp",
    tag: "Heritage Coastal",
  },
  {
    id: 6,
    title: "Kanyakumari Southern Tip",
    duration: "Kanyakumari, located in Tamil Nadu, is the southernmost tip of mainland India, known as the Land's End",
    basePrice: "On Request",
    image: "/packages/Kanyakumari.jpg",
    tag: "Southern Landmark",
  },

  // --- KERALA (7 PACKAGES) ---
  {
    id: 7,
    title: "Munnar Highland Reserve",
    duration: "Munnar is a renowned hill station in Kerala, India, situated at an altitude of approximately 1,600 meters (5,200 ft) in the Western Ghats mountain range",
    basePrice: "On Request",
    image: "/packages/munnar.webp",
    tag: "Highland Tea",
  },
  {
    id: 8,
    title: "Alleppey Private Houseboat",
    duration: "Alleppey, officially known as Alappuzha, is a charming coastal town in Kerala, often referred to as the Venice of the East",
    basePrice: "On Request",
    image: "/packages/alleppey.jpg",
    tag: "Private Luxury",
  },
  {
    id: 9,
    title: "Thekkady Wildlife & Spice",
    duration: "Thekkady, located in Kerala’s Idukki district, is a premier eco-tourism destination renowned for the Periyar Tiger Reserve and aromatic spice plantations.",
    basePrice: "On Request",
    image: "/packages/thekkady.jpg",
    tag: "Eco Safari",
  },
  {
    id: 10,
    title: "Wayanad Forest & Waterfall",
    duration: "Wayanad, a scenic hill district in northern Kerala, is a nature lover's paradise defined by lush, dense forests and mesmerizing waterfalls",
    basePrice: "On Request",
    image: "/packages/wayanad.jpg",
    tag: "Nature Circuit",
  },
  {
    id: 11,
    title: "Kochi Heritage & Trade Route",
    duration: "Kochi (formerly Cochin) is a premier heritage and trade hub on India's Malabar Coast, renowned as the Queen of the Arabian Sea",
    basePrice: "On Request",
    image: "/packages/kochi.jpg",
    tag: "Historical Port",
  },
  {
    id: 12,
    title: "Kovalam – Varkala Retreat",
    duration: "A Kovalam-Varkala retreat offers the perfect contrast of Kerala’s coastal beauty",
    basePrice: "On Request",
    image: "/packages/kovalam.webp",
    tag: "Coastal Leisure",
  },

  // --- KARNATAKA & GOA (6 PACKAGES) ---
  {
    id: 13,
    title: "Coorg Plantation Retreat",
    duration: "Coorg plantation retreats offer a serene escape into nature, usually featuring cozy cottages or homestays located directly within working coffee, pepper, and cardamom estates near Madikeri.",
    basePrice: "On Request",
    image: "/packages/coorg.avif",
    tag: "Coffee Trail",
  },
  {
    id: 14,
    title: "Mysore Royal Heritage",
    duration: "Mysore (officially Mysuru), the Cultural Capital of Karnataka, is renowned as a premier royal heritage city in Southern India",
    basePrice: "On Request",
    image: "/packages/mysore.webp",
    tag: "Royal Palace",
  },
  {
    id: 15,
    title: "Chikmagalur Mountain Exp.",
    duration: "Chikmagalur, known as the Coffee Land of Karnataka, is a premier mountain destination in the Western Ghats featuring the state's highest peak, Mullayanagiri (1,930m)",
    basePrice: "On Request",
    image: "/packages/chikmagalur.webp",
    tag: "Highland Drive",
  },
  {
    id: 23,
    title: "Bangalore Urban Signature",
    duration: "Bengaluru Urban is the administrative district encompassing Bangalore City, Karnataka’s capital",
    basePrice: "On Request",
    image: "/packages/Garden.jpg",
    tag: "Urban Garden",
  },
  {
    id: 24,
    title: "Srirangam",
    duration: "Srirangam, located on an island in Tamil Nadu's Tiruchirappalli district, is home to the Ranganathaswamy Temple, the world's largest functioning Hindu temple complex, spanning 156 acres",
    basePrice: "On Request",
    image: "/packages/Sri-Ranganathaswamy-Temple-Cover.webp",
    tag: "Urban Garden",
  },
  {
    id: 25,
    title: "Thiruvanaikovil",
    duration: "Thiruvanaikovil (also spelled Tiruvanaikaval) is a prominent residential locality and major pilgrimage site in Tiruchirappalli (Trichy), Tamil Nadu, known for its deep spiritual significance and historical architecture",
    basePrice: "On Request",
    image: "/packages/Thiruvanaikovil.jpg",
    tag: "Urban Garden",
  },
  {
    id: 26,
    title: "Thiruchendur",
    duration: "Thiruchendur, located on the Gulf of Mannar in Tamil Nadu, is home to the Arulmigu Subramaniya Swamy Temple, one of the six sacred abodes (Arupadaiveedu) of Lord Murugan",
    basePrice: "On Request",
    image: "/packages/Thiruchendur.jpg",
    tag: "Urban Garden",
  }
];
