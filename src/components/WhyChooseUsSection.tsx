import React from 'react';

const WhyChooseUsSection = () => {
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

  return (
    <section className="pt-6 pb-6 border-t border-gray-100 bg-techlearn-lightblue mt-0">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">WHY CHOOSE US</h2>
        
        <p className="text-center mb-12">We provide personalized learning experiences that go beyond traditional training.</p>
        
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div key={reason.id} className="flex items-start bg-white p-6 rounded-lg shadow-sm h-full">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-4">
                {reason.id}
              </div>
              <div>
                <h3 className="font-bold mb-2 text-lg">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;