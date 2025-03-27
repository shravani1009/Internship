import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <section>
        <Navbar setCurrentSection={(section: string) => { /* implement the function here */ }} />
      </section>
      <section className="bg-techlearn-background">
        <HeroSection />
      </section>
      <section className="py-8 bg-techlearn-lightblue">
        <StatsSection />
      </section>
      <section className="py-1 bg-techlearn-background">
        <AboutSection />
      </section>
      <section className="py-7 bg-techlearn-lightblue">
        <WhyChooseUsSection />
      </section>
      <section className="bg-techlearn-background">
        <ServicesSection />
      </section>
      
      
    </div>
  );
};

export default Index;