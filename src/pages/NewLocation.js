import React, { useReducer, useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import { LockOutlined, LocationCity } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Colors } from "../lib/theme";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: Colors.primary,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: 50,
    backgroundColor: Colors.primary,
    "&:hover": {
      backgroundColor: Colors.primary,
      color: Colors.hover,
    },
  },
}));

const NewLocation = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LocationCity />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add New Location
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="Name"
            label="Location Name"
            name="Name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="address"
            label="Address"
            name="address"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="city"
            label="City"
            name="city"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="district"
            label="District"
            name="district"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="contact"
            label="Contact"
            name="contact"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            name="email"
            label="Email"
            id="email"
          />
          {/* <Typography color="error">{errMsg}</Typography> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {}}
          >
            Submit
          </Button>
        </form>
      </Box>
      <Box mt={5}>{/* <Copyright /> */}</Box>
    </Container>
  );
};

export default NewLocation;
