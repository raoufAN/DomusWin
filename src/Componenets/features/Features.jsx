import { useEffect, useState } from "react";
import featureImage from "../../assets/features.webp";
import SingleFeature from "./SingleFeature";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import { features } from "../../data/data";
import ImageBox from "./ImageBox";
import { motion as Motion } from "motion/react";
import ButtonDiscover from "../buttonDiscover/ButtonDiscover";

const Features = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(features.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const handleLeft = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleRight = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="xl:h-screen flex flex-col lg:flex-row justify-between py-5">
      <div className="h-full w-full lg:w-3/5 md:pr-10 md:mb-5 lg:mb-0">
        <div className="w-full h-full border-b border-t flex flex-col justify-between">
          {(windowWidth < 767 ? features.slice(start, end) : features).map((item, index) => (
            <SingleFeature item={item} index={index} features={features} key={item.id} />
          ))}
        </div>
        {windowWidth < 767 && (
          <div className="flex justify-center items-center space-x-5 my-10">
            <FaCircleArrowLeft
              className={`size-9 ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 cursor-pointer"
              }`}
              onClick={handleLeft}
            />
            <span className="text-gray-700">
              {currentPage} / {totalPages}
            </span>
            <FaCircleArrowRight
              className={`size-9 ${
                currentPage === totalPages
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 cursor-pointer"
              }`}
              onClick={handleRight}
            />
          </div>
        )}
      </div>

      <div className="w-full lg:w-2/5 relative">
        <img src={featureImage} alt="features" className="w-full h-full object-cover rounded-2xl" />

        <Motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, easing: "ease-out" }}
          className="absolute bottom-5 left-5 hidden md:flex flex-col space-y-2">
          <ImageBox number="20%" text="energy savings" />
          <ImageBox number="20%" text="energy savings" />
          <ImageBox number="20%" text="energy savings" />
        </Motion.div>
        <Motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, easing: "ease-out" }}
          className="absolute bottom-5 right-5 flex flex-col space-y-2">
          <h3 className="text-white text-2xl">DO YOU WANT TO</h3>
          <h3 className="text-white text-2xl">KNOW MORE PROS?</h3>
          <div>
            <ButtonDiscover
              textColor="text-[#101010]"
              colorbg="bg-white"
              colorbgArrow="bg-[#101010]"
              colorArrow="text-white"
              fill="white"
            />
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

export default Features;
