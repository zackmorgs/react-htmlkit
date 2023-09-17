import React from "react";
import "./Portal.scss";

let Portal = props => <portal {...props}>{props.children}</portal>;

export default Portal;
