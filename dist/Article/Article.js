import React from "react";
import "./Article.scss";

let Article = props => <article {...props}>{props.children}</article>;

export default Article;
