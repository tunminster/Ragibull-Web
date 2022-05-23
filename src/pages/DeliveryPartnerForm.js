import React, { useState } from "react";
import "../sass/DeliveryPartnerForm.scss";
import { Button, Grid, Typography, Link } from "@mui/material";
import BannerImg from "../assets/images/banner-form.png";
import FormHeader from "../components/layout/FormHeader";
import deliveryIcon1 from "../assets/images/deliver-icon1.png";
import deliveryIcon2 from "../assets/images/deliver-icon2.png";
import deliveryIcon3 from "../assets/images/deliver-icon3.png";
import deliveryIcon4 from "../assets/images/deliver-icon4.png";
import deliveryIcon5 from "../assets/images/deliver-icon5.png";
import deliveryIcon6 from "../assets/images/deliver-icon6.png";
import Faq from "../components/layout/Faq";
import StepOne from "../components/forms/StepOne";
import StepTwo from "../components/forms/StepTwo";
import StepThree from "../components/forms/StepThree";
import StepFour from "../components/forms/StepFour";
import StepFive from "../components/forms/StepFive";
import { useHistory } from "react-router-dom";
import { API } from "../api/API";
import { LoadingButton } from "@mui/lab";

const DeliveryPartnerForm = () => {

  const history = useHistory();

  const deliverData = [
    {
      id: 1,
      img: deliveryIcon1,
      title: 'Earn extra income',
      text: `Every Ragibull driver receives a base pay of $2 to $10+ per order. The exact amount depends on the estimated time, distance, and desirability of the order. `,
    },
    {
      id: 2,
      img: deliveryIcon2,
      title: 'Want flexiable working hours',
      text: `Have complete control over your schedule. Choose the hours you’d want to dedicate to deliveries and take breaks whenever you need to.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    },
    {
      id: 3,
      img: deliveryIcon3,
      title: 'You choose where to work',
      text: `Have complete control over your work place too. Choose or update area that you want to work from the app`,
    },
    {
      id: 4,
      img: deliveryIcon6,
      title: `Know how much you'll make`,
      text: `We transfer your earning weekly. You can also choose to get paid faster. Cash out in the app daily`,
    },
  ]
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
      if (stepForm === 1) {
        requestForOtp();
      } else if (stepForm === 2) {
        verifyUserOtp();
      } else if(stepForm === 3){
        validateStep3();
      } else if(stepForm === 4){
        validateStep4();
      }
       else {
        if (stepForm < 5) setStepForm(stepForm + 1);
      }
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
    if (!registerData?.vehicleType
       || !driverImage
       || !driverLicenseFront
       || !driverLicenseBack
       || !registerData?.drivingLicenseNumber
       || !registerData?.socialSecurityNumber
       || !registerData?.drivingLicenseExpiryDate) {
         setHasError(true);
         return;
       }else{
        setHasError(false);
        setStepForm(stepForm + 1);
       }

  }
  const validateStep5 = ()=>{
    if (!registerData?.bankName
       || !registerData?.bankAccountNumber
       || !registerData?.routingNumber) {
         setHasError(true);
         return;
       }else{
        setHasError(false);
        onSubmit();
       }

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
        history.push('/delivery-partner-form-submit');
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
        <div className="Banner Banner__form">
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
        <div className="About">
          <div className="container">
            <h2 className="About_Title">
              <i>Why partner with </i> Ragibull
            </h2>
            <p>
            Achieve your financial goals faster by using your free time to augment your income. Be a Ragibull Delivery Partner and earn extra money while helping people get products they need.
            </p>
            <p>
            At Ragibull, we ensure customer satisfaction by delivering their lunch, dinner, snacks, or grocery items on time with great professional excellence. As a Ragibull driver, you can become our partner in providing excellent service to our customers.
            </p>
          </div>
        </div>

        {/* Signup Section */}
        <div className="signUp">
          <div className="container">
            <h2 className="signUp__title">Sign up and start earning</h2>
            <p className="signUp__content">Please enter your information below in order to Register Yourself</p>
            <div className="formSteps">
              <form action="#">
                {stepForm === 1 && <StepOne onChangeValues={onChangeValues} formData={registerData} hasError={hasErrors} />}
                {stepForm === 2 && <StepTwo onChangeValues={onChangeValues}  formData={registerData} hasError={hasErrors}/>}
                {stepForm === 3 && <StepThree onChangeValues={onChangeValues} onUpdateAddress={onUpdateAddress} formData={registerData} hasError={hasErrors}/>}
                {stepForm === 4 && <StepFour onChangeValues={onChangeValues} formData={registerData} hasError={hasErrors} setImages={setImages}/>}
                {stepForm === 5 && <StepFive onChangeValues={onChangeValues} formData={registerData} hasError={hasErrors}/>}
              </form>
              <Grid container alignItems={'center'} justifyContent={'center'} className="cta">
                {stepForm !== 1 &&
                  <Button variant="outlined" color="primary" onClick={() => onNextClick(false)}>
                    Prev
                  </Button>
                }
                <span className="stepNo">Step {stepForm} of 5</span>
                {stepForm !== 5 && !isLoading &&
                  <Button variant="outlined" color="primary" onClick={() => onNextClick()}>
                    Next
                  </Button>
                }
                {stepForm === 5 && !isLoading &&
                  <Button variant="outlined" color="primary" onClick={() => validateStep5()}>
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
              <i>Why deliver with</i> Ragibull
            </h2>
            {deliverData.map((item) => (
              <div key={item.id} className="About__item">
                <img src={item.img} />
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
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

export default DeliveryPartnerForm;
