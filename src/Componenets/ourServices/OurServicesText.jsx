import ButtonDiscover from "../buttonDiscover/ButtonDiscover";
import SpanTitle from "../spanTitle/SpanTitle";
import TitleSection from "../titleSection/TitleSection";
import ServicesScroleur from "./ServicesScroleur";
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

const OurServicesText = () => {
  return (
    <Motion.div
      className="flex flex-col space-y-3"
      variants={variants}
      initial="initial"
      whileInView="animate">
      <Motion.div variants={variants}>
        <SpanTitle title="services" />
      </Motion.div>

      <Motion.div variants={variants}>
        <TitleSection lineOne="the solutions" lineTwo="we offer" color="text-white" />
      </Motion.div>

      <Motion.p variants={variants} className="text-sm text-[rgb(187_187_187)]">
        From installation to setup and support, we ensure your home is equipped with the latest
        technology, working smoothly and effortlessly — just the way you want it.
      </Motion.p>

      <Motion.div variants={variants}>
        <ServicesScroleur />
      </Motion.div>

      <Motion.div variants={variants} className="hidden md:flex">
        <ButtonDiscover
          textColor="text-[#101010]"
          colorbg="bg-white"
          colorbgArrow="bg-[#101010]"
          colorArrow="text-white"
          fill="white"
        />
      </Motion.div>
    </Motion.div>
  );
};

export default OurServicesText;
