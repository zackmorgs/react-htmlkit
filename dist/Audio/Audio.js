import React from "react";
import "./Audio.scss";

let Audio = props => <audio {...props}>{props.children}</audio>;

export default Audio;
