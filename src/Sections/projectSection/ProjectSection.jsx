import { useEffect, useRef } from "react";
import ButtonDiscover from "../../Componenets/buttonDiscover/ButtonDiscover";
import ProjectBox from "../../Componenets/projectBox/ProjectBox";
import SpanTitle from "../../Componenets/spanTitle/SpanTitle";
import TitleSection from "../../Componenets/titleSection/TitleSection";
import { projects } from "../../data/data";
import { useInView } from "motion/react";
import SplitType from "split-type";
import { animate, stagger } from "motion";

const ProjectSection = () => {
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
    <div className="py-10">
      <div className="flex flex-col md:flex-row justify-between  gap-5" ref={ref}>
        <div className="flex flex-col  space-y-3 ">
          <SpanTitle title="Projects" />
          <TitleSection
            lineOne="The Projects"
            lineTwo="we've completed"
            color="text-white animation"
          />
        </div>
        <div className="flex flex-col justify-between  md:w-60">
          <p className="text-sm text-[rgb(187_187_187)] animation">
            Explore our diverse range of smart home projects, where technlogy meets exceptional
            design
          </p>
          <div className="hidden md:flex">
            <ButtonDiscover
              textColor="text-[#101010]"
              colorbg="bg-white"
              colorbgArrow="bg-[#101010]"
              colorArrow="text-white"
              fill="white"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col py-10 gap-y-15">
        {projects.map((project, index) => (
          <ProjectBox key={index} index={index} project={project} />
        ))}
      </div>
      <div className="flex md:hidden justify-center items-center">
        <ButtonDiscover
          textColor="text-[#101010]"
          colorbg="bg-white"
          colorbgArrow="bg-[#101010]"
          colorArrow="text-white"
          fill="white"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
