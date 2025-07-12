import React from "react";
import SectionHeadStyle from "./SectionHeadStyle";
import CardGrid from "./CardGridSection";

// Sample data array
const quickLinks = [
  {
    title: "Electronics",
    img: "https://via.placeholder.com/100?text=Electronics",
  },
  {
    title: "Fashion",
    img: "https://via.placeholder.com/100?text=Fashion",
  },
  {
    title: "Groceries",
    img: "https://via.placeholder.com/100?text=Groceries",
  },
  {
    title: "Furniture",
    img: "https://via.placeholder.com/100?text=Furniture",
  },
];

const Quick = () => {
  return (
    <div className="w-full px-4 py-10 border mt-8">
      <SectionHeadStyle
        img="src/assets/indexImg/style4.png"
        heading="Quick Services"
        justify="start" // or "center"
      />

      <CardGrid cardData={quickLinks} />
    </div>
  );
};

export default Quick;
