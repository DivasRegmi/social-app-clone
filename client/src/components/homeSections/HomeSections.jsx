import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  sectionFirst: {
    padding: "80px 100px",
    background: "#252525",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    color: "white",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      textAlign: "left",
    },
    "& p": {
      fontSize: "16px",
      [theme.breakpoints.up("sm")]: {
        fontSize: "25px",
      },
    },
  },
  title: {
    fontSize: "22px",
    marginBottom: "25px",
    [theme.breakpoints.up("md")]: {
      fontSize: "40px",
    },
  },
  p1: {
    marginBottom: "12px",
  },
  p2: {
    marginBottom: "15px",
  },
  center: {
    textAlign: "center",
  },
}));

function HomeSections() {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.sectionFirst}>
        <div className="text">
          <h1 className={classes.title}> Mining crypto is hard.</h1>
          <p className={classes.p1}>Investing in crypto is risky.</p>
          <p className={classes.p2}>
            Too many of us are left out of the cryptocurrency revolution.
          </p>
        </div>

        <div className={classes.center}>
          <iframe
            title="story of bitcoin"
            width="400"
            height="225"
            src="https://www.youtube.com/embed/6tWtTsvmHJg"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <p>Story Of Bitcoin </p>
        </div>
      </div>
    </div>
  );
}

export default HomeSections;
