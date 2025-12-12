import React from "react";

const CustomButton = ({ href, className, text }) => {
  return (
    <a
      href={href}
      className={`rounded-md border py-1 md:py-2 px-2 md:px-4 font-semibold text-sm md:text-lg ${className}`}
    >
      {text}
    </a>
  );
};

export default CustomButton;
