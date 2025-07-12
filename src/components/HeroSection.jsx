import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-themeColor px-5 py-4">
      <div className="text-bgColor w-full text-center h-full flex flex-col justify-end items-center pb-32 gap-6 bg hero">
        {/* Text Content */}
        <div className="border w-fit flex flex-col gap-2">
          <h2 className="text-5xl font-bold">Trade-in-offer</h2>
          <h1 className="text-3xl font-bold">India's eB2B Platform for</h1>
          <h1 className="text-5xl font-bold">businesses & shop-owners</h1>
          <p className="font-bold">Save more with coupons & upto 70% off!</p>
        </div>

        {/* Button */}
        <Button />
      </div>
    </div>
  );
};

export default HeroSection;
