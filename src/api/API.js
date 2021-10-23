import axios from "axios";
const BASE_URL =
  "https://api-gateway.ragibull.com/on-boarding/api/v1/on-boarding";
export const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 235000,
 
});

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
      console.log('aa',response);
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
};
