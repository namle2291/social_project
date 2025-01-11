import { instance } from "../axios/axios";

const getUsers = () => {
  return instance.get("AppServices/GetUsers");
};

export { getUsers };
