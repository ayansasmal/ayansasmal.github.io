import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://api.webflow.com/collections",
});

instance.defaults.headers.common["accept-version"] = "1.0.0";
instance.defaults.headers.common["Authorization"] =
  "Bearer 33f8947eeb9b0c97392c15c84640a561a62ff46d5a9ab026b3bdbd5e70cd9e37";

export default instance;
