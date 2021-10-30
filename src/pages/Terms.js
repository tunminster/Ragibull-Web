/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import "../sass/Terms.scss";
import { Grid, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Geocode from "react-geocode";
import { useForm } from "react-hook-form";
import RegisterImg from "../assets/images/register-img.png";
import { geolocated } from "react-geolocated";
import { API } from "../api/API";
import ContentHeader from "../components/layout/ContentHeader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoadingButton } from "@mui/lab";
import { useLocation, useParams } from "react-router";

const Terms = () => {
return (
    <>
      <ContentHeader customClass="InnerHead" />
      <Grid container id="main">
        {/* Banner Section */}
        <div className="Banner_Inner">
          <div className="container">
            <h1 className="Banner_Inner_Title">Terms and Conditions Agreement</h1>
          </div>
        </div>

        {/* Form Section */}
        <div className="Form">
          <div className="container">
            <Grid container spacing={3} alignItems="center">
              <Grid item sm={12} className="box">
                <h2 className="Form_Title">Terms and Conditions Agreement</h2>

                <div className="row">
                    <div className="form-group col-12">
                        <p>Effective: January 01, 2021</p>
                        <p>Please read the terms and conditions carefully. The terms and conditions a legal agreement between you and Ragibull LLC.</p>
                         
                    </div>
                </div>
               
              </Grid>
              
            </Grid>

          </div>
        </div>

        <div className="container">
            <Grid container spacing={3} alignItems="left">
                <Grid item sm={12} className="box">
                    <p><b>1. Acceptance of this Agreement</b></p>
                    <p>Ragibull provides an online marketplace connection, using web-based technology that connects you and other consumers, restaurants and/or other businesses and independent delivery contractors (“Contractors”).  Ragibull’s software permits consumers to place orders for food and/or other goods from various restaurants and businesses, either for delivery or pickup (the “Software”). Once a delivery order is made, the Software notifies Contractors that a delivery opportunity is available and the Software facilitates completion of the delivery to the consumer. Once a pickup order is made, the Software communicates with the customer regarding the availability of the order for pickup. Ragibull is not a restaurant, delivery service, or food preparation business.</p>
                </Grid>
            </Grid>
            
        </div>

      </Grid>
    </>
  );
};

export default Terms;