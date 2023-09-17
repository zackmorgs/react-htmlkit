import React from "react";
import "./Area.scss";

let Area = props => <area {...props}>{props.children}</area>;

export default Area;
