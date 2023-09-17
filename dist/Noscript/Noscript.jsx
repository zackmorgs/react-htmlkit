import React from "react";
import "./Noscript.scss";

let Noscript = props => <noscript {...props}>{props.children}</noscript>;

export default Noscript;
