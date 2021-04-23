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
  Button,
} from "@material-ui/core";
import { Colors } from "../theme";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    marginTop: theme.spacing(1),
    width: "100%",
  },
}));

export const UserTile = ({ data, onDelete = null, type = "associate" }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleTraceAccociates = (id, name, contact, gender, city) => {
    history.push(
      `/users/associates/${id}/${name}/${contact}/${gender}/${city}`
    );
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography variant="h5">{data.name}</Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {"NIC"}
            </TableCell>
            <TableCell align="right">{data.nic}</TableCell>
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
            <TableCell align="right">{data.address.city}</TableCell>
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
      <Button
        variant="contained"
        className={classes.button}
        onClick={() =>
          handleTraceAccociates(
            data.nic,
            data.name,
            data.contact,
            data.gender,
            data.address.city
          )
        }
      >
        Trace Associates
      </Button>
      {type === "delete" ? (
        <Button
          variant="contained"
          className={classes.button}
          onClick={(e) => onDelete(e, data.nic)}
        >
          Delete
        </Button>
      ) : null}
    </Paper>
  );
};
