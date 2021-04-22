import React, { Fragment, useEffect, useState } from "react";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobalStyles } from "../lib/theme";
import { Header, UserTile, HpbInfoBox, Loader } from "../lib/components";
import { hpb, sas } from "../api";

const useStyles = makeStyles((theme) => ({
  upperSection: {
    marginTop: theme.spacing(5),
    width: "98vw",
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
  const [sasData, setSasData] = useState([]);
  const [loading, setLoading] = useState(false);

  const renderUserTiles = (data) => {
    if (data === []) {
      return (
        <Container>
          <Typography variant="h2">Nothing to show...</Typography>
        </Container>
      );
    }
    return data.map((item) => (
      <Grid item xs={12} sm={6} md={4}>
        <UserTile data={item}></UserTile>
      </Grid>
    ));
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await hpb.get.data();
        if (!response.data.success) throw new Error(response.data.msg);
        setHpbData((prevState) => ({ ...prevState, ...response.data.data }));
      } catch (error) {
        alert("Oops! " + error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await sas.get.covidPositiveUsers();
        if (!data.success) throw new Error(data.msg);
        setSasData((prevState) => [...data.result]);
      } catch (error) {
        alert("Oops! " + error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Loader />;

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
              {renderUserTiles(sasData)}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Home;
