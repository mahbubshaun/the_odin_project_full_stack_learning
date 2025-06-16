import React from 'react';
import './Button.css'; // Assuming you have some styles for the button


const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <button
      className={`button button--${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;