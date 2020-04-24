import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { ClassicSpinner } from "react-spinners-kit";
import {
  IconButton,
  InputAdornment,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Container,
  Typography,
  Button,
  Avatar
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Copyright from "../common/copyright";
import GoogleButton from "react-google-button";
import { login } from "../../../redux/actions/customerAuth";
import {
  useStyles,
  errorDivStyle,
  errorMessageStyle
} from "../common/authFormStyles";

const SignIn = ({ login, success, message, stepOne, stepTwo, stepThree }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    const payload = {
      email,
      password
    };
    login(payload);
    setIsLoading(false);
  };

  const handleClickShowPassword = () => {
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
            Sign in
          </Typography>
          {success === false ? (
            <div style={errorDivStyle}>
              <p style={errorMessageStyle}>{message}</p>
            </div>
          ) : null}
          {stepOne === false ? <Redirect to="/questionnaire/step-1" /> : null}
          {stepOne && stepTwo === false ? (
            <Redirect to="/questionnaire/step-2" />
          ) : null}
          {stepTwo === true && stepThree === false ? (
            <Redirect to="/questionnaire/step-3" />
          ) : null}
          {stepOne && stepTwo && stepThree ? (
            <Redirect to="/dashboard" />
          ) : null}

          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
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
                "Sign In"
              )}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot_password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
          <div style={{ textAlign: "center", marginTop: "10px" }}>OR</div>
          <GoogleButton
            onClick={loginWithGoogle}
            style={{ width: "380px", marginTop: "20px" }}
          />
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  success: PropTypes.bool,
  message: PropTypes.string.isRequired,
  connection: PropTypes.bool.isRequired,
  stepOne: PropTypes.bool.isRequired,
  stepTwo: PropTypes.bool.isRequired,
  stepThree: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const {
    login: {
      success,
      message,
      setupTracking: { connection, stepOne, stepTwo, stepThree }
    }
  } = state.authentication;
  return {
    success,
    message,
    connection,
    stepOne,
    stepTwo,
    stepThree
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: payload => dispatch(login(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
