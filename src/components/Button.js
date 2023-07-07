import React from "react";

const Button = (props) => {
  return (
    <div className="px-3 m-2 bg-gray-200 rounded-lg">
      <button>{props.name}</button>
    </div>
  );
};

export default Button;
