import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-bgColor shadow-xl z-50">
      <div className="flex flex-wrap items-center justify-between lg:max-w-[90%] w-full mx-auto px-4 md:px-10 lg:px-28 py-2 gap-4">
        {/* Logo */}
        <Link to="/products">
          <img
            src="/assets/indexImg/weblogo-2.png"
            alt="website logo"
            className="h-24"
          />
        </Link>

        {/* Search Bar */}
        <div className="w-full md:flex-grow md:max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border border-gray-300 pl-10 pr-4 py-2 rounded-full text-textColor focus:outline-none focus:ring-2 focus:ring-themeColor shadow-sm"
            />
            <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"></i>
          </div>
        </div>

        {/* Category Button with Dropdown */}
        <div className="relative hidden md:block group">
          <button
            onMouseEnter={() => setShowDropdown(true)}
            className="bg-themeColor text-white px-4 py-2 rounded hover:bg-opacity-90"
          >
            Shop by Category
          </button>
          <ul
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            className={`absolute left-0 top-full mt-2 w-48 bg-white shadow-lg border rounded z-50 transition-opacity duration-200 ${
              showDropdown ? "block" : "hidden"
            }`}
          >
            {[
              "FMCG Products",
              "Electronics & Appliances",
              "Clothing & Accessories",
              "Electrical",
              "Home & Kitchen",
              "Hardware & Sanitaryware",
              "Toys, Baby & Sports",
              "Footwear",
            ].map((category, i) => (
              <li
                key={i}
                className="px-4 py-2 hover:bg-gray-100 text-sm text-black cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-xl text-themeColor">
          <Link to="/auth">
            <i className="ri-user-line cursor-pointer"></i>
          </Link>
          <Link to="/cart">
            <i className="ri-shopping-cart-line cursor-pointer"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ProductNavbar;
