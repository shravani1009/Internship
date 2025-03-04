
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { BookOpen, Users, Award, PenTool, BarChart, Headphones, Monitor, FileText, Radio, Clock, Star, Target, CheckCircle } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      icon: <BookOpen size={24} />,
      title: 'Professional Courses',
      description: 'Comprehensive courses designed by industry experts to provide you with valuable skills and knowledge.'
    },
    {
      icon: <Monitor size={24} />,
      title: 'Online Workshops',
      description: 'Interactive sessions focused on specific skills and techniques led by experienced professionals.'
    },
    {
      icon: <PenTool size={24} />,
      title: 'Personalized Mentoring',
      description: 'One-on-one guidance from industry experts to help you navigate your career path effectively.'
    },
    {
      icon: <FileText size={24} />,
      title: 'Certification Programs',
      description: 'Industry-recognized certification programs that validate your expertise and boost your credentials.'
    },
    {
      icon: <Radio size={24} />,
      title: 'Career Consulting',
      description: 'Professional advice on career advancement, job search strategies, and interview preparation.'
    },
    {
      icon: <Target size={24} />,
      title: 'Corporate Training',
      description: 'Custom training solutions designed to meet the specific needs of organizations and teams.'
    }
  ];

  const features = [
    'Interactive learning experience',
    'Real-world projects and case studies',
    'Industry expert instructors',
    'Flexible learning schedule',
    'Lifetime access to course materials',
    'Regular content updates',
    'Community support',
    'Career resources'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-gold blur-[100px]"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-gold blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive <span className="text-gold-gradient">Learning Solutions</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              We offer a wide range of educational services designed to help you achieve your professional goals and advance your career.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Services Tailored to <span className="text-gold-gradient">Your Needs</span>
            </h2>
            <p className="text-gray-300">
              Explore our diverse range of educational services designed to help you excel in your professional journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Service Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block">
                Featured Service
              </span>
              <h2 className="text-3xl font-bold text-white">Professional Certification Programs</h2>
              <p className="text-gray-300">
                Our certification programs are designed to provide you with industry-recognized credentials that validate your expertise and set you apart in the job market.
              </p>
              <p className="text-gray-300">
                Each program combines comprehensive theoretical knowledge with practical application, ensuring you develop skills that are immediately applicable in your professional role.
              </p>
              <div className="space-y-3 pt-2">
                {features.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="btn-primary inline-flex mt-4">
                Explore Certification Programs
              </a>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-gold/20 shadow-[0_0_30px_rgba(176,147,76,0.1)]">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Professional Certification" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full border border-gold/30 opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 rounded-full border border-gold/20 opacity-30"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
              Key Features
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              What Sets Our <span className="text-gold-gradient">Services Apart</span>
            </h2>
            <p className="text-gray-300">
              We pride ourselves on delivering exceptional educational experiences that go beyond the ordinary.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users size={24} />, title: 'Expert Instructors', description: 'Learn from industry professionals with years of experience' },
              { icon: <PenTool size={24} />, title: 'Practical Focus', description: 'Apply your knowledge through real-world projects' },
              { icon: <Clock size={24} />, title: 'Flexible Learning', description: 'Study at your own pace with 24/7 access to materials' },
              { icon: <Star size={24} />, title: 'Quality Content', description: 'Meticulously crafted curriculum updated regularly' }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 transition-all duration-300 hover:border-gold/30 hover:shadow-lg animate-float text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gold/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6 text-gold">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
              Pricing
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Transparent <span className="text-gold-gradient">Pricing Plans</span>
            </h2>
            <p className="text-gray-300">
              Choose the plan that best suits your learning needs and professional goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Basic', 
                price: '$99',
                period: 'per course',
                description: 'Perfect for individuals looking to develop specific skills',
                features: [
                  'Access to selected course',
                  'Course completion certificate',
                  '6-month access to materials',
                  'Community forum access',
                  'Email support'
                ],
                buttonText: 'Get Started',
                highlight: false
              },
              { 
                title: 'Professional', 
                price: '$299',
                period: 'per quarter',
                description: 'Ideal for serious learners who want to master multiple skills',
                features: [
                  'Access to all courses in one category',
                  'Official certification',
                  'Lifetime access to materials',
                  'Community forum access',
                  'Priority email support',
                  'Monthly live Q&A sessions',
                  'Career resources'
                ],
                buttonText: 'Get Professional',
                highlight: true
              },
              { 
                title: 'Enterprise', 
                price: 'Custom',
                period: 'for teams',
                description: 'Tailored solutions for organizations of all sizes',
                features: [
                  'Custom training programs',
                  'Dedicated account manager',
                  'Team progress tracking',
                  'Custom certification',
                  'Private discussion forums',
                  '24/7 priority support',
                  'Onsite training options'
                ],
                buttonText: 'Contact Us',
                highlight: false
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-8 border transition-all duration-300 animate-float ${
                  plan.highlight 
                    ? 'bg-gradient-to-b from-gold/20 to-transparent border-gold/40 shadow-[0_0_30px_rgba(176,147,76,0.2)]' 
                    : 'bg-gray-800/50 border-gray-700 hover:border-gold/30'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-gold' : 'text-white'}`}>{plan.title}</h3>
                  <div className="text-3xl font-bold text-white mb-1">{plan.price}</div>
                  <div className="text-gray-400 text-sm">{plan.period}</div>
                </div>
                <p className="text-gray-300 text-center mb-6">{plan.description}</p>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle size={16} className={`mt-1 mr-3 flex-shrink-0 ${plan.highlight ? 'text-gold' : 'text-gray-400'}`} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button 
                  className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                    plan.highlight 
                      ? 'bg-gold text-black hover:bg-white hover:text-gold' 
                      : 'bg-gray-700 text-white hover:bg-gold hover:text-black'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
                FAQ
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                Frequently Asked <span className="text-gold-gradient">Questions</span>
              </h2>
              <p className="text-gray-300">
                Find answers to common questions about our services and offerings.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: 'How do I enroll in a course?',
                  answer: 'Enrolling in a course is simple. Browse our course catalog, select the course you\'re interested in, and click the "Enroll Now" button. Follow the prompts to complete the registration and payment process.'
                },
                {
                  question: 'Do courses have a time limit?',
                  answer: 'Basic courses provide 6-month access to materials, while Professional plan subscribers enjoy lifetime access. This information is clearly displayed on each course\'s details page before enrollment.'
                },
                {
                  question: 'Are the certifications industry-recognized?',
                  answer: 'Yes, our certifications are recognized by industry leaders and employers. They validate your expertise and can significantly enhance your resume and professional credibility.'
                },
                {
                  question: 'Can I switch between plans?',
                  answer: 'Yes, you can upgrade your plan at any time. If you\'re on the Basic plan and want to access more courses, you can easily upgrade to the Professional plan from your account dashboard.'
                },
                {
                  question: 'Do you offer refunds?',
                  answer: 'We offer a 7-day money-back guarantee for all courses. If you\'re not satisfied with the course content, you can request a full refund within 7 days of purchase.'
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gold blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gold blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-gray-900/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to <span className="text-gold-gradient">Get Started</span>?</h2>
              <p className="text-gray-300 md:text-lg">
                Take the first step towards advancing your career with our comprehensive educational services.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="#" className="btn-primary">
                Explore Courses
              </a>
              <a href="/contact" className="px-6 py-3 rounded-full border border-gold text-gold font-medium transition-all duration-300 hover:bg-gold hover:text-black text-center">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
