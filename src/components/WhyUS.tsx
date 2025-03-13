import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    'Industry-leading experts as instructors',
    'Flexible learning schedule',
    'Hands-on practical projects',
    'Career guidance and support',
    'Lifetime access to course materials',
    'Regular curriculum updates',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We stand out from the competition with our commitment to excellence and student success.
          </p>
          <div className="mt-8 space-y-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="ml-3 text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <img
            className="rounded-xl shadow-xl"
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Students collaborating"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;