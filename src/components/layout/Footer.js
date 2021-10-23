import '../../sass/Footer.scss';
import { Grid } from '@mui/material';
import logo from '../../assets/images/logo.png';
import call from '../../assets/images/call.png';
import appImg from '../../assets/images/footer-img.png';
import appStore from '../../assets/images/app-store.png';
import playStore from '../../assets/images/play-store.png';
import InstagramIcon from '../../assets/images/social-icn1.png';
import TwitterIcon from '../../assets/images/social-icn2.png';
import FacebookIcon from '../../assets/images/social-icn3.png';

const Footer=()=> {
  return (
    <footer className="App_footer">
      <div className="container">
        <Grid container>
          <Grid item sm={4} className="App_footer--box">
            <img src={logo} className="App_footer-img" alt="logo" />
            <h4>Working Schedule</h4>
            <p>Mon - Sat: 9:00 am - 10:00 pm<br /> Sun: 10:00 am - 8:00 pm</p>
          </Grid>
          <Grid item sm={4} className="App_footer--box">
            <div className="phone">
              <span>
                <img src={call} alt="Phone" />
              </span>
            </div>
            <h4><span>Call us</span> to make an order!</h4>
            <p><br /> <a href="tel:+16548475225">+1 415 854 95 24</a></p>
          </Grid>
          <Grid item sm={4} className="App_footer--box">
            <img src={appImg} className="App_footer-img" alt="App" />
            <h4>Download The App</h4>
            <ul>
              <li><a href="https://apps.apple.com/us/app/ragibull/id1556833583" target="_blank"><img src={appStore} alt="App Store" /></a></li>
              <li><a href="https://play.google.com/store/apps/details?id=com.ragibull.app" target="_blank"><img src={playStore} alt="Play Store" /></a></li>
            </ul>
          </Grid>
        </Grid>
      </div>
      <div className="App_footer_copyright">
        <div className="container">
          <Grid container alignItems="center">
            <Grid item sm={6} className="App_footer_copyright--left">
              <p>Copyright 2021 ©. All Rights Reserved</p>
            </Grid>
            <Grid item sm={6} className="App_footer_copyright--right">
              <ul>
                <li>Connect With Us</li>
                <li>
                  <a href="https://www.instagram.com/ragibull/" target="_blank">
                    <img src={InstagramIcon} alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/BullRagi" target="_blank">
                    <img src={TwitterIcon} alt="Twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/RagiBull01" target="_blank">
                    <img src={FacebookIcon} alt="Facebook" />
                  </a>
                </li>
              </ul>
            </Grid>
          </Grid>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
