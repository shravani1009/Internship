import { Users, Award, BookOpen, GraduationCap, Star, Lightbulb, Heart, Rocket } from 'lucide-react';
import love from '../assets/LOVE.png';

const AboutPage = () => {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: '10,000+', label: 'Students Taught' },
    { icon: <Award className="h-6 w-6" />, value: '95%', label: 'Success Rate' },
    { icon: <BookOpen className="h-6 w-6" />, value: '50+', label: 'Courses' },
    { icon: <GraduationCap className="h-6 w-6" />, value: '100+', label: 'Expert Instructors' },
  ];

  const values = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Excellence",
      description: "Committed to delivering outstanding quality in every aspect of our educational services.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Continuously evolving and adapting to embrace new technologies and methodologies.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Collaboration",
      description: "Building strong partnerships and fostering a supportive learning community.",
      color: "from-green-400 to-cyan-500"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Empowerment",
      description: "Enabling individuals to reach their full potential and achieve their goals.",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-extrabold sm:text-5xl mb-4">
          <span className="text-gray-900">About</span>
          <span className="text-green-600 ml-3">RV Techlearn</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Transforming Education, Empowering Futures through Innovation and Excellence
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              RV TechLearn is more than just a training and consultancy firm—we are catalysts for growth, innovation, and success. Our mission is simple yet powerful: Learn, Innovate, and Succeed.
            </p>
          </div>
          
          <div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We are dedicated to empowering individuals, institutions, and organizations through industry-aligned training programs designed to meet modern demands. From cutting-edge technologies to time-tested methodologies, we provide the knowledge and skills essential for excelling in today's dynamic business landscape.
            </p>
          </div>

          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our consultancy services go beyond traditional approaches. With a team of seasoned experts, we work closely with businesses to identify challenges, craft strategic solutions, and implement effective processes that drive sustainable growth and long-term success.
            </p>
          </div>
          
          <div className="mt-8">
            <p className="text-2xl font-semibold text-green-600 italic py-4">
              Together, let's Learn, Innovate & Succeed.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={love}
            alt="Team collaboration"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
          <div className="absolute inset-0 bg-green-600 opacity-10 rounded-2xl"></div>
        </div>
      </div>

      
    
      <div className="mb-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${value.color} text-white mb-4`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;