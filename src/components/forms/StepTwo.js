import React from "react";
import "../../sass/DeliveryPartnerForm.scss";

const StepTwo = (props) => {
  return (
    <div className="formSteps__item">
      <div className="form-group">
        <label>OTP Verification <small>Enter the 6 Digit Code Sent to Your Registered Email Address</small></label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => props.onChangeValues("code", e.target.value)}
          value={props.formData?.code}
        />
        {props?.hasError&& (!props.formData.code) &&
         <p className="errorMsg">{"Please enter valid otp!"}</p>}
         {props?.hasError&&!props?.isOtpValid&&
         <p className="errorMsg">{"The code is not valid. Please enter the valid code."}</p>}
      </div>
    </div>
  );
};
export default StepTwo;
