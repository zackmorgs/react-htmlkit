import React from "react";
import "./Canvas.scss";

let Canvas = props => <canvas {...props}>{props.children}</canvas>;

export default Canvas;
