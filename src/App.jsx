import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Quick from "./components/Quick";
import Category from "./components/Category";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Quick />
      <Category />
    </div>
  );
};

export default App;
