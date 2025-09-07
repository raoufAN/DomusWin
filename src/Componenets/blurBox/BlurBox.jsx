const BlurBox = ({ text, number }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-5 md:p-10 flex flex-col  rounded-2xl w-50 md:w-65 border border-white/20">
      <span className="text-4xl text-white mb-2">{number}</span>
      <span className="text-sm text-gray-100/80">{text}</span>
    </div>
  );
};

export default BlurBox;
