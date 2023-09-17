import React from "react";
import "./Details.scss";

let Details = props => <details {...props}>{props.children}</details>;

export default Details;
