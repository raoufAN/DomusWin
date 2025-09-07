import BlurBox from "../blurBox/BlurBox";
import ButtonDiscover from "../buttonDiscover/ButtonDiscover";
import { motion as Motion } from "motion/react";

const buttonVariants = {
  initial: {
    y: 60,
    opacity: 0.3,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

const textVariants = {
  initial: { x: -100, y: -20, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

const Hero = () => {
  return (
    <div className="w-full h-[calc(100%-64px)] relative overflow-hidden">
      <div className="container h-full flex md:items-center">
        <Motion.div
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          className="w-full lg:w-1/2 text-white flex flex-col drop-shadow-[0_5px_30px_rgba(0,0,0,0.9)] mt-14 md:mt-0">
          <Motion.div variants={textVariants} className="flex w-full items-center mb-4">
            <span className="hidden md:flex px-5 font-semibold drop-shadow-[0_5px_30px_rgba(0,0,0,0.9)]">
              Since 2021
            </span>
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-[0_5px_30px_rgba(0,0,0,0.9)]">
              Revolutionize your
            </h1>
          </Motion.div>
          <Motion.div
            variants={textVariants}
            className="mb-4 md:drop-shadow-[0_5px_30px_rgba(0,0,0,0.9)]">
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-[0_5px_30px_rgba(0,0,0,0.9)]">
              life with smart home
            </h1>
          </Motion.div>
          <Motion.div variants={textVariants} className="flex  items-center ">
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-[0_5px_30px_rgba(0,0,0,0.9)]">
              Technlogy
            </h1>
            <div className="hidden md:flex flex-col pl-12 drop-shadow-[0_5px_30px_rgba(0,0,0,0.9)] text-sm">
              <span className="font-semibold drop-shadow-[0_5px_30px_rgba(0,0,0,0.9)]">
                we bring ease,security, and fun
              </span>
              <span className="font-semibold drop-shadow-[0_5px_30px_rgba(0,0,0,0.9)]">
                through intenlligent innovations
              </span>
            </div>
          </Motion.div>
        </Motion.div>

        <Motion.div
          whileInView={{ x: [-200, 0] }}
          transition={{
            duration: 1,
            ease: "easeOut",
            type: "spring",
            damping: 15,
            stiffness: 100,
          }}
          className="absolute bottom-[250px]  md:bottom-[270px] md:right-[50px] xl:right-[420px] ">
          <BlurBox text="innovation projects successfuly completed worldwide" number="5.5K+" />
        </Motion.div>

        <Motion.div
          whileInView={{ x: [200, 0] }}
          transition={{
            duration: 1,
            ease: "easeOut",
            type: "spring",
            damping: 15,
            stiffness: 100,
          }}
          className="absolute bottom-28 right-2.5 md:bottom-20 md:right-[50px] xl:right-40">
          <BlurBox text="happy clients enjoying advanced living" number="10K+" />
        </Motion.div>

        <Motion.div
          initial={buttonVariants.initial}
          whileInView={buttonVariants.animate}
          className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2">
          <ButtonDiscover
            textColor="text-[#101010]"
            colorbg="bg-white"
            colorbgArrow="bg-[#101010]"
            colorArrow="text-white"
            fill="white"
          />
        </Motion.div>
      </div>
    </div>
  );
};

export default Hero;
