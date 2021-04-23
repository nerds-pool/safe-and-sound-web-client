import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Container, Box, Grid } from "@material-ui/core";
import { useGlobalStyles } from "../../lib/theme";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  paper: {
    // height: 150,
    width: "80%",
    padding: 20,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  dataWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const InfoBox = ({ data }) => {
  const classes = useStyles();
  const styles = useGlobalStyles();

  return (
    <Container className={{ ...styles.page, ...classes.container }}>
      <Box className={classes.wrapper}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6} md={3} className={classes.dataWrapper}>
              <Typography>{data.id}</Typography>
              <Typography>{"NIC"}</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3} className={classes.dataWrapper}>
              <Typography>{data.contact}</Typography>
              <Typography>{"Contact"}</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3} className={classes.dataWrapper}>
              <Typography>{data.gender}</Typography>
              <Typography>{"Gender"}</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3} className={classes.dataWrapper}>
              <Typography>{data.city}</Typography>
              <Typography>{"City"}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};
