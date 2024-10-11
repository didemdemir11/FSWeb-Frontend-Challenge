import axios from "axios";
import languagesData from "../data/languagesData";

export const postData = async () => {
  try {
    const response = await axios.post(
      "https://reqres.in/api/workintech",
      languagesData
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
