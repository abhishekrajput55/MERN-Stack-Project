import React from "react";
import SectionHeadStyle from "./SectionHeadStyle";
import CardGrid from "./CardGridSection";

// Card titles and placeholder images (replace with real images later)
const cardData = [
  { title: "FMCG Product", img: "/assets/indeximg/foodimg1.png" },
  {
    title: "Electronics & Appliances",
    img: "/assets/indeximg/electronicimg2.png",
  },
  {
    title: "Clothing & Accessories",
    img: "/assets/indeximg/clothingimg3.png",
  },
  {
    title: "Electrical",
    img: "/assets/indeximg/electrical4.png",
  },
  {
    title: "Home & Kitchen",
    img: "/assets/indeximg/cookingimg5.png",
  },
  {
    title: "Hardware & Sanitaryware",
    img: "/assets/indeximg/Hardwareimg6.png",
  },
  { title: "Toys", img: "https://via.placeholder.com/150?text=Toys" },
  {
    title: "Luggage",
    img: "/assets/indeximg/luggageimg1.png",
  },
  { title: "Footwear", img: "/assets/indeximg/footwearimg9.png" },
  {
    title: "Stationery",
    img: "https://via.placeholder.com/150xt=Stationery",
  },
];

const Category = () => {
  return (
    <div className="w-full px-4 py-10 border mt-8">
      <SectionHeadStyle
        img="src/assets/indexImg/style3.png"
        heading="Shop by Categories"
      />
      <CardGrid cardData={cardData} />
    </div>
  );
};

export default Category;
