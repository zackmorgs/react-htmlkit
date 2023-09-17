import React from "react";
import "./Slot.scss";

let Slot = props => <slot {...props}>{props.children}</slot>;

export default Slot;
