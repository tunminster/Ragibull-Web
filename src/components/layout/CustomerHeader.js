import React from 'react';
import logo from "assets/images/logo-new.png";
import { Box, Button, Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { BsBasket, BsSearch } from 'react-icons/bs';
import "sass/Header.scss";

const CustomerHeader = ({customClass}) => {
  
  return (
    <header className={`App_header ${customClass}`}>
      <div className="container">
        <Grid container alignItems={'center'}>
          <Grid item sm={3} className="App_header--logo">
            <Link to="/">
              <img src={logo} className="App_header-logo" alt="logo" />
            </Link>
          </Grid>
          <Grid item sm={9} className="App_header--links">
            <Box className='search'>
              <input type={'text'} placeholder="Restaurants, groceries, dishes" className='form-control' />
              <IconButton className='search__icon' aria-label="search">
                <BsSearch />
              </IconButton>
            </Box>
            <Link to="/product-orders" style={{ marginRight: 15 }}>
              <Button variant="outlined" color="primary">
              <BsBasket /> $50.00
              </Button>
            </Link>
            <Link to="/user-signup">
              <Button variant="outlined" color="primary">
              Sign Up or Login
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default CustomerHeader;
