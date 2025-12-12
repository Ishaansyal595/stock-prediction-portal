import React from "react";
import CustomButton from "./ui/CustomButton";

const Header = () => {
  return (
    <nav className=" px-5 md:px-20 lg:px-50 py-5 flex justify-between items-center">
      {/* Logo */}
      <a href="/" className="text-gray-100 text-md md:text-xl font-semibold">
        Stock Prediction Portal
      </a>

      {/* Login Signup */}
      <div className="space-x-2">
        <CustomButton
          href=""
          text="Login"
          className="border-cyan-500 text-cyan-500 bg-transparent hover:bg-cyan-500 hover:text-black"
        />
        <CustomButton
          href=""
          text="Register"
          className="bg-cyan-500 border-none text-black hover:bg-transparent hover:text-cyan-500"
        />
      </div>
    </nav>
  );
};

export default Header;
