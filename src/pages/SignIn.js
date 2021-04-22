import React from "react";
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

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Powered By Nerds Pool Inc ${new Date().getFullYear()}.`}
    </Typography>
  );
};

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

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const [SasData, setSasData] = useState({})

  const handleSubmit = () => {
    history.push("/home");
  };

  useEffect(() => {
    (async() => {
        
          try {
            const response = await sas.get.data();
            if(!response.data.success)
              throw new Error("Cant fetch data from sas api")
              setSasData((prevState)=>({...prevState, ...response.data.data}))
          } catch (error) {
            
          }
        }
      
    )()
  }, [])

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
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleSubmit()}
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
