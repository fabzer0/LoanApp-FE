import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  submitThirdStepQuestionnaire,
  fetchBanks
} from "../../../../redux/actions/questionnaire";
import Footer from "../../common/Footer";

const QuestionnaireThirdForm = ({
  message,
  country,
  accountingSystem,
  submitQuestionnaire,
  fetchBanks,
  bankList
}) => {
  const [product, setProduct] = useState("");
  const [existingLenders, setExistingLenders] = useState("");
  const [noOfLenders, setNoOfLenders] = useState("");
  const [accountant, setAccountant] = useState("");
  const [accountantPhoneNo, setAccountantPhoneNo] = useState("");
  const [contactAccountant, setContactAccountant] = useState("");
  const [nameOfAccountant, setNameOfAccountant] = useState("");
  const [
    externalOrInternalAccountant,
    setExternalOrInternalAccountant
  ] = useState("");
  const [onlineAccounting, setOnlineAccounting] = useState("");
  const [nameOfAccountingSystem, setNameOfAccountingSystem] = useState("");
  const [bankAccounts, setBankAccounts] = useState("");
  const [mostDepositBank, setMostDepositBank] = useState("");
  const [banks, setBanks] = useState(null);
  const lenders = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  useEffect(() => {
    fetchBanks(country);
  }, [fetchBanks, country]);

  useEffect(() => {
    setBanks(bankList);
    console.log(banks);
  }, [bankList, banks]);

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      product,
      existingLenders,
      noOfLenders,
      externalOrInternalAccountant,
      accountantPhoneNo,
      nameOfAccountant,
      onlineAccounting,
      nameOfAccountingSystem,
      mostDepositBank
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
          <h6 style={{ color: "gray" }}>This is step 3 of 3</h6>
        </div>
        {message === "Step three completed." &&
        accountingSystem === "Quickbooks" ? (
          <Redirect to="/quickbooks/connect" />
        ) : null}
        {message === "Step three completed." && accountingSystem === "" ? (
          <Redirect to="/dashboard" />
        ) : null}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label style={{ marginBottom: "10px" }} htmlFor="finloproducts">
              Which Finlo’s products are you interested in?
            </label>
            <select
              required
              className="custom-select"
              id="finlo-products"
              value={product}
              onChange={e => setProduct(e.target.value)}
            >
              <option value="">Open this select menu</option>
              <option>Cash Advance / Avance de Trésorerie</option>
              <option>Working Capital / Actif circulant</option>
              <option>Asset Finance / Achat d'équipement </option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ marginBottom: "10px" }} htmlFor="existinglenders">
              Does your company have existing lenders?
            </label>
            <select
              required
              className="custom-select"
              id="existing-lenders"
              value={existingLenders}
              onChange={e => setExistingLenders(e.target.value)}
            >
              <option value="">Open this select menu</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          {existingLenders === "Yes" ? (
            <div class="form-group" style={{ marginLeft: "10px" }}>
              <label style={{ marginBottom: "10px" }} htmlFor="nooflenders">
                How many lenders do you have?
              </label>
              <select
                required
                className="form-control"
                id="no-of-lenders"
                value={noOfLenders}
                onChange={e => setNoOfLenders(e.target.value)}
              >
                <option value="">Open this select menu</option>
                <option>None</option>
                {lenders.map(i => (
                  <option>{i}</option>
                ))}
              </select>
            </div>
          ) : null}

          <div className="form-group">
            <label style={{ marginBottom: "10px" }} htmlFor="accountant">
              Does your company have an accountant?
            </label>
            <select
              required
              className="custom-select"
              id="accountant"
              value={accountant}
              onChange={e => setAccountant(e.target.value)}
            >
              <option value="">Open this select menu</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {accountant === "Yes" ? (
            <div className="form-group" style={{ marginLeft: "10px" }}>
              <label
                style={{ marginBottom: "10px" }}
                htmlFor="externalinternal"
              >
                Is the accountant external or internal?
              </label>
              <select
                required
                className="custom-select"
                id="external-internal"
                value={externalOrInternalAccountant}
                onChange={e => setExternalOrInternalAccountant(e.target.value)}
              >
                <option value="">Open this select menu</option>
                <option>External</option>
                <option>Internal</option>
              </select>
            </div>
          ) : null}
          {externalOrInternalAccountant === "External" ? (
            <div className="form-group" style={{ marginLeft: "20px" }}>
              <label
                style={{ marginBottom: "10px" }}
                htmlFor="contactaccountant"
              >
                Can we contact your company external accountant for the purpose
                of our diligence?
              </label>
              <select
                required
                className="custom-select"
                id="contact-accountant"
                value={contactAccountant}
                onChange={e => setContactAccountant(e.target.value)}
              >
                <option value="">Open this select menu</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          ) : null}
          {contactAccountant === "Yes" ? (
            <div>
              <div className="form-group" style={{ marginLeft: "30px" }}>
                <label
                  style={{ marginBottom: "10px" }}
                  htmlFor="accountantname"
                >
                  Accountant's name
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="accountant-name"
                  value={nameOfAccountant}
                  onChange={e => setNameOfAccountant(e.target.value)}
                />
              </div>
              <div className="form-group" style={{ marginLeft: "30px" }}>
                <label
                  style={{ marginBottom: "10px" }}
                  htmlFor="accountantsphone"
                >
                  Accountant's phone number
                </label>
                <PhoneInput
                  country={"ke"}
                  regions={"africa"}
                  value={accountantPhoneNo}
                  onChange={phone => setAccountantPhoneNo(phone)}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                    type: "tel"
                  }}
                />
              </div>
            </div>
          ) : null}
          {contactAccountant === "No" ? (
            <p
              style={{
                marginLeft: "30px",
                color: "green",
                marginBottom: "10px"
              }}
            >
              A Finlo representative will contact you on the phone number shared
              in this form
            </p>
          ) : null}
          {accountant === "No" ? null : (
            <>
              <div className="form-group">
                <label style={{ marginBottom: "10px" }} htmlFor="bankaccounts">
                  Does your company have bank accounts?
                </label>
                <select
                  required
                  className="custom-select"
                  id="banka-ccounts"
                  value={bankAccounts}
                  onChange={e => setBankAccounts(e.target.value)}
                >
                  <option value="">Open this select menu</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              {bankAccounts === "Yes" ? (
                <div className="form-group" style={{ marginLeft: "10px" }}>
                  <label style={{ marginBottom: "10px" }} htmlFor="bank">
                    Which bank collects most of your deposits?
                  </label>
                  <select
                    required
                    type="text"
                    className="form-control"
                    id="bank"
                    value={mostDepositBank}
                    onChange={e => setMostDepositBank(e.target.value)}
                  >
                    <option value="">Open this select menu</option>
                    {bankList
                      ? bankList.map(bank => <option key={bank}>{bank}</option>)
                      : null}
                    <option>Other</option>
                  </select>
                </div>
              ) : null}
              {bankAccounts === "No" ? (
                <p
                  style={{
                    marginLeft: "10px",
                    color: "green",
                    marginBottom: "10px"
                  }}
                >
                  A Finlo representative will contact you on the phone number
                  shared in this form
                </p>
              ) : null}
              <div className="form-group">
                <label
                  style={{ marginBottom: "10px" }}
                  htmlFor="softwareaccounting"
                >
                  Does your company have an accounting software to track
                  expenses and revenues?
                </label>
                <select
                  required
                  className="custom-select"
                  id="software-accounting"
                  value={onlineAccounting}
                  onChange={e => setOnlineAccounting(e.target.value)}
                >
                  <option value="">Open this select menu</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              {onlineAccounting === "Yes" ? (
                <div className="form-group" style={{ marginLeft: "10px" }}>
                  <label
                    style={{ marginBottom: "10px" }}
                    htmlFor="softwarename"
                  >
                    Select the accounting software used
                  </label>
                  <select
                    required
                    className="custom-select"
                    id="software-name"
                    value={nameOfAccountingSystem}
                    onChange={e => setNameOfAccountingSystem(e.target.value)}
                  >
                    <option value="">Open this select menu</option>
                    <option>Quickbooks</option>
                  </select>
                </div>
              ) : null}
              {onlineAccounting === "No" ? (
                <p
                  style={{
                    marginLeft: "10px",
                    color: "green",
                    marginBottom: "10px"
                  }}
                >
                  A Finlo representative will contact you on the phone number
                  shared in this form
                </p>
              ) : null}
            </>
          )}

          <button type="submit" className="btn btn-success">
            Complete
          </button>
        </form>
      </div>
      <div style={{ backgroundColor: "", height: "auto", width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
};

QuestionnaireThirdForm.propTypes = {
  message: PropTypes.string,
  accountingSystem: PropTypes.string,
  country: PropTypes.string,
  submitQuestionnaire: PropTypes.func.isRequired,
  fetchBanks: PropTypes.func.isRequired,
  banks: PropTypes.array
};

const mapStateToProps = state => {
  const {
    questionnaire: {
      message,
      clientDetails: { nameOfAccountingSystem: accountingSystem, country }
    },
    banks: { banks: bankList }
  } = state.clientDetails;

  return {
    message,
    accountingSystem,
    country,
    bankList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitQuestionnaire: payload =>
      dispatch(submitThirdStepQuestionnaire(payload)),
    fetchBanks: country => dispatch(fetchBanks(country))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionnaireThirdForm);
