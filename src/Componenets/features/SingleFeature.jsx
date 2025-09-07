import { motion as Motion } from "motion/react";
const SingleFeature = ({ item, index, features }) => {
  return (
    <>
      <div className={` ${index === features.length - 1 ? "" : "border-b"} py-4 `}>
        <Motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, easing: "ease-out" }}
          className="flex flex-col md:flex-row gap-y-5 md:items-center md:justify-between">
          <div className="flex text-2xl md:text-3xl space-x-7">
            <span className="font-bold text-orange-400">{item.id}</span>
            <h1 className="font-semibold">{item.title}</h1>
          </div>
          <p
            className="text-[rgb(85_85_85)] text-sm md:w-2/5 font-medium ml-14
           md:ml-0">
            {item.desc}
          </p>
        </Motion.div>
      </div>
    </>
  );
};

export default SingleFeature;
