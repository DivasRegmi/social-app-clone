import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
import SignUpLogoBox from "./signUpLogoBox/SignUpLogoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NewWindow from "react-new-window";


const facebookIcon = <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />;
const googleIcon = <FontAwesomeIcon icon={["fab", "google"]} size="2x" />;
const instagramIcon = <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />;

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: "230px",
    maxWidth: "400px",
    height: "300px",
    margin: "10px auto",
    padding: "20px 5px",
    border: "5px solid black",
    textAlign: "center",

    [theme.breakpoints.up("sm")]: {
      padding: "20px",
    },
    [theme.breakpoints.up("md")]: {
      width: "500px",
    },
  },
}));

function SignUp({ history }) {
  const classes = useStyle();
  const [facebook, setfacebook] = useState(false);
  const [google, setgoogle] = useState(false);
  const [instagram, setinstagram] = useState(false);

  

  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <Typography variant="body2">Don't have an account?</Typography>
      </div>

      <SignUpLogoBox
        logo={googleIcon}
        title="Continue with Google"
        onClick={() => setgoogle(true)}
      />
      <SignUpLogoBox
        logo={facebookIcon}
        title="Continue with Facebook"
        onClick={() => setfacebook(true)}
      />
      <SignUpLogoBox
        logo={instagramIcon}
        title="Continue with Instagram"
        onClick={(set) => setinstagram(true)}
      />
      {/* New window is pop up  */}
      {facebook ? (
        <NewWindow
          url="/facebook/signup"
          name="facebook"
          title="facebook"
          center="screen"
          onUnload={() => {
            setfacebook(false);
          }}
          features={{
            height: "500px",
            width: "500px",
          }}
          copyStyles
        />
       
      ) : null}
      {google ? (
        <NewWindow
          url="/google/signup"
          name="google"
          title="google"
          center="screen"
          onUnload={() => {
            setgoogle(false);
          }}
          features={{
            height: "500px",
            width: "500px",
          }}
          copyStyles
        />
       
      ) : null}
    </div>
  );
}

export default withRouter(SignUp);
