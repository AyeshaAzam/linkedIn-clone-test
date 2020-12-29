import React from "react";
import "./Backdrop.css";

// i can use Backdrop in any react project I want , ex like in Modal too
const Backdrop = ({ click }) => {
  return <div className="backdrop" onClick={click} />;
};

export default Backdrop;
