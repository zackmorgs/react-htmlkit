import React from "react";
import "./Noembed.scss";

let Noembed = props => <noembed {...props}>{props.children}</noembed>;

export default Noembed;
