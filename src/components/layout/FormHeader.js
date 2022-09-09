import React from 'react';
import logo from "../../assets/images/logo-new.png";
import "../../sass/Header.scss";
import { Button, Grid } from "@mui/material";

import { Link } from "react-router-dom";

const FormHeader = ({customClass}) => {
  
  return (
    <header className={`App_header ${customClass}`}>
      <div className="container">
        <Grid container alignItems={'center'}>
          <Grid item sm={6} className="App_header--bgFill--logo">
            <Link to="/">
              <img src={logo} className="App_header-logo" alt="logo" />
            </Link>
          </Grid>
          <Grid item sm={6} className="App_header--links">
            <Link to="/terms" style={{ marginRight: 15 }}>
              <Button className="btn btn-primary" variant="contained" color="primary">
                Terms
              </Button>
            </Link>
            <a href="https://help.ragibull.com" target='_blank'>
              <Button className="btn-text" color="primary">
                Support
              </Button>
            </a>
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default FormHeader;
