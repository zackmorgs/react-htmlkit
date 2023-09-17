import React from "react";
import "./Select.scss";

let Select = props => <select {...props}>{props.children}</select>;

export default Select;
