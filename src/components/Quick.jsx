import React from "react";

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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Quick Links</h2>

      <div className="grid grid-cols-1 max650:grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {quickLinks.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md  p-4 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-24 h-24 object-cover mb-3 rounded-full"
            />
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quick;
