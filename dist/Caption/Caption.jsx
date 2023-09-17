import React from "react";
import "./Caption.scss";

let Caption = props => <caption {...props}>{props.children}</caption>;

export default Caption;
