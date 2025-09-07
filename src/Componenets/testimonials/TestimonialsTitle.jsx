import { useEffect, useRef } from "react";
import ButtonDiscover from "../buttonDiscover/ButtonDiscover";
import SpanTitle from "../spanTitle/SpanTitle";
import TitleSection from "../titleSection/TitleSection";
import { useInView } from "motion/react";
import SplitType from "split-type";
import { animate, stagger } from "motion";

const TestimonialsTitle = () => {
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
    <div ref={ref} className="flex flex-col space-y-4">
      <SpanTitle title="Testimonials" />
      <TitleSection
        lineOne="what our"
        lineTwo="clients say"
        color="text-black"
        animation="animation"
      />
      <p className="text-sm text-[rgb(187_187_187)] animation">
        Hear from our satisfied homeowners who have transformed their living spaces with smart
        tehcnlogy. Discover how our services have enhanced their daily lives
      </p>
      <div className="mt-10 hidden md:flex">
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

export default TestimonialsTitle;
