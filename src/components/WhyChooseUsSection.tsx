import React, { useEffect, useRef } from 'react';

const WhyChooseUsSection = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      id: 1,
      title: "80:20 Approach",
      description: "Focus on Practical vs Theory which makes industry-oriented practical knowledge."
    },
    {
      id: 2,
      title: "Career Guidance",
      description: "Mock interviews for positive impression. Offer in-top companies that fits the prospect's best."
    },
    {
      id: 3,
      title: "Blended Learning",
      description: "Learn from best of both the worlds - from Corporate Dudes in classrooms to 24x7 Digital Learning Portal."
    },
    {
      id: 4,
      title: "Study Material",
      description: "Extensive study material for each enrolled course to sit, relax and code with a cup of coffee."
    },
    {
      id: 5,
      title: "Certificate",
      description: "Get a certificate from TechLearn with course completion certificates."
    },
    {
      id: 6,
      title: "Final Delivery",
      description: "Cover the dealt and actually deliver what you promised. Better to under-promise and over-deliver."
    }
  ];

  // Adding styles inline with the component
  const styles = {
    slideLeft: {
      opacity: 0,
      transform: 'translateX(-50px)',
      transition: 'opacity 0.5s ease, transform 0.5s ease',
    },
    slideRight: {
      opacity: 0,
      transform: 'translateX(50px)',
      transition: 'opacity 0.5s ease, transform 0.5s ease',
    },
    animate: {
      opacity: 1,
      transform: 'translateX(0)',
    }
  };

  return (
    <section className="py-16 border-t border-gray-100 bg-techlearn-lightblue">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">WHY CHOOSE US</h2>
        
        <p className="text-base text-gray-600 text-center mb-12">We provide personalized learning experiences that go beyond traditional training.</p>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            // Determine if card should be on left or right side (in 2-column layout)
            const isLeftColumn = index % 2 === 0;
            
            return (
              <div 
                key={reason.id}
                ref={(el) => el && (cardsRef.current[index] = el)}
                className="flex items-start bg-white p-6 rounded-lg shadow-sm h-full"
                style={{ 
                  ...(isLeftColumn ? styles.slideLeft : styles.slideRight),
                  transitionDelay: `${index * 0.15}s` 
                }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-4">
                  {reason.id}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{reason.title}</h3>
                  <p className="text-base text-gray-600">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style >{`
        .animate {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUsSection;