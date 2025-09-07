import FaqSection from "./Sections/faqSection/FaqSection";
import FeatureSection from "./Sections/featureSection/FeatureSection";
import FooterSection from "./Sections/footerSection/FooterSection";
import HeroSection from "./Sections/HeroSection/HeroSection";
import ProjectSection from "./Sections/projectSection/ProjectSection";
import ServicesSection from "./Sections/sevicesSection/servicesSection";
import TestimonialsSection from "./Sections/testimonialsSection/TestimonialsSection";

const App = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <div className="bg-[#101010] mx-3 rounded-2xl">
        <div className="container">
          <ServicesSection />
          <ProjectSection />
        </div>
      </div>
      <div className="bg-[#ffffff] my-10 mx-3 rounded-2xl border border-[rgb(187_187_187)]">
        <div className="container">
          <TestimonialsSection />
          <FaqSection />
        </div>
        <FooterSection />
      </div>
    </div>
  );
};

export default App;
