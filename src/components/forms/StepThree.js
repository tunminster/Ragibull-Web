import React, { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button } from "@mui/material";
import "../../sass/Form.scss";
import { usePlacesWidget } from "react-google-autocomplete";

const StepThree = (props) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);
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
        <label>Address Line 1</label>
        <input
          ref={ref}
          type="text"
          placeholder="Enter Address Line 1"
          className="form-control"
          defaultValue={props.formData?.addressLine1} />
          {props?.hasError && !props.formData?.addressLine1 && <p className="errorMsg">{"Please enter address."}</p>}
      </div>
      <div className="form-group">
        <label>Address Line 2</label>
        <input
          type="text"
          placeholder="Enter Address Line 2"
          className="form-control"
          defaultValue={props.formData?.addressLine2}
          onChange={(e) => props.onChangeValues('addressLine2', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          placeholder="Enter City Name"
          className="form-control"
          defaultValue={props.formData?.city}
          onChange={(e) => props.onChangeValues('city', e.target.value)}
        />
        {props?.hasError && !props.formData?.city && <p className="errorMsg">{"Please enter city."}</p>}
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
      <div className="form-group">
        <label>County</label>
        <input
          type="text"
          placeholder="County"
          className="form-control"
          onChange={(e) => props.onChangeValues('county', e.target.value)}
          defaultValue={props.formData?.county}
        />
        {props?.hasError && !props.formData?.county && <p className="errorMsg">{"Please enter county."}</p>}
      </div>
      <div className="form-group">
        <label>Password</label>
        <div className="over">
          <input
            type={showPassword ? 'password' : 'text'}
            placeholder="Enter Password"
            className="form-control"
            onChange={(e) => props.onChangeValues('password', e.target.value)}
            defaultValue={props.formData?.password}
          />
          <Button className="showPassword" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ?
              <VisibilityOffIcon />
              :
              <VisibilityIcon />
            }
          </Button>
          {props?.hasError && !props.formData?.password && <p className="errorMsg">{"Please enter password!"}</p>}
        </div>
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <div className="over">
          <input
            type={showConfirmPass ? 'password' : 'text'}
            placeholder="Enter Confirm Password"
            className="form-control"
            onChange={(e) => props.onChangeValues('confirmPassword', e.target.value)}
            defaultValue={props.formData?.confirmPassword}
          />
          <Button className="showPassword" onClick={() => setShowConfirmPass(!showConfirmPass)}>
            {showConfirmPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </Button>
          {props?.hasError && !props.formData?.confirmPassword && <p className="errorMsg">{"Please enter password!"}</p>}
        </div>
      </div>
    </div>
  );
};
export default StepThree;
