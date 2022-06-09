import React, { useState } from "react";
import "../sass/FormShop.scss";
import { Button, Grid, Typography, Link } from "@mui/material";
import BannerImg from "../assets/images/banner-form.png";
import FormHeader from "../components/layout/FormHeader";
import deliveryIcon1 from "../assets/images/deliver-icon7.png";
import deliveryIcon2 from "../assets/images/deliver-icon8.png";
import deliveryIcon3 from "../assets/images/deliver-icon9.png";
import deliveryIcon4 from "../assets/images/deliver-icon10.png";
import Faq from "../components/layout/Faq";
import StepOne from "../components/forms/StepOne";
import StepTwo from "../components/forms/StepTwo";
import StepThree from "../components/forms/StepThree";
import StepFour from "../components/forms/StepFour";
import StepFive from "../components/forms/StepFive";
import orderImg1 from "../assets/images/order-img1.jpg";
import orderImg2 from "../assets/images/order-img2.jpg";
import orderImg3 from "../assets/images/order-img3.jpg";
import registerImg from "../assets/images/register-img.jpg";
import { useHistory } from "react-router-dom";
import { API } from "../api/API";
import { LoadingButton } from "@mui/lab";
import StepThreeShop from "../components/forms/StepThreeShop";
import StepFourShop from "../components/forms/StepFourShop";

