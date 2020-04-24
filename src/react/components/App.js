import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
// import PageNotFound from "./PageNotFound";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/Login";
import AccountVerification from "./auth/AccountVerification";
import Dashboard from "./dashboard/Dashboard";
import LandingPage from "./landingPage/LandingPage";
import QuickbooksCallback from "./auth/QuickbooksCallback";
import AdminDashboard from "./admin/AdminDashboard";
import QuickbooksConnect from "./auth/ConnectQuickbooks";
import QuestionnareFirstForm from "./auth/questionnaires/QuestionnaireFirstForm";
import QuestionnaireSecondForm from "./auth/questionnaires/QuestionnaireSecondForm";
import QuestionnaireThirdForm from "./auth/questionnaires/QuestionnaireThirdForm";
import Header from "./common/Header";
import ForgotPassword from "./auth/ForgotPassword";
import PasswordReset from "./auth/PasswordReset";
import { fetchUser } from "../../redux/actions/customerAuth";
import GoogleCallback from "./auth/GoogleCallback";
// import { AuthRoute, ProtectedRoute } from './utils/routes'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={LandingPage} />
            <Route path="/register" component={SignUp} />
            <Route path="/login" component={SignIn} />
            <Route path={`/verifyAccount/`} component={AccountVerification} />
            <Route path="/dashboard" component={Dashboard} />
            <Route
              path="/auth/quickbooks/callback"
              component={QuickbooksCallback}
            />
            <Route path="/admin/dashboard" component={AdminDashboard} />
            <Route path="/quickbooks/connect" component={QuickbooksConnect} />
            <Route
              path="/questionnaire/step-1"
              component={QuestionnareFirstForm}
            />
            <Route
              path="/questionnaire/step-2"
              component={QuestionnaireSecondForm}
            />
            <Route
              path="/questionnaire/step-3"
              component={QuestionnaireThirdForm}
            />
            <Route path="/forgot_password" component={ForgotPassword} />
            <Route path="/password_reset" component={PasswordReset} />
            <Route path="/google_callback" component={GoogleCallback} />
            {/* <Route path="/header" component={Header} /> */}
            {/* <Route component={PageNotFound} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
