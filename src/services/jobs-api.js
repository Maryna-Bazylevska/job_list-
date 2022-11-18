import axios from "axios";
const API_KEY = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
const BASE_URL = ` https://api.json-generator.com/templates/ZM1r0eic3XEy/data`;
const page = 1;
const getJobs = (query) => {
  return axios
    .get(`${BASE_URL}?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`)
    .then((response) => {
      return response.data;
    });
};

export default getJobs;
