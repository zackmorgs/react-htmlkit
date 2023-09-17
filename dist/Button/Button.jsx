import React from "react";
import "./Button.scss";

let Button = props => <button {...props}>{props.children}</button>;

export default Button;
