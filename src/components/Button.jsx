import React from "react";

const Button = () => {
  return (
    <button className="relative px-6 py-3 font-semibold group bg-bgColor text-themeColor rounded-sm overflow-hidden border">
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-themeColor transition-all duration-300 group-hover:w-full"></span>
      Register Now
      <i className="ri-arrow-right-line font-bold ml-1"></i>
    </button>
  );
};

export default Button;
