import React from "react";
import "./Table.scss";

let Table = props => <table {...props}>{props.children}</table>;

export default Table;
