import React from "react";




function Container(props) {
  return <div className="container mt-4" style={props.style}>{props.children}</div>;
}

export default Container;
