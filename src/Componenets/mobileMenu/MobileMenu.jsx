import { motion as Motion, AnimatePresence } from "motion/react";

const showAndHideAnimationMenu = {
  initial: { top: -10, right: 10, scaleX: 0, scaleY: 0, opacity: 0 },
  animateTop: { top: 70, right: 20, scaleX: 1, scaleY: 1, opacity: 1 },
  exit: { top: 10, right: 10, scaleX: 0, scaleY: 0, opacity: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  style: { transformOrigin: "top right" },
};

const MobileMenu = ({
  icons,
  MenuisOpen,
  listHeader,
  activeItem,
  setMenuIsOpen,
  setActiveItem,
}) => {
  return (
    <AnimatePresence>
      {MenuisOpen && (
        <Motion.ul
          initial={showAndHideAnimationMenu.initial}
          animate={showAndHideAnimationMenu.animateTop}
          exit={showAndHideAnimationMenu.exit}
          transition={showAndHideAnimationMenu.transition}
          style={showAndHideAnimationMenu.style}
          className="md:w-[420px] absolute z-90   bg-white/10 backdrop-blur-md shadow-lg lg:hidden rounded-xl left-[20px]  md:left-auto">
          <div className="w-full h-full relative flex flex-col items-center justify-center  py-15 px-5">
            {listHeader.map((item, index) => (
              <li
                key={index}
                className={`w-full text-center border-b border-white  px-2.5 py-3 cursor-pointer font-semibold hover:bg-white/20 hover:text-[#eeb57E] duration-200 transition-all ${
                  activeItem === item ? "text-white bg-transparent " : "text-white bg-transparent"
                }`}
                onClick={() => {
                  setActiveItem(item);
                  setMenuIsOpen(false);
                }}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
            <li className="flex space-x-2 absolute bottom-5 left-5">
              {icons.map((Icon, id) => {
                return (
                  <span
                    key={id}
                    className="border border-white rounded-full p-1.5 cursor-pointer hover:text-[#eeb57E] hover:border-[#eeb57E] hover:-translate-y-2 transition-all duration-200">
                    <Icon size={12} />
                  </span>
                );
              })}
            </li>
            <li className="font-semibold cursor-pointer absolute bottom-5 right-5 text-sm md:text-base hover:text-[#eeb57E]">
              +213 123 456 789
            </li>
          </div>
        </Motion.ul>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
