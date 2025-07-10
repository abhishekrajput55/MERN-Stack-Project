import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-themeColor px-5 py-4">
      <div className="text-bgColor w-full text-center h-full flex flex-col justify-end items-center pb-32 gap-6 bg hero">
        {/* Text Content */}
        <div className="border w-fit flex flex-col gap-2">
          <h2 className="text-5xl font-bold">Trade-in-offer</h2>
          <h1 className="text-3xl font-bold">
            India's largest eB2B Platform for
          </h1>
          <h1 className="text-5xl font-bold">businesses & shop-owners</h1>
          <p className="font-bold">Save more with coupons & upto 70% off!</p>
        </div>

        {/* Button */}
        <button className="relative px-6 py-3 font-semibold group border bg-bgColor text-themeColor rounded-sm overflow-hidden">
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-themeColor transition-all duration-300 group-hover:w-full"></span>
          Register Now
          <i className="ri-arrow-right-line font-bold ml-1"></i>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
