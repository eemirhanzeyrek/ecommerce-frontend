import React from "react";

const Input = ({ placeholder, value, name, id, type }) => {
  return (
    <input
      className="border w-full h-10 p-2 outline-none rounded-md my-2"
      placeholder={placeholder}
      value={value}
      name={name}
      id={id}
      type={type}
    />
  );
};

export default Input;
