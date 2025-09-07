import ButtonDiscover from "../../Componenets/buttonDiscover/ButtonDiscover";
import OurServicesImage from "../../Componenets/ourServices/OurServicesImage";
import OurServicesText from "../../Componenets/ourServices/OurServicesText";

const ServicesSection = () => {
  return (
    <div className="py-10 flex flex-col md:flex-row overflow-hidden gap-10 md:gap-0 lg:mt-10 2xl:mt-0">
      <div className="w-full md:w-2/5 ">
        <OurServicesText />
      </div>

      <div className="w-full md:w-3/5">
        <OurServicesImage />
      </div>
      <div className="flex md:hidden w-full justify-center">
        <ButtonDiscover
          textColor="text-[#101010]"
          colorbg="bg-white"
          colorbgArrow="bg-[#101010]"
          colorArrow="text-white"
          fill="white"
        />
      </div>
    </div>
  );
};

export default ServicesSection;
