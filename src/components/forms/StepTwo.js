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
          defaultValue={props.formData?.code}
        />
        {props?.hasError&& (!props.formData.code || props?.invalidOTP) &&
         <p className="errorMsg">{"Please enter valid otp!"}</p>}
      </div>
    </div>
  );
};
export default StepTwo;
