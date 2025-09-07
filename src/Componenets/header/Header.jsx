import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { motion as Motion, AnimatePresence } from "motion/react";
import { HiMenuAlt3 } from "react-icons/hi";
import MobileMenu from "../mobileMenu/MobileMenu";
import { listHeader } from "../../data/data";

const icons = [FaWhatsapp, FaFacebookF, FaXTwitter];

const textVariants = {
  initial: {
    y: -50,
    opacity: 0.7,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [MenuisOpen, setMenuIsOpen] = useState(false);

  return (
    <Motion.div
      initial={textVariants.initial}
      whileInView={textVariants.animate}
      className="w-full h-16 z-50 bg-transparent  text-white ">
      <div className="container h-full flex justify-between items-center relative">
        <div className="logo drop-shadow-[0_5px_30px_rgba(0,0,0,0.9)]">
          <h3 className="uppercase text-2xl md:text-3xl font-bold">DomusWin</h3>
        </div>
        <ul className="hidden lg:flex space-x-2">
          {listHeader.map((item, index) => (
            <li
              key={index}
              className={`border border-white rounded-full px-2.5 py-0.5 cursor-pointer font-semibold hover:scale-105 duration-200 transition-all ${
                activeItem === item ? "bg-white text-black " : "text-white bg-transparent"
              }`}
              onClick={() => setActiveItem(item)}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex space-x-2">
          {icons.map((Icon, id) => {
            return (
              <span
                key={id}
                className="border border-white rounded-full p-1.5 cursor-pointer hover:-translate-y-2 transition-all duration-200">
                <Icon size={16} />
              </span>
            );
          })}
        </div>
        <div className="hidden lg:flex">
          <span className="font-semibold text-2xl cursor-pointer">+213 123 456 789</span>
        </div>
        <span
          className="flex lg:hidden cursor-pointer z-50"
          onClick={() => setMenuIsOpen(!MenuisOpen)}>
          <HiMenuAlt3 className="size-7 md:size-10" />
        </span>
        <MobileMenu
          icons={icons}
          MenuisOpen={MenuisOpen}
          listHeader={listHeader}
          activeItem={activeItem}
          setMenuIsOpen={setMenuIsOpen}
          setActiveItem={setActiveItem}
        />
      </div>
    </Motion.div>
  );
};

export default Header;
