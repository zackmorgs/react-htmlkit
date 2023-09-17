import React from "react";
import "./Meter.scss";

let Meter = props => <meter {...props}>{props.children}</meter>;

export default Meter;
