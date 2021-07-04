import React from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";

import logo from "../../images/logo_3.png";
const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: 69,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar color="inherit">
      <Toolbar>
        <img src={logo} alt="logo" className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
