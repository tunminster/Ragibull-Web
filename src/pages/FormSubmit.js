import React, { useState } from "react";
import "../sass/FormSubmit.scss";
import { Grid, Typography, Link } from "@mui/material";
import BannerImg from "../assets/images/banner-form.png";
import FormHeader from "../components/layout/FormHeader";
import ShopImg from "../assets/images/app-img.png";
import appStore from "../assets/images/app-store.png";
import playStore from "../assets/images/play-store.png";

const FormSubmit = () => {

  return (
    <>
      <FormHeader customClass={'App_header--bgFill'} />

      <Grid container id="main">

        {/* Banner Section */}
        <div className="Banner">
          <div className="container">
            <h1 className="Banner_Title">
              Make money on your<br /> time and on your<br /> terms
            </h1>
            <img
              src={BannerImg}
              alt="Order your favourite dishes. Order on Ragibull"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="Thankyou">
          <div className="container">
            <Grid container alignItems="center">
              <Grid item sm={6} className="Thankyou_Text">
                <h2>Download the app now</h2>
                <p>
                  {" "}
                  Get Ragibull App and start ordering delicious foods -
                  available on the iOS and Android app stores!
                </p>
                <div className="download">
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
              <Grid item sm={6} className="Thankyou_Img" textAlign="center">
                <img src={ShopImg} alt="Have you got the App?" />
              </Grid>
            </Grid>
          </div>
        </div>

      </Grid>
    </>
  );
};

export default FormSubmit;
