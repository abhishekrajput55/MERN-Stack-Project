// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Login/Register combined page */}
        <Route path="/auth" element={<Auth />} />

        {/* Product page (accessible after login) */}
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;
