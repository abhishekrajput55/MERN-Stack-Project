import React from "react";
import ProductNavbar from "../components/ProductNavbar";
import SlideBarHero from "../components/SlideBarHero";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";

const banners = [
  {
    image: "src/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "Upgrade Your Wardrobe",
    description: "Shop the latest fashion trends for wholesale prices.",
    buttonText: "Explore Now",
  },
  {
    image: "src/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "New Arrivals",
    description: "Catch the latest styles before they're gone!",
    buttonText: "Shop New",
  },
  {
    image: "src/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "Smart Deals Everyday",
    description: "Save more when you buy more.",
    buttonText: "Grab Deals",
  },
  {
    image: "src/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "Comfort Meets Style",
    description: "Discover comfy fits for everyday wear.",
    buttonText: "Browse Now",
  },
  {
    image: "src/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "Big Discounts Inside",
    description: "Unbeatable prices on quality apparel.",
    buttonText: "Get Offer",
  },
  {
    image: "src/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "Seasonal Collection",
    description: "Fresh picks for every season and occasion.",
    buttonText: "View Collection",
  },
  {
    image: "src/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "Trusted by Retailers",
    description: "Wholesale clothing trusted by 1000+ retailers.",
    buttonText: "Join Now",
  },
];
const sampleProduct = {
  name: "Tata Sampann Masoor Dal, Whole, 1kg",
  category: "Dal",
  price: 140,
  bulkOffer: ">10 qty. ₹120.00/pc",
  images: [
    "src/assets/pageimg/elec_img1-1.jpeg",
    "src/assets/pageimg/elec_img1-2.jpeg",
    "src/assets/pageimg/elec_img1-3.jpeg",
  ],
};
const Products = () => {
  return (
    <div className="w-full h-fit">
      <ProductNavbar />
      <SlideBarHero slide={banners} />
      <Category />
      <div className="grid grid-cols-2 sm:[grid-template-columns:repeat(auto-fit,_minmax(200px,_1fr))] gap-8">
        <ProductCard product={sampleProduct} />
      </div>
    </div>
  );
};

export default Products;
