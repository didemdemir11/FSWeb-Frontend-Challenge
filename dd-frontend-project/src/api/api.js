import axios from "axios";
import languagesData from "../data/languagesData";

export const postData = async () => {
  return axios
    .post("https://reqres.in/api/workintech", languagesData)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
