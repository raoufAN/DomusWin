const ImageBox = ({ text, number }) => {
  return (
    <div className="bg-black/50 backdrop-blur-sm p-10 flex flex-col  justify-center items-center rounded-2xl w-50 border border-white/20">
      <span className="text-sm text-gray-100/80 mb-2 uppercase">{text}</span>
      <span className="text-5xl font-bold text-white ">{number}</span>
    </div>
  );
};

export default ImageBox;
