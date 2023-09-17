import React from "react";
import "./Datalist.scss";

let Datalist = props => <datalist {...props}>{props.children}</datalist>;

export default Datalist;
