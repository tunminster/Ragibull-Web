import React, { useRef, useState, useEffect } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button } from "@mui/material";
import "../../sass/DeliveryPartnerForm.scss";
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

const StepFourShop = (props) => {
  const timeRefOpen = useRef();
  const timeRefClose = useRef();
  const [openTime, setOpenTime] = useState(props.formData?.openTime||'');
  const [closeTime, setCloseTime] = useState(props.formData?.closeTime||'');
  const [selectedDays, setSelectedDays] = useState([]);
  const options = [
    { value: '1', label: 'Monday' },
    { value: '2', label: 'Tuesday' },
    { value: '3', label: 'Wednesday' },
    { value: '4', label: 'Thursday' },
    { value: '5', label: 'Friday' },
    { value: '6', label: 'Saturday' },
    { value: '7', label: 'Sunday' },
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
  const handleChange=(event)=>{
    let result = (event||[]).map(option => option.value);
    props.onDaysSelect(result);
    setSelectedDays(result);
  }
  useEffect(() => {
    if(props?.formData?.openTime === ''){
      setOpenTime('')
    }
  }, [props?.formData?.openTime]);

  useEffect(() => {
    if(props?.formData?.closeTime === ''){
      setCloseTime('')
    }
  }, [props?.formData?.closeTime]);
  return (
    <div className="formSteps__item">
      <div className="form-group">
        <label>Service Area</label>
        <select
          className="form-control custom-select"
          onChange={(e) => props.onChangeValues('radius', parseInt(e.target.value))}
          defaultValue={props.formData?.vehicleType}
        >
          <option value="0">Select Service Area</option>
          <option value="5">5 Miles</option>
          <option value="10">10 Miles</option>
          <option value="15">15 Miles</option>
          <option value="20">20 Miles</option>
        </select>
        {props?.hasError&&!props.formData?.radius&&<p className="errorMsg">{"Please select service area!"}</p>}
      </div>
      <div className="form-group">
        <label>Business Type</label>
        <select
          className="form-control custom-select"
          onChange={(e) => props.onChangeValues('storeTypeId', e.target.value)}
          defaultValue={props.formData?.vehicleType}
        >
          <option value="0">Select Business Type</option>
          {props.storeTypes?.map(storeItem => { 
            return <option value={storeItem.storeTypeId}>
                {storeItem.storeTypeName}</option>;
            })}
        </select>
        {props?.hasError&&!props.formData?.storeTypeId&&<p className="errorMsg">{"Please select business type!"}</p>}
      </div>
      <div className="form-group">
        <label>Restaurant Timing</label>
        <Select
          placeholder={'Select Days'}
          className={'form-control'}
          onChange={handleChange}
          options={options} isMulti={true} components={{ IndicatorSeparator: null,DropdownIndicator:()=>{
            return <img src={DOWN_ARROW} height="20px" width="20px"/>
          } }}
          styles={style1} />
          {props?.hasError&&selectedDays.length==0&&<p className="errorMsg">{"Please select days!"}</p>}
      </div>
      {selectedDays?.length!==0&&<div className="form-group">
        <div className="row">
          <div className="form-group col-6">
            <label>Open Time</label>
            <input
              type='text'
              placeholder="Open Time"
              className="form-control"
              ref={timeRefOpen}
              onChange={(e)=>{setOpenTime(e.target.value)}}
              value={openTime}
              onFocus={() => (timeRefOpen.current.type = "time")}
              onBlur={() => {
                timeRefOpen.current.type = "time"
                console.log(timeRefOpen.current.value)
                props.onChangeValues('openTime', timeRefOpen.current.value)
              }} />
            {props?.hasError&&!props.formData?.openTime&&<p className="errorMsg">{"Please select open time!"}</p>}
          </div>
          <div className="form-group col-6">
            <label>Close Time</label>
            <input
              type='text'
              placeholder="Close Time"
              className="form-control"
              ref={timeRefClose}
              onChange={(e)=>{setCloseTime(e.target.value)}}
              onFocus={() => (timeRefClose.current.type = "time")}
              onBlur={(e) => {
                timeRefClose.current.type = "time"
                props.onChangeValues('closeTime',timeRefClose.current.value)
              }}
              value={closeTime} />
              {props?.hasError&&!props.formData?.closeTime&&<p className="errorMsg">{"Please select close time!"}</p>}
          </div>
        </div>
      </div>}
    </div>
  );
};
export default StepFourShop;
