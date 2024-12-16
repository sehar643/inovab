const API = import.meta.env.PROD
  ? "https://inovabdigitallabs.com/v1/api"
  : "http://localhost:5200/v1/api";
const auth = {
  login: "auth/login",
  signup: "auth/signup",
};
export { API, auth };
