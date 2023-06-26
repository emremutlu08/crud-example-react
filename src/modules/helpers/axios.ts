import axios, { AxiosInstance } from "axios";

const baseApi: AxiosInstance = axios.create({
  baseURL: "https://dummyjson.com", // Replace with your API base URL
  timeout: 5000, // Adjust the timeout as needed
  headers: {
    "Content-Type": "application/json",
    // Add any additional headers you need, such as authentication tokens
  },
});

export default baseApi;
