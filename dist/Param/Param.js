import React from "react";
import "./Param.scss";

let Param = props => <param {...props}>{props.children}</param>;

export default Param;
