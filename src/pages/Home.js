import "../sass/Home.scss";
import { Grid } from "@mui/material";
import BannerImg from "../assets/images/banner-img.png";
import ServiceImg1 from "../assets/images/service-img1.png";
import ServiceImg2 from "../assets/images/service-img2.png";
import ServiceImg3 from "../assets/images/service-img3.png";
import DeliverImg from "../assets/images/deliver-img.png";
import PartnerImg from "../assets/images/partner-img.png";
import ShopImg from "../assets/images/app-img.png";
import appStore from "../assets/images/app-store.png";
import playStore from "../assets/images/play-store.png";
import InstagramIcon from "../assets/images/social-icn1.png";
import TwitterIcon from "../assets/images/social-icn2.png";
import FacebookIcon from "../assets/images/social-icn3.png";
import Header from "../components/layout/Header";
import bannerBg from '../assets/images/banner-bg.jpg'

const Home = () => {
  const Services = [
    {
      id: 1,
      boxImg: ServiceImg1,
      boxTitle: "Deliver with Ragibull Driver",
      boxText: "To become a ragibull driver - What you will need...",
      boxHref: "deliver",
      boxBtnText: "Find out more",
    },
    {
      id: 2,
      boxImg: ServiceImg2,
      boxTitle: "Partner with Ragibull Shop",
      boxText:
        "Increase more sales, reaching out more customers and growing...",
      boxHref: "partner",
      boxBtnText: "Find out more",
    },
    {
      id: 3,
      boxImg: ServiceImg3,
      boxTitle: "Have you got the App?",
      boxText: "Get Ragibull App and start ordering delicious foods...",
      boxHref: "shop",
      boxBtnText: "Find out more",
    },
  ];

  return (
    <>
      <Header />

      <Grid container id="main">
        {/* Social Media */}
        <div className="SocialMedia">
          <ul>
            <li>
              <a href="https://www.instagram.com/ragibull01/" target="_blank">
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
        </div>

        {/* Banner Section */}
        <div className="Banner Banner__home">
          <div className="container">
            <h1 className="Banner_Title">
              Order your
              <br /> favourite dishes. <span>Order on Ragibull</span>
            </h1>
            <img
              src={BannerImg}
              alt="Order your favourite dishes. Order on Ragibull"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="About">
          <div className="container">
            <h2 className="About_Title">
              <i>About</i> Ragibull
              <span>Best product, Best service</span>
            </h2>
            <p>
              RagiBull local delivery and digital menu order. It's not just
              delivered to your home or office. Download the free RagiBull app
              and order from local delivery and collection restaurants and
              takeaways. We can all forget about paper takeaway menu which is
              not environment friendly, unnecessary cost and awkward phone
              orders. No more mumbled phone calls to busy restaurants. Use your
              postcode or device's location service to find local restaurants
              and takeaway shops to order. Why don't you use just make order
              form the app before you have just arrived to have fantastic meals
              or bites whether collection, dine in or takeaway.
            </p>
            <Grid container className="Services">
              {Services.map((item) => (
                <Grid item sm={4} className="Services_box" key={item.id}>
                  <div className="bg">
                    <img src={item.boxImg} alt="" />
                    <h3>{item.boxTitle}</h3>
                    <p>{item.boxText}</p>
                    <a
                      href={`#${item.boxHref}`}
                      className="MuiButton-outlinedPrimary MuiButtonBase-root css-1rwt2y5-MuiButtonBase-root-MuiButton-root custom-link-btn"
                      style={{ textTransform: "initial" }}
                    >
                      {item.boxBtnText}
                    </a>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>

        {/* Services Section */}
        <div className="Services">
          {/* Deliver Section */}
          <div className="Steps" id="deliver">
            <div className="container">
              <Grid container alignItems="center">
                <Grid item sm={6} className="Steps_Text">
                  <h2>
                    Deliver with <span>Ragibull Driver</span>
                  </h2>
                  <p className="subheading">
                    To become a ragibull driver - What you will need
                  </p>
                  <ul className="list">
                    <li>Car or bike (with license and insurance)</li>
                    <li>Safety equipment</li>
                    <li>Smartphone (iOS 12 / Android 6 or above)</li>
                    <li>Proof of right to work in the US</li>
                    <li>Age should be 18+</li>
                  </ul>
                  <div className="download">
                    <h4>Download the App</h4>
                    <ul>
                      <li>
                        <a
                          href="https://apps.apple.com/us/app/ragibull/id1556833583"
                          target="_blank"
                        >
                          <img src={appStore} alt="App Store" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.ragibull.app"
                          target="_blank"
                        >
                          <img src={playStore} alt="Play Store" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </Grid>
                <Grid item sm={6} className="Steps_Img" textAlign="center">
                  <img src={DeliverImg} alt="Deliver with Ragibull Driver" />
                </Grid>
              </Grid>
            </div>
          </div>

          {/* Partner Section */}
          <div className="Steps" id="partner">
            <div className="container">
              <Grid container alignItems="center">
                <Grid item sm={6} className="Steps_Text" order="2">
                  <h2>
                    Partner with <span>Ragibull Shop</span>
                  </h2>
                  <p>
                    Increase more sales, reaching out more customers and growing
                    your business with our reliable ragibull partner service.
                  </p>
                  <div className="download">
                    <h4>Download the App</h4>
                    <ul>
                      <li>
                        <a
                          href="https://apps.apple.com/us/app/ragibull-shop/id1583002227"
                          target="_blank"
                        >
                          <img src={appStore} alt="App Store" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.ragibull.us.shop"
                          target="_blank"
                        >
                          <img src={playStore} alt="Play Store" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </Grid>
                <Grid
                  item
                  sm={6}
                  className="Steps_Img"
                  order="1"
                  textAlign="center"
                >
                  <img src={PartnerImg} alt="Partner with Ragibull Shop" />
                </Grid>
              </Grid>
            </div>
          </div>

          {/* Shop Section */}
          <div className="Steps" id="shop">
            <div className="container">
              <Grid container alignItems="center">
                <Grid item sm={6} className="Steps_Text">
                  <h2>
                    Have you <span>got the App?</span>
                  </h2>
                  <p>
                    {" "}
                    Get Ragibull App and start ordering delicious foods -
                    available on the iOS and Android app stores!
                  </p>
                  <div className="download">
                    <h4>Download the App</h4>
                    <ul>
                      <li>
                        <a
                          href="https://apps.apple.com/us/app/ragibull/id1556833583"
                          target="_blank"
                        >
                          <img src={appStore} alt="App Store" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.ragibull.app"
                          target="_blank"
                        >
                          <img src={playStore} alt="Play Store" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </Grid>
                <Grid item sm={6} className="Steps_Img" textAlign="center">
                  <img src={ShopImg} alt="Have you got the App?" />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Home;
