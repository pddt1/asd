import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/";
class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin", { email, password });
  }
  checksession() {
    return axios
          .post(API_URL + "auth",{},{headers: authHeader()});
  }
}
export default new AuthService();