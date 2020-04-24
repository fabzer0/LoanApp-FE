import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ClassicSpinner } from "react-spinners-kit";
import {
  IconButton,
  InputAdornment,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Copyright from "../common/copyright";
import GoogleButton from "react-google-button";
import { register } from "../../../redux/actions/customerAuth";
import {
  useStyles,
  errorDivStyle,
  errorMessageStyle,
  successDivStyle,
  successMessageStyle
} from "../common/authFormStyles";

const SignUp = ({ register, success, message }) => {
  const classes = useStyles();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (success) {
      reset()
    } else {
      return;
    }
  }, [success])

  const reset = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    const payload = {
      firstname,
      lastname,
      email,
      password
    };
    if (password !== confirmPassword) {
      document.getElementById("matchpwd").style.display = "block";
      setIsLoading(false);
    } else {
      document.getElementById("matchpwd").style.display = "none";
      register(payload);
      setIsLoading(false);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = e => {
    e.preventDefault();
  };

  const loginWithGoogle = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <div
      style={{
        marginTop: "70px",
        backgroundColor: "",
        height: "100vh",
        marginBottom: "20px"
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper} style={{ paddingTop: "50px" }}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register Account
          </Typography>
          {success === true ? (
            <div style={successDivStyle}>
              <p style={successMessageStyle}>{message}</p>
            </div>
          ) : null}
          {success === false ? (
            <div style={errorDivStyle}>
              <p style={errorMessageStyle}>{message}</p>
            </div>
          ) : null}
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstname"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  value={firstname}
                  onChange={e => setFirstname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="lname"
                  name="lastname"
                  variant="outlined"
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  value={lastname}
                  onChange={e => setLastname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="password"
                  name="password"
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  type={showPassword ? "text" : "password" }
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <p id="matchpwd" style={{ color: "red", display: "none" }}>
                  Password and Confirm Password must match
                </p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="cpassword"
                  name="confirmPassword"
                  variant="outlined"
                  required
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  type={showPassword ? "text" : "password" }
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ height: "55px", backgroundColor: "#00afe0" }}
            >
              {isLoading ? (
                <ClassicSpinner size={25} color="#FFFFFF" loading={true} />
              ) : (
                "Register"
              )}
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
          <div style={{ textAlign: "center", marginTop: "10px" }}>OR</div>
          <GoogleButton
            onClick={loginWithGoogle}
            style={{ width: "380px", marginTop: "20px" }}
            label="Sign up with Google"
          />
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

SignUp.propTypes = {
  register: PropTypes.func.isRequired,
  success: PropTypes.bool,
  message: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  const {
    registration: { success, message }
  } = state.authentication;
  return {
    success,
    message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: payload => dispatch(register(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
