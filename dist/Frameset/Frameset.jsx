import React from "react";
import "./Frameset.scss";

let Frameset = props => <frameset {...props}>{props.children}</frameset>;

export default Frameset;