const FormShop = () => {

  const history = useHistory();

  const deliverData = [
    {
      id: 1,
      img: deliveryIcon1,
      title: 'Delivery Options',
      text: `You decide how to send food to your customers—it's your choice whether to deploy your own riders or tap our fleet of drivers.`,
    },
    {
      id: 2,
      img: deliveryIcon2,
      title: 'Greater Online Visibility',
      text: `Your registration with Ragibull puts you on our roster of partners. So the next time a hungry Ragibull app user searches for a nearby dining establishment, your restaurant will show up on the list of choices if you're within their vicinity.`,
    },
    {
      id: 3,
      img: deliveryIcon3,
      title: 'Customer Insights',
      text: `Learn more about your customers by viewing their profiles and order history on the Ragibull app. Your engagement level will get a boost when you customize your order suggestions and promos according to their preferences.`,
    },
    {
      id: 4,
      img: deliveryIcon4,
      title: 'Growth Opportunities',
      text: `Satisfied customers are your best brand ambassadors. Those who discover you on Ragibull can share their experience with your restaurant and convince others to check you out.`,
    },
  ];

  const orderData = [
    {
      id: 1,
      img: orderImg1,
      title: 'Order Placement',
      text: `Ragibull app users select items from your menu to add to their cart.`,
    },
    {
      id: 2,
      img: orderImg2,
      title: 'Order Preparation',
      text: `When app users finish selecting all the items they need from your menu, you can accept and prepare the order for the riders to pick up.`,
    },
    {
      id: 3,
      img: orderImg3,
      title: 'Order delivery',
      text: `If you choose to work with our riders, you can notify a Ragibull driver once you're done preparing the food. A rider will pick it up from your store to ensure that the order gets to your customer ASAP.`,
    },
  ];

  const [stepForm, setStepForm] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [driverImage, setDriverImage] = useState(null);
  const [driverLicenseFront, setdriverLicenseFront] = useState(null)
  const [driverLicenseBack, setdriverLicenseBack] = useState(null)
  const [registerData, setRegisterData] = useState({});
  const [hasErrors, setHasError] = useState(false)
  const [apiErrors, setApiErrors] = useState([]);
  const onNextClick = (next = true) => {

    if (next) {
        if (stepForm < 5) setStepForm(stepForm + 1);
    } else {
      if (stepForm > 0) setStepForm(stepForm - 1);
    }

  };

  const onChangeValues = (fieldName, value) => {
    let tempObj = { [fieldName]: value };
    setRegisterData({
      ...registerData,
      ...tempObj
    })
  }
  const onUpdateAddress = (addressData)=>{
    console.log(addressData)
    setRegisterData({
      ...registerData,
      ...addressData,
    })
  }
  const setImages = (type, file)=>{
    if(type==="driverImage"){
      setDriverImage(file)
      }else if(type==="backImage"){
        setdriverLicenseBack(file)
      }else if(type==="frontImage"){
        setdriverLicenseFront(file)
      }
  }
  const validateStep3 = ()=>{
    if (!registerData?.addressLine1
       || !registerData?.city
       || !registerData?.country
       || !registerData?.county
       || !registerData?.password
       || !registerData?.confirmPassword) {
         setHasError(true);
         return;
       }else{
        setHasError(false);
        setStepForm(stepForm + 1);
       }

  }
  const validateStep4 = ()=>{
    history.push('/form-submit');

  }
  const checkEmailValid = (emailValue) => {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(emailValue)) {
      return false;
    } else {
      return true;
    }
  }
  const requestForOtp = async () => {

    if (!registerData?.fullName || !registerData.email) {
      setHasError(true)
      return;
    } else if (!checkEmailValid(registerData.email)) {
      setHasError(true)
      return;
    }
    let subscriptionKey = process.env.REACT_APP_SUBSCRIPTION_KEY;
    setLoading(true)
    let requestObj = {
      "fullName": registerData.fullName,
      "email": registerData.email
    }
    try {
      let response = await API.RequestOTP(
        requestObj,
        subscriptionKey,
      );
      setLoading(false)
      if (response?.userEmailAddress) {
        setHasError(false)
        setStepForm(stepForm + 1);
      }else{
        alert("Something went wrong!")
      }
    } catch (error) {
      console.error(error);
      console.log(error);
      alert("Something went wrong!")
    }
  };

  const verifyUserOtp = async () => {
    setHasError(false)
    if (!registerData?.code) {
      setHasError(true)
      return;
    }
    let subscriptionKey = process.env.REACT_APP_SUBSCRIPTION_KEY;
    setLoading(true)
    let requestObj = {
      "email": registerData.email,
      "code": registerData.code
    }
    try {
      let response = await API.VerifyOTP(
        requestObj,
        subscriptionKey,
      );
      setLoading(false)
      if (response?.userEmailAddress) {
        setHasError(false)
        setStepForm(stepForm + 1);
      }
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  };
  const onSubmit = async () => {
    // console.log({ data, userDocFile });
    setLoading(true);
    var data = {...registerData,
      emailAddress: registerData.email,
	    radius: 20,
      }
      
    let subscriptionKey = process.env.REACT_APP_SUBSCRIPTION_KEY;

    try {
      let response = await API.RegisterDriverAPI(
        data,
        driverImage,
        driverLicenseFront,
        driverLicenseBack,
        subscriptionKey,
      );
      setLoading(false);
      if (response?.data?.errors) {
        console.log(response);
        setApiErrors([...response?.data.errors])
      } else {
        history.push('/form-submit');
      }
    } catch (error) {
      console.error(error);
      console.log(error);

      setLoading(false);
      alert("Something Went Wrong");
    }
  };
  const errorMessages = ()=>{
    return apiErrors.map((error, index)=>{
        return(
          <p className="apiErrorMsg"  key={index}>• {error.message}</p>
        );
    });
  }
  return (
    <>
      <FormHeader customClass={'App_header--bgFill'} />

      <Grid container id="main">

        {/* Banner Section */}
        <div className="Banner Banner__formShop">
          <div className="container">
            <h1 className="Banner_Title">
            A world of customers now within<br /> your reach
            </h1>
          </div>
        </div>

        {/* About Section */}
        <div className="About">
          <div className="container">
            <h2 className="About_Title">
              <i>Why</i> Ragibull Shop
            </h2>
            <p>Make it easy for people to find and buy from your restaurant with Ragibull. With our app's convenient order management system, as well as fast but careful riders, customers would be able to enjoy more of your delightful food offerings conveniently. Register with us today to discover how the Ragibull app can serve as your online delivery platform.</p>
          </div>
        </div>

        {/* Signup Section */}
        <div className="signUp">
          <div className="container">
            <h2 className="signUp__title">Get Started</h2>
            <p className="signUp__content">Please enter your information below in order to Register Your Shop</p>
            <div className="formSteps">
              <form action="#">
                {stepForm === 1 && <StepOne onChangeValues={onChangeValues} formData={registerData} hasError={hasErrors} isShopOwner = {true}/>}
                {stepForm === 2 && <StepTwo onChangeValues={onChangeValues}  formData={registerData} hasError={hasErrors}/>}
                {stepForm === 3 && <StepThreeShop onChangeValues={onChangeValues} onUpdateAddress={onUpdateAddress} formData={registerData} hasError={hasErrors}/>}
                {stepForm === 4 && <StepFourShop onChangeValues={onChangeValues} onUpdateAddress={onUpdateAddress} formData={registerData} hasError={hasErrors} />}
              </form>
              <Grid container alignItems={'center'} justifyContent={'center'} className="cta">
                {stepForm !== 1 &&
                  <Button variant="outlined" color="primary" onClick={() => onNextClick(false)}>
                    Prev
                  </Button>
                }
                <span className="stepNo">Step {stepForm} of 4</span>
                {stepForm !== 4 && !isLoading &&
                  <Button variant="outlined" color="primary" onClick={() => onNextClick()}>
                    Next
                  </Button>
                }
                {stepForm === 4 && !isLoading &&
                  <Button variant="outlined" color="primary" onClick={() => validateStep4()}>
                    Submit
                  </Button>
                }
                {isLoading && <LoadingButton 
                  loading
                  className="custom-loader"/>}

              </Grid>
              {apiErrors&&<div>{errorMessages()}</div>}
              <Typography className="login" compotent={'p'}>Already Have An Account? <Link to="/">Login</Link></Typography>
            </div>
          </div>
        </div>

        {/* Deliver Section */}
        <div className="About About__inner">
          <div className="container">
            <h2 className="About_Title">
              <i>Why Should You Partner with</i> Ragibull?
            </h2>
            <p>By registering with our app, you can enjoy the following as a Ragibull shop owner:</p>
            {deliverData.map((item) => (
              <div key={item.id} className="About__item">
                <img src={item.img} />
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Order Taking Section */}
        <div className="Ordertaking">
            <div className="container">
                <h2 className="Ordertaking_Title">
                    <i>How Does</i> Ragibull App <i>Make Order-Taking and Delivery Easy?</i>
                </h2>
                <div className="row">
                    {orderData.map((item) => (
                        <div className="Ordertaking__box" key={item.id}>
                            <img src={item.img} alt={item.title} />
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Register Section */}
        <div className="Register">
            <div className="container">
                <div className="row">
                    <div className="Register__img">
                        <img src={registerImg} alt={''} />
                    </div>
                    <div className="Register__text">
                        <h2 className="Register_Title"><i>How Do I Register with</i> Ragibull?</h2>
                        <p>Start connecting with more customers now by joining the Ragibull community! To become a Ragibull shop owner:</p>
                        <ul>
                            <li>Download the Ragibull app from the App Store or Google Play.</li>
                            <li>After installing the app, wait for our welcome e-mail. We’ll walk you through the use and operation of Ragibull app’s features for restaurant owners. Our sales team will also be ready to assist you should you reach out to us for further information or support.</li>
                            <li>Once your onboarding is complete, get ready to see those orders coming!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* FAQ Section */}
        <div className="faq">
          <div className="container">
            <h2 className="faq__title">FAQ</h2>
            <Faq />
          </div>
        </div>


      </Grid>
    </>
  );
};

export default FormShop;
