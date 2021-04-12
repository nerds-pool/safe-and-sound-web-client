import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography, Grid } from "@material-ui/core";
import { Header, InfoBox, AssociateTile } from "../lib/components";
import { useGlobalStyles } from "../lib/theme";
import USERS from "../data/users";

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
  const { id } = useParams();
  const data = { id, name: "Saman Kumara" };

  const renderAssociatesTiles = (data) =>
    data.map((item) => (
      <Grid item xs={4}>
        <AssociateTile data={item}></AssociateTile>
      </Grid>
    ));

  return (
    <Fragment>
      <Header />
      <Container component="main" maxWidth="xs" className={styles.page}>
        <Box className={classes.InfoBoxWrapper}>
          <InfoBox data={data} />
        </Box>
        <Box className={classes.mainSection}>
          <Typography variant="h5">
            {`Immediate Associates of the ${data.name}`}
          </Typography>
          <Box className={classes.gridWrapper}>
            <Grid container spacing={3}>
              {renderAssociatesTiles(USERS)}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Associates;
