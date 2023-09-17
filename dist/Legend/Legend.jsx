import React from "react";
import "./Legend.scss";

let Legend = props => <legend {...props}>{props.children}</legend>;

export default Legend;
