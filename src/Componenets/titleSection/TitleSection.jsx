const TitleSection = ({ lineOne, lineTwo, color, animation }) => {
  return (
    <h1 className={`${color} font-bold text-4xl lg:text-6xl flex flex-col ${animation}`}>
      <span>{lineOne}</span>
      <span>{lineTwo}</span>
    </h1>
  );
};

export default TitleSection;
