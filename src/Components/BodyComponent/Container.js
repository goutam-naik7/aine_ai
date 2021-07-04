import React from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100ch",
    },
  },
}));

function Container() {
  const classes = useStyles();
  return (
    <div className="container">
      <div className="left">
        <ArrowLeftIcon fontSize="large" />
        <Typography variant="h6">Videos</Typography>
      </div>
      <div className="right">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            className="searchbar"
            style={{ backgroundColor: "#fff" }}
            id="outlined-basic"
            label="Insert URL here"
            variant="outlined"
          />
        </form>
        <div className="or">or</div>
        <div className="upload_button" style={{ width: "10%" }}>
          <Box color="black" bgcolor="#fff" p={10}>
            Upload
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Container;
