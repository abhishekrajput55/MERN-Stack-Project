import React from "react";

const Banner = ({ banner }) => {
  return (
    <div className="w-full h-fit mt-10 mb-10">
      <img src={banner} alt="banner" />
    </div>
  );
};

export default Banner;
