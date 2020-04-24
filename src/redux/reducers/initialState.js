const initialAuthenticationState = {
  isLoggedIn: null,
  registration: { success: null, message: "" },
  login: { success: null, message: "", setupTracking: {} },
  oauth2: {
    success: null,
    message: "",
    quickbooks: {
      userId: null,
      accessToken: null,
      refreshToken: null,
      realmId: null
    }
  },
  password: {
    forgotPass: {
      success: null,
      message: ""
    },
    resetPass: {
      success: null,
      message: ""
    }
  }
};

const initialQuestionnaireState = {
  questionnaire: {
    success: null,
    message: "",
    clientDetails: {}
  },
  banks: {}
};

export { initialAuthenticationState, initialQuestionnaireState };
