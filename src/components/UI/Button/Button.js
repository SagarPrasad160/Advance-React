import React from "react";

import "./Button.css";

import classNames from "classnames";

const Button = (props) => {
  console.log(props);
  const classes = classNames(props.className, "button");
  return (
    <button type={props.type} className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
