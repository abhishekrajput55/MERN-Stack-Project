import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductNavbar from "../components/ProductNavbar";
import SlideBarHero from "../components/SlideBarHero";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import SectionHeadStyle from "../components/SectionHeadStyle";
import CommomFooter from "../components/CommomFooter";
import ProductSection from "../components/ProductSection";
import {
  fmcgproducts,
  elecproducts,
  clothproducts,
  eceproducts,
  kitchenproducts,
  luggageproducts,
} from "../data/products";
import Banner from "../components/Banner";
const banners = [
  {
    image: "/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "Upgrade Your Wardrobe",
    description: "Shop the latest fashion trends for wholesale prices.",
    buttonText: "Explore Now",
  },
  {
    image: "/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "New Arrivals",
    description: "Catch the latest styles before they're gone!",
    buttonText: "Shop New",
  },
  {
    image: "/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "Smart Deals Everyday",
    description: "Save more when you buy more.",
    buttonText: "Grab Deals",
  },
  {
    image: "/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "Comfort Meets Style",
    description: "Discover comfy fits for everyday wear.",
    buttonText: "Browse Now",
  },
  {
    image: "/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "Big Discounts Inside",
    description: "Unbeatable prices on quality apparel.",
    buttonText: "Get Offer",
  },
  {
    image: "/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "Seasonal Collection",
    description: "Fresh picks for every season and occasion.",
    buttonText: "View Collection",
  },
  {
    image: "/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "Trusted by Retailers",
    description: "Wholesale clothing trusted by 1000+ retailers.",
    buttonText: "Join Now",
  },
];

const Products = () => {
  return (
    <div className="w-full h-fit">
      <ProductNavbar />
      <SlideBarHero slide={banners} />
      <Category />
      <ProductSection
        heading="FMCG Products"
        img="/assets/indexImg/style3.png"
        products={fmcgproducts}
        linkTo="FMCG"
      />

      <ProductSection
        heading="Electrical Products"
        img="/assets/indexImg/style3.png"
        products={elecproducts}
        linkTo="Electrical"
      />

      <ProductSection
        heading="Clothing Products"
        img="/assets/indexImg/style3.png"
        products={clothproducts}
        linkTo="Clothing"
      />

      <ProductSection
        heading="Electronics Products"
        img="/assets/indexImg/style3.png"
        products={eceproducts}
        linkTo="Electronics"
      />
      <Banner banner={"/assets/pageimg/clothing_slidebaner-img-1.jpg"} />

      <ProductSection
        heading="Home and Kitchen Products"
        img="/assets/indexImg/style3.png"
        products={kitchenproducts}
        linkTo="Electronics"
      />
      <Banner banner={"/assets/pageimg/clothing_slidebaner-img-1.jpg"} />

      <ProductSection
        heading="Luggage and Traveling Products"
        img="/assets/indexImg/style3.png"
        products={luggageproducts}
        linkTo="Electronics"
      />
      <Banner banner={"/assets/pageimg/clothing_slidebaner-img-1.jpg"} />
      <CommomFooter />
    </div>
  );
};

export default Products;
