import React from "react";
import "./Button.css";

let Button = props => <Button {...props}>{props.children}</Button>;

export default Button;
