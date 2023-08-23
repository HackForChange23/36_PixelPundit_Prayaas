import React from "react";
import "../components/AppBar.css";

function CenterCont(props) {
    return (
    <div className="center-container">{props.children}</div>
    );
  }
  
  export default CenterCont;