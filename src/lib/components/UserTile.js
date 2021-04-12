import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 20
  },
}));

export const UserTile = ({ data }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={3} >
      <Typography variant="h5">{`Name: ${data.name}`}</Typography>
      <Typography>{`Id: ${data.id}`}</Typography>
      <Typography>{`Email: ${data.email}`}</Typography>
      <Typography>{`Contact: ${data.contact}`}</Typography>
      <Typography>{`Profession: ${data.profession}`}</Typography>
      <Typography>{`Gender: ${data.gender}`}</Typography>
      <Typography>{`City: ${data.city}`}</Typography>
    </Paper>
  );
};
