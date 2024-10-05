import React from 'react';

const Button = ({ className, children }) => {
  return (
    <button
      className={`${className} font-bold text-white bg-black px-3 py-2 rounded`}
    >
      ${children}
    </button>
  );
};

export default Button;
