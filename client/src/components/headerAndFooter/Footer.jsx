import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    minHeight: "40px",
    background: "#141414",
    color:"white",
    fontSize: "18px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      &copy; {new Date().getFullYear()} Copyright: MIT licence
    </div>
  );
}

export default Footer;
