import React from 'react';
import logo from "../../assets/images/logo-new.png";
import "../../sass/Header.scss";
import { Button, Grid } from "@mui/material";

import { Link } from "react-router-dom";

const CustomerLoginHeader = ({customClass}) => {
  
  return (
    <header className={`App_header ${customClass}`}>
      <div className="container">
        <Grid container alignItems={'center'}>
          <Grid item sm={6} className="App_header--logo">
            <Link to="/">
              <img src={logo} className="App_header-logo" alt="logo" />
            </Link>
          </Grid>
          <Grid item sm={6} className="App_header--links">
            <Link to="/user-login" style={{ marginRight: 15 }}>
              <Button variant="contained" color="primary">
                Log in
              </Button>
            </Link>
            <Link to="/user-signup">
              <Button variant="outlined" color="primary">
                Sign Up
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default CustomerLoginHeader;
