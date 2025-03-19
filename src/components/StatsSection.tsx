import { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, startCounting }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!startCounting) return;
    
    const startTime = Date.now();
    const endValue = parseInt(end);
    
    const animate = () => {
      const currentTime = Date.now();
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        countRef.current = Math.floor(endValue * progress);
        setCount(countRef.current);
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, startCounting]);

  return <>{count.toLocaleString()}<span className="text-blue-500">+</span></>;
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: "https://img.icons8.com/pulsar-color/100/student-male.png",
      title: "Students Trained",
      value: "15000",
      description: "Empowering future tech leaders"
    },
    {
      icon: "https://img.icons8.com/pulsar-color/100/teacher.png",
      title: "Faculties Trained",
      value: "5500",
      description: "Expert educators & mentors"
    },
    {
      icon: "https://img.icons8.com/pulsar-color/100/company.png",
      title: "Corporates Trained",
      value: "1750",
      description: "Industry partnerships"
    }
  ];

  return (
    <section ref={sectionRef} className="py-8 -mt-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition-all duration-500" />
              <div className="relative p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="p-2 bg-blue-50/80 rounded-full">
                    <img src={stat.icon} alt={stat.title} className="w-10 h-10" />
                  </div>
                  <h3 className="text-base font-bold text-gray-800">{stat.title}</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    <AnimatedCounter end={stat.value} startCounting={isVisible} />
                  </p>
                  <p className="text-xs text-gray-600">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
