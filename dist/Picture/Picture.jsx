import React from "react";
import "./Picture.scss";

let Picture = props => <picture {...props}>{props.children}</picture>;

export default Picture;
