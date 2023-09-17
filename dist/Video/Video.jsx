import React from "react";
import "./Video.scss";

let Video = props => <video {...props}>{props.children}</video>;

export default Video;
