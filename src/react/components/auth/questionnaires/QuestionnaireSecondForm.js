import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { submitSecondStepQuestionnaire } from "../../../../redux/actions/questionnaire";
import countries from "../../common/countries";
import Footer from "../../common/Footer";

const QuestionnaireSecondForm = ({ message, submitQuestionnaire }) => {
  const entries = Object.entries(countries);
  const [ceo, setCeo] = useState("");
  const [ceoGender, setCeoGender] = useState("");
  const [ceoCountryOfBirth, setCeoCountryOfBirth] = useState("");
  const [ceoDateOfBirth, setCeoDateOfBirth] = useState("");
  const [lastYearTurnOver, setLastYearTurnOver] = useState("");
  const [lastMonthTurnOver, setLastMonthTurnOver] = useState("");
  const [companyActivities, setCompanyActivities] = useState("");
  const [fteCount, setFteCount] = useState("");
  const [debtFundingRequired, setDebtFundingRequired] = useState("0");
  const [desiredUseOfDebtProceeds, setDesiredUseOfProceeds] = useState("");
  const [proposedGuarantees, setProposedGuarantees] = useState("");
  const employees = [
    "1 to 5",
    "1 to 10",
    "1 to 20",
    "1 to 50",
    "1 to 100",
    "1 to 150",
    "1 to 200",
    "1 to 300",
    "above 300"
  ];

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      ceo,
      ceoGender,
      ceoCountryOfBirth,
      ceoDateOfBirth,
      lastYearTurnOver,
      lastMonthTurnOver,
      companyActivities,
      fteCount,
      debtFundingRequired,
      desiredUseOfDebtProceeds,
      proposedGuarantees
    };
    submitQuestionnaire(payload);
  };

  const formatNumber = int => {
    return int.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
          <h6 style={{ color: "gray" }}>This is step 2 of 3</h6>
        </div>
        {message === "Step two completed." ? (
          <Redirect to="/questionnaire/step-3" />
        ) : null}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label style={{ marginBottom: "10px" }} htmlFor="ceo">
                C.E.O
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="ceo-name"
                value={ceo}
                onChange={e => setCeo(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label
                style={{ marginBottom: "10px" }}
                htmlFor="ceo-countryofbirth"
              >
                C.E.O country of birth
              </label>
              <select
                required
                className="form-control"
                id="ceo-countries-select"
                value={ceoCountryOfBirth}
                onChange={e => setCeoCountryOfBirth(e.target.value)}
              >
                <option value="">Open this select menu</option>
                {entries.map(entry => (
                  <option id={`ceo-${entry[0]}`}>{entry[1]}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label style={{ marginBottom: "10px" }} htmlFor="ceodateofbirth">
                C.E.O date of birth
              </label>
              <input
                required
                type="date"
                className="form-control"
                id="ceo-date-of-birth"
                value={ceoDateOfBirth}
                onChange={e => setCeoDateOfBirth(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label style={{ marginBottom: "10px" }} htmlFor="ceodateofbirth">
                C.E.O Title
              </label>
              <select
                required
                className="custom-select"
                id="ceo-gender"
                value={ceoGender}
                onChange={e => setCeoGender(e.target.value)}
              >
                <option value="">Open this select menu</option>
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Miss</option>
                <option>I prefer not to mention</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label style={{ marginBottom: "10px" }} htmlFor="lastyrturnover">
                Last year turnover ($)
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="lastyr-turnover"
                value={lastYearTurnOver}
                onChange={e =>
                  setLastYearTurnOver(formatNumber(e.target.value))
                }
              />
            </div>
            <div class="form-group col-md-6">
              <label
                style={{ marginBottom: "10px" }}
                htmlFor="lastmonthturnover"
              >
                Last month turnover ($)
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="lastmonth-turnover"
                value={lastMonthTurnOver}
                onChange={e =>
                  setLastMonthTurnOver(formatNumber(e.target.value))
                }
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label style={{ marginBottom: "10px" }} htmlFor="employeesnumber">
                Number of employees
              </label>

              <select
                required
                className="form-control"
                id="employees-number"
                value={fteCount}
                onChange={e => setFteCount(e.target.value)}
              >
                <option value="">Open this select menu</option>

                {employees.map(i => (
                  <option>{i}</option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-8">
              <label
                style={{ marginBottom: "10px" }}
                htmlFor="proposedguarantees"
              >
                Proposed Guarantees
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="proposed-guarantees"
                value={proposedGuarantees}
                onChange={e => setProposedGuarantees(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-2" style={{ float: "left" }}>
              <span>CFA 2,000,000</span>
            </div>
            <div className="form-group col-md-8" style={{ float: "center" }}>
              <label style={{ marginBottom: "10px" }} htmlFor="amountrequired">
                Amount required
              </label>
              <input
                required
                type="range"
                className="custom-range"
                id="amount-required"
                min="2000000"
                max="75000000"
                step="100000"
                value={debtFundingRequired}
                onChange={e => setDebtFundingRequired(e.target.value)}
              />
              <small style={{ color: "green", fontSize: "17px" }}>
                <strong>{formatNumber(debtFundingRequired)}</strong>
              </small>
            </div>
            <div className="form-group col-md-2">
              <span>CFA 75,000,000</span>
            </div>
          </div>
          <div class="form-group">
            <label style={{ marginBottom: "10px" }} htmlFor="desiredusefunds">
              What will be the use of the requested credit?
            </label>
            <textarea
              required
              class="form-control"
              rows="3"
              id="desired-usefunds"
              value={desiredUseOfDebtProceeds}
              onChange={e => setDesiredUseOfProceeds(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label style={{ marginBottom: "10px" }} htmlFor="companyactivities">
              Company activities
            </label>
            <textarea
              required
              class="form-control"
              id="company-activities"
              rows="3"
              value={companyActivities}
              onChange={e => setCompanyActivities(e.target.value)}
            ></textarea>
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

QuestionnaireSecondForm.propTypes = {
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
      dispatch(submitSecondStepQuestionnaire(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionnaireSecondForm);
