import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Courses from '../components/Courses';
import StartLearning from '../components/StartLearning.tsx';
import Stats from '../components/Stats';
import NavBar from '@/components/Navbar.tsx';

const Index = () => {
  return (
    <div>
      <section>
        <NavBar/>
      </section>
      <section className="bg-gray-50">
        <Hero />
      </section>
      <section className="py-16 bg-gray-50">
        <Stats />
      </section>
      <section className="py-16 bg-[#1a1a1a]">
        <Services />
      </section>
      <section className="py-16 bg-[#1a1a1a]">
        <Courses />
      </section>
      <section className="py-16 bg-gray-50">
        <WhyUs />
      </section>
      <section className="-mb-16 bg-gray-50">
        <StartLearning />
      </section>
    </div>
  );
};

export default Index;