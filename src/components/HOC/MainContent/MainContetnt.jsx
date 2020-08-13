import React from "react";
import "./MainContent.scss";

export default function MainContetnt(props) {
  return <div className="content">{props.children}</div>;
}
