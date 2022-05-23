import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import CalendarIcon from "../../assets/images/calendar.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import "../../sass/DeliveryPartnerForm.scss";

const StepFour = (props) => {

  const [driverImage, setDriverImage] = useState({fileName:'', filePath: null})
  const [driverLicenseFront, setdriverLicenseFront] = useState({fileName:'', file: null})
  const [driverLicenseBack, setdriverLicenseBack] = useState({fileName:'', file: null})

  const onFileChange = (e, type) => {
    let file = e.target.files[0];
    if(type==="driverImage"){
    setDriverImage({fileName: file.name, filePath: e.target.files[0]})
    }else if(type==="backImage"){
      setdriverLicenseBack({fileName: file.name, filePath: e.target.files[0]})
    }else if(type==="frontImage"){
      setdriverLicenseFront({fileName: file.name, filePath: e.target.files[0]})
    }
    props.setImages(type, e.target.files[0])
  };

  return (
    <div className="formSteps__item">
      <div className="form-group">
        <label>Vehicle Type</label>
        <select
          className="form-control custom-select"
          onChange={(e) => props.onChangeValues('vehicleType', e.target.value)}
          defaultValue={props.formData?.vehicleType}
        >
          <option disabled>Select Vehicle Type</option>
          <option value="0">None</option>
          <option value="1">Bike</option>
          <option value="2">MotorBike</option>
          <option value="3">Car</option>
        </select>
        {props?.hasError && !props.formData?.vehicleType && <p className="errorMsg">{"Please select vehicle type."}</p>}
      </div>
      <div className="form-group">
        <label>Driver Image</label>

        <label className="form-control">
          <input type="file" onChange={(e) => onFileChange(e, "driverImage")} />
          <span>
            {driverImage.fileName ? driverImage.fileName : "Select Driver Image"}
          </span>
          <UploadFileIcon className="UploadIcon" />
        </label>
        {props?.hasError && !driverImage.fileName && <p className="errorMsg">{"Please provide driver image."}</p>}
      </div>
      <div className="form-group">
        <label>Driver License Front Image</label>

        <label className="form-control">
          <input type="file" onChange={(e) => onFileChange(e, "frontImage")} />
          <span>
            {driverLicenseFront.fileName ? driverLicenseFront.fileName : "Driver License Front Image"}
          </span>
          <UploadFileIcon className="UploadIcon" />
        </label>
        {props?.hasError && !driverLicenseFront.fileName && <p className="errorMsg">{"Please provide license front image."}</p>}
      </div>
      <div className="form-group">
        <label>Driver License Back Image</label>

        <label className="form-control">
          <input type="file" onChange={(e) => onFileChange(e, "backImage")} />
          <span>
            {driverLicenseBack.fileName ? driverLicenseBack.fileName : "Driver License Back Image"}
          </span>
          <UploadFileIcon className="UploadIcon" />
        </label>
        {props?.hasError && !driverLicenseBack.fileName && <p className="errorMsg">{"Please provide license back image."}</p>}
      </div>
      <div className="form-group">
        <label>Driving License Number</label>
        <input
          type="text"
          placeholder="Enter Driving License Number"
          className="form-control"
          onChange={(e) => props.onChangeValues('drivingLicenseNumber', e.target.value)}
          defaultValue={props.formData?.drivingLicenseNumber}
        />
        {props?.hasError && !props.formData?.drivingLicenseNumber && <p className="errorMsg">{"Please enter license number."}</p>}
      </div>
      <div className="form-group">
        <label>Social Security Number</label>
        <input
          type="text"
          placeholder="Enter SSN"
          className="form-control"
          onChange={(e) => props.onChangeValues('socialSecurityNumber', e.target.value)}
          defaultValue={props.formData?.socialSecurityNumber}
        />
        {props?.hasError && !props.formData?.socialSecurityNumber && <p className="errorMsg">{"Please enter social security number."}</p>}
      </div>
      <div className="form-group">
        <label>Driving License expiry Date</label>
        <div className="over">
          <input
            type="date"
            placeholder="DD-MM-YYYY"
            className="form-control"
            onChange={(e) => props.onChangeValues('drivingLicenseExpiryDate', e.target.value)}
            defaultValue={props.formData?.drivingLicenseExpiryDate}
          />
          {props?.hasError && !props.formData?.drivingLicenseExpiryDate && <p className="errorMsg">{"Please enter license expiry date."}</p>}
        </div>
      </div>
    </div>
  );
};
export default StepFour;
