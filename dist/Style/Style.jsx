import React from "react";
import "./Style.scss";

let Style = props => <style {...props}>{props.children}</style>;

export default Style;
