import React from "react";
import SectionHeadStyle from "./SectionHeadStyle";

const logos = [
  "/assets/indeximg/top-brand-card-1.png",
  "/assets/indeximg/top-brand-card-2.png",
  "/assets/indeximg/top-brand-card-3.png",
  "/assets/indeximg/top-brand-card-4.png",
  "/assets/indeximg/top-brand-card-5.png",
  "/assets/indeximg/top-brand-card-6.png",
  "/assets/indeximg/top-brand-card-7.png",
  "/assets/indeximg/top-brand-card-8.png",
  "/assets/indeximg/top-brand-card-9.png",
  "/assets/indeximg/top-brand-card-10.png",
  "/assets/indeximg/top-brand-card-11.png",
  "/assets/indeximg/top-brand-card-12.png",
  "/assets/indeximg/top-brand-card-13.png",
  "/assets/indeximg/top-brand-card-15.png",
  "/assets/indeximg/top-brand-card-14.png",
  "/assets/indeximg/top-brand-card-16.png",
  "/assets/indeximg/top-brand-card-17.png",
  "/assets/indeximg/top-brand-card-18.png",
  "/assets/indeximg/top-brand-card-19.png",
  "/assets/indeximg/top-brand-card-20.png",
  "/assets/indeximg/top-brand-card-21.png",
  "/assets/indeximg/top-brand-card-22.png",
  "/assets/indeximg/top-brand-card-23.png",
  "/assets/indeximg/top-brand-card-24.png",
  "/assets/indeximg/top-brand-card-25.png",
  "/assets/indeximg/top-brand-card-26.png",
  "/assets/indeximg/top-brand-card-27.png",
  "/assets/indeximg/top-brand-card-28.png",
  "/assets/indeximg/top-brand-card-29.png",
  "/assets/indeximg/top-brand-card-30.png",
  "/assets/indeximg/top-brand-card-31.png",
  "/assets/indeximg/top-brand-card-32.png",
  "/assets/indeximg/top-brand-card-33.png",
  "/assets/indeximg/top-brand-card-34.png",
  "/assets/indeximg/top-brand-card-35.png",
  "/assets/indeximg/top-brand-card-36.png",
];

const BrandLogoSlideBar = () => {
  return (
    <div className="w-full bg-white py-6 overflow-hidden">
      <SectionHeadStyle
        img="src/assets/indexImg/style3.png"
        heading="Start Trading in 3 Simple Steps"
      />
      <div className="space-y-4">
        {/* Row 1 */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee gap-10 w-max ">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={`row1-${i}`}
                src={logo}
                alt={`Brand ${i}`}
                className="h-24 object-contain"
              />
            ))}
          </div>
        </div>

        {/* Row 2 - reverse direction */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee-reverse gap-10 w-max">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={`row2-${i}`}
                src={logo}
                alt={`Brand ${i}`}
                className="h-24 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandLogoSlideBar;
