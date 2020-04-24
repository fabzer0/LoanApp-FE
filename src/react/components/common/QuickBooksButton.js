import React from "react";

const QuickBooksButton = () => {

  const buttonStyle = {
    backgroundColor: "green",
    border: "none",
    color: "white",
    borderRadius: "2px",
    fontSize: "13px",
    float: "right",
    marginRight: "15px",
    position: "relative",
    top: "35%"
  };

  const integrate = () => {
    window.location.href = "http://localhost:3000/api/v1/integrate_quickbooks";
  }

  
  return (
    <input style={buttonStyle} onClick={integrate} type="button" value="Connect to QuickBooks" />
  );
};

export default QuickBooksButton;
