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
import { LocationCity } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Colors } from "../lib/theme";

const FORM_UPDATE = "FORM_UPDATE";

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

const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_UPDATE:
      return {
        ...state,
        [action.payload[0]]: action.payload[1],
      };
    default:
      return state;
  }
};

const NewLocation = () => {
  const classes = useStyles();
  const history = useHistory();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    name: "",
    address: "",
    city: "",
    district: "",
    contact: "",
    email: "",
  });

  const [errMsg, setErrMsg] = useState(null);

  const handleInput = (e) => {
    dispatchFormState({
      type: FORM_UPDATE,
      payload: [e.target.id, e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("User inputs", formState);
    history.push("/print");
  };

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
          <Typography color="error">{errMsg}</Typography>
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="name"
            label="Location Name"
            name="Name"
            autoFocus
            value={formState.name}
            onChange={handleInput}
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
            value={formState.address}
            onChange={handleInput}
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
            value={formState.city}
            onChange={handleInput}
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
            value={formState.district}
            onChange={handleInput}
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
            value={formState.contact}
            onChange={handleInput}
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            name="email"
            label="Email"
            id="email"
            value={formState.email}
            onChange={handleInput}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default NewLocation;
