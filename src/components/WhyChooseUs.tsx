import { ShieldCheck, Clock, Award, Users, Globe, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: <ShieldCheck size={28} />, title: 'Industry-Relevant Curriculum', description: 'Designed with industry leaders for in-demand skills.' },
  { icon: <Clock size={28} />, title: 'Flexible Learning', description: 'Study anytime with our adaptive schedule.' },
  { icon: <Award size={28} />, title: 'Recognized Certifications', description: 'Certifications valued by top employers.' },
  { icon: <Users size={28} />, title: 'Expert Instructors', description: 'Learn from professionals with real-world experience.' },
  { icon: <Globe size={28} />, title: 'Global Community', description: 'Connect with learners worldwide & grow your network.' },
  { icon: <Zap size={28} />, title: 'Career Acceleration', description: 'Upskill quickly and advance your career.' }
];

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="rounded-2xl bg-black/60 backdrop-blur-sm p-8 border border-gray-800 
                 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group
                 relative overflow-hidden feature-item"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
    >
      <div className="bg-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 
                    text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="wavy-bg"></div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-5 py-3 rounded-full text-base font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
            Why Choose Us?
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            What Makes Us <span className="text-gold-gradient">Different</span>
          </h2>
          <p className="text-gray-300">
            We're committed to providing an exceptional learning experience that sets you up for success in your career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 features-wrapper">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .feature-item {
          position: relative;
          z-index: 1;
        }

        .feature-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 20%, rgba(176,147,76,0.1) 50%, transparent 80%);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .feature-item:hover::before {
          transform: translateX(100%);
        }

        .wavy-bg {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(45deg, 
            transparent, 
            rgba(176,147,76,0.05) 25%,
            rgba(176,147,76,0.1) 50%,
            rgba(176,147,76,0.05) 75%,
            transparent
          );
          transform: translateY(100%);
          transition: transform 0.3s ease-in-out;
        }

        .feature-item:hover .wavy-bg {
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
