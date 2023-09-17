import React from "react";
import "./Header.scss";

let Header = props => <header {...props}>{props.children}</header>;

export default Header;
