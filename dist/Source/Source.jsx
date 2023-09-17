import React from "react";
import "./Source.scss";

let Source = props => <source {...props}>{props.children}</source>;

export default Source;
