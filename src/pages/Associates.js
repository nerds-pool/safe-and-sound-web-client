import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography, Grid } from "@material-ui/core";
import { Header, InfoBox, AssociateTile } from "../lib/components";
import { useGlobalStyles } from "../lib/theme";
import { sas } from "../api";

const useStyles = makeStyles((theme) => ({
  InfoBoxWrapper: {
    marginTop: theme.spacing(5),
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

const Associates = () => {
  const classes = useStyles();
  const styles = useGlobalStyles();
  const userData = useParams();
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await sas.get.fetchVisitAssociatesByUserNic(
          userData.id
        );
        if (!data.success) throw new Error(data.msg);
        setDataArray(data.result);
      } catch (error) {
        alert("Something went wrong! Please check out internet connection...");
      }
    })();
  }, [userData]);

  const renderAssociatesTiles = (data) =>
    data.map((item) => (
      <Grid item xs={12} sm={6} md={4}>
        <AssociateTile data={item}></AssociateTile>
      </Grid>
    ));

  return (
    <Fragment>
      <Header />
      <Container component="main" maxWidth="xs" className={styles.page}>
        <Box className={classes.InfoBoxWrapper}>
          <InfoBox data={userData} />
        </Box>
        <Box className={classes.mainSection}>
          <Typography variant="h5">
            {`Immediate Associates of the ${userData.name}`}
          </Typography>
          <Box className={classes.gridWrapper}>
            <Grid container spacing={3}>
              {renderAssociatesTiles(dataArray)}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Associates;
