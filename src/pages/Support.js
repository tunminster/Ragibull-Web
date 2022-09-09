/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import "../sass/Support.scss";
import { Grid, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Geocode from "react-geocode";
import RegisterImg from "../assets/images/register-img.png";
import { geolocated } from "react-geolocated";
import { API } from "../api/API";
import ContentHeader from "../components/layout/ContentHeader";
import { LoadingButton } from "@mui/lab";
import { useLocation, useParams } from "react-router";

const Support = () => {
return (
    <>
      <ContentHeader customClass="InnerHead" />
      <Grid container id="main">
        {/* Banner Section */}
        <div className="Banner_Inner">
          <div className="container">
            <h1 className="Banner_Inner_Title">Support</h1>
          </div>
        </div>

        {/* Form Section */}
        <div className="Form">
          <div className="container">
            <Grid container spacing={3} alignItems="center">
              <Grid item sm={12} className="box">
                <h2 className="Form_Title">Support</h2>

                <div className="row">
                    <div className="form-group col-12">
                        
     
                    </div>
                </div>
               
              </Grid>
              
            </Grid>

          </div>
        </div>

        <div className="container">
            <Grid container spacing={3} alignItems="left">
                <Grid item sm={12} className="box">
                    <p><b>My order never arrived</b></p>
                    <p>If the order is complete in the app. but you have not received the order. Please call our support phone number or send email:
                        <ol>
                          <li>Tel: (415) 854-9524</li>
                          <li>Email: contact@ragibull.com</li>
                        </ol>
                    </p>

                    <p><b>I receeived someone else's order</b></p>
                    <p>If you received someone else's order and were delivered the wrong items, please let us 
                      know by this: 
                      <ol>
                          <li>Tel: (415) 854-9524</li>
                          <li>Email: contact@ragibull.com</li>
                        </ol>
                    </p>

                    <p><b>Change delivery address</b></p>
                    <p>If you weant to change delivery address. You need to login to the app. 
                      Go to my profile secion, update delivery address.
                    </p>

                    <p><b>My order is taking longer than expected</b></p>
                    <p>Restaurant owner and delivery partner do their best to deliver the delivery item 
                      on time. But, external unexpected factors can cause delay. EG: if the restaurant 
                      is too busy than normal, you placeed a large order or your delivey path is in busy traffic or bad weather conditions.
                    </p>

                    <p><b>Your order is missing</b></p>
                    <p>If you are a Restaurant owner, if you are not receiving any orders which should be in the app. In this case, 
                      Please contact us:
                      <ol>
                          <li>Tel: (415) 854-9524</li>
                          <li>Email: contact@ragibull.com</li>
                        </ol>
                    </p>
                </Grid>
            </Grid>
            
        </div>

      </Grid>
    </>
  );
};

export default Support;