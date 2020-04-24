import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { submitFirstStepQuestionnaire } from "../../../../redux/actions/questionnaire";

import countries from "../../common/countries";
import legalForms from "../../common/legalforms";
import industries from "../../common/industries";
import Footer from "../../common/Footer";

const QuestionnaireFirstForm = ({ message, submitQuestionnaire }) => {
  const entries = Object.entries(countries);
  const [companyName, setCompanyName] = React.useState("");
  const [respondent, setRespondent] = React.useState("");
  const [positionInCompany, setPositionInCompany] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [dateOfIncorporation, setDateOfIncorporation] = React.useState("");
  const [legalForm, setLegalForm] = React.useState("");
  const [industry, setIndustry] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      companyName,
      respondent,
      positionInCompany,
      phoneNo,
      emailAddress,
      country,
      dateOfIncorporation,
      legalForm,
      industry
    };
    submitQuestionnaire(payload);
  };

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
          marginTop: "80px",
          marginBottom: "80px"
        }}
      >
        <div style={{ paddingBottom: "20px" }}>
          <h5 style={{ color: "green", paddingBottom: "10px" }}>
            Fill in the questionnaire below to set up your account. All the
            details in each field below is required.
          </h5>
          <h6 style={{ color: "gray" }}>This is step 1 of 3</h6>
        </div>
        {message === "Step one completed." ? (
          <Redirect to="/questionnaire/step-2" />
        ) : null}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-4.5">
              <label style={{ marginBottom: "10px" }} htmlFor="fullname">
                Name of person filling this form
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="full-name"
                value={respondent}
                onChange={e => setRespondent(e.target.value)}
              />
            </div>
            <div className="form-group col-md-7.5">
              <label style={{ marginBottom: "10px" }} htmlFor="phonenumber">
                Phone number
              </label>
              <PhoneInput
                country={"ke"}
                regions={"africa"}
                value={phoneNo}
                onChange={phone => setPhoneNo(phone)}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                  type: "tel"
                }}
              />
            </div>
          </div>
          <div className="form-group">
            <label style={{ marginBottom: "10px" }} htmlFor="emailaddress">
              Email address
            </label>
            <input
              required
              type="email"
              className="form-control"
              id="email-address"
              value={emailAddress}
              onChange={e => setEmailAddress(e.target.value)}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label style={{ marginBottom: "10px" }} htmlFor="companyname">
                Name of the company
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="company-name"
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
              />
            </div>
            <div class="form-group col-md-4">
              <label style={{ marginBottom: "10px" }} htmlFor="country">
                Country of operation
              </label>
              <select
                required
                className="form-control"
                id="countries-select"
                value={country}
                onChange={e => setCountry(e.target.value)}
              >
                <option value="">Open this select menu</option>
                {entries.map(entry => (
                  <option id={entry[0]}>{entry[1]}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label style={{ marginBottom: "10px" }} htmlFor="companyposition">
              Your position in the company
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="company-position"
              value={positionInCompany}
              onChange={e => setPositionInCompany(e.target.value)}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label style={{ marginBottom: "10px" }} htmlFor="industry">
                Industry
              </label>
              <select
                required
                class="form-control"
                id="industries-select"
                value={industry}
                onChange={e => setIndustry(e.target.value)}
              >
                <option value="">Open this select menu</option>
                {industries.map(industry => (
                  <option id={industry}>{industry}</option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-4">
              <label
                style={{ marginBottom: "10px" }}
                htmlFor="dateofincorporation"
              >
                Date of incorporation
              </label>
              <input
                required
                type="date"
                className="form-control"
                id="date-of-incorporation"
                value={dateOfIncorporation}
                onChange={e => setDateOfIncorporation(e.target.value)}
              />
            </div>
            <div class="form-group col-md-4">
              <label style={{ marginBottom: "10px" }} htmlFor="legalform">
                Legal Form
              </label>
              <select
                required
                class="form-control"
                id="legal-forms-select"
                value={legalForm}
                onChange={e => setLegalForm(e.target.value)}
              >
                <option value="">Open this select menu</option>
                {legalForms.map(form => (
                  <option id={form}>{form}</option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-success">
            Next
          </button>
        </form>
      </div>
      <div style={{ backgroundColor: "", height: "auto", width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
};

QuestionnaireFirstForm.propTypes = {
  message: PropTypes.string,
  submitQuestionnaire: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const {
    questionnaire: { message }
  } = state.clientDetails;

  return {
    message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitQuestionnaire: payload =>
      dispatch(submitFirstStepQuestionnaire(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionnaireFirstForm);
