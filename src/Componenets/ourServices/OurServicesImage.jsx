import servicesImage from "../../assets/sofa.webp";
import WrapperBlure from "./WrapperBlure";
import { motion as Motion } from "motion/react";

const variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const iMAGEvariants = {
  initial: { scale: 0.1 },
  animate: {
    scale: 1,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const OurServicesImage = () => {
  return (
    <Motion.div
      variants={iMAGEvariants}
      initial="initial"
      whileInView="animate"
      className="w-full h-full relative text-[#dadada] ">
      <Motion.img
        variants={variants}
        initial="initial"
        whileInView="animate"
        src={servicesImage}
        alt="image"
        className="rounded-2xl w-full h-[500px] md:h-full object-cover"
      />

      <Motion.div
        variants={variants}
        className="hidden md:flex absolute top-3 right-3 w-40 text-xs">
        Our Services are tailored to fit your lifestyle
      </Motion.div>
      <Motion.div
        variants={variants}
        className=" hidden lg:flex absolute bottom-3 left-3 w-40 text-xs">
        we are ready to simplify your life and enhance your living experience
      </Motion.div>
      <Motion.div variants={variants} className="absolute top-1/2 left-1/2 w-64 -translate-1/2">
        <WrapperBlure>
          <h3 className="uppercase font-semibold text-lg md:text-2xl mb-3">smart lighting</h3>
          <p className="text-[#b6b6b6] text-xs md:text-sm">
            mart lighting offers a seamless way to enhance your home with both convenience and
            style. with simple tap on your smartphone or a quick voice command,you can illminate any
            room instantly - no more searching for switches in the dark
          </p>
          <span className="underline font-semibold text-sm md:text-base">Learn more ...</span>
        </WrapperBlure>
      </Motion.div>
      <Motion.div
        variants={variants}
        className=" hidden lg:flex absolute top-8 left-1/2 w-fit py-2 px-3 rounded-2xl bg-white/5 backdrop-blur-sm ">
        <h3 className="uppercase text-xl">Motion Sensing</h3>
      </Motion.div>
      <Motion.div
        variants={variants}
        className=" hidden lg:flex absolute bottom-20 right-1/6 w-fit py-2 px-3 rounded-2xl bg-white/5 backdrop-blur-sm ">
        <h3 className="uppercase text-xl">Scheduling & Automation</h3>
      </Motion.div>
    </Motion.div>
  );
};

export default OurServicesImage;
