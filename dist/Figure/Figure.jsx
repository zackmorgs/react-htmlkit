import React from "react";
import "./Figure.scss";

let Figure = props => <figure {...props}>{props.children}</figure>;

export default Figure;
