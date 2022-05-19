import React from "react";
import "../../sass/Form.scss";
const StepOne = (props) => {

  const checkEmailValid = (emailValue) => {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(emailValue)) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="formSteps__item">
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter Full Name"
          className="form-control"
          onChange={(e) => props.onChangeValues("fullName", e.target.value)}
          defaultValue={props.formData?.fullName}
        />
        {props?.hasError&&!props.formData?.fullName&&<p className="errorMsg">{"Please enter full name!"}</p>}
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="text"
          placeholder="Enter Email Address"
          className="form-control"
          onChange={(e) => props.onChangeValues("email", e.target.value)}
          defaultValue={props.formData?.email}
        />
        {props?.hasError&&
        !checkEmailValid(props?.formData?.email)&&
         <p className="errorMsg">{"Please enter valid email address!"}</p>}
      </div>
    </div>
  );
};
export default StepOne;
