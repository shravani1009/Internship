import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Star } from 'lucide-react';
import codearchive from "../assets/codearchive.png";
import DMAIC from "../assets/DMAIC.jpeg";
import DMLOGO from "../assets/DMLOGO.jpg";
import eds from "../assets/eds.png";
import edusprint from "../assets/edusprint.png";
import IBM_ICE from "../assets/IBM_ICE.png";
import lotlite from "../assets/lotlite.png";
import microsoft from "../assets/microsoft.png";
import pnta from "../assets/pnta.png";
import pntrobotics from "../assets/pntrobotics.png";
import race from "../assets/race.png";
import remoteleraning from "../assets/remoteleraning.png";
import tt from "../assets/tt.png";
import udemy from "../assets/udemy.png";
import z1 from "../assets/z1.png";
import z3 from "../assets/z3.png";
import z4 from "../assets/z4.png";
import z5 from "../assets/z5.png";
import leonaImg from '../assets/leona.jpg';
import purvaImg from '../assets/PURVA.jpg';
import samImg from '../assets/sam.jpg';
import vimalImg from '../assets/vimal.jpg';
import yaswanthImg from '../assets/yaswanth-TL.jpg';
import ponImg from '../assets/pon.jpg';

const Clients = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clientLogos = [
    { name: "Code Archive", logo: codearchive },
    { name: "DMAIC", logo: DMAIC },
    { name: "DM Logo", logo: DMLOGO },
    { name: "EDS", logo: eds },
    { name: "Edusprint", logo: edusprint },
    { name: "IBM ICE", logo: IBM_ICE },
    { name: "Lotlite", logo: lotlite },
    { name: "Microsoft", logo: microsoft },
    { name: "PNTA", logo: pnta },
    { name: "PNT Robotics", logo: pntrobotics },
    { name: "Race", logo: race },
    { name: "Remote Learning", logo: remoteleraning },
    { name: "TT", logo: tt },
    { name: "Udemy", logo: udemy },
    { name: "Z1", logo: z1 },
    { name: "Z3", logo: z3 },
    { name: "Z4", logo: z4 },
    { name: "Z5", logo: z5 }
  ];

  const testimonials = [
    {
      name: 'Leona Alphonso',
      role: 'Student',
      image: leonaImg,
      quote: 'I was thoroughly impressed by RV TechLearn\'s ability to bridge the gap between theory and industry practice. Their training gave me the confidence to excel in my internship.',
      rating: 5
    },
    {
      name: 'Purva Nerkar',
      role: 'Corporate Professional',
      image: purvaImg,
      quote: 'The expertise of RV TechLearn truly stood out during our corporate training. Their trainers not only provided in-depth knowledge but also ensured it was relevant to our field.',
      rating: 5
    },
    {
      name: 'Sam Meshach',
      role: 'Student',
      image: samImg,
      quote: 'RV TechLearn\'s exceptional training bridged theoretical knowledge with practical skills perfectly. The experience and insights I gained were invaluable for my internship, making me feel well-prepared and confident.',
      rating: 5
    },
    {
      name: 'Vimalsrinivasan',
      role: 'Student at SECE',
      image: vimalImg,
      quote: 'I was amazed by how RV TechLearn integrated theory with real-world applications. Their training equipped me with essential skills, giving me the confidence to thrive in my internship and beyond.',
      rating: 5
    },
    {
      name: 'Yaswanth',
      role: 'Professional',
      image: yaswanthImg,
      quote: 'RV TechLearn\'s program effectively combined academic knowledge with hands-on practice. This approach greatly enhanced my skills and boosted my confidence during my internship, making it a success.',
      rating: 5
    },
    {
      name: 'Ponsankar',
      role: 'Student',
      image: ponImg,
      quote: 'The ability of RV TechLearn to merge theoretical concepts with practical application was outstanding. Their training provided me with the confidence and skills needed to excel during my internship.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gold blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gold blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-5 py-3 rounded-full text-base font-medium bg-gold/20 text-gold border border-gold/30 inline-block mb-4">
              Our Clients
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted by <span className="text-gold-gradient">Industry Leaders</span></h1>
            <p className="text-gray-300 text-lg">
              We collaborate with leading companies to develop curriculum and create career opportunities for our students.
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 items-center justify-items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-38 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-5 py-3 rounded-full text-base font-medium bg-gold/20 text-gold border border-gold/30 inline-block mb-4">
              Client Testimonials
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Students Say About Our <span className="text-gold-gradient">Programs</span>
            </h2>
            <p className="text-gray-300">
              Read about the experiences of our successful students and professionals
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-x-auto pb-8 hide-scrollbar">
              <div className="flex gap-6 w-max px-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-[350px] flex-shrink-0 rounded-2xl bg-gray-900 p-8 border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/5 snap-center">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-gold"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`inline-block mr-1 ${i < testimonial.rating ? 'text-gold fill-gold' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-300">"{testimonial.quote}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Clients;
