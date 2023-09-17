import React from "react";
import "./Iframe.scss";

let Iframe = props => <iframe {...props}>{props.children}</iframe>;

export default Iframe;
