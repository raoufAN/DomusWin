import { useRef, useState } from "react";
import FaqBox from "../../Componenets/faq/FaqBox";
import FaqTitles from "../../Componenets/faq/FaqTitles";
import { faqs } from "../../data/data";

const FaqSection = () => {
  const ref = useRef([]);
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="py-10">
      <FaqTitles />
      <div className="flex flex-col border-y border-black my-5">
        {faqs.map((faq, index) => (
          <FaqBox
            faq={faq}
            key={index}
            index={index}
            refereance={ref}
            activeFaq={activeFaq}
            setActiveFaq={setActiveFaq}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
