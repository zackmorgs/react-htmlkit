import React from "react";
import "./Progress.scss";

let Progress = props => <progress {...props}>{props.children}</progress>;

export default Progress;
