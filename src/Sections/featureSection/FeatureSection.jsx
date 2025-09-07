import FeatureHeadligne from "../../Componenets/features/FeatureHeadligne";
import Features from "../../Componenets/features/Features";
import FooterFeatures from "../../Componenets/features/FooterFeatures";

const FeatureSection = () => {
  return (
    <div className="py-16 h-auto" id="Features">
      <div className="container">
        <FeatureHeadligne />
        <Features />
        <FooterFeatures />
      </div>
    </div>
  );
};

export default FeatureSection;
