import React from "react";
import "./Option.scss";

let Option = props => <option {...props}>{props.children}</option>;

export default Option;
