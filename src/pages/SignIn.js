import React, { useReducer, useState, useContext } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Colors } from "../lib/theme";
import { sas } from "../api";
import { setAuth, setUser, setTokens } from "../context/actions";
import { GlobalContext } from "../context";

const FORM_UPDATE = "FORM_UPDATE";

const useStyles = makeStyles((theme) => ({
  paper: {
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
    marginTop: theme.spacing(1),
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

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Powered By Nerds Pool Inc ${new Date().getFullYear()}.`}
    </Typography>
  );
};

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

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();

  const { dispatchUser, dispatchToken } = useContext(GlobalContext);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    username: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const handleInput = (e) => {
    dispatchFormState({
      type: FORM_UPDATE,
      payload: [e.target.id, e.target.value],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        nic: formState.username,
        password: formState.password,
      };
      const { data } = await sas.post.signin(body);
      if (!data.success) throw new Error(data.msg);
      await dispatchUser(
        setUser({
          id: data.result._id,
          nic: data.result.nic,
          role: data.result.role,
        })
      );
      await dispatchUser(setAuth(true));
      await dispatchToken(setTokens(data.result.signToken));
      localStorage.setItem("signToken", data.result.signToken);
      history.push("/home");
    } catch (error) {
      setErrMsg("");
      alert("Something went wrong while sign-in");
      console.error(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          CDC Sign-in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="UserName"
            name="username"
            value={formState.username}
            onChange={handleInput}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formState.password}
            onChange={handleInput}
          />
          <Typography color="error">{errMsg}</Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </Box>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignIn;
