import React from "react";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  errorImageOverlay: {
    height: "90vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  errorImageContainer: {
    display: "inline - block",
    backgroundImage: `url(https://i.imgur.com/yW2W9SC.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: " 40vh",
    height: "40vh",
  },
  errorImageText: {
    fontSize: "28px",
    color: "#2f8e89",
  },
}));

function Error() {
  const classes = useStyles();
  return (
    <div className={classes.errorImageOverlay}>
      <div className={classes.errorImageContainer}></div>
      <div className={classes.errorImageText}>Sorry!!! 500 Internal server error</div>
      <div className={classes.errorImageText}>We will fix soon...</div>
    </div>
  );
}

export default Error;
