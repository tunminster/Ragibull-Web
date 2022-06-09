import React, { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button } from "@mui/material";
import "../../sass/Form.scss";
import { usePlacesWidget } from "react-google-autocomplete";

const StepFourShop = (props) => {
  const { ref } = usePlacesWidget({
    apiKey: 'AIzaSyBj6Dw9TlzDF3Vd_W-shtdeQBdDoueaxk4',
    options: {
      types: ['address'],
      componentRestrictions: {
        country: ["us", "in"]
      }
    },
    onPlaceSelected: (place) => {
      if (place?.formatted_address) {
        console.log(place)
        var addressObj = {
          serviceArea: place.formatted_address,
          latitude: place.geometry.location.toJSON().lat,
          longitude: place.geometry.location.toJSON().lng,
          addressLine1: place.formatted_address
        }
        place.address_components.forEach((el, i) => {
          if (el.types.includes("subpremise")) {
            addressObj.addressLine2 = el.long_name;
          } else if (el.types.includes("locality")) {
            addressObj.city = el.long_name;
          } else if (el.types.includes("country")) {
            addressObj.country = el.long_name;
          }
        });
        props.onUpdateAddress(addressObj)
      }
    }

  })
  return (
    <div className="formSteps__item">
        <div className="form-group">
        <label>Business Name</label>
        <input
          type="text"
          placeholder="Enter Business Name"
          className="form-control"
          defaultValue={props.formData?.businessName}
          onChange={(e) => props.onChangeValues('businessName', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Store Address</label>
        <input
          ref={ref}
          type="text"
          placeholder="Enter Store Address"
          className="form-control"
          defaultValue={props.formData?.addressLine1} />
          {props?.hasError && !props.formData?.addressLine1 && <p className="errorMsg">{"Please enter address."}</p>}
      </div>
      
      <div className="form-group">
        <label>City or Town</label>
        <input
          type="text"
          placeholder="Enter City or Town"
          className="form-control"
          defaultValue={props.formData?.city}
          onChange={(e) => props.onChangeValues('city', e.target.value)}
        />
        {props?.hasError && !props.formData?.city && <p className="errorMsg">{"Please enter city."}</p>}
      </div>
      <div className="form-group">
        <label>Zip Code/Postal Code</label>
        <input
          type="text"
          placeholder="Zip Code/Postal Code"
          className="form-control"
          onChange={(e) => props.onChangeValues('zipcode', e.target.value)}
          defaultValue={props.formData?.country}
        />
        {props?.hasError && !props.formData?.country && <p className="errorMsg">{"Please enter country."}</p>}
      </div>
      <div className="form-group">
        <label>Country</label>
        <input
          type="text"
          placeholder="Enter Country Name"
          className="form-control"
          onChange={(e) => props.onChangeValues('country', e.target.value)}
          defaultValue={props.formData?.country}
        />
        {props?.hasError && !props.formData?.country && <p className="errorMsg">{"Please enter country."}</p>}
      </div>
    
    </div>
  );
};
export default StepFourShop;
