import React from "react";
import "./Input.scss";

let Input = props => <input {...props}>{props.children}</input>;

export default Input;
