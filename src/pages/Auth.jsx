import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("Retailer");
  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    mobile: "",
    password: "",
    document: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setFormData((prev) => ({ ...prev, mobile: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userRole", role);
    navigate("/products");
  };

  return (
    <div className="w-full  min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-full max-w-md  bg-theme shadow-xl rounded-lg border">
        <div className=" p-5 bg-themeColor rounded-t-lg">
          <Link to="/">
            <p className="mb-4 cursor-pointer hover:underline text-bgColor">
              <i className="ri-arrow-left-line font-bold ml-1"></i>Home
            </p>
          </Link>
          <h2 className="text-3xl font-bold text-center text-bgColor mb-6 capitalize">
            {role === "Admin" ? "Admin Login" : isLogin ? "Login" : "Register"}{" "}
            as {role}
          </h2>

          {/* Role Selector */}
          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              setIsLogin(true); // Force login mode for Admin
            }}
            className="w-full border border-gray-300 p-2 rounded mb-4"
          >
            <option value="Retailer">Retailer</option>
            <option value="Seller">Seller</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Only show these fields if NOT login and NOT Admin */}
            {!isLogin && role !== "Admin" && (
              <>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number (User ID)"
                  value={formData.mobile}
                  onChange={handleMobileChange}
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-themeColor"
                  required
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company / Shop Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-themeColor"
                  required
                />
                <input
                  type="text"
                  name="ownerName"
                  placeholder="Owner Name"
                  value={formData.ownerName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-themeColor"
                  required
                />
                <input
                  type="file"
                  name="document"
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-themeColor"
                  required
                />
              </>
            )}

            {/* Common Fields for all roles */}
            {(isLogin || role === "Admin") && (
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number (User ID)"
                value={formData.mobile}
                onChange={handleMobileChange}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-themeColor"
                required
              />
            )}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-themeColor"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="relative w-full py-3 font-semibold group bg-bgColor text-themeColor border rounded-sm overflow-hidden"
            >
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-themeColor transition-all duration-300 group-hover:w-full"></span>
              {isLogin ? "Login" : "Register Now"}
              <i className="ri-arrow-right-line font-bold ml-1"></i>
            </button>
          </form>

          {/* Toggle Login/Register - Hidden for Admin */}
          {role !== "Admin" && (
            <p className="text-center mt-6 text-sm">
              {isLogin ? "Don't have an account?" : "Already registered?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 hover:underline"
              >
                {isLogin ? "Register here" : "Login here"}
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
