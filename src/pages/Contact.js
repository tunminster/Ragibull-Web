/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import "../sass/Contact.scss";
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

const Contact = () => {
return (
    <>
      <ContentHeader customClass="InnerHead" />
      <Grid container id="main">
        {/* Banner Section */}
        <div className="Banner_Inner">
          <div className="container">
            <h1 className="Banner_Inner_Title">Get the help you need</h1>
          </div>
        </div>

        {/* Form Section */}
        <div className="Form">
          <div className="container">
            <Grid container spacing={3} alignItems="center">
              <Grid item sm={12} className="box">
                <h2 className="Form_Title">Support in the US</h2>

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
                    
                    <p>Call us on (415) 854-9524
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

export default Contact;