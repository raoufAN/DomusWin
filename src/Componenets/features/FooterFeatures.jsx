import image from "../../assets/hero.webp";
import image1 from "../../assets/project1.jpg";
import image2 from "../../assets/project2.jpg";
import image3 from "../../assets/project3.jpg";
import image4 from "../../assets/project4.jpg";
import image5 from "../../assets/project5.avif";

import { animate, stagger } from "motion";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";

const FooterFeatures = () => {
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
        { delay: stagger(0.01), duration: 0.1, easing: "ease-out" }
      );
      const images = ref.current.querySelectorAll("img");
      animate(
        images,
        { opacity: [0, 1], scale: [0.8, 1] },
        { delay: stagger(0.1, { start: 0.3 }), duration: 0.6, easing: "ease-out" }
      );
    }
  }, [isInView]);

  return (
    <div className="hidden 2xl:flex flex-col justify-center items-center pt-10 space-y-10 footer-text">
      <span className="text-[rgb(187_187_187)]">DomusWin</span>
      <div className="flex flex-col items-center space-y-3" ref={ref}>
        <div className="flex items-center space-x-10">
          <img src={image} alt="image" className="w-36 rounded-2xl" />
          <h1 className="text-7xl">
            a <span className="text-[#EEB57E] ">smart home</span> adapts to you!
          </h1>
          <img src={image1} alt="image" className="w-36 rounded-2xl" />
        </div>
        <div className="flex items-center space-x-10">
          <h1 className="text-7xl">
            effortles <span className="text-[#EEB57E] ">comfort</span>
          </h1>
          <img src={image2} alt="image" className="w-36 rounded-2xl" />
          <h1 className="text-7xl">
            , <span className="text-[#EEB57E] ">security</span> ,
          </h1>
        </div>
        <div className="flex items-center space-x-10">
          <h1 className="text-7xl">and</h1>
          <img src={image3} alt="image" className="w-36 rounded-2xl" />
          <h1 className="text-7xl">
            <span className="text-[#EEB57E] ">efficiency</span> -- perfectly and
          </h1>
        </div>
        <div className="flex items-center space-x-10">
          <img src={image4} alt="image" className="w-36 rounded-2xl" />
          <h1 className="text-7xl">seamlessly</h1>
          <img src={image5} alt="image" className="w-36 rounded-2xl" />
          <h1 className="text-7xl">connected</h1>
          <img src={image} alt="image" className="w-36 rounded-2xl" />
        </div>
      </div>
      <span className="text-[rgb(187_187_187)]">We build homes that think</span>
    </div>
  );
};

export default FooterFeatures;
