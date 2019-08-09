import axios from "axios";

import config from "../config";

const instance = axios.create();

export const setInstanceProp = (label, value) => {
  instance.defaults[label] = value;
};

export default params => {
  return instance(params).catch(error => {
    if (config.unauthorizedCallback && error.response.status === 401) {
      config.unauthorizedCallback(error.response);
    }

    throw error;
  });
};