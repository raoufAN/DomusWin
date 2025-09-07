import SpanTitle from "../spanTitle/SpanTitle";
import TitleSection from "../titleSection/TitleSection";
import { useInView } from "motion/react";
import SplitType from "split-type";
import { animate, stagger } from "motion";
import { useEffect, useRef } from "react";

const FaqTitles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && ref.current) {
      const split = new SplitType(ref.current.querySelectorAll(".animation"), {
        types: "chars",
      });

      animate(
        split.chars,
        { opacity: [0, 1], y: [20, 0] },
        {
          delay: stagger(0.02),
          duration: 0.2,
          easing: "ease-out",
        }
      );
    }
  }, [isInView]);

  return (
    <div ref={ref} className="flex flex-col md:flex-row justify-between space-y-5">
      <div className="flex flex-col space-y-5">
        <SpanTitle title="faq" />
        <TitleSection
          lineOne="frequently asked"
          lineTwo="questions"
          color="text-black"
          animation="animation"
        />
      </div>
      <div className="flex flex-col space-y-5 md:w-60">
        <div className="hidden md:flex ">
          <span className="font-bold text-4xl text-[rgb(187_187_187)] animation">DomusWin</span>
        </div>
        <p className="text-sm font-semibold text-[rgb(187_187_187)] animation">
          Have question? Find answers to the most common inquiries about our smart home solutions,
          features,and how they can,enhance your daily life
        </p>
      </div>
    </div>
  );
};

export default FaqTitles;
