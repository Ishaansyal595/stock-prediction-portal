import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({ href, className, text }) => {
  return (
    <Link
      className={`rounded-md border py-1 md:py-2 px-2 md:px-4 font-semibold text-sm md:text-lg ${className}`}
      to={href}
    >
      {text}
    </Link>
  );
};

export default CustomButton;
