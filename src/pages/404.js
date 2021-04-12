import React from "react";
import { Container, Box, CssBaseline, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: theme.spacing(2),
  },
}));

const FourZeroFour = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <Box className={classes.paper}>
      <Typography variant="h2" component="h1">
        Page not found :({" "}
      </Typography>
      <Typography variant="body1" component="p" className={classes.text}>
        Maybe the page you are looking for has been removed, or you typed in the
        wrong URL
      </Typography>
      </Box>
    </Container>
  );
};

export default FourZeroFour;
