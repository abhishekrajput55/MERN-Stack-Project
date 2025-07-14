import React from "react";
import SectionHeadStyle from "./SectionHeadStyle";

const logos = [
  "src/assets/indeximg/top-brand-card-1.png",
  "src/assets/indeximg/top-brand-card-2.png",
  "src/assets/indeximg/top-brand-card-3.png",
  "src/assets/indeximg/top-brand-card-4.png",
  "src/assets/indeximg/top-brand-card-5.png",
  "src/assets/indeximg/top-brand-card-6.png",
  "src/assets/indeximg/top-brand-card-7.png",
  "src/assets/indeximg/top-brand-card-8.png",
  "src/assets/indeximg/top-brand-card-9.png",
  "src/assets/indeximg/top-brand-card-10.png",
  "src/assets/indeximg/top-brand-card-11.png",
  "src/assets/indeximg/top-brand-card-12.png",
  "src/assets/indeximg/top-brand-card-13.png",
  "src/assets/indeximg/top-brand-card-14.png",
  "src/assets/indeximg/top-brand-card-15.png",
  "src/assets/indeximg/top-brand-card-16.png",
  "src/assets/indeximg/top-brand-card-17.png",
  "src/assets/indeximg/top-brand-card-18.png",
  "src/assets/indeximg/top-brand-card-19.png",
  "src/assets/indeximg/top-brand-card-20.png",
  "src/assets/indeximg/top-brand-card-21.png",
  "src/assets/indeximg/top-brand-card-22.png",
  "src/assets/indeximg/top-brand-card-23.png",
  "src/assets/indeximg/top-brand-card-24.png",
  "src/assets/indeximg/top-brand-card-25.png",
  "src/assets/indeximg/top-brand-card-26.png",
  "src/assets/indeximg/top-brand-card-27.png",
  "src/assets/indeximg/top-brand-card-28.png",
  "src/assets/indeximg/top-brand-card-29.png",
  "src/assets/indeximg/top-brand-card-30.png",
  "src/assets/indeximg/top-brand-card-31.png",
  "src/assets/indeximg/top-brand-card-32.png",
  "src/assets/indeximg/top-brand-card-33.png",
  "src/assets/indeximg/top-brand-card-34.png",
  "src/assets/indeximg/top-brand-card-35.png",
  "src/assets/indeximg/top-brand-card-36.png",
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
