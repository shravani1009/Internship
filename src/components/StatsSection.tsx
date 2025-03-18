const StatsSection = () => {
  return (
    <section className="pt-6 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="stats-card" style={{animationDelay: "0.1s"}}>
            <img 
              src="https://img.icons8.com/ios/100/000000/student-male--v1.png" 
              alt="Students" 
              className="stats-icon"
            />
            <div className="text-left">
              <h3 className="font-bold text-lg">Student Trained</h3>
              <p className="text-2xl font-bold">15000+</p>
            </div>
          </div>
          
          <div className="stats-card" style={{animationDelay: "0.2s"}}>
            <img 
              src="https://img.icons8.com/ios/100/000000/teacher.png" 
              alt="Faculties" 
              className="stats-icon"
            />
            <div className="text-left">
              <h3 className="font-bold text-lg">Faculties Trained</h3>
              <p className="text-2xl font-bold">5500+</p>
            </div>
          </div>
          
          <div className="stats-card" style={{animationDelay: "0.3s"}}>
            <img 
              src="https://img.icons8.com/ios/100/000000/company.png" 
              alt="Corporates" 
              className="stats-icon"
            />
            <div className="text-left">
              <h3 className="font-bold text-lg">Corporates Trained</h3>
              <p className="text-2xl font-bold">1750+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
