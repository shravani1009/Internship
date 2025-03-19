const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">ABOUT US</h2>
        
        <p className="text-base text-gray-600 text-center mb-12">Leading hub for extensive training and consultancy services</p>
        
        <div className="max-w-4xl mx-auto">
          <p className="mb-6 text-base text-gray-600 leading-relaxed">
            We offer a unique approach to educating students, engineers, faculty members, and working professionals, setting
            ourselves apart from institutions such as IITs, NITs, MIT, IST, and various other educational institutions.
          </p>
          
          <p className="mb-6 text-base text-gray-600 leading-relaxed">
            We prioritize practical, hands-on training that directly addresses the needs of today's industries. Our programs are
            designed to provide personalized, cutting-edge learning experiences that foster innovation and real-world problem-
            solving skills, by focusing on both foundational knowledge and the latest technological advancements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="flex items-start">
            <img 
              src="https://img.icons8.com/ios/100/000000/training.png" 
              alt="Industry Training" 
              className="w-10 h-10 mr-3"
            />
            <span className="font-medium text-base text-gray-800">Industry-Relevant Training</span>
          </div>
          
          <div className="flex items-start">
            <img 
              src="https://img.icons8.com/ios/100/000000/university.png" 
              alt="College Programs" 
              className="w-10 h-10 mr-3"
            />
            <span className="font-medium text-base text-gray-800">Customized Programs for Colleges</span>
          </div>
          
          <div className="flex items-start">
            <img 
              src="https://img.icons8.com/ios/100/000000/teacher.png" 
              alt="Faculty" 
              className="w-10 h-10 mr-3"
            />
            <span className="font-medium text-base text-gray-800">Experienced Faculty</span>
          </div>
          
          <div className="flex items-start">
            <img 
              src="https://img.icons8.com/ios/100/000000/online.png" 
              alt="Delivery Options" 
              className="w-10 h-10 mr-3"
            />
            <span className="font-medium text-base text-gray-800">Flexible Delivery Options</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;