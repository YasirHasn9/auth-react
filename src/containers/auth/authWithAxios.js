// Whenever the application needs to exchange data with a protected endpoint, import this module

import axios from "axios";
export const axiosWithAuth = () => {
  // when we issue the token, we are gonna store it in the localStorage
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};
