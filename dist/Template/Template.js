import React from "react";
import "./Template.scss";

let Template = props => <template {...props}>{props.children}</template>;

export default Template;
