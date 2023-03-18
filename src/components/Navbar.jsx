import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <h1 className="text-blue-600 text-4xl font-bold cursor-pointer">
        MCKAYFLIX
      </h1>
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-blue-600 px-6 py-2 rounded cursor-pointer text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
