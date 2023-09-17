import React from "react";
import "./Base.scss";

let Base = props => <base {...props}>{props.children}</base>;

export default Base;
