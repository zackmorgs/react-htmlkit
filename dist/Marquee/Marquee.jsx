import React from "react";
import "./Marquee.scss";

let Marquee = props => <marquee {...props}>{props.children}</marquee>;

export default Marquee;
