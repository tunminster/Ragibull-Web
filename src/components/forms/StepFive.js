import React from "react";
import "../../sass/DeliveryPartnerForm.scss";

const StepFive = (props) => {
  return (
    <div className="formSteps__item">
      <div className="form-group">
        <label>Bank Name</label>
        <input
          type="text"
          placeholder="Enter Bank Name"
          className="form-control"
          onChange={(e) => props.onChangeValues("bankName", e.target.value)}
          defaultValue={props.formData?.bankName}
          
        />
        {props?.hasError&&!props.formData?.bankName&&<p className="errorMsg">{"Please enter bank name!"}</p>}
      </div>
      <div className="form-group">
        <label>Account Number</label>
        <input
          type="text"
          placeholder="Enter Account Number"
          className="form-control"
          onChange={(e) => props.onChangeValues("bankAccountNumber", e.target.value)}
          defaultValue={props.formData?.bankAccountNumber}
        />
        {props?.hasError&&!props.formData?.bankAccountNumber&&<p className="errorMsg">{"Please enter account number!"}</p>}
      </div>
      <div className="form-group">
        <label>Routing Transfer Number</label>
        <input
          type="text"
          placeholder="Routing Transfer Number"
          className="form-control"
          onChange={(e) => props.onChangeValues("routingNumber", e.target.value)}
          defaultValue={props.formData?.routingNumber}
        />
        {props?.hasError&&!props.formData?.routingNumber&&<p className="errorMsg">{"Please enter routing transfer number!"}</p>}
      </div>
    </div>
  );
};
export default StepFive;
