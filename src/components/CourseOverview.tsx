
import { useState } from 'react';
import { Check, Star, Clock, Users, BookOpen, Award } from 'lucide-react';

const CourseOverview = () => {
  const [visibleTab, setVisibleTab] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'business', name: 'Business' },
  ];
  
  const courses = [
    {
      id: 1,
      title: 'Advanced Web Development Masterclass',
      category: 'development',
      rating: 4.9,
      students: 1234,
      duration: '12 weeks',
      level: 'Advanced',
      price: 499,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'UI/UX Design Principles',
      category: 'design',
      rating: 4.8,
      students: 987,
      duration: '8 weeks',
      level: 'Intermediate',
      price: 399,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80',
      featured: false
    },
    {
      id: 3,
      title: 'Digital Marketing Strategy',
      category: 'marketing',
      rating: 4.7,
      students: 1543,
      duration: '6 weeks',
      level: 'Beginner',
      price: 349,
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      featured: true
    },
    {
      id: 4,
      title: 'Business Leadership & Management',
      category: 'business',
      rating: 4.9,
      students: 876,
      duration: '10 weeks',
      level: 'Advanced',
      price: 549,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      featured: false
    },
  ];
  
  const filteredCourses = visibleTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === visibleTab);

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
            Our Premium Courses
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">Courses Designed For <span className="text-gold-gradient">Professional Growth</span></h2>
          <p className="text-gray-300">
            Our expert-led courses are crafted to provide you with the skills and knowledge needed to excel in today's competitive market.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setVisibleTab(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                visibleTab === category.id 
                  ? 'bg-gold text-black shadow-lg' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="rounded-2xl overflow-hidden bg-gray-800/50 border border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 hover:border-gold/30 group animate-float"
              style={{ animationDelay: `${course.id * 0.2}s` }}
            >
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {course.featured && (
                  <div className="absolute top-3 right-3 bg-gold text-black text-xs font-semibold px-2.5 py-1 rounded">
                    Featured
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium bg-gray-700/80 text-gray-300 px-2.5 py-1 rounded">
                    {course.level}
                  </span>
                  <span className="text-xs font-medium bg-gray-700/80 text-gray-300 px-2.5 py-1 rounded flex items-center gap-1">
                    <Star size={12} className="fill-gold text-gold" />
                    {course.rating}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {course.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                    <Clock size={14} className="text-gold" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                    <Users size={14} className="text-gold" />
                    {course.students} students
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                    <BookOpen size={14} className="text-gold" />
                    10 modules
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                    <Award size={14} className="text-gold" />
                    Certificate
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="text-gold font-bold">${course.price}</div>
                  <button className="px-4 py-1.5 rounded-full bg-gold/20 text-gold border border-gold/40 text-sm font-medium transition-all duration-300 hover:bg-gold hover:text-black">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="btn-primary inline-flex items-center gap-2">
            View All Courses
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
