import React from "react";
import SectionHeadStyle from "./SectionHeadStyle";
import CardGrid from "./CardGridSection";

// Card titles and placeholder images (replace with real images later)
const cardData = [
  { title: "FMCG Product", img: "https://via.placeholder.com/150?text=FMCG" },
  {
    title: "Electronics & Appliances",
    img: "https://via.placeholder.com/150?text=Electronics",
  },
  {
    title: "Clothing & Accessories",
    img: "https://via.placeholder.com/150?text=Clothing",
  },
  {
    title: "Electrical",
    img: "https://via.placeholder.com/150?text=Electrical",
  },
  {
    title: "Home & Kitchen",
    img: "https://via.placeholder.com/150?text=Home+%26+Kitchen",
  },
  {
    title: "Hardware & Sanitaryware",
    img: "https://via.placeholder.com/150?text=Hardware",
  },
  { title: "Toys", img: "https://via.placeholder.com/150?text=Toys" },
  {
    title: "Baby & Sports",
    img: "https://via.placeholder.com/150?text=Baby+%26+Sports",
  },
  { title: "Footwear", img: "https://via.placeholder.com/150?text=Footwear" },
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
