import React from "react";
import "./Track.scss";

let Track = props => <track {...props}>{props.children}</track>;

export default Track;
