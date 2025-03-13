

import { Star } from 'lucide-react';

const ClientsPage = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Web Developer',
      company: 'Tech Solutions Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      content: 'The Web Development Bootcamp completely transformed my career. The instructors were exceptional, and the hands-on projects gave me real-world experience.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist',
      company: 'Analytics Pro',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      content: 'The Data Science course was comprehensive and well-structured. I particularly enjoyed the practical applications and the supportive community.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Digital Marketing Manager',
      company: 'Growth Marketing',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      content: 'The Digital Marketing course helped me stay ahead of industry trends. The instructors shared valuable insights from their real-world experience.',
      rating: 5
    }
  ];

  const companies = [
    'Google',
    'Microsoft',
    'Amazon',
    'Apple',
    'Meta',
    'Netflix',
    'Adobe',
    'IBM'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 py-28">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold sm:text-5xl">
          <span className="text-gray-900">Success</span>
          <span className="text-green-600 ml-3">Stories</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600">See what our graduates have achieved</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-2xl p-12 mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Where Our Graduates Work
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center"
            >
              <span className="text-xl font-semibold text-gray-700">{company}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Success by Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
            <p className="text-gray-600">Employment Rate</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">50k+</div>
            <p className="text-gray-600">Career Transitions</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
            <p className="text-gray-600">Average Salary Increase</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
            <p className="text-gray-600">Learning Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;