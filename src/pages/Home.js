import React, { Fragment, useEffect, useState } from "react";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobalStyles } from "../lib/theme";
import { Header, UserTile, HpbInfoBox } from "../lib/components";
import { hpb } from "../api";
import USERS from "../data/users";

const useStyles = makeStyles((theme) => ({
  upperSection: {
    marginTop: theme.spacing(5),
    width: "98vw",
    // paddingLeft: 50,
  },
  mainSection: {
    width: "90vw",
    marginTop: theme.spacing(10),
    paddingLeft: 50,
  },
  gridWrapper: {
    marginTop: theme.spacing(5),
  },
}));

const Home = () => {
  const classes = useStyles();
  const styles = useGlobalStyles();

  const [hpbData, setHpbData] = useState({});

  const renderUserTiles = (data) =>
    data.map((item) => (
      <Grid item xs={12} sm={6} md={4}>
        <UserTile data={item}></UserTile>
      </Grid>
    ));

  useEffect(() => {
    (async () => {
      try {
        const response = await hpb.get.data();
        if (!response.data.success)
          throw new Error("Can't fetch data from hpb api");
        setHpbData((prevState) => ({ ...prevState, ...response.data.data }));
      } catch (error) {
        console.log("Error happened while getting covid data", error.response);
      }
    })();
  }, []);

  return (
    <Fragment>
      <Header />
      <Container component="main" maxWidth="sm" className={styles.page}>
        <Box className={classes.upperSection}>
          <HpbInfoBox data={hpbData} />
        </Box>
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
