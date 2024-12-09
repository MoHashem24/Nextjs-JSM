'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({  children }) => {
    console.log("Test client Side")
  return (
    <button 
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      {children}
    </button>
  );
}

export default Button;