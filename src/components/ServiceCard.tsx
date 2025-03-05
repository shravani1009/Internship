
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="rounded-2xl bg-black/60 backdrop-blur-sm p-8 border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:transform hover:translate-y-[-5px] hover:shadow-lg hover:shadow-gold/5 group"
      style={{ 
        animationDelay: `${delay}s`,
      }}
    >
      <div className="bg-black/40 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gold transition-colors duration-300">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ServiceCard;
