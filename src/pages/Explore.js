import React, { Fragment } from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Paper,
  InputBase,
  IconButton,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobalStyles } from "../lib/theme";
import { Header, UserTile } from "../lib/components";
import USERS from "../data/users";

const useStyles = makeStyles((theme) => ({
  upperSection: {
    height: "30vh",
    width: "90vw",
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

  const renderUserTiles = (data) =>
    data.map((item) => (
      <Grid item xs={4}>
        <UserTile data={item}></UserTile>
      </Grid>
    ));

  return (
    <Fragment>
      <Header />
      <Container component="main" maxWidth="xs" className={styles.page}>
        <Box className={classes.upperSection}>
          <Paper>
            <InputBase placeholder="Enter NIC to explore users" />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <Search />
            </IconButton>
          </Paper>
        </Box>
        <Box className={classes.mainSection}>
          <Typography variant="h5">Search Results</Typography>
          <Box className={classes.gridWrapper}>
            <Grid container spacing={3}>
              {renderUserTiles(USERS)}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Explore;
