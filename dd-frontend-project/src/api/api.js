import axios from "axios";
import languagesData from "../data/languagesData";

export const postData = async () => {
  try {
    const response = await axios.post("https://reqres.in/api/workintech", {
      selectedLanguage: "en",
      data: languagesData,
    });
    console.log("Veri başarıyla gönderildi.", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
