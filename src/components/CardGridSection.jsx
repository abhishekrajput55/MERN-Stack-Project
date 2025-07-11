// components/CardGrid.jsx
import React from "react";

const CardGrid = ({ cardData }) => {
  return (
    <div className="grid grid-cols-2 sm:[grid-template-columns:repeat(auto-fit,_minmax(200px,_1fr))] gap-6">
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
  );
};

export default CardGrid;
