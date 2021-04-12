import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Container, Box } from "@material-ui/core";
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
    height: 150,
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

export const HpbInfoBox = ({ data }) => {
  const classes = useStyles();
  const styles = useGlobalStyles();

  return (
    <Container className={{...styles.page, ...classes.container}}>
      <Box className={classes.wrapper}>
        <Paper className={classes.paper}>
          <Box className={classes.dataWrapper}>
            <Typography>{data.local_new_cases}</Typography>
            <Typography>{"New Cases"}</Typography>
          </Box>
          <Box className={classes.dataWrapper}>
            <Typography>{data.local_active_cases}</Typography>
            <Typography>{"Active Cases"}</Typography>
          </Box>
          <Box className={classes.dataWrapper}>
            <Typography>{data.local_total_cases}</Typography>
            <Typography>{"Total Cases"}</Typography>
          </Box>
          <Box className={classes.dataWrapper}>
            <Typography>{data.local_recovered}</Typography>
            <Typography>{"Total Recovered"}</Typography>
          </Box>
          <Box className={classes.dataWrapper}>
            <Typography>{data.local_deaths}</Typography>
            <Typography>{"Total Deaths"}</Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};
