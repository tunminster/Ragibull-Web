import logo from "../../assets/images/logo.png";
import "../../sass/Header.scss";
import { Button, Grid } from "@mui/material";

import { Link } from "react-router-dom";

const Header = ({customClass}) => {
  
  return (
    <header className={`App_header ${customClass}`}>
      <div className="container">
        <Grid container>
          <Grid item sm={6} className="App_header--logo">
            <Link to="/">
              <img src={logo} className="App_header-logo" alt="logo" />
            </Link>
          </Grid>
          <Grid item sm={6} className="App_header--links">
            <Link to="/driver-onboarding" style={{ marginRight: 15 }}>
              <Button variant="outlined" color="primary">
                Ragibull Driver
              </Button>
            </Link>
            <Link to="/shop-owner-onboarding">
              <Button variant="outlined" color="primary">
                Ragibull Shop
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default Header;
