/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import "../sass/ShopOwner.scss";
import { Grid, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Geocode from "react-geocode";
import { useForm } from "react-hook-form";
import RegisterImg from "../assets/images/register-img.png";
import { geolocated } from "react-geolocated";
import { API } from "../api/API";
import Header from "../components/layout/Header";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoadingButton } from "@mui/lab";
import { useLocation } from "react-router";


const ShopOwner = () => {
  return (
    <>
      <Header customClass="InnerHead" />
      <Grid container id="main">
        {/* Banner Section */}
        <div className="Banner_Inner">
          <div className="container">
            <h1 className="Banner_Inner_Title">Ragibull ShopOwner</h1>
          </div>
        </div>

        {/* Form Section */}
        <div className="Form">
          <div className="container">
            <Grid container spacing={3} alignItems="left">
              <Grid item sm={12} className="box">
                <h2 className="Form_Title">Because your customers can't wait, call in Ragibull</h2>
                <p>Make it easy for people to find and buy from your restaurant with Ragibull. With our app's convenient order management system, as well as fast but careful riders, customers would be able to enjoy more of your delightful food offerings conveniently. Register with us today to discover how the Ragibull app can serve as your online delivery platform.</p>

                <h3>Why Should You Partner with Ragibull?</h3> 
                <p>By registering with our app, you can enjoy the following as a Ragibull shop owner:</p>   

                <p><strong>Delivery Options</strong><br />
                You decide how to send food to your customers—it's your choice whether to deploy your own riders or tap our fleet of drivers.
                </p>

                <p><strong>Greater Online Visibility</strong><br />
                Your registration with Ragibull puts you on our roster of partners. So the next time a hungry Ragibull app user searches for a nearby dining establishment, your restaurant will show up on the list of choices if you’re within their vicinity.
                </p>

                <p><strong>Customer Insights</strong><br />
                Learn more about your customers by viewing their profiles and order history on the Ragibull app. Your engagement level will get a boost when you customize your order suggestions and promos according to their preferences.
                </p>

                <p><strong>Growth Opportunities</strong><br />
                Satisfied customers are your best brand ambassadors. Those who discover you on Ragibull can share their experience with your restaurant and convince others to check you out.
                </p>

                <h3>How Does Ragibull App Make Order-Taking and Delivery Easy?</h3>
                <p><strong>Order Placement</strong><br />
                Ragibull app users select items from your menu to add to their cart.
                </p>
                <p><strong>Order Preparation</strong><br />
                When app users finish selecting all the items they need from your menu, you can accept and prepare the order for the riders to pick up.
                </p>
                <p><strong>Order delivery</strong><br />
                If you choose to work with our riders, you can notify a Ragibull driver once you're done preparing the food. A rider will pick it up from your store to ensure that the order gets to your customer ASAP.
                </p>

                <h3>How Do I Register with Ragibull?</h3>
                <p>Start connecting with more customers now by joining the Ragibull community! To become a Ragibull shop owner:<br />
                1. Download the Ragibull app from the App Store or Google Play. <br />
                2. After installing the app, wait for our welcome e-mail. We’ll walk you through the use and operation of Ragibull app’s features for restaurant owners. Our sales team will also be ready to assist you should you reach out to us for further information or support.<br />
                3. Once your onboarding is complete, get ready to see those orders coming!

                </p>
                
                <h4>Got some questions?</h4>
                <p>We'd love to hear from you! You can call us at (415) 854-9524 or write us at <a href="mailto:contact@ragibull.com">contact@ragibull.com</a></p>
                          
              </Grid>
              
            </Grid>
          </div>
        </div>
      </Grid>
    </>
  );
};


export default ShopOwner;
