import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { retrieveQuickbooksTokens } from "../../../redux/actions/customerAuth";

const QuickbooksCallback = ({
  location: { search },
  retrieveQuickbooksTokens,
  success,
  message
}) => {
  useEffect(() => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    const state = params.get("state");
    const realmId = params.get("realmId");
    const url = `/auth/quickbooks/callback?code=${code}&state=${state}&realmId=${realmId}`;
    retrieveQuickbooksTokens(url);
  }, [search, retrieveQuickbooksTokens]);

  return (
    <div>
      {success === null ? <p></p> : null}
      {success === true ? <Redirect to="/dashboard" /> : null}
      {success === false ? <p>{message}</p> : null}
    </div>
  );
};

QuickbooksCallback.propTypes = {
  retrieveQuickbooksTokens: PropTypes.func.isRequired,
  success: PropTypes.bool,
  message: PropTypes.string,
  location: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const {
    oauth2: { success, message }
  } = state.authentication;
  return {
    success,
    message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveQuickbooksTokens: url => dispatch(retrieveQuickbooksTokens(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuickbooksCallback);
