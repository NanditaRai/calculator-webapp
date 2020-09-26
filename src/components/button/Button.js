import React from "react";
import { func, string } from 'prop-types';
import "./Button.css";

const Button = ({ children, handleClick }) => {
  let isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };

  return <div className={`button ${isOperator(children) ? '' : 'operator'}`} onClick={() => handleClick(children)}>{children}</div>;
};

Button.defaultProps = {
  children: '',
  handleClick: () => {},
}

Button.propTypes = {
  children: string.isRequired,
  handleClick: func.isRequired, 
}

export default Button;
