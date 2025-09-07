import { useCallback, useEffect, useRef, useState } from "react";
import { smartServices } from "../../data/data";
import { AnimatePresence, motion as Motion } from "motion/react";
import ScrolleurBar from "./ScrolleurBar";

const variants = {
  inactive: { opacity: 0.6, x: 0, scale: 1 },
  active: {
    opacity: 1,
    x: 15,
    scale: 1.1,
    color: "#eeb57E",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const ServicesScroleur = () => {
  const [servicesActive, setServicesActive] = useState(1);
  const [elementFocus, setElementFocus] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);
  const [countingDown, setCountingDown] = useState(1);

  const featureRef = useRef([]);
  const touchStartY = useRef(0);
  const scrollerRef = useRef(null);

  const handleArrowDown = useCallback(() => {
    setCountingDown((prev) => prev + 1);
    if (servicesActive > 3) {
      setStartIndex((prev) => prev + 1);
      setEndIndex((prev) => prev + 1);
      setServicesActive(4);
      featureRef.current[3].focus();
    } else {
      setServicesActive((prev) => prev + 1);
      featureRef.current[servicesActive]?.focus();
    }
  }, [servicesActive]);
  const handleArrowUp = useCallback(() => {
    setCountingDown((prev) => prev - 1);
    if (servicesActive === 1) {
      setStartIndex((prev) => prev - 1);
      setEndIndex((prev) => prev - 1);
      setServicesActive(1);
      featureRef.current[0].focus();
    } else {
      setServicesActive((prev) => prev - 1);
      featureRef.current[servicesActive - 1].focus();
    }
  }, [servicesActive]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();
      if (countingDown < smartServices.length) {
        if (e.key === "ArrowDown") {
          handleArrowDown();
        }
      }
      if (countingDown > 1) {
        if (e.key === "ArrowUp") {
          handleArrowUp();
        }
      }
    };

    if (elementFocus) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [elementFocus, servicesActive, startIndex, countingDown, handleArrowDown, handleArrowUp]);

  const handleActiveAndFocus = (id, featureId) => {
    setServicesActive(id + 1);
    if (featureRef.current[id]) {
      featureRef.current[id].focus();
      setElementFocus(featureRef.current[id]);

      setCountingDown(Number(featureId));
    }
  };

  // this is for mobile

  useEffect(() => {
    const preventScroll = (e) => {
      if (elementFocus) {
        e.preventDefault();
      }
    };

    const el = scrollerRef.current;
    if (el) {
      el.addEventListener("touchmove", preventScroll, { passive: false });
    }

    return () => {
      if (el) {
        el.removeEventListener("touchmove", preventScroll);
      }
    };
  }, [elementFocus]);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    if (Math.abs(diff) > 30) {
      // ignore tiny finger moves
      if (diff > 0) {
        if (countingDown < smartServices.length) {
          handleArrowDown();
        }
      } else {
        if (countingDown > 1) {
          handleArrowUp();
        }
      }
    }
  };

  return (
    <div className="flex my-5 md:my-10 flex-col-reverse md:flex-row">
      <ScrolleurBar numberOfItem={smartServices.length} countingDown={countingDown} />
      <div
        ref={scrollerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex  flex-col py-7 space-y-5">
        {smartServices.slice(startIndex, endIndex).map((feature, index) => {
          const isActive = servicesActive === index + 1;

          return (
            <AnimatePresence mode="wait" key={`${index}-${startIndex}`}>
              <Motion.div
                tabIndex={0}
                ref={(el) => (featureRef.current[index] = el)}
                initial="inactive"
                animate={isActive ? "active" : "inactive"}
                exit="inactive"
                variants={variants}
                className="flex items-center text-lg space-x-2 h-10 cursor-pointer outline-0 text-white"
                onClick={() => handleActiveAndFocus(index, feature.id)}>
                <span>{feature.id}</span>
                <h3 className="uppercase">{feature.title}</h3>
              </Motion.div>
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesScroleur;
