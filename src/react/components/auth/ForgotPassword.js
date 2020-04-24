import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "@material-ui/core";
import PropTypes from "prop-types";
import CopyRight from "../common/copyright";
import { forgotPassword } from "../../../redux/actions/customerAuth";

const ForgotPassword = ({ success, message, forgotPassword }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      email
    };
    forgotPassword(payload);
  };

  return (
    <div
      style={{
        marginTop: "70px",
        backgroundColor: "",
        width: "100%",
        height: "100vh",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          margin: "auto",
          backgroundColor: "",
          width: "50%",
          height: "80vh",
          marginTop: "50px"
        }}
      >
        <p
          style={{
            paddingBottom: "20px",
            fontSize: "25px",
            textAlign: "center"
          }}
        >
          Reset your password
        </p>
        {success === false ? (
          <p style={{ margin: "auto", color: "red", textAlign: "center" }}>
            {message}
          </p>
        ) : null}
        {success === null || success === false ? (
          <div
            style={{
              margin: "auto",
              width: "50%",
              height: "200px",
              backgroundColor: "#F4F9F5",
              borderRadius: "3px",
              marginBottom: "30px"
            }}
          >
            <p style={{ padding: "20px" }}>
              <strong>
                Enter your user account's verified email address and we will
                send you a password reset link.
              </strong>
            </p>
            <form onSubmit={handleSubmit}>
              <div
                className="form-group"
                style={{ marginLeft: "20px", marginRight: "20px" }}
              >
                <input
                  required
                  type="email"
                  className="form-control"
                  id="mail-address"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              {success === false ? (
                <Link href="/register">
                  <button
                    type="button"
                    className="btn btn-success"
                    style={{
                      marginLeft: "20px",
                      marginRight: "20px",
                      width: "auto"
                    }}
                  >
                    <strong>Register account</strong>
                  </button>
                </Link>
              ) : (
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{
                    marginLeft: "20px",
                    marginRight: "20px",
                    width: "auto"
                  }}
                >
                  <strong>Send password reset email</strong>
                </button>
              )}
            </form>
          </div>
        ) : null}
        {success === true ? (
          <div
            style={{
              margin: "auto",
              width: "50%",
              height: "170px",
              backgroundColor: "#F4F9F5",
              borderRadius: "3px",
              marginBottom: "30px"
            }}
          >
            <p style={{ padding: "20px" }}>
              <strong>
                Check your email for a link to reset your password. If it
                doesn’t appear within a few minutes, check your spam folder.
              </strong>
            </p>
            <Link href="/login">
              <button
                type="button"
                className="btn btn-success"
                style={{
                  marginLeft: "20px",
                  marginRight: "20px",
                  width: "auto"
                }}
              >
                <strong>Return to login</strong>
              </button>
            </Link>
          </div>
        ) : null}
        <CopyRight />
      </div>
    </div>
  );
};

ForgotPassword.propTypes = {
  success: PropTypes.bool,
  message: PropTypes.string.isRequired,
  forgotPassword: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const {
    password: {
      forgotPass: { success, message }
    }
  } = state.authentication;
  return {
    success,
    message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    forgotPassword: payload => dispatch(forgotPassword(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
