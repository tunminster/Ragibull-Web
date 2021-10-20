import logo from "../../assets/images/logo.png";
import "../../sass/Header.scss";
import { Button, Grid } from "@mui/material";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App_header">
      <div className="container">
        <Grid container>
          <Grid item sm={6} className="App_header--logo">
            <Link to="/">
              <img src={logo} className="App_header-logo" alt="logo" />
            </Link>
          </Grid>
          <Grid item sm={6} className="App_header--links">
            <Button variant="outlined" color="primary">
              Ragibull Driver
            </Button>
            {/* <Link to="/register"> */}
              <Button variant="outlined" color="primary">
                Ragibull Shop
              </Button>
            {/* </Link> */}
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default Header;
