import { Users, Award, BookOpen, GraduationCap } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: '10,000+', label: 'Students Taught' },
    { icon: <Award className="h-6 w-6" />, value: '95%', label: 'Success Rate' },
    { icon: <BookOpen className="h-6 w-6" />, value: '50+', label: 'Courses' },
    { icon: <GraduationCap className="h-6 w-6" />, value: '100+', label: 'Expert Instructors' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold sm:text-5xl">
          <span className="text-gray-900">About</span>
          <span className="text-green-600 ml-3">Pro</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600">Transforming Education, Empowering Futures</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6">
            Founded in 2020, EduPro has grown from a small startup to a leading online education platform. 
            Our mission is to make quality education accessible to everyone, everywhere.
          </p>
          <p className="text-lg text-gray-600">
            We believe in the power of education to transform lives and create opportunities. 
            Through our innovative learning platform and expert instructors, we've helped thousands 
            of students achieve their career goals.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Team collaboration"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-center text-green-600 mb-4">{stat.icon}</div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 rounded-2xl p-8 lg:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in everything we do, from course content to student support.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
            <p className="text-gray-600">
              We embrace new technologies and teaching methods to provide the best learning experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
            <p className="text-gray-600">
              We foster a supportive community where students can learn, grow, and succeed together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;