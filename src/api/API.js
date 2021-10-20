import axios from "axios";
import { param } from "jquery";
const BASE_URL =
  "https://api-gateway.ragibull.com/on-boarding/api/v1/on-boarding/driver?culture=en";
export const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 235000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const API = {
  async RegisterDriver(addressData, otherData) {
    var formData = new FormData();
    let bankAccount = {
      accountNumber: otherData?.accountNumber,
      routingNumber: otherData?.routingNumber,
    };
    formData.append("firstName", otherData?.firstName);
    formData.append("lastName", otherData?.lastName);
    formData.append("email", otherData?.email);
    formData.append("jobTitle", otherData?.jobTitle);
    formData.append("dateOfBirth", otherData?.dateOfBirth);
    formData.append("address", addressData);
    formData.append("bankAccount", bankAccount);

    try {
      let response = await AxiosInstance.post("/users/authenticate",formData)
      if (response.status === 200) {
        sessionStorage.setItem("access_token", response.data.data.accessToken);
        sessionStorage.setItem(
          "refresh_token",
          response.data.data.refreshToken
        );
        return response;
      }
    } catch (error) {
      return error.response;
    }
  },
};
