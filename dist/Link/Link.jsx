import React from "react";
import "./Link.scss";

let Link = props => <link {...props}>{props.children}</link>;

export default Link;
