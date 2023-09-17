import React from "react";
import "./Form.scss";

let Form = props => <form {...props}>{props.children}</form>;

export default Form;
