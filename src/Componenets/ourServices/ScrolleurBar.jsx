const ScrolleurBar = ({ numberOfItem, countingDown }) => {
  return (
    <div className="flex flex-row md:flex-col justify-center items-center space-x-2 md:space-y-2 md:mr-5">
      <span className="text-sm text-[rgb(187_187_187)]">1</span>
      <div className="hidden md:flex w-0.5 h-52 bg-[rgb(187_187_187)]">
        <div
          className="w-0.5  bg-[#eeb57E]"
          style={{ height: `${208 * (countingDown / numberOfItem)}px` }}></div>
      </div>
      <div className="flex md:hidden w-[250px] h-1 bg-[rgb(187_187_187)]">
        <div
          className="h-1  bg-[#eeb57E]"
          style={{ width: `${208 * (countingDown / numberOfItem)}px` }}></div>
      </div>
      <span className="text-sm text-[rgb(187_187_187)]">{numberOfItem}</span>
    </div>
  );
};

export default ScrolleurBar;
