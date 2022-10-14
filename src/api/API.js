import axios from "axios";
import { EndPoints } from "./EndPoints";
const BASE_URL_OLD = "https://api-gateway.ragibull.com/on-boarding/api/v1/on-boarding";
const BASE_URL = "https://api-gateway.ragibull.com/webapp/api/v1/on-boarding"
const USER_BASE_URL = "https://api-gateway.ragibull.com/customer/api"
export const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 235000,

});

export const UserAxiosInstance = axios.create({
  baseURL: USER_BASE_URL,
  timeout: 235000,

});

const subscriptionKey=process.env.REACT_APP_SUBSCRIPTION_KEY

export const API = {
  async RegisterDriver(driverDetails, docFile, subscriptionKey, id) {
    var formData = new FormData();

    // console.log({ driverDetails, subscriptionKey, id });

    formData.append(
      "driverOnBoardingCreationContract",
      JSON.stringify(driverDetails)
    );

    formData.append("identityFile", docFile);

    try {
      let response = await AxiosInstance.post(
        `/driver?culture=en&id=${id}`,
        formData,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
          },
        }
      );
      console.log('aa', response);
      if (response.data) {
        console.log({ response });
        return response.data
      }
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },

  async RegisterShopOwner(shopDetails, docFile, subscriptionKey, id) {
    var formData = new FormData();

    // console.log({ driverDetails, subscriptionKey, id });

    formData.append(
      "shopOwnerOnBoardingCreationContract",
      JSON.stringify(shopDetails)
    );

    formData.append("identityFile", docFile);

    try {
      let response = await AxiosInstance.post(
        `/shop-owner?culture=en&id=${id}`,
        formData,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
          },
        }
      );
      if (response.data) {
        console.log({ response });
        return response.data
      }
    } catch (error) {
      return error.response;
    }
  },
  async RequestOTP(userDetails, subscriptionKey) {
    try {
      let response = await AxiosInstance.post(
        EndPoints.requestOtpForUser,
        userDetails,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
            "Content-Type": 'application/json',
          },
        }
      );
      if (response.data) {
        console.log({ response });
        return response.data
      }
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  async RequestOwnerOtpApi(userDetails, subscriptionKey) {
    try {
      let response = await AxiosInstance.post(
        EndPoints.requestOwnerOtp,
        userDetails,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
            "Content-Type": 'application/json',
          },
        }
      );
      if (response.data) {
        console.log({ response });
        return response.data
      }
    } catch (error) {
      console.log(error.response);
      //alert("Opps. There is something wrong. Please try it again")
      return error.response;
    }
  },
  async VerifyOTP(userDetails, subscriptionKey) {

    try {
      let response = await AxiosInstance.post(
        EndPoints.verifyUserOtp,
        userDetails,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
            "Content-Type": 'application/json',
          },
        }
      );
      if (response.data) {
        console.log({ response });
        return response.data
      }
    } catch (error) {
      console.log(error.response);
      //alert("Opps. There is something wrong. Please try it again")
      return error.response;
    }
  },
  async VerifyOwnerOtpApi(userDetails, subscriptionKey) {

    try {
      let response = await AxiosInstance.post(
        EndPoints.verifyOwnerOtp,
        userDetails,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
            "Content-Type": 'application/json',
          },
        }
      );
      if (response.data) {
        console.log({ response });
        return response.data
      }
    } catch (error) {
      //alert("Opps. There is something wrong. Please try it again")
      return error.response;
    }
  },


  async userSignUp(params) {

    try {
      let response = await UserAxiosInstance.post(
        EndPoints.registerUser,
        params,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
            "Content-Type": 'application/json',
          },
        }
      );
      if (response.data) {
        console.log({ response });
        return response.data
      }
    } catch (error) {
      return error.response;
    }
  }, 
  
  async sendOTPOnUserEmail(params) {

    try {
      let response = await UserAxiosInstance.post(
        EndPoints.userSendOTP,
        params,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
            "Content-Type": 'application/json',

          },
        }
      );
      if (response.data) {
        console.log({ response });
        return response.data
      }
    } catch (error) {
      return error.response;
    }
  }, 
  
  async verifyUserOTP(params) {

    try {
      let response = await UserAxiosInstance.post(
        EndPoints.userVerifyOTP,
        params,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
            "Content-Type": 'application/json',

          },
        }
      );
      if (response.data) {
        console.log({ response });
        return response.data
      }
    } catch (error) {
      return error.response;
    }
  }, 
  
  async userLogin(params) {

    try {
      let response = await UserAxiosInstance.post(
        EndPoints.loginUser,
        params,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
            "Content-Type": 'application/json',
          },
        }
      );
      if (response.data) {
        console.log({ response });
        return response.data
      }
    } catch (error) {
      return error.response;
    }
  },
  async RegisterDriverAPI(driverDetails, driverImageFile, licenseFrontFile, licenseBackFile, subscriptionKey) {
    var formData = new FormData();

    // console.log({ driverDetails, subscriptionKey, id });

    formData.append(
      "driverCreationContract",
      JSON.stringify(driverDetails)
    );

    formData.append("driverImage", driverImageFile);
    formData.append("drivingLicenseBackImage", licenseBackFile);
    formData.append("drivingLicenseFrontImage", licenseFrontFile);
    try {
      let response = await AxiosInstance.post(
        EndPoints.registerDriver,
        formData,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
          },
        }
      );
      console.log('aa', response);
      if (response.data) {
        console.log({ response });
        return response.data
      }
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },

  async RegisterShopOwnerAPI(shopDetails, shopImageFile, subscriptionKey) {
    var formData = new FormData();
    formData.append(
      "shopCreationContract",
      JSON.stringify(shopDetails)
    );

    formData.append("shopImage", shopImageFile);
    try {
      let response = await AxiosInstance.post(
        EndPoints.registerShopOwner,
        formData,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
          },
        }
      );
      if (response.data) {
        console.log({ response });
        return response
      }
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  async GetStoreTypes(subscriptionKey) {

    try {
      let response = await AxiosInstance.get(
        EndPoints.getShopTypes,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
            "Content-Type": 'application/json',
          },
        }
      );
      if (response.data) {
        console.log({ response });
        return response
      }
    } catch (error) {
      console.log(error);
      return error.response;
    }
  }, 
  
  
  async getDataByLocation(token,params) {
    try {
      let response = await UserAxiosInstance.get(
        EndPoints.searchByLocation,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
            "Content-Type": 'application/json',
            "Authorization":`Bearer ${token}`
          },
          params: {
            ...params
          }
        }
      );
      if (response.data) {
        console.log({ response });
        return response
      }
    } catch (error) {
      console.log(error);
      return error.response;
    }
  },
  
  async getUserDetails(token) {
    try {
      let response = await UserAxiosInstance.get(
        EndPoints.getUserDetails,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
            "Content-Type": 'application/json',
            "Authorization":`Bearer ${token}`
          },
          
        }
      );
      if (response.data) {
        console.log({ response });
        return response
      }
    } catch (error) {
      console.log(error);
      return error.response;
    }
  }, 
  
  async getStoreDetails(storeId,token) {
    try {
      let response = await UserAxiosInstance.get(
        EndPoints.getStoreDetails,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
            "Content-Type": 'application/json',
            "Authorization":`Bearer ${token}`
          },

          params:{
            storeId
          }

          
        }
      );
      if (response.data) {
        console.log({ response });
        return response
      }
    } catch (error) {
      console.log(error);
      return error.response;
    }
  },
};
