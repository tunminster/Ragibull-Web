import React, { useState } from "react";
import "../sass/FormShop.scss";
import { Button, Grid, Typography, Link } from "@mui/material";
import FormHeader from "../components/layout/FormHeader";
import deliveryIcon1 from "../assets/images/deliver-icon7.png";
import deliveryIcon2 from "../assets/images/deliver-icon8.png";
import deliveryIcon3 from "../assets/images/deliver-icon9.png";
import deliveryIcon4 from "../assets/images/deliver-icon10.png";
import Faq from "../components/layout/Faq";
import StepOne from "../components/forms/StepOne";
import StepTwo from "../components/forms/StepTwo";
import orderImg1 from "../assets/images/order-img1.jpg";
import orderImg2 from "../assets/images/order-img2.jpg";
import orderImg3 from "../assets/images/order-img3.jpg";
import registerImg from "../assets/images/register-img.jpg";
import { useHistory } from "react-router-dom";
import { API } from "../api/API";
import { LoadingButton } from "@mui/lab";
import StepThreeShop from "../components/forms/StepThreeShop";
import StepFourShop from "../components/forms/StepFourShop";

const ShopOwnerForm = () => {

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
  const [isOtpValid, setOtpValid] = useState(true);
  const [shopImage, setShopImage] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const [dayTimings, setDayTimings] = useState([]);
  const [registerData, setRegisterData] = useState({});
  const [allStoreTypes, setStoreTypes] = useState([]);
  const [hasErrors, setHasError] = useState(false)
  const [apiErrors, setApiErrors] = useState([]);
  const onNextClick = (next = true) => {
    if (next) {
      if (stepForm === 1) {
        requestForOtp();
        setOtpValid(true);
        getAllStoreTypes();
      } else if (stepForm === 2) {
        verifyUserOtp();
      } else if (stepForm === 3) {
        setOtpValid(true);
        validateStep3();
      } else if (stepForm === 4) {
        validateStep4();
      }
      else {
        if (stepForm < 4) setStepForm(stepForm + 1);
      }
    } else {
      if (stepForm > 0) setStepForm(stepForm - 1);
    }
  };
  const onChangeValues = (fieldName, value) => {
    console.log(registerData);
    if (fieldName === 'openTime' || 'closeTime') {
      addTimeToDays(fieldName, value);
    } else {
      let tempObj = { [fieldName]: value };
      setRegisterData({
        ...registerData,
        ...tempObj
      })
    }
  }
  const addTimeToDays = (fieldName, value) => {
    let timeObj = '';
    if (fieldName === 'openTime') {
      timeObj = 'open'
    } else {
      timeObj = 'close'
    }
    var tempDayTimings = [...dayTimings]
    for (var i = 0; i < tempDayTimings.length; i++) {
      if (tempDayTimings[i][timeObj] === '') {
        tempDayTimings[i][timeObj] = value;
      }
    }
    setDayTimings([...tempDayTimings])
    setRegisterData({
      ...registerData,
      [fieldName]: value,
    })
  }
  const onUpdateAddress = (addressData) => {
    setRegisterData((v) => {
      return {
        ...v,
        latitude: addressData.latitude,
        longitude: addressData.longitude,
        addressLine1: addressData.addressLine1,
        city: addressData.city,
        country: addressData.country
      };
    })
  }
  // console.log(registerData);
  const onDaysSelect = (daysArray) => {
    if (selectedDays.length < daysArray.length) {
      // Day is added
      let tempDayTimings = [...dayTimings];
      for (var i = 0; i < daysArray.length; i++) {
        if (!selectedDays.includes(daysArray[i])) {
          tempDayTimings.push({
            dayOfWeek: daysArray[i],
            open: '',
            close: '',
            timeZone: "PT"
          });
        } else {
          console.log("includes" + daysArray[i]);
        }
      }
      setDayTimings(tempDayTimings);
      setSelectedDays(daysArray);
      setRegisterData({
        ...registerData,
        openTime: '',
        closeTime: '',
      })
    } else {
      //Day is removed
      let tempDayTimings = [...dayTimings];
      let difference = selectedDays.filter(x => !daysArray.includes(x)); // calculates diff
      for (let i = 0; i < difference?.length; i++) {
        let index = tempDayTimings.findIndex(x => x.dayOfWeek === String(difference[i]));
        if (index >= 0) {
          console.log(tempDayTimings)
          setDayTimings(tempDayTimings);
          setSelectedDays(daysArray);
        }

      }
    }
  }
  const setImages = (type, file) => {
    setShopImage(file)
  }
  const validateStep3 = () => {
    if (!registerData?.addressLine1
      || !registerData?.city
      || !registerData?.country
      || !registerData?.zipCode
      || !registerData?.phoneNumber
      || !registerData?.password
      || !registerData?.confirmPassword
      || !registerData?.businessName) {
      setHasError(true);
    } else {
      setHasError(false);
      setStepForm(stepForm + 1);
    }

  }
  const validateStep4 = () => {
    if (selectedDays.length === 0 || !registerData.openTime || !registerData.closeTime) {
      setHasError(true)
    } else {
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
      "emailAddress": registerData.email
    }
    try {
      let response = await API.RequestOwnerOtpApi(
        requestObj,
        subscriptionKey,
      );
      setLoading(false)
      if (response?.userEmailAddress) {
        setHasError(false)
        setStepForm(stepForm + 1);
      } else {
        alert("Opps. There is something wrong. Please try it again")
      }
    } catch (error) {
      console.error(error);
      console.log(error);
      alert("Opps. There is something wrong. Please try it again")
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
      let response = await API.VerifyOwnerOtpApi(
        requestObj,
        subscriptionKey,
      );
      setLoading(false)
      if (response?.status === "approved" && response?.valid) {
        setOtpValid(true);
        setHasError(false)
        setStepForm(stepForm + 1);
      } else {
        setOtpValid(false);
        setHasError(true);
      }
    } catch (error) {
      console.error(error);
      console.log(error);
      alert("Opps. There is something wrong. Please try it again")
    }
  };
  const getAllStoreTypes = async () => {
    let subscriptionKey = process.env.REACT_APP_SUBSCRIPTION_KEY;

    try {
      let response = await API.GetStoreTypes(
        subscriptionKey,
      );
      if (response.status === 200) {
        setStoreTypes([...response.data])
      }else{
        alert("Opps. There is something wrong. Please try it again")
      }
    } catch (error) {
      console.error(error);
      console.log(error);
      alert("Opps. There is something wrong. Please try it again")
    }
  };
  const onSubmit = async () => {
    let daysOpen = [...dayTimings];

    for (let i = 1; i < 8; i++) {
      let indexItem = daysOpen.findIndex(x => x.dayOfWeek === String(i));
      if (indexItem === -1) {
        daysOpen.push({
          dayOfWeek: String(i),
          open: 'Closed',
          close: 'Closed',
          timeZone: "PT"
        })
      }
    }
    var data = {
      ...registerData,
      emailAddress: registerData.email,
      storeOpeningHours: daysOpen,
    }
    setLoading(true);


    let subscriptionKey = process.env.REACT_APP_SUBSCRIPTION_KEY;

    try {
      let response = await API.RegisterShopOwnerAPI(
        data,
        shopImage,
        subscriptionKey
      );
      setLoading(false);
      if (response?.data?.errors) {
        setApiErrors([...response?.data?.errors])
      } else if (response?.status === 200){
        history.push('/shop-owner-form-submit');
      }else{
        alert("Opps. There is something wrong. Please try it again")
      }
    } catch (error) {
      console.error(error);
      console.log(error);

      setLoading(false);
      alert("Opps. There is something wrong. Please try it again")
    }
  };
  const errorMessages = () => {
    return apiErrors.map((error, index) => {
      return (
        <p className="apiErrorMsg" key={index}>• {error.message}</p>
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
                {stepForm === 1 && <StepOne onChangeValues={onChangeValues} formData={registerData} hasError={hasErrors} isShopOwner={true} />}
                {stepForm === 2 && <StepTwo onChangeValues={onChangeValues} formData={registerData} hasError={hasErrors} isOtpValid={isOtpValid} />}
                {stepForm === 3 && <StepThreeShop onChangeValues={onChangeValues} onAddressUpdate={onUpdateAddress} formData={registerData} hasError={hasErrors} setImages={setImages} />}
                {stepForm === 4 && <StepFourShop onChangeValues={onChangeValues} onDaysSelect={onDaysSelect} formData={registerData} hasError={hasErrors} storeTypes={allStoreTypes} />}
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
                  className="custom-loader" />}

              </Grid>
              {apiErrors && <div>{errorMessages()}</div>}
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

export default ShopOwnerForm;
