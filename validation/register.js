const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegistorInput(data) {
  const errors = {};


  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.app = !isEmpty(data.app) ? data.app : "";

console.log(data);


  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (!Validator.isEmail(data.email) && !(Validator.isNumeric(data.email) && Validator.isLength(data.email, 10)) ) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is reqired";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be atleast 6 characters";
  }

  if (Validator.isEmpty(data.app)) {
    errors.app= "App name require"
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
