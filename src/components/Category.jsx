import React from "react";
import SectionHeadStyle from "./SectionHeadStyle";

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
    <div className="max-w-7xl mx-auto px-4 py-10 border">
      <SectionHeadStyle
        img="src/assets/indexImg/style3.png"
        heading="Shop by Categories"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-between">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="bg-bgColor rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-24 h-24 object-cover mb-4 rounded"
            />
            <h3 className="text-sm font-semibold text-center text-themeColor leading-tight">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
