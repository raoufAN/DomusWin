const WrapperBlure = ({ children }) => {
  return <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm">{children}</div>;
};

export default WrapperBlure;
