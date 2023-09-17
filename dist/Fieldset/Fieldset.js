import React from "react";
import "./Fieldset.scss";

let Fieldset = props => <fieldset {...props}>{props.children}</fieldset>;

export default Fieldset;
