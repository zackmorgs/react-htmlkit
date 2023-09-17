import React from "react";
import "./Tr.scss";

let Tr = props => <tr {...props}>{props.children}</tr>;

export default Tr;
