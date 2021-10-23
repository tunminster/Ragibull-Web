/* eslint-disable default-case */
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
import { useLocation } from "react-router";

const requiredValidationMsg = "This field is required.";

const schema = yup.object().shape({
  firstName: yup.string().required(requiredValidationMsg),
  lastName: yup.string().required(requiredValidationMsg),
  email: yup.string().required(requiredValidationMsg),
  dob: yup.string().required(requiredValidationMsg),
  phoneNumber: yup.string().required(requiredValidationMsg),
  businessEntity: yup.string().required(requiredValidationMsg),
  identityDocumentType: yup.string().required(requiredValidationMsg),
  socialSecurityNumber: yup.string().required(requiredValidationMsg),
  // file: yup.mixed().required(requiredValidationMsg),
  docFile: yup.string().required(requiredValidationMsg),

  address: yup.object().shape({
    addressLine1: yup.string().required(requiredValidationMsg),
    addressLine2: yup.string().required(requiredValidationMsg),
    city: yup.string().required(requiredValidationMsg),
    county: yup.string().required(requiredValidationMsg),
    // country: yup.string().required(requiredValidationMsg),
    postalCode: yup.string().required(requiredValidationMsg),
  }),

  bankAccount: yup.object().shape({
    accountNumber: yup.string().required(requiredValidationMsg),
    routingNumber: yup.string().required(requiredValidationMsg),
  }),
});

const schemaOnlyForFile = yup.object().shape({
  docFile: yup.string().required(requiredValidationMsg),
});

