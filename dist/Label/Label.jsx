import React from "react";
import "./Label.scss";

let Label = props => <label {...props}>{props.children}</label>;

export default Label;
