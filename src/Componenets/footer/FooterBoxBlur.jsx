import ButtonDiscover from "../buttonDiscover/ButtonDiscover";

const inputs = ["Your Name", "Email", "Phone Number", "How Can We Help"];

const FooterBoxBlur = () => {
  return (
    <div className="rounded-2xl p-10 flex flex-col bg-white/5 backdrop-blur-sm w-[350px] ">
      <h1 className="text-5xl text-white">get in touch with us</h1>
      <div className="my-10 flex flex-col gap-y-5">
        {inputs.map((input, index) => (
          <input
            type={input.includes("Number") ? "number" : "text"}
            placeholder={input}
            key={index}
            className="outline-0 border-b text-white placeholder:text-white ml-2"
          />
        ))}
      </div>
      <ButtonDiscover
        textColor="text-[#101010]"
        colorbg="bg-white"
        colorbgArrow="bg-[#101010]"
        colorArrow="text-white"
        fill="white"
      />
    </div>
  );
};

export default FooterBoxBlur;
