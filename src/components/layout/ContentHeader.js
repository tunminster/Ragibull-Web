import React from 'react';
import logo from "../../assets/images/logo.png";
import "../../sass/Header.scss";
import { Button, Grid } from "@mui/material";

import { Link } from "react-router-dom";

const ContentHeader = ({customClass}) => {
  
  return (
    <header className={`App_header ${customClass}`}>
      <div className="container">
        <Grid container>
          <Grid item sm={6} className="App_header--logo">
            <Link to="/">
              <img src={logo} className="App_header-logo" alt="logo" />
            </Link>
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default ContentHeader;
