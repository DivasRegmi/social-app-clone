import React from "react";
import {
  makeStyles,
  Typography,
} from "@material-ui/core";
import SignUpLogoBox from "./signUpLogoBox/SignUpLogoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const facebook = <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />;
const google = <FontAwesomeIcon icon={["fab", "google"]} size="2x" />;
const instagram = <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />;

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth:"230px",
    maxWidth: "400px",
    height: "300px",
    margin: "10px auto",
    padding: "20px 5px",
    border: "5px solid black",
    textAlign: "center",

    [theme.breakpoints.up('sm')]:{
        padding: "20px",
    },
    [theme.breakpoints.up('md')]:{
        width:"500px"
    },
  },

}));

function SignUp() {
  const classes = useStyle();

  const openGoogle = () =>{
      console.log("google");
      
  }
  const openFacebook = () =>{
    console.log("facebook");

  }
  const openInstagram = () =>{
    console.log("instagram");

  }
  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <Typography variant='body2' >Dont have an account?</Typography>
      </div>

      <SignUpLogoBox logo={google} title="Continue with Google" onClick={openGoogle}/>
      <SignUpLogoBox logo={facebook} title="Continue with Facebook" onClick={openFacebook} />
      <SignUpLogoBox logo={instagram} title="Continue with Instagram" onClick={openInstagram}/>
    </div>
  );
}

export default SignUp;
