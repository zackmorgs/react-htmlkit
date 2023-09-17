import React from "react";
import "./Textarea.scss";

let Textarea = props => <textarea {...props}>{props.children}</textarea>;

export default Textarea;
