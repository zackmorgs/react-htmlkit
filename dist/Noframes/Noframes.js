import React from "react";
import "./Noframes.scss";

let Noframes = props => <noframes {...props}>{props.children}</noframes>;

export default Noframes;
