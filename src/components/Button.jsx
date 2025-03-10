import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div className="w-full h-10 flex items-center justify-center text-lg bg-black text-white rounded-md">
      <Button onClick={onClick}>{text}</Button>
    </div>
  );
};

export default Button;
