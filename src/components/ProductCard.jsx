import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const handlePrev = () => {
    setCurrentImg((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImg((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="max-w-xs bg-white border rounded-xl shadow-md hover:shadow-lg transition p-4 text-textColor relative">
      {/* Image Slider */}
      <div className="relative h-44 mb-4">
        <img
          src={product.images[currentImg]}
          alt={product.name}
          className="w-full h-full object-contain rounded"
        />

        {/* Navigation Arrows */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-1 rounded-full"
            >
              <i className="ri-arrow-left-s-line text-xl text-themeColor"></i>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-1 rounded-full"
            >
              <i className="ri-arrow-right-s-line text-xl text-themeColor"></i>
            </button>
          </>
        )}
      </div>

      {/* Product Info */}
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.category}</p>

      <div className="mt-3">
        <p className="text-themeColor font-bold text-lg">
          ₹{product.price}{" "}
          <span className="text-sm font-medium text-gray-500">/pc</span>
        </p>
      </div>

      {/* Buttons */}
      <button className="mt-4 w-full flex items-center justify-center gap-2 bg-themeColor text-white py-2 rounded hover:bg-opacity-90 transition">
        <i className="ri-flashlight-line text-lg"></i>
        Buy Now
      </button>
      <button className="mt-2 w-full flex items-center justify-center gap-2 border border-themeColor text-themeColor py-2 rounded hover:bg-themeColor hover:text-white transition">
        <i className="ri-shopping-cart-line text-lg"></i>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
