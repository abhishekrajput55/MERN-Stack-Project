// src/pages/Auth.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login success
    localStorage.setItem("loggedIn", "true");

    // Redirect to products page
    navigate("/products");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="w-full max-w-md p-8 shadow-md bg-white rounded">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-2 rounded"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
