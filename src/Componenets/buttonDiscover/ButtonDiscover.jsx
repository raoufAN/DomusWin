import { motion as Motion } from "motion/react";
const ButtonDiscover = ({ colorbg, textColor, colorArrow, colorbgArrow, fill }) => {
  return (
    <div
      className={`${textColor} ${colorbg}  rounded-full flex justify-center items-center pl-4 pr-1 py-1 space-x-2 cursor-pointer w-[190px]`}>
      <Motion.span
        animate={{
          opacity: [0.7, 0.1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        className="font-semibold">
        DISCOVER MORE
      </Motion.span>
      <span className={`${colorbgArrow} ${colorArrow} p-3 rounded-full`}>
        <Motion.svg
          animate={{
            x: [0, 4],
            y: [0, -4],
            opacity: [0, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: "easeInOut",
          }}
          viewBox="0 0 16.00 16.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="white"
          strokeWidth="0.00016"
          className={`w-3 h-4 ${colorArrow}`}>
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="0.384"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M14 2H5.50003L4.00003 3.5L6.83581 6.33579L0.585815 12.5858L3.41424 15.4142L9.66424 9.16421L12.5 12L14 10.5L14 2Z"
              fill={fill}></path>
          </g>
        </Motion.svg>
      </span>
    </div>
  );
};

export default ButtonDiscover;
