import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    border: "1px solid black",
    minWidth:"220px",
    maxWidth: "400px",
    padding: "10px 10px",
    margin: "20px auto",
    position: "relative",
    whiteSpace: "nowrap",
    
    "&:hover" : {
      cursor: "pointer",
      background: `${theme.palette.primary.light}`

    }
  },
  title: {
    position: "absolute",
    left: "50%",
    transform: "translate(-40%, 0%)",
    [theme.breakpoints.up('xs')]:{
    transform: "translate(-40%, 0%)",

    }
  },
}));

function SignUpLogoBox({ logo, title, onClick }) {
  const classes = useStyle();
  return (
    <div className={classes.root} onClick={onClick} >

      <div className={classes.logo} children={logo} />
      <Typography className={classes.title} variant="body1" children={title} />
    </div>
  );
}

export default SignUpLogoBox;
