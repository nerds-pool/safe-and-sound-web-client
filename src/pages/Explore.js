import React, { Fragment, useState, useEffect, useCallback } from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Paper,
  InputBase,
  IconButton,
} from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobalStyles } from "../lib/theme";
import { Header, UserTile } from "../lib/components";
import USERS from "../data/users";

const STRICT_NUM_REGEX = new RegExp(/^[0-9]*$/);

const useStyles = makeStyles((theme) => ({
  upperSection: {
    height: "20vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    width: "60%",
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    marginRight: theme.spacing(2),
  },
  mainSection: {
    width: "90vw",
    paddingTop: 20,
    paddingLeft: 50,
  },
  gridWrapper: {
    marginTop: theme.spacing(5),
  },
}));

const Explore = () => {
  const classes = useStyles();
  const styles = useGlobalStyles();

  const [searchStr, setSearchStr] = useState("");
  const [searchRes, setSearchRes] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      if (!searchStr || !STRICT_NUM_REGEX.test(searchStr)) return;
      const usersArray = USERS.filter((user) =>
        user.id.toString().includes(searchStr)
      );
      setSearchRes([...usersArray]);
      return "got results";
    } catch (error) {
      console.log(error);
    }
  }, [searchStr]);

  const renderUserTiles = (data) =>
    data.map((item) => (
      <Grid item xs={12} sm={6} md={4}>
        <UserTile data={item}></UserTile>
      </Grid>
    ));

  const handleChange = async (e) => {
    const value = e.target.value;
    setSearchStr(value);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setSearchStr("");
    setSearchRes([]);
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Fragment>
      <Header />
      <Container component="main" maxWidth="xs" className={styles.page}>
        <Box className={classes.upperSection}>
          <Paper component="form" className={classes.searchBox}>
            <InputBase
              className={classes.input}
              placeholder="Enter NIC to explore users"
              value={searchStr}
              onChange={handleChange}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
              onClick={handleClear}
            >
              <Clear />
            </IconButton>
          </Paper>
        </Box>
        <Box className={classes.mainSection}>
          <Typography variant="h5">
            {searchStr === ""
              ? "Search Results will display here"
              : STRICT_NUM_REGEX.test(searchStr) === true
              ? `Search Results for ${searchStr}`
              : "Please Enter a Valid NIC Number"}
          </Typography>
          <Box className={classes.gridWrapper}>
            <Grid container spacing={3}>
              {renderUserTiles(searchRes)}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Explore;
