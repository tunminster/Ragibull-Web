import React, { useRef, useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button } from "@mui/material";
import "../../sass/Form.scss";
import { usePlacesWidget } from "react-google-autocomplete";
import Select from 'react-select'
import DOWN_ARROW  from '../../assets/images/select-arrow.png';

const style1 = {
  control: (base, state) => ({
    ...base,
    border: "0 !important",
    boxShadow: "0 !important",
    "&:hover": {
      border: "0 !important"
    }
  })
};

const StepThreeShop = (props) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const timeRefOpen = useRef();
  const timeRefClose = useRef();
  const options = [
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
    { value: 'Saturday', label: 'Saturday' },
    { value: 'Sunday', label: 'Sunday' },
  ]
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
        <label>Service Area</label>
        <select
          className="form-control custom-select"
          onChange={(e) => props.onChangeValues('businessType', e.target.value)}
          defaultValue={props.formData?.vehicleType}
        >
          <option value="0">Select Service Area</option>
          <option value="1">5 Miles</option>
          <option value="2">10 Miles</option>
          <option value="3">15 Miles</option>
          <option value="4">20 Miles</option>
        </select>
      </div>
      <div className="form-group">
        <label>Business Type</label>
        <select
          className="form-control custom-select"
          onChange={(e) => props.onChangeValues('businessType', e.target.value)}
          defaultValue={props.formData?.vehicleType}
        >
          <option value="0">Select Business Type</option>
          <option value="1">Thai</option>
          <option value="2">Chinese Food</option>
          <option value="3">Cafe</option>
          <option value="4">Indian</option>
          <option value="5">Japanese Food</option>
          <option value="6">Sushi</option>
          <option value="7">Asian Food</option>
          <option value="8">Vietnamese Food</option>
          <option value="9">Breakfast</option>
          <option value="9">Bubble Tea</option>
          <option value="9">Burger</option>
          <option value="9">Pizza</option>
          <option value="9">Korea</option>
          <option value="9">Smoothies</option>
          <option value="9">Deli</option>
          <option value="9">Coffee</option>
          <option value="9">Thai</option>
          <option value="9">Desserts</option>
          <option value="9">Food & Drink</option>
          <option value="9">Italian Food</option>
        </select>
      </div>
      <div className="form-group">
        <label>Restaurant Timing</label>
        <Select
          placeholder={'Select Days'}
          className={'form-control'}

          options={options} isMulti={true} components={{ IndicatorSeparator: null,DropdownIndicator:()=>{
            return <img src={DOWN_ARROW} height="20px" width="20px"/>
          } }}
          styles={style1} />
      </div>
      <div className="form-group">
        <div className="row">
          <div className="form-group col-6">
            <label>Open Time</label>
            <input
              type='text'
              placeholder="Open Time"
              className="form-control"
              ref={timeRefOpen}
              onChange={(e) => console.log(e.target.value)}
              onFocus={() => (timeRefOpen.current.type = "time")}
              onBlur={() => (timeRefOpen.current.type = "time")} />

          </div>
          <div className="form-group col-6">
            <label>Close Time</label>
            <input
              type='text'
              placeholder="Close Time"
              className="form-control"
              ref={timeRefClose}
              onChange={(e) => console.log(e.target.value)}
              onFocus={() => (timeRefClose.current.type = "time")}
              onBlur={() => (timeRefClose.current.type = "time")} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default StepThreeShop;
