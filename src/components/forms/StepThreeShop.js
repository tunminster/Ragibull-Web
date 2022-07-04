import React, { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button } from "@mui/material";
import "../../sass/DeliveryPartnerForm.scss";
import { usePlacesWidget } from "react-google-autocomplete";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const StepThreeShop = (props) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const [shopImage, setShopImage] = useState({fileName:'', filePath: null})
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
        var addressObj = {
          latitude: String(place.geometry.location.toJSON().lat),
          longitude: String(place.geometry.location.toJSON().lng),
          addressLine1: place.formatted_address
        }
        place.address_components.forEach((el, i) => {
           if (el.types.includes("locality")) {
            addressObj.city = el.long_name;
          } else if (el.types.includes("country")) {
            addressObj.country = el.long_name;
          }
        });
        props.onAddressUpdate(addressObj)
      }
    }

  })


  const onFileChange = (e, type) => {
    let file = e.target.files[0];
    setShopImage({fileName: file.name, filePath: e.target.files[0]})
    props.setImages(type, e.target.files[0])
  };
  return (
    <div className="formSteps__item">
        <div className="form-group">
        <label>Business Name</label>
        <input
          type="text"
          placeholder="Enter Business Name"
          className="form-control"
          value={props.formData?.businessName}
          onChange={(e) => props.onChangeValues('businessName', e.target.value)}
        />
        {props?.hasError && !props.formData?.businessName && <p className="errorMsg">{"Please enter business name."}</p>}
      </div>
      <div className="form-group">
        <label>Shop Image</label>

        <label className="form-control">
          <input type="file" onChange={(e) => onFileChange(e, "driverImage")} />
          <span>
            {shopImage.fileName ? shopImage.fileName : "Select Shop Image"}
          </span>
          <UploadFileIcon className="UploadIcon" />
        </label>
        {props?.hasError && !shopImage.fileName && <p className="errorMsg">{"Please provide shop image."}</p>}
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
          onChange={(e) => props.onChangeValues('zipCode', e.target.value)}
          defaultValue={props.formData?.zipCode}
        />
        {props?.hasError && !props.formData?.zipCode && <p className="errorMsg">{"Please enter zip code."}</p>}
      </div>
      <div className="form-group">
        <label>Country</label>
        <input
          type="text"
          placeholder="Enter Country Name"
          className="form-control"
          onChange={(e) => props.onChangeValues('country', e.target.value)}
          value={props.formData?.country}
        />
        {props?.hasError && !props.formData?.country && <p className="errorMsg">{"Please enter country."}</p>}
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Phone Number"
          className="form-control"
          inputMode="numeric"
          onChange={(e) => props.onChangeValues("phoneNumber", e.target.value)}
          defaultValue={props.formData?.phoneNumber}
        />
        {props?.hasError&&!props.formData?.phoneNumber&&<p className="errorMsg">{"Please enter phone number!"}</p>}
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
            {showConfirmPass ? <VisibilityIcon /> : <VisibilityIcon />}
          </Button>
          {props?.hasError && !props.formData?.confirmPassword && <p className="errorMsg">{"Please enter password!"}</p>}
        </div>
      </div>
    </div>
  );
};
export default StepThreeShop;
