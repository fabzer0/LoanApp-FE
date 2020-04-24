import React from "react";
import Footer from "../common/Footer";

const QuickbooksConnect = () => {
  const quickbooksBtn = {
    backgroundColor: "#2AB373",
    border: "none",
    width: "200px",
    height: "50px",
    color: "white",
    borderRadius: "2px",
    margin: "auto",
    marginTop: "20px",
    marginLeft: "150px"
  };

  const connectQuickbooks = () => {
    window.location.href = "http://localhost:5000/api/v1/integrate_quickbooks"
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        overflow: "auto",
        backgroundColor: "",
        marginTop: "70px"
      }}
    >
      <div
        style={{
          backgroundColor: "",
          height: "auto",
          width: "40%",
          margin: "auto",
          marginTop: "150px",
          marginBottom: "80px"
        }}
      >
        <p style={{ textAlign: "center", fontSize: "25px" }}>
          <strong>
            Please connect your Quickbooks online accounting platform
          </strong>
        </p>
        <button style={quickbooksBtn} onClick={connectQuickbooks}>
          Quickbooks
        </button>
      </div>
      <div
        style={{ backgroundColor: "", height: "auto", width: "100%" }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default QuickbooksConnect;
