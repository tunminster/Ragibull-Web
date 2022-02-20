import React, { useEffect, useState } from "react";
import "../sass/Register.scss";
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
import { useLocation, useParams } from "react-router";

const DeliveryPartner = () => {
    return (
        <>
        <Header customClass="InnerHead" />
      <Grid container id="main">
        {/* Banner Section */}
        <div className="Banner_Inner">
          <div className="container">
            <h1 className="Banner_Inner_Title">Ragibull Delivery Partner</h1>
          </div>
        </div>

          <div className="container">
            <Grid container spacing={3} alignItems="left">
              <Grid item sm={12} className="box">
                <h2 className="Form_Title"></h2>
                <p>Achieve your financial goals faster by using your free time to augment your income. Be a Ragibull Delivery Partner and earn extra money while helping people get products they need.</p>

                <h3>Why Partner with Ragibull?</h3> 
                <p>At Ragibull, we ensure customer satisfaction by delivering their lunch, dinner, snacks, or grocery items on time with great professional excellence. As a Ragibull driver, you can become our partner in providing excellent service to our customers.</p>   

                <p><strong>Competitive Pay Model</strong><br />
                Ragibull drivers are more than just delivery riders—they are our partners for business growth. So, we designed a competitive pay model that brings them satisfaction and helps them achieve their financial goals.
                </p>

                <h3>Base pay + Customer tips + Promotions = Total Earnings</h3>

                <p><strong>Base pay</strong><br />
                Every Ragibull driver receives a base pay of $2 to $10+ per order. The exact amount depends on the estimated time, distance, and desirability of the order.
                </p>

                <p><strong>Customer tips</strong><br />
                Ragibull drivers get tips from customers in full. We do not deduct fees or take any amount from customer tips.
                </p>

                <p><strong>Promotions</strong><br />
                To increase their earning potential, we offer Ragibull drivers pay promotions in certain conditions. We give Peak Pay when roads and delivery areas are busy. We award Bonus Pay to delivery partners who complete a particular number of deliveries in a set amount of time. Other pay promotions further boost driver income.
                </p>
                <p><strong>Flexible Work Schedule</strong><br />
                Have complete control over your schedule. Choose the hours you’d want to dedicate to deliveries and take breaks whenever you need to.
                </p>
                <p><strong>Secure and Regular Payments</strong><br />
                Get paid weekly via a secured direct deposit to your personal bank account. Our transparent pay system lets you see the complete breakdown of all your earnings.
                </p>

                <h3>Delivery Partner Requirements</h3>
                <p>Raging to reap the rewards of being our delivery partner? Here are the requirements for becoming a Ragibull Driver:
            
                </p>
                <ol>
                    <li>Be 18 years of age or older</li>
                    <li>A car or scooter with license and insurance (bicycle is allowed in select cities)</li>
                    <li>A driver's license number</li>
                    <li>A social security number</li>
                    <li>Your consent to a background check</li>
                </ol>

                <h4>Sign up in 4 easy steps</h4>
                <p>Got what it takes to be a Ragibull delivery partner? Sign up now to start earning money on your free time.</p>
                <ol>
                    <li>
                       Download the Ragibull Driver app.
                    </li>
                    <li>Sign up for a new account.</li>
                    <li>Choose a driver orientation schedule.</li>
                    <li>Complete the sign up process.</li>
                </ol>
                
                <h4>Got some questions?</h4>
                <p>We'd love to hear from you! You can call us at (415) 854-9524 or write us at <a href="mailto:contact@ragibull.com">contact@ragibull.com</a>
                <br /><br />
                </p>
                          
              </Grid>
              
            </Grid>
          </div>
        
      </Grid>
    </>
    );
};

export default DeliveryPartner;