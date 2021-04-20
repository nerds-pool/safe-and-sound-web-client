import React, { useRef } from "react";
import QRCode from "qrcode.react";
import {
  Button,
  CssBaseline,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../lib/theme";
import { useReactToPrint } from "react-to-print";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    width: "100vw",
  },
  paper: {
    marginTop: theme.spacing(4),
    height: "90vh",
    display: "flex",
    flex: 8,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoWapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonWrapper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  submit: {
    height: 40,
    width: 100,
    backgroundColor: Colors.primary,
    color: Colors.white,
    "&:hover": {
      backgroundColor: Colors.primary,
      color: Colors.hover,
    },
  },
  qrCode: {
    marginBottom: theme.spacing(2),
  },
  text: {
    marginBottom: theme.spacing(2),
  },
}));

const PrintPage = () => {
  const classes = useStyles();
  const qrRef = useRef();
  const locationName = "Cargils Food City";
  const city = "Kottawa";

  const handlePrint = useReactToPrint({
    content: () => qrRef.current,
    documentTitle: "Safe&Sound Location QR Code by Nerds Pool Inc",
  });

  return (
    <Container component="main" maxWidth="xl" className={classes.page}>
      <CssBaseline />
      <Box ref={qrRef} className={classes.paper}>
        <Box className={classes.infoWapper}>
          <Typography variant="h2">Safe & Sound</Typography>
          <Typography variant="body1">
            Scan this QR code to safely check-in
          </Typography>
        </Box>
        <QRCode
          level="L"
          // includeMargin={true}
          value="604d9251f72b3b48584f802b"
          size={300}
          fgColor={Colors.primary}
          className={classes.qrCode}
        />
        <Box className={classes.infoWapper}>
          <Typography
            className={classes.text}
            variant="h5"
          >{`${locationName} @ ${city}`}</Typography>
          <Typography variant="body2">Powered by Nerds Pool Inc</Typography>
        </Box>
      </Box>
      <Box className={classes.buttonWrapper}>
        <Button className={classes.submit} onClick={handlePrint}>
          Print
        </Button>
      </Box>
    </Container>
  );
};

export default PrintPage;
