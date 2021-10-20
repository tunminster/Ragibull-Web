/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import "../sass/Register.scss";
import { Grid, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Geocode from "react-geocode";
import { useForm } from "react-hook-form";

import { geolocated } from "react-geolocated";

const addressObject = {
  addressLine1: "",
  addressLine2: "",
  city: "",
  county: "",
  country: "",
  postalCode: null,
};
const Register = () => {
  const { register, handleSubmit } = useForm();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [firstName, setFirstName] = useState("");

  const [address, setAddress] = useState({ addressObject });

  const [userLocation, setUserLocation] = useState({
    lat: null,
    long: null,
  });

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

  console.log("key", process.env.REACT_APP_GOOGLE_MAP_API_KEY);

  Geocode.setApiKey("AIzaSyA0YxCZGRFFEn4ZURLDsUuRd5H9dtIlJQU ");
  // console.log('location',..props.coords);

  // set response language. Defaults to english.
  Geocode.setLanguage("en");

  // set response region. Its optional.
  // A Geocoding request with region=es (Spain) will return the Spanish city.
  // Geocode.setRegion("es");

  // set location_type filter . Its optional.
  // google geocoder returns more that one address for given lat/lng.
  // In some case we need one address as response for which google itself provides a location_type filter.
  // So we can easily parse the result for fetching address components
  // ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
  // And according to the below google docs in description, ROOFTOP param returns the most accurate result.
  // Geocode.setLocationType("ROOFTOP");

  // Enable or disable logs. Its optional.
  Geocode.enableDebug();

  const getDataFromAMap = () => {
    console.log("called", userLocation.lat, userLocation.long);
    Geocode.fromLatLng(userLocation.lat, userLocation.long).then(
      (response) => {
        const address = response.results[0].formatted_address;
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
          addressLine1: address,
          addressLine2: "",
          city: city,
          county: state,
          country: country,
          postalCode: postelCode,
        };
        console.log({ city, state, country, postelCode });
        console.log(address);
        setAddress(tempData);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const onAddressChange = (key, value) => {
    setAddress((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const onSubmit = (data) => console.log(data);

  return (
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
          <Grid container>
            <Grid item sm={6} className="box">
              <h2 className="Form_Title">Register Now</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="form-group col-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                      {...register("firstName")}
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                      {...register("lastName")}
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      {...register("email")}
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      type="text"
                      placeholder="Job Title"
                      className="form-control"
                      {...register("jobTitle")}
                    />
                  </div>

                  <div className="form-group col-6 withicon">
                    {/* <div> */}
                    <LocationOnIcon className="locationIcon" />
                    {/* </div> */}
                    <input
                      type="text"
                      placeholder="Addresse Line 1"
                      className="form-control address"
                      value={address.addressLine1}
                      onChange={(e) =>
                        onAddressChange("addressLine1", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      type="text"
                      placeholder="Addresse Line 2"
                      className="form-control"
                      value={address.addressLine2}
                      onChange={(e) =>
                        onAddressChange("addressLine2", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                      value={address.city}
                      onChange={(e) => onAddressChange("city", e.target.value)}
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      type="text"
                      placeholder="County"
                      className="form-control"
                      value={address.county}
                      onChange={(e) =>
                        onAddressChange("county", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      type="text"
                      placeholder="Country"
                      className="form-control"
                      value={address.country}
                      onChange={(e) =>
                        onAddressChange("country", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      placeholder="Postal Code"
                      className="form-control"
                      type="number"
                      value={address.postalCode}
                      onChange={(e) =>
                        onAddressChange("postalCode", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      type="file"
                      placeholder="Document"
                      className="form-control"
                      {...register("document")}
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      type="date"
                      placeholder="Date of Birth"
                      className="form-control"
                      {...register("dateOfBirth")}
                    />
                  </div>

                  <div className="form-group col-6">
                    <input
                      type="text"
                      placeholder="Social Security Number"
                      className="form-control"
                      {...register("socialSecurityNumber")}
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      type="text"
                      placeholder="Bank Account Number"
                      className="form-control"
                      {...register("accountNumber")}
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      type="text"
                      placeholder="Routing Number "
                      className="form-control"
                      {...register("routingNumber")}
                    />
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
                    <input type="submit" value="submit" />
                  </div>
                </div>
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export default Register;
