import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-bgColor shadow-xl z-50">
      <div className="flex items-center justify-between lg:max-w-[90%] w-full mx-auto px-4 md:px-10 lg:px-28 py-5 font-bold">
        {/* Logo */}
        <h1 className="text-2xl">
          <a href="#">BigSmart</a>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {["About Us", "Sign in", "Sign up"].map((text, index) => (
            <li key={index} className="group relative py-2">
              <a href="#" className="text-black">
                {text}
                <span className="absolute left-0 bottom-0 w-4 h-[3px] bg-themeColor transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon (optional) */}
        <div className="md:hidden">
          <i className="ri-menu-line text-2xl text-theme"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
