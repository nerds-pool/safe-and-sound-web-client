import React, { Fragment } from "react";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobalStyles } from "../lib/theme";
import { Header, UserTile } from "../lib/components";
import USERS from "../data/users";

const useStyles = makeStyles((theme) => ({
  upperSection: {
    backgroundColor: "#dfc",
    height: "30vh",
    width: "100vw",
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

const Home = () => {
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
        {/* <Box className={classes.upperSection}>
          <Paper></Paper>
        </Box> */}
        <Box className={classes.mainSection}>
          <Typography variant="h5">COVID-19 Positive Users</Typography>
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

export default Home;
