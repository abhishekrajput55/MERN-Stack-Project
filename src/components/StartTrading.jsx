import React from "react";
import SectionHeadStyle from "./SectionHeadStyle";
import Button from "./Button";
const steps = [
  {
    img: "src/assets/step1.png",
    title: "Register",
    desc: "Create your business account and get access to thousands of suppliers.",
  },
  {
    img: "src/assets/step2.png",
    title: "Browse Products",
    desc: "Explore a wide range of verified B2B products across categories.",
  },
  {
    img: "src/assets/step3.png",
    title: "Start Trading",
    desc: "Place orders securely and grow your business with confidence.",
  },
];

const StartTradingSection = () => {
  return (
    <div className="w-full h-fit py-10 border">
      <SectionHeadStyle
        img="src/assets/indexImg/style3.png"
        heading="Start Trading in 3 Simple Steps"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8 mt-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center text-center px-4"
          >
            <img src={step.img} alt={step.title} className="w-20 h-20 mb-4" />
            <h1 className="text-lg font-semibold text-textColor mb-2">
              {step.title}
            </h1>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button />
      </div>
    </div>
  );
};

export default StartTradingSection;
