import React from "react";
import "./Dialog.scss";

let Dialog = props => <dialog {...props}>{props.children}</dialog>;

export default Dialog;
