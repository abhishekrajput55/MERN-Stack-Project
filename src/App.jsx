// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Homepage components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Quick from "./components/Quick";
import Category from "./components/Category";
import StartTrading from "./components/StartTrading";
import WelcomeSection from "./components/WelcomeSection";

// Pages
import Auth from "./pages/Auth";
import Products from "./pages/Products";
import CommomFooter from "./components/CommomFooter";
import About from "./pages/About";
import BrandLogoSlideBar from "./components/BrandLogoSlideBar";

// Home page layout
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Quick />
      <Category />
      <StartTrading />
      <WelcomeSection />
      <BrandLogoSlideBar />
      <CommomFooter />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
