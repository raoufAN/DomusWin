import ButtonDiscover from "../buttonDiscover/ButtonDiscover";
import TestimonialsSwiper from "./TestimonialsSwiper";
import TestimonialsTitle from "./TestimonialsTitle";

const Testimonials = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-[35%]">
        <TestimonialsTitle />
      </div>

      <div className="w-full lg:w-[65%] ">
        <TestimonialsSwiper />
      </div>
      <div className="flex md:hidden  justify-center">
        <ButtonDiscover
          colorbg="bg-[#101010]"
          textColor="text-white"
          colorArrow="text-[#101010]"
          colorbgArrow="bg-white"
          fill="black"
        />
      </div>
    </div>
  );
};

export default Testimonials;
