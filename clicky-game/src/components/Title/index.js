import React from "react";
import "./style.css";

function Title(props) {
  return <p className="title">{props.children}</p>;
}

export default Title;
