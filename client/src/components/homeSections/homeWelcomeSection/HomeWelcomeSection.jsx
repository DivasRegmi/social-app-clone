import React from "react";
import {withRouter} from 'react-router-dom'

import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

import "./homeWelcomeSection.scss";

const useStyles = makeStyles((theme) => ({
  homeWelcomeSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: " 20px",
    width: "450px",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      minWidth: "600px",
    },
  },

  welcomeSectionTitle: {
    fontSize: "40px",
    marginBottom: 0,
    lineHeight: "1",
    [theme.breakpoints.up("sm")]: {
      fontSize: "53px",
    },
  },

  welcomeSectionPragraph1: {
    margin: "0 20px",
    paddingTop: "25px",
    fontSize: " 22px",

    [theme.breakpoints.up("sm")]: {
      margin: "0 50px",
      fontSize: "30px",
    },
  },
  welcomeSectionPragraph2: {
    margin: "0 10px",
    paddingTop: "15px",
    fontSize: " 16px",

    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
    },
  },

  btnSignIn: {
    marginTop: "20px",
    width: "300px",
    height: "50px",
    fontSize: "30px",
  },
}));

function HomeWelcomeSection({history}) {
  const classes = useStyles();


  return (
    <div className="home-welcome-section">
      <div className={classes.homeWelcomeSection}>
        <h1 className={classes.welcomeSectionTitle}>
          The First Digital Currency You Can Mine
        </h1>

        <p className={classes.welcomeSectionPragraph1}>
          Start earning cryptocurrency today with us.
        </p>

        <p className={classes.welcomeSectionPragraph2}>
          Too many of us are left out of the cryptocurrency revolution
        </p>

        <Button
          className={classes.btnSignIn}
          variant="contained"
          color="primary"
          onClick={()=> (history.push("/login"))}
        >
          Start Mining
        </Button>

        <div className={classes.info}>
          Trusted By: 1M+ people
        </div>

      </div>
    </div>
  );
}

export default withRouter(HomeWelcomeSection);
