import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Quick from "./components/Quick";
import Category from "./components/Category";
import StartTrading from "./components/StartTrading";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Quick />
      <Category />
      <StartTrading />
    </div>
  );
};

export default App;
