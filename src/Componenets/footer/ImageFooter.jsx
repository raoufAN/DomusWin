import footerImage from "../../assets/hero.webp";
import FooterBoxBlur from "./FooterBoxBlur";
import { motion as Motion } from "motion/react";

const textVariant = {
  initial: {
    scale: 0.3,
    x: -20,
  },
  animate: {
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      easing: "ease-out",
    },
  },
};

const ImageFooter = () => {
  return (
    <div className="w-full h-screen md:h-[80vh] relative flex justify-center items-center">
      <img src={footerImage} alt="footerImage" className="w-full h-full object-cover" />
      <Motion.div
        variants={textVariant}
        initial="initial"
        whileInView="animate"
        className="hidden  md:flex absolute left-20 top-20 w-2xs
      font-semibold text-white drop-shadow-[0_5px_30px_rgba(0,0,0,0.9)] z-10">
        if you have questions, need assiatance, or want to bring your smart home vision to life, we
        are ere to help
      </Motion.div>
      <Motion.div
        variants={textVariant}
        initial="initial"
        whileInView="animate"
        className="hidden md:flex absolute left-20 bottom-20 w-2xs
      font-bold text-2xl text-white drop-shadow-[0_5px_30px_rgba(0,0,0,0.9)] z-10">
        DomusWin
      </Motion.div>
      <Motion.div
        variants={textVariant}
        initial="initial"
        whileInView="animate"
        className="absolute md:right-20 md:top-20 z-20">
        <FooterBoxBlur />
      </Motion.div>
    </div>
  );
};

export default ImageFooter;
