import React from "react";
import { GoogleLogin } from "react-google-login";
import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

const Login = ({ classes }) => {
  const onSuccess = googleUser => {
    console.log({ googleUser })
  }

  return (
    <GoogleLogin clientId="211278434930-vunn4kbu6h2bgjgbcm9fkk7agrddc0nd.apps.googleusercontent.com"
    onSuccess={onSuccess}
    />
  );
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(styles)(Login);
