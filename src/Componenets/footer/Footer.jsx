import { MdOutlineArrowCircleRight } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import { listHeader } from "../../data/data";
import { animate, stagger } from "motion";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
import { motion as Motion, useInView } from "motion/react";

const textVariant = {
  initial: {
    scale: 0,
    x: -20,
    opacity: 0.1,
  },
  aniamte: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      easing: "ease-out",
      staggerChildren: 0.2,
    },
  },
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && ref.current) {
      const split = new SplitType(ref.current.querySelectorAll("h2"), {
        types: "chars",
      });

      animate(
        split.chars,
        { opacity: [0, 1], y: [20, 0] },
        { delay: stagger(0.1), duration: 0.9, easing: "ease-out" }
      );
    }
  }, [isInView]);
  return (
    <div className="bg-[#101010] py-5 md:py-10 text-white rounded-b-2xl">
      <Motion.div
        variants={textVariant}
        initial="initial"
        whileInView="aniamte"
        className="container">
        <Motion.div variants={textVariant} className="flex flex-col lg:flex-row justify-between">
          <div>
            <h3 className="text-4xl mb-2">Subscribe to our newsletter</h3>
            <p className="text-sm text-[#888888]">Sign up for exclusive offres and news</p>
            <div className="flex flex-col my-10">
              <div className="flex mb-2">
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="text-3xl border-b border-[#888888] placeholder:text-2xl"
                />
                <MdOutlineArrowCircleRight className="w-[20%]  size-9" />
              </div>
              <div className="flex  space-x-3">
                <input type="checkbox" />
                <div className="flex flex-col md:flex-row text-[#888888] mt-6 md:mt-0">
                  I have read and accept the
                  <span className="underline text-white ml-1.5">Terms and Conditions</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col lg:items-end">
            <h3 className="text-4xl mb-2">+213 123 456 789</h3>
            <h3 className="text-4xl">DomusWin@gmail.com</h3>
            <div className="text-[#888888] text-sm flex space-x-3 my-10">
              <span className="flex">
                Instagram
                <MdOutlineArrowOutward className="ml-2" />
              </span>
              <span className="flex">
                Facebook
                <MdOutlineArrowOutward className="ml-2" />
              </span>
              <span className="flex">
                X (Twitter)
                <MdOutlineArrowOutward className="ml-2" />
              </span>
            </div>
          </div>
        </Motion.div>
        <Motion.div variants={textVariant} className="hidden lg:flex justify-between text-[#888] ">
          <div className="w-[200px]">
            <p>© 2025 DomusWin. All rights reserved.</p>
          </div>
          <ul className="flex">
            {listHeader.map((item, index) => (
              <li className="text-sm px-5" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <div className="w-[200px]">Algeria Constantine Kadour boumadous BT"D" N°124</div>
        </Motion.div>
      </Motion.div>
      <div className="conatiner" ref={ref}>
        <h2 className="font-medium text-[13.5vw] uppercase tracking-wider m-0 leading-none w-full hidden xl:block  text-center">
          DomusWin
        </h2>
      </div>
    </div>
  );
};

export default Footer;
