import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { Colors } from "../theme";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    marginTop: theme.spacing(2),
    width: "100%",
  },
}));

export const AssociateTile = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();

  console.log("History:", history);

  // const handleTraceAccociates = (id) => {
  //   history.push(`/users/associates/${id}`);
  // };

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography variant="h5">{data.name}</Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {"NIC"}
            </TableCell>
            <TableCell align="right">{data.id}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {"Contact"}
            </TableCell>
            <TableCell align="right">{data.contact}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {"City"}
            </TableCell>
            <TableCell align="right">{data.city}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {"Email"}
            </TableCell>
            <TableCell align="right">{data.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {"Profession"}
            </TableCell>
            <TableCell align="right">{data.profession}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {"Gender"}
            </TableCell>
            <TableCell align="right">{data.gender}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};
