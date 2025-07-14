import React from "react";
import SectionHeadStyle from "./SectionHeadStyle";
import CardGrid from "./CardGridSection";

// Card titles and placeholder images (replace with real images later)
const cardData = [
  { title: "FMCG Product", img: "src/assets/indeximg/foodimg1.png" },
  {
    title: "Electronics & Appliances",
    img: "src/assets/indeximg/electronicimg2.png",
  },
  {
    title: "Clothing & Accessories",
    img: "src/assets/indeximg/clothingimg3.png",
  },
  {
    title: "Electrical",
    img: "src/assets/indeximg/electrical4.png",
  },
  {
    title: "Home & Kitchen",
    img: "src/assets/indeximg/cookingimg5.png",
  },
  {
    title: "Hardware & Sanitaryware",
    img: "src/assets/indeximg/Hardwareimg6.png",
  },
  { title: "Toys", img: "https://via.placeholder.com/150?text=Toys" },
  {
    title: "Luggage",
    img: "src/assets/indeximg/luggageimg1.png",
  },
  { title: "Footwear", img: "src/assets/indeximg/footwearimg9.png" },
  {
    title: "Stationery",
    img: "https://via.placeholder.com/150?text=Stationery",
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
