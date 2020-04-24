import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "@material-ui/core";
import { resetPassword } from "../../../redux/actions/customerAuth";
import CopyRight from "../common/copyright";

const PasswordReset = ({
  location: { search },
  success,
  message,
  resetPassword
}) => {
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(search);
    const token = params.get("token");
    setToken(token);
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      password
    };
    if (password !== confirmPass) {
      document.getElementById("reset-pwd-match-err").style.display = "block";
    } else {
      document.getElementById("reset-pwd-match-err").style.display = "none";
      if (validatePassword()) {
        resetPassword(payload, token);
      } else {
        document.getElementById("validatepwd").style.display = "block";
      }
    }
  };

  const validatePassword = () => {
    const passRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (!passRegex.test(password)) {
      return false;
    }
    return true;
  };

  const renderButton = () => {
    if (
      success === false &&
      message === "Client with this email address was not found."
    ) {
      return (
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
      );
    } else if (success === false) {
      return (
        <Link href="/forgot_password">
          <button
            type="button"
            className="btn btn-success"
            style={{
              marginLeft: "20px",
              marginRight: "20px",
              width: "auto"
            }}
          >
            <strong>Request new link</strong>
          </button>
        </Link>
      );
    } else {
      return (
        <button
          type="submit"
          className="btn btn-success"
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            width: "auto"
          }}
        >
          <strong>Change password</strong>
        </button>
      );
    }
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
          Change password
        </p>
        <p
          style={{
            margin: "auto",
            color: "red",
            textAlign: "center",
            display: "none"
          }}
          id="reset-pwd-match-err"
        >
          Password and confirm password did not match
        </p>
        {success === false ? (
          <p
            style={{
              margin: "auto",
              color: "red",
              textAlign: "center"
            }}
          >
            {message}
          </p>
        ) : null}
        {success === null || success === false ? (
          <div
            style={{
              margin: "auto",
              width: "50%",
              height: "280px",
              backgroundColor: "#F4F9F5",
              borderRadius: "3px",
              marginBottom: "30px"
            }}
          >
            <form onSubmit={handleSubmit}>
              <div
                className="form-group"
                style={{ marginLeft: "20px", marginRight: "20px" }}
              >
                <label
                  style={{ marginBottom: "10px", marginTop: "20px" }}
                  htmlFor="password"
                >
                  <strong>Password</strong>
                </label>
                <input
                  required
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div
                className="form-group"
                style={{ marginLeft: "20px", marginRight: "20px" }}
              >
                <label
                  style={{ marginBottom: "10px" }}
                  htmlFor="confirm-password"
                >
                  <strong>Confirm password</strong>
                </label>
                <input
                  required
                  type="password"
                  className="form-control"
                  id="confirm-password"
                  value={confirmPass}
                  onChange={e => setConfirmPass(e.target.value)}
                />

                <small
                  id="validatepwd"
                  className="form-text"
                  style={{ marginTop: "10px", color: "red", display: "none" }}
                >
                  Password to be atleast 8 char, 1 lower and uppercase, 1
                  integer and special char (!@#$%^&*)
                </small>

                <small
                  id="emailHelp"
                  className="form-text text-muted"
                  style={{ marginTop: "10px" }}
                >
                  Make sure it's at least 15 characters OR at least 8 characters
                  including a number and a lowercase letter.{" "}
                </small>
              </div>

              {renderButton()}
            </form>
          </div>
        ) : null}
        {success === true ? (
          <div
            style={{
              margin: "auto",
              width: "50%",
              height: "130px",
              backgroundColor: "#F4F9F5",
              borderRadius: "3px",
              marginBottom: "30px"
            }}
          >
            <p style={{ padding: "20px" }}>
              <strong>{message}</strong>
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

PasswordReset.propTypes = {
  success: PropTypes.bool,
  message: PropTypes.string.isRequired,
  resetPassword: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const {
    password: {
      resetPass: { success, message }
    }
  } = state.authentication;
  return { success, message };
};

const mapDispatchToProps = dispatch => {
  return {
    resetPassword: (payload, token) => dispatch(resetPassword(payload, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);
