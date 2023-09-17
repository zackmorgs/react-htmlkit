import React from "react";
import "./Embed.scss";

let Embed = props => <embed {...props}>{props.children}</embed>;

export default Embed;
