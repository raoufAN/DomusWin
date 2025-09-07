import { FaStar } from "react-icons/fa6";
import { FaHandPointLeft } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import { Testimonials } from "../../data/data";
import { useState } from "react";
import { motion as Motion } from "motion/react";

const textVariant = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.5, easing: "ease-out" },
  },
};
const imageVariant = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, easing: "ease-out" },
  },
};

const TestimonialsSwiper = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleLeft = () => {
    if (testimonialIndex > 0) {
      setTestimonialIndex((prev) => {
        return prev - 1;
      });
    }
  };
  const handleRight = () => {
    if (testimonialIndex < Testimonials.length - 1) {
      setTestimonialIndex((prev) => {
        return prev + 1;
      });
    }
  };

  return (
    <div className="w-full h-full">
      <div className="h-full flex flex-col md:flex-row gap-10">
        <div className="md:w-2/5">
          <Motion.img
            variants={imageVariant}
            initial="initial"
            whileInView="animate"
            src={Testimonials[testimonialIndex].image}
            alt="image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <Motion.div
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          className="md:w-3/5 flex flex-col">
          <Motion.div
            variants={textVariant}
            className="w-fit ml-auto flex flex-row gap-x-1 text-[#eeb57E] mb-10">
            {Array.from({ length: Testimonials[testimonialIndex].stars }).map((_, index) => (
              <FaStar key={index} />
            ))}
          </Motion.div>
          <Motion.p variants={textVariant} className="font-semibold mb-5 md:mb-0">
            {Testimonials[testimonialIndex].comment}
          </Motion.p>
          <Motion.div
            variants={textVariant}
            className="w-full flex flex-col md:flex-row justify-between items-center mt-auto  gap-y-5">
            <div className="flex items-center gap-x-3">
              <img
                src={Testimonials[testimonialIndex].profilImage}
                alt="profilImage"
                className="h-16 w-16 rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="uppercase text-xl font-semibold text-[#eeb57E] mb-2">
                  {Testimonials[testimonialIndex].name}
                </h3>
                <span className="text-sm uppercase font-semibold ">
                  {Testimonials[testimonialIndex].location}
                </span>
              </div>
            </div>
            <div className="flex text-4xl gap-x-5 text-[#eeb57E] cursor-pointer">
              <FaHandPointLeft onClick={handleLeft} />
              <FaHandPointRight onClick={handleRight} />
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSwiper;
