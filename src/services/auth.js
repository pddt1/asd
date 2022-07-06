import customAxios from "../lib/customAxios";

const API_URL = "http://localhost:8000/";
class AuthService {
  login(email, password) {
    return customAxios
      .post("signin", { email, password });
  }
  checksession() {
    return customAxios
          .post("auth");
  }
}
export default new AuthService();