const ShopRegister = () => {
  const idFromUrl = useLocation().search.split("=")[1];

  const validate = () => {
    if (idFromUrl === undefined) {
      return yupResolver(schema);
    } else {
      return yupResolver(schemaOnlyForFile);
    }
  };
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: validate(),
  });

  console.log({ idFromUrl });

  const [userDocFile, setUserDocFile] = useState(null);
  const [fileErrorMsg, setErrorMsg] = useState(true);

  const [isSubmited, setSubmitStatus] = useState(false);
  const [isFormSaving, setFormSaving] = useState(false);

  const [userLocation, setUserLocation] = useState({
    lat: null,
    long: null,
  });

  const [fileName, setFileName] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      console.log({ userLocation });

      setUserLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
      getDataFromAMap();
    });
  }, []);

  useEffect(() => {
    getDataFromAMap();
  }, [userLocation]);

  // console.log("key", process.env.REACT_APP_GOOGLE_MAP_API_KEY);

  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
  // console.log('location',..props.coords);

  // set response language. Defaults to english.
  Geocode.setLanguage("en");

  Geocode.enableDebug();

  const getDataFromAMap = () => {
    Geocode.fromLatLng(userLocation.lat, userLocation.long).then(
      (response) => {
        console.log({ response });
        const address1 = response.results[0].address_components[0].short_name;
        const address2 = response.results[0].address_components[1].long_name;
        let city, state, country, postelCode;
        for (
          let i = 0;
          i < response.results[0].address_components.length;
          i++
        ) {
          for (
            let j = 0;
            j < response.results[0].address_components[i].types.length;
            j++
          ) {
            switch (response.results[0].address_components[i].types[j]) {
              case "locality":
                city = response.results[0].address_components[i].long_name;
                break;
              case "administrative_area_level_1":
                state = response.results[0].address_components[i].long_name;
                break;
              case "country":
                country = response.results[0].address_components[i].long_name;
                break;
              case "postal_code":
                postelCode =
                  response.results[0].address_components[i].long_name;
                break;
            }
          }
        }
        let tempData = {
          addressLine1: address1,
          addressLine2: address2,
          city: city,
          county: state,
          // country: country,
          postalCode: postelCode,
        };
        setValue("address", tempData);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const onFileChange = (e) => {
    let file = e.target.files[0];
    setUserDocFile(e.target.files[0]);
    setFileName(file.name);
    setValue("docFile", file);
    setErrorMsg(false);
  };

  const onSubmit = async (data) => {
    console.log({ data, userDocFile });
    setFormSaving(true);
    let subscriptionKey = process.env.REACT_APP_SUBSCRIPTION_KEY;

    try {
      let response = await API.RegisterShopOwner(
        data,
        userDocFile,
        subscriptionKey,
        idFromUrl
      );
      if (response.accountNumber) {
        console.log(response);
        setFormSaving(false);

        reset();
        setUserDocFile(null);
        setFileName("");

        setSubmitStatus(true);
      } else {
        setFormSaving(false);
        alert("Something Went Wrong");
      }
    } catch (e) {
      setFormSaving(false);
      console.error(e);
      alert("Something Went Wrong");
    }
  };

  return (
    <>
      <Header customClass="InnerHead" />
      <Grid container id="main">
        {/* Banner Section */}
        <div className="Banner_Inner">
          <div className="container">
            <h1 className="Banner_Inner_Title">Connect with us</h1>
          </div>
        </div>

        {/* Form Section */}
        <div className="Form">
          <div className="container">
            <Grid container spacing={3} alignItems="center">
              <Grid item sm={6} className="box">
                <h2 className="Form_Title">Register Now</h2>
                <p className="success">
                  {isSubmited
                    ? "Shop owner onboarding successfully submitted. we will contact you shortly."
                    : ""}
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="form-group col-6">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                        {...register("firstName")}
                      />
                      <p className="errorMsg">{errors.firstName?.message}</p>
                    </div>
                    <div className="form-group col-6">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="form-control"
                        {...register("lastName")}
                      />
                      <p className="errorMsg">{errors.lastName?.message}</p>
                    </div>
                    <div className="form-group col-6">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        {...register("email")}
                      />
                      <p className="errorMsg">{errors.email?.message}</p>
                    </div>
                    <div className="form-group col-6">
                      <input
                        type="number"
                        placeholder="Phone Number"
                        className="form-control"
                        {...register("phoneNumber")}
                      />
                      <p className="errorMsg">{errors.phoneNumber?.message}</p>
                    </div>
                    <div className="form-group col-6">
                      <input
                        type="date"
                        placeholder="Date of Birth"
                        className="form-control"
                        {...register("dob")}
                      />
                      <p className="errorMsg">{errors.dob?.message}</p>
                    </div>
                    <div className="form-group col-6">
                      <select
                        className="form-control custom-select"
                        {...register("businessEntity")}
                        required
                      >
                        <option disabled>Select Business Entry</option>

                        <option value="1">Individual</option>
                        <option value="2">Company</option>
                        <option value="3">NonProfitOrganization</option>
                      </select>

                      <p className="errorMsg">
                        {errors.businessEntity?.message}
                      </p>
                    </div>
                    {/* <div className="form-group">
                      <input
                        type="text"
                        placeholder="Job Title"
                        className="form-control"
                        {...register("jobTitle")}
                      />
                      <p className="errorMsg">{errors.jobTitle?.message}</p>
                    </div> */}

                    <div className="form-group withicon">
                      <div className="over">
                        <input
                          type="text"
                          placeholder="Address Line 1"
                          className="form-control address"
                          {...register("address.addressLine1")}
                        />
                        <LocationOnIcon className="locationIcon" />
                      </div>
                      <p className="errorMsg">
                        {errors.address?.addressLine1?.message}
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Address Line 2"
                        className="form-control"
                        {...register("address.addressLine2")}
                      />
                      <p className="errorMsg">
                        {errors.address?.addressLine2?.message}
                      </p>
                    </div>
                    <div className="form-group col-4">
                      <input
                        type="text"
                        placeholder="City"
                        className="form-control"
                        {...register("address.city")}
                      />
                      <p className="errorMsg">
                        {errors.address?.city?.message}
                      </p>
                    </div>
                    <div className="form-group col-4">
                      <input
                        type="text"
                        placeholder="County"
                        className="form-control"
                        {...register("address.county")}
                      />
                      <p className="errorMsg">
                        {errors.address?.county?.message}
                      </p>
                    </div>
                    <div className="form-group col-4">
                      <select
                        className="form-control custom-select"
                        {...register("address.country")}
                      >
                        <option disabled>Select Country</option>
                        <option value="United States">United States</option>
                      </select>
                      {/* <input
                        type="text"
                        placeholder="Country"
                        className="form-control"
                        {...register("address.country")}
                      /> */}
                      <p className="errorMsg">
                        {errors.address?.country?.message}
                      </p>
                    </div>
                    <div className="form-group col-6">
                      <input
                        placeholder="Postal Code"
                        className="form-control"
                        type="number"
                        {...register("address.postalCode")}
                      />
                      <p className="errorMsg">
                        {errors.address?.postalCode?.message}
                      </p>
                    </div>

                    <div className="form-group col-6">
                      <input
                        type="text"
                        placeholder="Social Security Number"
                        className="form-control"
                        {...register("socialSecurityNumber")}
                      />
                      <p className="errorMsg">
                        {errors.socialSecurityNumber?.message}
                      </p>
                    </div>
                    <div className="form-group col-4">
                      <select
                        className="form-control custom-select"
                        {...register("identityDocumentType")}
                        required
                      >
                        <option disabled>Select Type</option>
                        <option value="1">Passport</option>
                        <option value="2">Driver License</option>
                        <option value="3">Resident Permit</option>
                        <option value="4">Citizen Card</option>
                        <option value="5">Electoral Id</option>
                        <option value="6">Other</option>
                      </select>
                      <p className="errorMsg">
                        {errors.identityDocumentType?.message}
                      </p>
                    </div>
                    <div className="form-group col-8">
                      <label className="form-control">
                        <input
                          type="file"
                          onChange={(e) => onFileChange(e)}
                          // {...register("file")}
                        />
                        <span>
                          {fileName !== "" ? fileName : "Select Document"}
                        </span>
                        <UploadFileIcon className="UploadIcon" />
                      </label>
                      <p className="errorMsg">
                        {fileErrorMsg && errors.docFile?.message}
                      </p>
                    </div>
                    <div className="form-group col-6">
                      <input
                        type="text"
                        placeholder="Bank Account Number"
                        className="form-control"
                        {...register("bankAccount.accountNumber")}
                      />
                      <p className="errorMsg">
                        {errors.bankAccount?.accountNumber?.message}
                      </p>
                    </div>
                    <div className="form-group col-6">
                      <input
                        type="text"
                        placeholder="Routing Number "
                        className="form-control"
                        {...register("bankAccount.routingNumber")}
                      />
                      <p className="errorMsg">
                        {errors.bankAccount?.routingNumber?.message}
                      </p>
                    </div>
                    {/* <div className="form-group col-6">
                  <iframe
                    title="map"
                    width="600"
                    height="450"
                    loading="lazy"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0YxCZGRFFEn4ZURLDsUuRd5H9dtIlJQU 
    &q=Space+Needle,Seattle+WA"
                  ></iframe>
                </div> */}
                    <div className="form-group submit">
                      {/* <Button
                      variant="outlined"
                      color="primary"
                      onClick={onSubmit}
                    >
                      Submit
                    </Button> */}
                      {!isFormSaving ? (
                        <input
                          type="submit"
                          value="Submit"
                          className="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root css-1rwt2y5-MuiButtonBase-root-MuiButton-root"
                        />
                      ) : (
                        <LoadingButton
                          loading
                          variant="outlined"
                          color="primary"
                          className="custom-loader"
                        />
                      )}
                    </div>
                  </div>
                </form>
              </Grid>
              <Grid item sm={6} className="box">
                <img src={RegisterImg} alt="Register" />
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default ShopRegister;
