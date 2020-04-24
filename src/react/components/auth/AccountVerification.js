import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ClassicSpinner } from "react-spinners-kit";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faAngry } from "@fortawesome/free-solid-svg-icons";
import { verify } from "../../../redux/actions/customerAuth";

const AccountVerification = ({
  location: { search },
  verify,
  success,
  message
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const email = params.get("email");
    const token = params.get("token");
    const url = `/api/v1/verifyAccount?email=${email}&token=${token}`;
    verify(url);
    setIsLoading(false);
  }, [search, verify]);

  const divStyle = {
    height: "300px",
    width: "400px",
    backgroundColor: "#D5D9DF",
    marginTop: "15%",
    marginLeft: "35%",
    borderRadius: "2px"
  };

  const iconStyle = {
    marginTop: "10%",
    marginLeft: "45%"
  };

  const pStyle = {
    fontSize: "20px",
    textAlign: "center",
    marginTop: "7%",
    color: "#575454"
  };

  const subpStyle = {
    fontSize: "15px",
    textAlign: "center",
    marginTop: "7%",
    color: "#575454",
    marginLeft: "30px",
    marginRight: "30px"
  };

  const btnStyle = {
    backgroundColor: "#2D5BC4",
    color: "white",
    border: "none",
    borderRadius: "2px",
    width: "300px",
    height: "40px",
    marginLeft: "12%",
    marginTop: "10%"
  };

  return (
    <div className="container">
      {isLoading && (
        <ClassicSpinner size={35} color="red" loading={isLoading} />
      )}
      {success === true && message === "Email address verified" ? (
        <div style={divStyle}>
          <FontAwesomeIcon
            style={iconStyle}
            icon={faThumbsUp}
            size="lg"
            color="lightgreen"
          />
          <p style={pStyle}>{message}</p>
          <p style={subpStyle}>
            Thank you for verifying your email address. This helps us in keeping
            your account safe.
          </p>
          <button style={btnStyle}>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/login"
            >
              Continue
            </Link>
          </button>
        </div>
      ) : null}
      {success === true && message === "Account Already Verified." ? (
        <div style={divStyle}>
          <FontAwesomeIcon
            style={iconStyle}
            icon={faAngry}
            size="lg"
            color="#F44A4A"
          />
          <p style={pStyle}>{message}</p>
          <p style={subpStyle}>
            Thank you for verifying your email address. This helps us in keeping
            your account safe.
          </p>
          <button style={btnStyle}>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/login"
            >
              Continue
            </Link>
          </button>
        </div>
      ) : null}
      {success === false &&
      message === "Oops! Your verification link has expired." ? (
        <div style={divStyle}>
          <FontAwesomeIcon
            style={iconStyle}
            icon={faAngry}
            size="lg"
            color="#F44A4A"
          />
          <p style={pStyle}>{message}</p>
          <p style={subpStyle}>
            You can request for a new verification link by clicking the button
            below.
          </p>
          <button style={btnStyle}>Resend Confirmation Email</button>
        </div>
      ) : null}
      {success === false && message === "Email not found." ? (
        <div style={divStyle}>
          <FontAwesomeIcon
            style={iconStyle}
            icon={faAngry}
            size="lg"
            color="#F44A4A"
          />
          <p style={pStyle}>{message}</p>
          <p style={subpStyle}>Click the button below to register.</p>
          <button style={btnStyle}>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/register"
            >
              Register
            </Link>
          </button>
        </div>
      ) : null}
    </div>
  );
};

AccountVerification.propTypes = {
  location: PropTypes.object.isRequired,
  verify: PropTypes.func.isRequired,
  success: PropTypes.bool,
  message: PropTypes.string
};

const mapStateToProps = state => {
  const {
    login: { success, message }
  } = state.authentication;
  return {
    success,
    message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    verify: url => dispatch(verify(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountVerification);
