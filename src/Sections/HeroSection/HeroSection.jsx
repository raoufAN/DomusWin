import heroImage from "../../assets/home.webp";
import heroImageWithNoBackground from "../../assets/homenobg.webp";
import { motion as Motion } from "motion/react";
import Hero from "../../Componenets/hero/Hero";
import Header from "../../Componenets/header/Header";

const textVariants = {
  initial: {
    y: 300,
    opacity: 0.3,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

const HeroSection = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex">
      <div className="w-full h-full absolute inset-0 z-50">
        <Header />
        <Hero />
      </div>

      <img
        src={heroImage}
        alt="image"
        className="w-full h-full  object-cover  absoluteleft-0  -z-10"
        loading="lazy"
      />
      <Motion.h1
        initial={textVariants.initial}
        whileInView={textVariants.animate}
        className="hidden md:flex md:text-[170px]  lg:text-[200px] xl:text-[250px]  text-[#ffffffb7] absolute z-10 left-1/2 -translate-x-1/2 md:top-[140px] lg:top-[60px] drop-shadow-[0_5px_30px_rgba(0,0,0,0.9)]">
        DomusWin
      </Motion.h1>
      <img
        src={heroImageWithNoBackground}
        alt="image"
        className="w-full h-full  object-cover  absolute left-0 z-20 hidden md:flex"
        loading="lazy"
      />
    </div>
  );
};

export default HeroSection;
