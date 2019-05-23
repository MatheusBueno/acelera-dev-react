import axios from "axios";

const BASE_URL = "https://api.github.com";

class Api {
  static get(url) {
    return axios.get(`${BASE_URL}${url}`);
  }
}

export default Api;
