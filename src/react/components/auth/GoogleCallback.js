import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { googleCallback } from "../../../redux/actions/customerAuth";

const GoogleCallback = ({
  googleCallback,
  success,
  message,
  connection,
  stepOne,
  stepTwo,
  stepThree
}) => {
  const [isLoading, setIsLoading] = useState(true);
  // const [$success, $setSuccess] = useState(null);
  // const [$message, $setMessage] = useState("");
  const [$stepOne, $setStepOne] = useState(null);
  const [$stepTwo, $setStepTwo] = useState(null);
  const [$stepThree, $setStepThree] = useState(null);

  useEffect(() => {
    googleCallback();
  }, [googleCallback]);

  useEffect(() => {
    // $setSuccess(success);
    // $setMessage(message);
    $setStepOne(stepOne);
    $setStepTwo(stepTwo);
    $setStepThree(stepThree);
  }, [success, message, connection, stepOne, stepTwo, stepThree]);

  return (
    <div>
      {$stepOne === false ? <Redirect to="/questionnaire/step-1" /> : null}
      {$stepOne && $stepTwo === false ? (
        <Redirect to="/questionnaire/step-2" />
      ) : null}
      {$stepTwo === true && $stepThree === false ? (
        <Redirect to="/questionnaire/step-3" />
      ) : null}
      {$stepOne && $stepTwo && $stepThree ? <Redirect to="/dashboard" /> : null}
    </div>
  );
};

GoogleCallback.propTypes = {
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  stepOne: PropTypes.bool.isRequired,
  stepTwo: PropTypes.bool.isRequired,
  stepThree: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const {
    login: {
      success,
      message,
      setupTracking: { stepOne, stepTwo, stepThree }
    }
  } = state.authentication;
  return {
    success,
    message,
    stepOne,
    stepTwo,
    stepThree
  };
};

const mapDispatchToProps = dispatch => {
  return {
    googleCallback: () => dispatch(googleCallback())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleCallback);
