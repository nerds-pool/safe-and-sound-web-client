import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, AppBar, Toolbar, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Colors } from "../theme";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "10vh",
    color: Colors.white,
    backgroundColor: Colors.primary,
  },
  navLinks: {
    width: "50%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 50,
  },
  link: {
    color: Colors.white,
    marginLeft: 30,
    textDecoration: "none",
    "&:hover": {
      color: Colors.hover
    }
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.header}>
        <Typography variant="h4" component="h4" className={classes.link}>
          Safe&Sound
        </Typography>
        <Box className={classes.navLinks}>
          <Link to="/home" className={classes.link}>
            <Typography>Home</Typography>
          </Link>
          <Link to="/users/explore" className={classes.link}>
            <Typography>Explore</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
    // <nav className={classes.header}>
    //   <h3>Safe & Sound</h3>
    //   <ul className={classes.navLinks}>
    //     <li className={classes.link}>
    //       <Typography>Home</Typography>
    //     </li>
    //     <li className={classes.link}><Typography>Explore</Typography></li>
    //   </ul>
    // </nav>
  );
};
