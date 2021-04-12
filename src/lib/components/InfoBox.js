import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Container, Box } from "@material-ui/core";
import { useGlobalStyles } from "../../lib/theme";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
  },
  paper: {
    height: 150,
    width: "80%",
    padding: 20,
  },
}));

export const InfoBox = ({ data }) => {
  const classes = useStyles();
  const styles = useGlobalStyles();

  return (
    <Container className={styles.page}>
      <Box className={classes.wrapper}>
        <Paper className={classes.paper}>
          <Typography>{`Last positive test results of NIC ${data.id} will display here...`}</Typography>
        </Paper>
      </Box>
    </Container>
  );
};
