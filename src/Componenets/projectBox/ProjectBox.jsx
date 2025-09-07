import { motion as Motion } from "motion/react";

const textVariant = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.5, easing: "ease-out" },
  },
};

const ProjectBox = ({ project, index }) => {
  return (
    <div
      key={index}
      className="flex flex-col md:flex-row gap-10 border-y md:border-y-0 border-[rgb(187_187_187)] py-10 md:py-0">
      <Motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 0.5, easing: "ease-out" }}
        className="w-full md:w-[30%] ">
        <img src={project.image} alt="image" className="rounded-2xl w-full h-full object-cover" />
      </Motion.div>
      <Motion.div
        variants={textVariant}
        whileInView="animate"
        initial="initial"
        className="w-full md:w-[70%]  flex flex-col md:flex-row md:items-center justify-between  md:border-y md:border-[rgb(187_187_187)] md:py-10 xl:py-0 gap-y-5">
        <Motion.div variants={textVariant} className="flex-1">
          <span className="text-3xl font-semibold text-[#eeb57E] ">{project.year}</span>
        </Motion.div>
        <Motion.div
          variants={textVariant}
          className="flex-1 flex flex-row md:flex-col gap-x-4 uppercase font-semibold text-white text-2xl">
          <h3>{project.town}</h3>
          <h3>{project.country}</h3>
        </Motion.div>
        <Motion.div variants={textVariant} className="flex-1 flex flex-col justify-between">
          <p className="text-xs md:text-sm text-[rgb(187_187_187)] mb-5">{project.desc}</p>
          <h3 className="uppercase text-2xl font-semibold text-[#eeb57E]">learn more...</h3>
        </Motion.div>
      </Motion.div>
    </div>
  );
};

export default ProjectBox;
