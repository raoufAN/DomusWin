import { MdOutlineArrowOutward } from "react-icons/md";
import { GoArrowDownRight } from "react-icons/go";
import { motion as Motion, AnimatePresence } from "framer-motion";

const FaqBox = ({ faq, index, activeFaq, setActiveFaq }) => {
  const isActive = activeFaq === index;

  return (
    <div
      className={`py-5 px-5 md:px-10 flex flex-col gap-2 ${
        index === 0 ? "" : "border-t border-black"
      }`}>
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-3xl font-semibold mb-3">{faq.title}</h1>
        <span
          className="w-fit h-fit bg-[#eeb57E] p-2 rounded-full cursor-pointer"
          onClick={() => setActiveFaq(isActive ? null : index)}>
          <Motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isActive ? 90 : 0 }}
            transition={{ duration: 0.3 }}>
            <MdOutlineArrowOutward className="size-5 md:size-7 text-white" />
          </Motion.div>
        </span>
      </div>

      <div className="flex">
        <AnimatePresence>
          {isActive && (
            <Motion.p
              key="faq-desc"
              className="md:w-9/12 text-gray-700"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}>
              {faq.desc}
            </Motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FaqBox;
