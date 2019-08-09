import instance from "../services/instance";
import config from "../config";

export const getVideoContent = ({ type }) => {
  return instance({
    headers: {
      authorized: config.token
    },
    url: "/video/content",
    method: "get",
    params: {
      type
    }
  });
};