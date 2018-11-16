import React from "react";
import "./Article.css";

let Article = props => <Article {...props}>{props.children}</Article>;

export default Article;
