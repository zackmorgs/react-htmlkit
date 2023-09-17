import React from "react";
import "./Col.scss";

let Col = props => <col {...props}>{props.children}</col>;

export default Col;
