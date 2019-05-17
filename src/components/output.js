import React from "react";

export default function Output(props) {
  return <div className={props.outputType}>{props.value}</div>;
}
