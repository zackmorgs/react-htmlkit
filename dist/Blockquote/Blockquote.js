import React from "react";
import "./Blockquote.scss";

let Blockquote = props => <blockquote {...props}>{props.children}</blockquote>;

export default Blockquote;
