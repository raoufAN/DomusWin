import SpanTitle from "../spanTitle/SpanTitle";
import { animate, stagger } from "motion";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import TitleSection from "../titleSection/TitleSection";

const FeatureHeadligne = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && ref.current) {
      const split = new SplitType(ref.current.querySelectorAll("h1"), {
        types: "chars",
      });

      animate(
        split.chars,
        { opacity: [0, 1], y: [20, 0] },
        { delay: stagger(0.02), duration: 0.1, easing: "ease-out" }
      );
    }
  }, [isInView]);
  return (
    <div
      className="flex flex-col-reverse md:flex-row justify-between items-center mb-5 gap-y-10"
      ref={ref}>
      <div className="flex flex-col space-y-3">
        <SpanTitle title="features" />
        <TitleSection color="text-black" lineOne="of smart living" lineTwo="the key benefits" />
      </div>

      <div className="flex flex-col space-y-3 text-2xl lg:text-4xl ">
        <h1>
          Imagine <span className="text-[#EEB57E] italic px-1">A Home THAT </span> IS SO IN
        </h1>
        <h1>TUNE WITH YOU</h1>
        <div className="flex flex-col items-end">
          <h1>
            it <span className="text-[#EEB57E] italic px-1">know your needs</span>
          </h1>
          <h1>before you do</h1>
        </div>
      </div>
    </div>
  );
};

export default FeatureHeadligne;
